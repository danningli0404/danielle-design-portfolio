import type { Project } from './projects';
import type { Locale } from './i18n';
import { summerTranslations } from './summer-projects.ts';

type Translation = Pick<Project, 'kicker' | 'summary' | 'role' | 'disciplines' | 'challenge' | 'approach' | 'outcome' | 'note'>;

export const projectTranslations: Record<string, Translation> = {
  'sense-together': {
    kicker: '面向不同感官需求的音乐节服务系统', role: '个人项目', disciplines: ['服务设计', '无障碍设计', 'UI/UX', '三维建模'],
    summary: '一个面向聋人、听障、盲人及低视力观众的无障碍音乐节概念系统，将 AR 字幕、触觉节奏反馈与重新设计的现场服务结合起来。',
    challenge: '大型户外音乐节存在多重障碍：拥挤的人群、有限的导航支持、不易获取的演出信息，以及听觉之外较少的音乐体验方式。',
    approach: '我结合案例研究、利益相关者分析、访谈、用户画像、服务蓝图、应用流程与可穿戴形态探索。用户反馈指出了导航顺序、地图位置与身份措辞的问题，高保真界面展示了按辅助需求选择模式的入口。',
    outcome: '最终方案将无障碍服务中心、优先观演区域、AR 智能眼镜、触觉手环与配套应用串联为一套完整体验。',
    note: '本项目为概念提案。服务与可穿戴设备通过界面原型和外观模型呈现，技术实现仍属于后续工作。',
  },
  vitalride: {
    kicker: '面向配送骑手的可穿戴高温安全系统', role: '个人项目', disciplines: ['可穿戴设计', '田野研究', 'UI/UX', '物理计算'],
    summary: '由可穿戴背心、通风头盔与手机应用组成的概念系统，希望帮助配送骑手在情况恶化前识别热应激风险。',
    challenge: '配送骑手需要在一天中最炎热的时段承受较大的时间压力。休息场所不足，仅凭自身感受难以准确判断身体状态，而停工又可能意味着收入减少。',
    approach: '通过现场观察、骑手访谈、问卷、旅程图、服装研究、生理信号传感研究、界面原型与早期编程测试，逐步形成系统方案。',
    outcome: '方案将温度、心率和姿态感知与降温组件相结合，并通过应用把数据转化为及时、易懂的行动提示。',
    note: '目前为设计概念与外观原型，不作为经过验证的医疗设备呈现。',
  },
  purelink: {
    kicker: '让家庭用水质量变得可见', role: '个人项目', disciplines: ['产品设计', '服务设计', 'Arduino', '参与式研究'],
    summary: '一套水龙头净水装置概念与共享信息系统，以降低获取水质信息和支持的门槛为目标，同时让居民、物业与公共服务之间的责任更清晰。',
    challenge: '在老旧小区中，水体变色与责任不明确既带来健康担忧，也削弱居民的信任。居民往往缺少价格可接受的检测方式和容易理解的信息。',
    approach: '我使用文化探针、访谈、共同设计工作坊、利益相关者分析、过滤材料实验、Arduino 传感、应用原型与服务蓝图推进设计。',
    outcome: '原型工作覆盖过滤介质、紫外灯控制、TDS 与浊度传感和本地显示，并通过居民端、物业端界面与服务方案，将产品放回实际用水与沟通情境中。',
  },
  'color-showdown': {
    kicker: '关于 AI 与创作权的虚实交互游戏', role: '个人项目', disciplines: ['游戏设计', 'Unity', 'Arduino', '三维角色设计'],
    summary: '一款可玩的实体与数字结合的游戏，将对未经授权的 AI 训练的抵抗，转化为玩家与吸收图像的机器人之间的触觉对抗。',
    challenge: '版权制度的应对速度有限，生成式模型却能大规模吸收与复现视觉风格。我希望通过游戏，让人切身感受到这种失衡。',
    approach: '从历史研究出发，形成回合制颜色机制。我在 Unity 中搭建游戏，制作机器人角色模型，通过 Arduino 连接电容触摸传感器，并测试实体交互。',
    outcome: '玩家通过触摸传感器改变并锁定色块，打乱机器人的路径。操作中的阻力与重复成为隐喻的一部分：抵抗内容攫取，需要持续付出。',
  },
  tacchat: {
    kicker: '与盲人及低视力创作者一起探索触觉图形', role: '团队项目 · 论文第二作者', disciplines: ['无障碍研究', '实验设计', '数据分析', '系统流程'],
    summary: '一个支持盲人及低视力用户创作、转换、修改与分享触觉图形的研究系统，让他们不只是信息的接收者，也能成为创作者。',
    challenge: '可刷新触觉图形技术往往重视信息获取，却较少关注盲人及低视力用户如何创作触觉内容，并用它进行交流。',
    approach: '我的贡献包括系统流程设计、实验设计与数据分析。研究结合导航、玩具组装任务与定性体验指标进行评估。',
    outcome: 'TacChat 将触觉图形的创作、转换、修改与分享连接成完整工作流，并通过路线导航与玩具识别任务进行评估。',
  },
};

Object.assign(projectTranslations, summerTranslations);

export function localizeProject(project: Project, locale: Locale): Project {
  return locale === 'zh' ? { ...project, ...projectTranslations[project.slug] } : project;
}
