import { sourcePageUrl, type Bilingual, type ProjectEvidence } from '@/lib/project-evidence';
import type { Locale } from '@/lib/i18n';

function SourceLinks({ pages, locale, record }: { pages: number[]; locale: Locale; record: ProjectEvidence }) {
  return <p className="evidence-source"><span>{record.source?.label[locale] ?? (locale === 'zh' ? '原作品集' : 'Original portfolio')}</span>{pages.map(page =>
    <a key={page} href={sourcePageUrl(page, record)} target="_blank" rel="noreferrer" aria-label={locale === 'zh' ? `打开项目材料第 ${page} 页` : `Open source page ${page}`}>p. {page} ↗</a>
  )}</p>;
}

export function ProjectContext({ record, locale }: { record: ProjectEvidence; locale: Locale }) {
  return <aside className="project-context" aria-label={locale === 'zh' ? '项目职责与完成阶段' : 'Contribution and project stage'}>
    <dl><div><dt>{locale === 'zh' ? '我的贡献' : 'My contribution'}</dt><dd>{record.contribution[locale]}</dd></div>
    <div><dt>{locale === 'zh' ? '完成阶段' : 'Project stage'}</dt><dd>{record.stage[locale]}</dd></div></dl>
    <SourceLinks pages={record.contextPages} locale={locale} record={record} />
    {record.demo && <a className="prototype-demo" href={record.demo.url} target="_blank" rel="noreferrer">{record.demo.label[locale]} <span aria-hidden="true">↗</span></a>}
  </aside>;
}

export function ProjectDecisions({ record, locale }: { record: ProjectEvidence; locale: Locale }) {
  const text = (value: Bilingual) => value[locale];
  return <div className="evidence-section" aria-label={locale === 'zh' ? '研究与设计依据' : 'Research and design reasoning'}>
    {record.decisions.map((decision, index) => <article className="evidence-step" key={decision.title.en}>
      <div className="evidence-step-heading"><span className="evidence-index">{String(index + 1).padStart(2, '0')}</span><h3>{text(decision.title)}</h3></div>
      <div className="evidence-step-body"><p><strong>{locale === 'zh' ? '研究与记录' : 'Research and observations'}</strong>{text(decision.finding)}</p><p><strong>{locale === 'zh' ? '设计回应' : 'Design response'}</strong>{text(decision.response)}</p><SourceLinks pages={decision.pages} locale={locale} record={record} /></div>
    </article>)}
  </div>;
}

export function ResearchArchive({ record, locale }: { record: ProjectEvidence; locale: Locale }) {
  return <details className="research-archive"><summary>{locale === 'zh' ? '展开研究与过程原始图版' : 'Open the original research and process pages'}<span aria-hidden="true">↗</span></summary>
    <div className="research-archive-pages">{record.archivePages.map(page => <figure key={page}>
      <a href={sourcePageUrl(page, record)} target="_blank" rel="noreferrer"><img src={sourcePageUrl(page, record)} loading="lazy" width={record.source?.width ?? 1250} height={record.source?.height ?? 625} alt={locale === 'zh' ? `项目材料第 ${page} 页，研究与设计过程` : `Source page ${page}, research and design process`} /></a>
      <figcaption>{locale === 'zh' ? `原作品集 p. ${page} · 点击查看原图，图中文字保留原文` : `Original portfolio p. ${page} · Open full image, original wording retained`}</figcaption>
    </figure>)}</div>
  </details>;
}

export function ProjectValidation({ record, locale }: { record: ProjectEvidence; locale: Locale }) {
  return <div className="project-validation">
    {record.metrics && <dl className="evidence-metrics">{record.metrics.map(metric => <div key={metric.label.en}><dt>{metric.label[locale]}</dt><dd><span>{metric.value}</span><p>{metric.context[locale]}</p></dd></div>)}</dl>}
    <div className="validation-grid"><div><h3>{locale === 'zh' ? '已记录的成果' : 'Documented work'}</h3><p>{record.demonstrated[locale]}</p></div><div><h3>{locale === 'zh' ? '验证范围' : 'Scope of validation'}</h3><p>{record.limits[locale]}</p></div></div>
    {record.publication && <p className="publication-note">{record.publication[locale]}</p>}
    <SourceLinks pages={record.resultPages} locale={locale} record={record} />
  </div>;
}
