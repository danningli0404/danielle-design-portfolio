import assert from 'node:assert/strict';
import test from 'node:test';
import { access } from 'node:fs/promises';
import { getLocale, localizedHref, homeCopy, detailCopy } from '../lib/i18n.ts';
import { projects } from '../lib/projects.ts';
import { localizeProject, projectTranslations } from '../lib/projects-zh.ts';
import { evidence, sourcePageUrl } from '../lib/project-evidence.ts';
import { productColorTones } from '../lib/product-color-tones.ts';

test('Chinese is the default and English remains an explicit choice', () => {
  assert.equal(getLocale(), 'zh');
  assert.equal(getLocale({ lang: 'zh' }), 'zh');
  assert.equal(getLocale({ lang: 'en' }), 'en');
  assert.equal(getLocale({ lang: 'unexpected' }), 'zh');
  assert.equal(getLocale({ lang: ['zh', 'en'] }), 'zh');
});

test('internal links retain the language and destination anchor', () => {
  assert.equal(localizedHref('/#work', 'zh'), '/?lang=zh#work');
  assert.equal(localizedHref('/#about', 'en'), '/?lang=en#about');
  assert.equal(localizedHref('/project/purelink', 'zh'), '/project/purelink?lang=zh');
  assert.equal(localizedHref('/', 'en'), '/?lang=en');
});

test('every project and interface string has a Chinese equivalent', () => {
  assert.deepEqual(Object.keys(homeCopy.zh).sort(), Object.keys(homeCopy.en).sort());
  assert.deepEqual(Object.keys(detailCopy.zh).sort(), Object.keys(detailCopy.en).sort());
  assert.deepEqual(Object.keys(projectTranslations).sort(), projects.map(p => p.slug).sort());
  for (const project of projects) {
    const translated = localizeProject(project, 'zh');
    assert.equal(localizeProject(project, 'en'), project);
    for (const field of ['summary', 'kicker', 'role', 'challenge', 'approach', 'outcome']) {
      assert.match(translated[field], /\p{Script=Han}/u, `${project.slug}: ${field}`);
    }
    if (project.note) assert.match(translated.note, /\p{Script=Han}/u);
    for (const field of ['slug', 'title', 'hero', 'process', 'experimental', 'year']) {
      assert.equal(translated[field], project[field], `${project.slug}: preserve ${field}`);
    }
  }
});

test('all seven projects have bilingual evidence and correctly scoped source assets', async () => {
  assert.deepEqual(Object.keys(evidence).sort(), projects.map(p => p.slug).sort());
  for (const [slug, record] of Object.entries(evidence)) {
    assert.match(record.period, /^202[56]/, `${slug}: source timeline`);
    const bilingual = [record.contribution, record.stage, record.demonstrated, record.limits,
      ...record.decisions.flatMap(d => [d.title, d.finding, d.response]),
      ...(record.metrics ?? []).flatMap(m => [m.label, m.context]),
      ...(record.publication ? [record.publication] : []), ...(record.demo ? [record.demo.label] : [])];
    for (const item of bilingual) {
      assert.match(item.zh, /\p{Script=Han}/u, `${slug}: Chinese evidence`);
      assert.ok(item.en.length > 5, `${slug}: English evidence`);
    }
    const pages = [...record.contextPages, ...record.archivePages, ...record.resultPages,
      ...record.decisions.flatMap(d => d.pages), ...(record.demo ? [record.demo.sourcePage] : [])];
    for (const page of new Set(pages)) {
      assert.ok(Number.isInteger(page) && page >= 1 && page <= (record.source?.pageCount ?? 26), `${slug}: valid PDF page`);
      await access(new URL(`../public${sourcePageUrl(page, record)}`, import.meta.url));
    }
  }
  assert.deepEqual(evidence.tacchat.metrics.map(m => m.value), ['93.3%', '25%', '1.43']);
  assert.ok(evidence.tacchat.publication.zh.includes('已投稿 IMWUT'));
  assert.equal(evidence['color-showdown'].demo.url, 'https://www.youtube.com/watch?v=yZNcYpi3fE4');
});

const origin = process.env.SITE_TEST_ORIGIN;
test('summer cases preserve confirmed roles and use their own illustrated sources', async () => {
  assert.equal(projects.filter(p => p.experimental).length, 2);
  assert.match(evidence['ice-chamber'].contribution.zh, /访谈整理、早期 CAD 迭代/);
  assert.match(evidence.cocokeep.contribution.zh, /二手调研、草图绘制与纸板制作/);
  for (const project of projects.filter(p => p.experimental)) {
    assert.match(project.role, /^Team project/);
    assert.match(project.hero, /^\/summer\//);
    await access(new URL(`../public${project.hero}`, import.meta.url));
  }
  if (origin) {
    const response = await fetch(new URL('/project/focus-loop', origin));
    assert.equal(response.status, 404);
    for (const path of ['/summer/ice-chamber/prototype.jpg', '/summer/ice-chamber/early-models.jpg', '/summer/coco-carry/page-11.jpg', '/summer/coco-carry/page-14.jpg']) {
      assert.equal((await fetch(new URL(path, origin))).status, 200, path);
    }
  }
});
test('homepage positioning is grounded in calm, personal control, and physical making', () => {
  for (const locale of ['zh', 'en']) {
    const t = homeCopy[locale];
    assert.match(t.eyebrow, /Calm & Control/);
    assert.match(t.biography, /Calm/);
    assert.match(t.biography, /Control/);
    assert.match(t.makingApproach, /CAD/);
    assert.doesNotMatch(Object.values(t).join(' '), /好奇心|有意义|Curiosity|meaningful|made tangible/i);
  }
});
test('product color grading preserves neutral materials and alpha', () => {
  const transform = (tone, rgba) => [0, 1, 2, 3].map(row =>
    tone.matrix.slice(row * 5, row * 5 + 4).reduce((sum, coefficient, index) => sum + coefficient * rgba[index], tone.matrix[row * 5 + 4] * 255));
  for (const tone of productColorTones) {
    for (const gray of [0, 64, 128, 192, 255]) {
      for (const alpha of [0, .5, 1]) {
        const result = transform(tone, [gray, gray, gray, alpha]);
        for (let channel = 0; channel < 3; channel++) assert.ok(Math.abs(result[channel] - gray) < 1e-8);
        assert.equal(result[3], alpha);
      }
    }
  }
  assert.deepEqual(transform(productColorTones[0], [235, 231, 36, 1]).slice(0, 3).map(Math.round), [110, 185, 176]);
  assert.deepEqual(transform(productColorTones[1], [100, 133, 214, 1]).slice(0, 3).map(Math.round), [151, 178, 214]);
});
test('TacChat leads the selected-project sequence, followed by summer experiments', () => {
  assert.deepEqual(projects.map(p => p.slug), ['tacchat', 'sense-together', 'vitalride', 'purelink', 'color-showdown', 'ice-chamber', 'cocokeep']);
});

test('bare homepage and project URLs default to Chinese', { skip: !origin }, async () => {
  const paths = ['/', ...projects.map(p => `/project/${p.slug}`)];
  for (const path of paths) {
    const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(60000) });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes('lang="zh-CN"'), path);
    assert.ok(html.includes(`href="${localizedHref(path, 'en')}"`), `${path}: English option`);
    const expected = path === '/' ? homeCopy.zh.intro : localizeProject(projects.find(p => path.endsWith(p.slug)), 'zh').summary;
    assert.ok(html.includes(expected), `${path}: Chinese content without query`);
    if (path === '/') assert.match(html, /<title>李丹宁 Danielle Li — 设计工程<\/title>/);
  }
});

test('the homepage and all project routes serve both languages and native language links', { skip: !origin }, async () => {
  const checks = ['en', 'zh'].flatMap(locale => [
    { locale, path: '/', expected: homeCopy[locale].intro },
    ...projects.map(project => ({ locale, path: `/project/${project.slug}`, expected: localizeProject(project, locale).summary })),
  ]);
  // Check response text for functional localization; no browser or visual inspection.
  for (let i = 0; i < checks.length; i += 3) {
    await Promise.all(checks.slice(i, i + 3).map(async ({ locale, path, expected }) => {
      const response = await fetch(new URL(localizedHref(path, locale), origin), { signal: AbortSignal.timeout(60000) });
      assert.equal(response.status, 200, `${locale} ${path}`);
      const html = await response.text();
      assert.ok(html.includes(expected), `${locale} ${path}: localized content`);
      assert.ok(html.includes(`lang="${locale === 'zh' ? 'zh-CN' : 'en'}"`), `${locale} ${path}: document language`);
      assert.ok(html.includes(`href="${localizedHref(path, 'zh')}"`), `${path}: Chinese switch link`);
      assert.ok(html.includes(`href="${localizedHref(path, 'en')}"`), `${path}: English switch link`);
      if (path !== '/') {
        assert.ok(!html.includes('class="site-shell home-mist"'), `${path}: homepage theme does not replace case-study layout`);
        assert.ok(html.includes(`href="${localizedHref('/#work', locale)}"`), `${path}: localized return link`);
        const record = evidence[path.split('/').at(-1)];
        if (record) {
          assert.ok(html.includes(record.contribution[locale]), `${path}: personal contribution`);
          assert.ok(html.includes(record.stage[locale]), `${path}: honest completion stage`);
          for (const decision of record.decisions) assert.ok(html.includes(decision.title[locale]), `${path}: decision narrative`);
          assert.ok(html.includes(`href="${sourcePageUrl(record.resultPages[0], record)}"`), `${path}: original evidence linked`);
          if (record.demo) assert.ok(html.includes(`href="${record.demo.url.replaceAll('&', '&amp;')}"`), `${path}: original video`);
        }
      }
      else {
        assert.ok(html.includes('class="site-shell home-mist"'), `${locale}: teal homepage theme`);
        assert.ok(html.includes(homeCopy[locale].biography), `${locale}: calm and control explained`);
        assert.ok(html.includes(homeCopy[locale].makingApproach), `${locale}: physical fabrication approach`);
        for (const tone of productColorTones) assert.ok(html.includes(`id="${tone.id}"`), `${locale}: ${tone.id} color filter is available`);
        const projectEntries = [...html.matchAll(/href="\/project\/([^?"/]+)\?lang=/g)].map(match => match[1]);
        assert.deepEqual(projectEntries.slice(0, 5), projects.filter(p => !p.experimental).map(p => p.slug), `${locale}: TacChat is the first interactive work`);
        for (const project of projects) assert.ok(html.includes(`href="${localizedHref(`/project/${project.slug}`, locale)}"`), `${locale}: ${project.slug} entry`);
        assert.ok(!html.includes('class="work-caption"'), `${locale}: product cutouts have no visible captions`);
        assert.equal((html.match(/class="work-object /g) ?? []).length, 5, `${locale}: all five cutouts remain interactive links`);
        for (const project of projects.filter(p => !p.experimental)) {
          assert.ok(html.includes(`aria-label="${homeCopy[locale].view} ${project.title}:`), `${locale}: ${project.slug} retains its accessible name`);
        }
      }
    }));
  }
});

test('homepage background and locally hosted fonts are available', { skip: !origin }, async () => {
  for (const path of ['/atmosphere/teal-dunes.jpg', '/fonts/cormorant-regular.ttf', '/fonts/cormorant-italic.ttf']) {
    const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(60000) });
    assert.equal(response.status, 200, path);
    assert.ok((await response.arrayBuffer()).byteLength > 1000, `${path}: nonempty asset`);
  }
});
