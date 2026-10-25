import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProject, projects } from '@/lib/projects';
import { EditorialCursor } from '@/components/editorial-cursor';
import '@/app/case-editorial.css';
import { LanguageSwitch } from '@/components/language-switch';
import { detailCopy, getLocale, localizedHref, type SearchParams } from '@/lib/i18n';
import { localizeProject } from '@/lib/projects-zh';
import { evidence } from '@/lib/project-evidence';
import { ProjectContext, ProjectDecisions, ProjectValidation, ResearchArchive } from '@/components/project-evidence';
import { ProjectNarrative } from '@/components/project-narrative';
import { TacChatLead } from '@/components/project-narrative';

type PageProps = { params: Promise<{ slug: string }>; searchParams: Promise<SearchParams> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params; const original = getProject(slug);
  if (!original) return {};
  const locale = getLocale(await searchParams);
  const project = localizeProject(original, locale);
  const images = project.hero ? [`https://danningli0404.github.io/danielle-design-portfolio${project.hero}`] : [];
  const title = `${project.title} — ${locale === 'zh' ? '李丹宁' : 'Danning Li'}`;
  return { title, description: project.summary, openGraph: { title, description: project.summary, images }, twitter: { card: project.hero ? 'summary_large_image' : 'summary', title, description: project.summary, images } };
}

export default async function ProjectPage({ params, searchParams }: PageProps) {
  const { slug } = await params; const original = getProject(slug); if (!original) notFound();
  const locale = getLocale(await searchParams);
  const t = detailCopy[locale];
  const project = localizeProject(original, locale);
  const href = (path: string) => localizedHref(path, locale);
  const record = evidence[slug];
  const current = projects.findIndex(item => item.slug === slug); const next = projects[(current + 1) % projects.length];
  return (
    <main data-project={slug} className={`project-page case-editorial${project.experimental ? ' summer-case' : ''}`} lang={locale === 'zh' ? 'zh-CN' : 'en'}>
      <EditorialCursor /><div className="case-masthead"><header className="project-nav"><a href={href('/#work')}><ArrowLeft size={14} /> {t.collection}</a><span>Danning Li · 李丹宁</span><div className="project-nav-actions"><a className="case-contact" href="mailto:danning_li@brown.edu">{locale === 'zh' ? '联系' : 'Contact'}</a><LanguageSwitch locale={locale} path={`/project/${slug}`} /></div></header>
      {slug === 'tacchat' ? <TacChatLead locale={locale} /> : <section id="overview" className="project-hero">
        <p className="eyebrow">{project.kicker}</p><h1 lang="en">{project.title}</h1><p className="project-summary">{project.summary}</p>
        <div className="project-facts"><p><strong>{record ? (locale === 'zh' ? '项目时间' : 'Timeline') : t.year}</strong>{record?.period ?? project.year}</p><p><strong>{t.role}</strong>{project.role}</p><p><strong>{t.areas}</strong>{project.disciplines.join(' · ')}</p></div>
      </section>}
      </div>
      {record && slug !== 'tacchat' && <ProjectContext record={record} locale={locale} pdfSlug={["sense-together","vitalride","purelink","color-showdown","tacchat"].includes(slug) ? slug : undefined} pdfUrl={slug === 'cocokeep' ? 'https://danningli0404.github.io/danielle-design-portfolio/research/cococarry.pdf' : undefined} />}
      <nav className="chapter-nav" aria-label={t.chapters}><a href="#question">{t.question}</a><a href="#process">{t.process}</a><a href="#reflection">{project.experimental ? t.progress : t.outcome}</a><span>{project.experimental ? t.notes : t.caseStudy} / {project.year}</span></nav>
      {['sense-together', 'vitalride', 'purelink', 'color-showdown', 'tacchat'].includes(slug) ? <ProjectNarrative slug={slug} locale={locale} project={project} /> : <>
      <section id="question" className="case-grid">
        <span className="case-no">01 — {t.question}</span><div><h2>{t.questionTitle}<br /><em>{t.questionEm}</em></h2><p>{project.challenge}</p></div>
      </section>
      <section id="process" className="process-section">
        <div className="case-grid"><span className="case-no">02 — {t.process}</span><div><h2>{record ? (locale === 'zh' ? '从观察到方案，' : 'From observation') : t.processTitle}<br /><em>{record ? (locale === 'zh' ? '每一步的依据。' : 'to design decisions.') : t.processEm}</em></h2><p>{project.approach}</p></div></div>
        {record && <ProjectDecisions record={record} locale={locale} />}
        {slug === 'ice-chamber' && <figure className="process-spread"><a href="/summer/ice-chamber/early-models.jpg" target="_blank" rel="noreferrer"><img src="/summer/ice-chamber/early-models.jpg" width={742} height={405} alt={locale === 'zh' ? '团队早期纸板、杯盖与冰吸管试验照片' : 'Team photographs of early cardboard, lid, and ice-straw experiments'} loading="lazy" /></a><figcaption>{locale === 'zh' ? '团队早期方案试验 · 从原海报提取，完整尺寸与铰链迭代见下方原始图版。' : 'Early team experiments · Extracted from the poster; chamber-size and hinge iterations appear in the original page below.'}</figcaption></figure>}
        {slug === 'cocokeep' && <figure className="process-spread"><a href="/summer/coco-carry/page-11.jpg" target="_blank" rel="noreferrer"><img src="/summer/coco-carry/page-11.jpg" width={1920} height={1080} alt={locale === 'zh' ? '团队制作的较大纸面模型与多种 3D 打印模型' : 'Team-built larger paper-covered model and several 3D-printed models'} loading="lazy" /></a><figcaption>{locale === 'zh' ? '团队实体模型 · 我的贡献为纸板制作；3D 打印模型为团队其他制作成果。' : 'Team physical models · My contribution was cardboard fabrication; the 3D prints are other team work.'}</figcaption></figure>}
        {project.process && <figure className="process-spread"><a href={project.process} target="_blank" rel="noreferrer" aria-label={`${t.enlargeLabel} ${project.title} ${t.process}`}><img src={project.process} width={slug === 'sense-together' ? 1667 : 1250} height={slug === 'sense-together' ? 834 : 625} alt={`${project.title} / ${t.processAlt}`} loading="lazy" /></a><figcaption><span>{t.archive}</span><span>{t.enlarge}</span></figcaption></figure>}
        {record && slug !== 'cocokeep' && <ResearchArchive record={record} locale={locale} />}
      </section>
      <section id="reflection" className="outcome-block"><p className="eyebrow">03 — {project.experimental ? t.progressTitle : t.outcomeTitle}</p><h2>{project.outcome}</h2>{record ? <ProjectValidation record={record} locale={locale} /> : project.note && <p className="honesty-note"><strong>{t.noteTitle}</strong>{project.note}</p>}</section>
      </>}
      <a className="next-project" href={href(`/project/${next.slug}`)}><span>{t.next}</span><strong lang="en">{next.title}</strong><ArrowUpRight /></a>
    </main>
  );
}
