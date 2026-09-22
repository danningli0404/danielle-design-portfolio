export type Locale = 'en' | 'zh';
export type SearchParams = Record<string, string | string[] | undefined>;

export function getLocale(params: SearchParams = {}): Locale {
  return params.lang === 'en' ? 'en' : 'zh';
}

export function localizedHref(path: string, locale: Locale) {
  const [pathname, hash] = path.split('#');
  return `${pathname || '/'}?lang=${locale}${hash ? `#${hash}` : ''}`;
}

export const homeCopy = {
  en: {
    homeLabel: 'Danielle Li home', status: 'Design engineering', place: 'Brown × RISD · Providence',
    navigation: 'Primary navigation', work: 'Work', experiments: 'Experiments', about: 'About', contact: 'Contact',
    eyebrow: 'Calm & Control · Product design & making', intro: 'Making for', introEm: 'everyday life.',
    introCopy: 'I work on small everyday difficulties, helping people feel more in control and more at ease.', introDetail: 'Brown × RISD Design Engineering. Graduating June 2027. Physical products, fabrication, and hands-on prototyping.', enter: 'Explore the work',
    selected: 'Selected works', arrange: 'Drag to arrange · Click to explore', reset: 'Reset arrangement ↺',
    studio: 'Making notes / Summer 2026', unfinished: 'Materials,', unfinishedEm: 'forms & trials.',
    studioNote: 'Two summer team projects: separating ice from a drink, and bringing beach essentials together. Research, sketches, and physical prototypes make the design decisions visible.', viewExperiment: 'Explore project ↗',
    aboutTitle: 'Calm & Control.', aboutEm: 'In everyday details.', aboutLabel: 'My approach',
    biography: 'I focus on the small difficulties different people encounter in daily life. Calm means less uncertainty and disruption. Control means being able to understand, choose, and manage the details of your own routine. I want my work to help more people feel at ease without taking decisions out of their hands.',
    makingApproach: 'With a background in journalism, I start by observing and listening. I prefer to develop ideas through physical making, choosing materials and methods around the problem: CAD, 3D printing, laser cutting, sewing, or electronics. My aim is to work toward usable solutions through building, trying, and revising prototypes.',
    based: 'Based in', location: 'Providence, Rhode Island', education: 'Education', degree: 'MA Design Engineering · June 2027',
    making: 'Making with', skills: 'CAD, electronics, 3D printing, laser cutting, sewing, photo & video',
    footer: 'Projects &', footerEm: 'collaborations.', backTop: 'Back to top ↑', view: 'View',
    dragHelp: 'Drag to arrange · Click to explore · Arrow keys to move · Escape to reset',
  },
  zh: {
    homeLabel: '李丹宁个人主页', status: '设计工程', place: '布朗大学 × 罗德岛设计学院 · 普罗维登斯',
    navigation: '主导航', work: '作品', experiments: '实验', about: '关于', contact: '联系',
    eyebrow: 'Calm & Control · 产品设计与制作', intro: '用实体制作，', introEm: '回应日常难题。',
    introCopy: '关注不同人群的日常小困扰，帮助使用者保有掌控感，获得平静。', introDetail: 'Brown × RISD 设计工程硕士，预计 2027 年 6 月毕业。关注实体产品、制造方法与原型迭代。', enter: '看看我的作品',
    selected: '精选作品', arrange: '拖动自由摆放 · 点击查看项目', reset: '恢复初始摆放 ↺',
    studio: '制作记录 / 2026 夏', unfinished: '制作与', unfinishedEm: '原型试验。',
    studioNote: '两个暑期团队项目：让冰饮不被融水稀释，让海滩用品更有序。用调研、草图与实体模型，记录每一步设计判断。', viewExperiment: '查看项目 ↗',
    aboutTitle: 'Calm & Control，', aboutEm: '从生活细节开始。', aboutLabel: '我的设计方法',
    biography: '我关注不同人群在日常生活里遇到的小困扰。对我而言，Calm 是少一点不确定与打扰；Control 是使用者能够理解、选择并掌控自己的生活细节。我希望通过具体的产品，让更多人按自己的习惯安排生活，多一些自主，也多一些平静。',
    makingApproach: '新闻学背景让我习惯先观察、再倾听。我更倾向于通过实体制作推进设计：根据问题选择材料与方法，结合 CAD、3D 打印、激光切割、缝纫或电子原型，在制作、试用与修改中逐步检验方案是否可用。我的目标是为真实生活里的问题，找到可实际使用的解决方案。',
    based: '所在地', location: '美国 · 罗得岛州 · 普罗维登斯', education: '教育背景', degree: '设计工程硕士 · 预计 2027 年 6 月毕业',
    making: '制作与表达', skills: 'CAD、电子原型、3D 打印、激光切割、缝纫、摄影与视频编辑',
    footer: '项目与合作，', footerEm: '欢迎联系。', backTop: '回到顶部 ↑', view: '查看',
    dragHelp: '拖动摆放 · 点击查看 · 方向键移动 · Esc 恢复位置',
  },
} as const;

export const detailCopy = {
  en: {
    collection: 'All work', designer: 'About', chapters: 'Project chapters', year: 'Year', role: 'Role', areas: 'Areas',
    question: 'The question', process: 'The process', progress: 'In progress', outcome: 'The outcome', notes: 'Studio notes', caseStudy: 'Case study',
    overview: 'Project overview', enlarge: 'Open full image ↗', enlargeLabel: 'Enlarge',
    questionTitle: 'A closer look', questionEm: 'at the problem.', processTitle: 'Thinking', processEm: 'through making.',
    archive: 'From the archive / Selected process material', processAlt: 'process and outcome',
    progressTitle: 'A work in progress', outcomeTitle: 'What emerged', noteTitle: 'A note on the work', next: 'Continue exploring',
  },
  zh: {
    collection: '全部作品', designer: '关于我', chapters: '项目章节', year: '年份', role: '我的角色', areas: '设计领域',
    question: '问题与背景', process: '设计过程', progress: '探索进展', outcome: '成果与反思', notes: '工作室手记', caseStudy: '项目案例',
    overview: '项目概览', enlarge: '查看原图 ↗', enlargeLabel: '放大查看',
    questionTitle: '从真实问题', questionEm: '开始观察。', processTitle: '在动手中', processEm: '推进思考。',
    archive: '原始作品集图版 / 设计过程（图中文字保留原文）', processAlt: '设计过程与成果',
    progressTitle: '进行中的探索', outcomeTitle: '成果与反思', noteTitle: '关于项目阶段', next: '继续探索',
  },
} as const;
