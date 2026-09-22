import { ArrowDownRight, Mail } from 'lucide-react';
import { DraggableProject, ResetDesk } from '@/components/draggable-project';
import { LanguageSwitch } from '@/components/language-switch';
import { getLocale, homeCopy, localizedHref, type SearchParams } from '@/lib/i18n';
import type { Metadata } from 'next';
import { productColorTones } from '@/lib/product-color-tones';
import './home-mist.css';

export async function generateMetadata({ searchParams }: { searchParams: Promise<SearchParams> }): Promise<Metadata> {
  const locale = getLocale(await searchParams);
  const title = locale === 'zh' ? '李丹宁 Danielle Li — 设计工程' : 'Danielle Li — Design Engineer';
  const description = locale === 'zh' ? '李丹宁的产品设计与实体制作作品集。以 Calm & Control 为设计价值，关注不同人群的日常小困扰，通过材料、制造与原型迭代寻找可行解法。' : 'Product design and physical making by Danielle Li. Guided by Calm & Control, I explore practical solutions to everyday difficulties through materials, fabrication, and prototyping.';
  return { title, description, openGraph: { title, description, images: ['/og.png'] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] } };
}

// Show the original PDF bitmaps within their alpha bounds, without repainting them.
const cutoutBounds: Record<string, { width: number; height: number; viewBox: string }> = {
  '/cutouts/sense-glasses.png': { width: 1800, height: 1161, viewBox: '139 363 1295 621' },
  '/cutouts/sense-bracelet.png': { width: 1800, height: 1260, viewBox: '498 250 790 742' },
  '/cutouts/vitalride.png': { width: 375, height: 666, viewBox: '34 88 314 472' },
  '/cutouts/purelink-large.png': { width: 1800, height: 1800, viewBox: '408 268 1224 1243' },
  '/cutouts/purelink-small.png': { width: 1800, height: 1800, viewBox: '368 294 1125 1187' },
  '/cutouts/color-robot.png': { width: 1012, height: 1800, viewBox: '233 338 501 1127' },
  '/cutouts/tacchat.png': { width: 577, height: 432, viewBox: '-5 0 587 433' },
};

const works = [
  { slug: 'tacchat', title: 'TacChat', type: 'Accessibility research', typeZh: '触觉图形 · 无障碍研究', art: ['/cutouts/tacchat.png'], className: 'work-tac' },
  { slug: 'sense-together', title: 'Sense Together', type: 'Inclusive service system', typeZh: '无障碍音乐节 · 服务系统', art: ['/cutouts/sense-glasses.png', '/cutouts/sense-bracelet.png'], className: 'work-sense' },
  { slug: 'vitalride', title: 'VitalRide', type: 'Wearable health concept', typeZh: '骑手高温安全 · 可穿戴概念', art: ['/cutouts/vitalride.png'], className: 'work-vital' },
  { slug: 'purelink', title: 'PureLink', type: 'Product · service · electronics', typeZh: '家庭用水 · 产品与服务设计', art: ['/cutouts/purelink-large.png', '/cutouts/purelink-small.png'], className: 'work-pure' },
  { slug: 'color-showdown', title: 'Color Showdown', type: 'Physical–digital game', typeZh: '虚实交互 · 游戏设计', art: ['/cutouts/color-robot.png'], className: 'work-color' },
];

const experiments = [
  { slug: 'ice-chamber', title: 'Ice Chamber', subtitle: 'Team project · Iterative drink-lid prototypes', subtitleZh: '团队项目 · 冰饮杯盖与冰仓迭代', mark: 'ICE' },
  { slug: 'cocokeep', title: 'Coco Carry', subtitle: 'Team project · Beach storage and physical models', subtitleZh: '团队项目 · 海滩储物与实体模型', mark: 'COCO' },
];

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const locale = getLocale(await searchParams);
  const t = homeCopy[locale];
  const href = (path: string) => localizedHref(path, locale);
  return (
    <main id="top" className="site-shell home-mist" lang={locale === 'zh' ? 'zh-CN' : 'en'}>
      <svg className="product-color-definitions" width="0" height="0" aria-hidden="true" focusable="false"><defs>{productColorTones.map(tone => <filter id={tone.id} key={tone.id} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values={tone.matrix.join(' ')} /></filter>)}</defs></svg>
      <div className="home-masthead">
      <div className="home-atmosphere" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href={href('/')} aria-label={t.homeLabel}>Danielle Li<span>李丹宁</span></a>
        <p className="status">{t.status}<br />{t.place}</p>
        <div className="topbar-actions"><nav aria-label={t.navigation}><a href="#work">{t.work}</a><a href="#experiments">{t.experiments}</a><a href="#about">{t.about}</a><a href="mailto:1878626948a@gmail.com">{t.contact}</a></nav><LanguageSwitch locale={locale} path="/" /></div>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 id="intro-title"><span>{t.intro}</span><em>{t.introEm}</em></h1>
        <div className="intro-aside"><p className="intro-copy">{t.introCopy}</p><p className="intro-detail">{t.introDetail}</p><a className="scroll-note" href="#work">{t.enter} <ArrowDownRight size={16} /></a></div>
      </section>
      </div>

      <section id="work" className="workbench" aria-label={t.selected}>
        <p className="bench-label">{t.selected} <span>2025 — 2026</span></p>
        <p className="drag-hint">{t.arrange}</p>
        <ResetDesk label={t.reset} />
        {works.map((work) => (
          <DraggableProject key={work.slug} href={href(`/project/${work.slug}`)} className={`work-object ${work.className}`} label={`${t.view} ${work.title}: ${locale === 'zh' ? work.typeZh : work.type}`} instructions={t.dragHelp}>
            <span className="work-image">{work.art.map((image, index) => {
              const bounds = cutoutBounds[image];
              return <svg key={image} className={`art-piece art-${index + 1}`} viewBox={bounds.viewBox} aria-hidden="true" focusable="false"><image href={image} width={bounds.width} height={bounds.height} /></svg>;
            })}</span>
          </DraggableProject>
        ))}
      </section>

      <section id="experiments" className="experiments">
        <div className="section-heading"><p className="eyebrow">{t.studio}</p><h2>{t.unfinished}<br /><em>{t.unfinishedEm}</em></h2><p className="section-note">{t.studioNote}</p></div>
        <div className="experiment-list">{experiments.map((item) => (
          <DraggableProject key={item.title} href={href(`/project/${item.slug}`)} className="experiment-card" label={`${t.view} ${item.title}`} instructions={t.dragHelp}><span className="experiment-mark">{item.mark}</span><span className="experiment-no">↗</span><h3 lang="en">{item.title}</h3><p>{locale === 'zh' ? item.subtitleZh : item.subtitle}</p><small>{t.viewExperiment}</small></DraggableProject>
        ))}</div>
      </section>

      <section id="about" className="about">
        <p className="eyebrow">{t.aboutLabel}</p>
        <div><h2>{t.aboutTitle}<br /><em>{t.aboutEm}</em></h2><p>{t.biography}</p><p>{t.makingApproach}</p></div>
        <div className="about-meta"><p><strong>{t.based}</strong>{t.location}</p><p><strong>{t.education}</strong>{locale === 'zh' ? '布朗大学 × 罗德岛设计学院' : 'Brown University × RISD'}<br />{t.degree}</p><p><strong>{t.making}</strong>{t.skills}</p></div>
      </section>

      <footer><p>{t.footer}<br /><em>{t.footerEm}</em></p><a href="mailto:1878626948a@gmail.com"><Mail size={19} /> 1878626948a@gmail.com</a><span>© 2026 Danielle Li · {locale === 'zh' ? '普罗维登斯' : 'Providence, RI'}</span><a className="back-top" href="#top">{t.backTop}</a></footer>
    </main>
  );
}
