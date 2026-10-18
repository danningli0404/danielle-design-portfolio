import { summerEvidence } from './summer-evidence.ts';
// Main-project claims are grounded in the user's original 26-page portfolio.
// Page numbers refer to the PDF, not to the ordering of projects on the website.
export type Bilingual = { zh: string; en: string };
const copy = (zh: string, en: string): Bilingual => ({ zh, en });
export type ProjectEvidence = {
  source?: { directory: string; label: Bilingual; width: number; height: number; pageCount: number };
  period: string;
  contribution: Bilingual;
  stage: Bilingual;
  contextPages: number[];
  decisions: { title: Bilingual; finding: Bilingual; response: Bilingual; pages: number[] }[];
  archivePages: number[];
  demonstrated: Bilingual;
  limits: Bilingual;
  resultPages: number[];
  metrics?: { value: string; label: Bilingual; context: Bilingual }[];
  publication?: Bilingual;
  demo?: { url: string; label: Bilingual; sourcePage: number };
};

export const evidence: Record<string, ProjectEvidence> = {
  ...summerEvidence,
  'sense-together': {
    period: '2025.06.12 — 2025.10.30',
    contribution: copy('个人项目：从访谈与案例研究出发，完成服务蓝图、应用信息架构与界面、可穿戴设备形态及使用情境。', 'Individual project spanning interviews and precedent research, service blueprinting, app architecture and interfaces, wearable form studies, and use scenarios.'),
    stage: copy('服务概念、界面原型与三维外观方案；包含用户反馈记录。', 'Service concept, interface prototypes, and 3D appearance studies, with documented user feedback.'),
    contextPages: [2, 5, 6, 7],
    decisions: [
      {
        title: copy('同样是听障观众，需要的支持并不相同', 'Different hearing needs require different forms of support'),
        finding: copy('访谈中，一位受访者依赖手语理解现场内容，另一位不会手语，更需要字幕与歌词；背景噪声和舞台距离又限制了助听与读唇。', 'One interviewee relied on sign-language interpretation; another did not understand signing and wanted captions and lyrics. Background noise and distance from the stage also limited hearing aids and lip-reading.'),
        response: copy('方案将实时字幕、手语转播与触觉节奏并置，而不是把手语翻译当作唯一的无障碍方式。眼镜与手环各自承担不同的信息通道。', 'The proposal combines captions, sign-language video, and haptic rhythm instead of relying on signing alone. Glasses and a bracelet address different information channels.'),
        pages: [3, 7],
      },
      {
        title: copy('体验从入场前开始，而不是从戴上设备开始', 'The experience starts before anyone puts on a device'),
        finding: copy('视障受访者提到，拥挤环境使白杖探路和保持平衡更困难，希望有专门观演区域与扶手。单一设备无法覆盖完整的现场体验。', 'A visually impaired interviewee described difficulty using a white cane and maintaining balance in crowds, and requested dedicated viewing areas with handrails. A device alone could not cover the whole event experience.'),
        response: copy('服务蓝图覆盖预约、接驳、身份核验、志愿者协助、设备领取与说明、优先观演、归还及离场，并区分前台服务、后台协作和支持资源。', 'The service blueprint covers booking, shuttles, check-in, volunteer support, device collection and instruction, priority viewing, returns, and departure, with frontstage, backstage, and support responsibilities.'),
        pages: [3, 5],
      },
      {
        title: copy('测试把问题落到了导航与措辞上', 'Feedback made navigation and language concrete design issues'),
        finding: copy('测试记录提出三个具体问题：读屏用户希望主导航置顶；地图不应藏在通知页；直接按残障身份分类的措辞让人不适。', 'Feedback identified three specific issues: a screen-reader user requested top navigation; the map felt misplaced under notifications; and direct disability-identity labels felt uncomfortable.'),
        response: copy('高保真界面展示了“选择偏好的辅助模式”，并提供听觉辅助与视觉辅助入口。地图位置和导航顺序的反馈也被保留，但原稿没有逐项展示改版后的复测结果。', 'The high-fidelity interface asks for a preferred accessibility mode and offers hearing and visual assistance. Feedback on map placement and navigation order is documented, but the portfolio does not show a complete change-and-retest comparison.'),
        pages: [6],
      },
    ],
    archivePages: [5, 6],
    demonstrated: copy('已呈现端到端服务蓝图、低保真到高保真界面、用户反馈、设备建模和使用情境。', 'The portfolio documents an end-to-end service blueprint, low- and high-fidelity interfaces, user feedback, device modeling, and a usage scenario.'),
    limits: copy('AR 字幕与触觉同步仍按概念呈现；原稿未给出现场部署、技术延迟测试或系统可用性测试的完整样本与结果。', 'AR captioning and haptic synchronization remain conceptual. The portfolio does not document a live deployment, latency tests, or a complete system-usability study with sample details.'),
    resultPages: [6, 7],
  },
  vitalride: {
    period: '2025.06 — 2025.10',
    contribution: copy('个人项目：骑手访谈与现场观察、旅程图、竞品分析、应用原型、可穿戴造型，以及传感器与代码试验。', 'Individual project covering rider interviews and field observation, journey mapping, competitor analysis, app prototyping, wearable form design, and sensor/code experiments.'),
    stage: copy('可穿戴系统概念、界面与外观方案；已有独立传感器读数试验。', 'Wearable-system concept, interface and appearance studies, with separate sensor-readout experiments.'),
    contextPages: [8, 10, 12, 13],
    decisions: [
      {
        title: copy('休息不是一个脱离工作情境的选择', 'Taking a break is constrained by the delivery workflow'),
        finding: copy('现场观察与访谈记录了骑手在商铺、树荫和花坛附近休息的情境。受访者担心离开接单区域会错过订单，中午高温又与订单高峰重叠。', 'Observation and interviews recorded riders resting near shops, shade, and flowerbeds. Interviewees worried about missing orders if they left pickup areas, while midday heat overlapped with peak demand.'),
        response: copy('旅程图把等待、骑行、步行、寻找楼栋和爬楼分别展开。方案选择将状态提示与穿戴设备结合，让支持发生在工作过程中，而不只依赖固定休息站。', 'The journey map separates waiting, riding, walking, wayfinding, and stair climbing. The proposal combines wearable support with status prompts within that workflow, rather than relying only on fixed rest stations.'),
        pages: [9, 10],
      },
      {
        title: copy('信息看得见，不等于能及时看懂', 'Available readings are not automatically usable information'),
        finding: copy('界面测试记录了身体数据分散、设备信息不够详细，以及联系朋友不便、无法得知在线状态等问题。', 'Interface feedback identified scattered body readings, insufficient device detail, and difficulty contacting friends or knowing whether they were online.'),
        response: copy('原稿展示了身体状态总览、异常提醒、设备状态和联系人相关界面。它们构成了“查看状态—理解提醒—寻找支持”的设计方向，但原稿未提供逐项修复前后的复测对比。', 'The portfolio shows body-status overviews, abnormal-condition alerts, equipment details, and contact interfaces. Together they outline a view–interpret–seek-support flow; a before-and-after retest is not documented.'),
        pages: [11],
      },
      {
        title: copy('从状态感知开始搭建原型', 'Begin prototyping with sensing'),
        finding: copy('原稿包含姿态、温度与心率相关模块的接线、代码及串口读数，也展示了背心与头盔的结构构想。', 'The portfolio includes wiring, code, and serial readings for posture, temperature, and heart-rate-related modules, alongside vest and helmet concepts.'),
        response: copy('通过模块级接线与程序试验，探索将身体状态转成可读取信号的路径。下一步需要把这些模块整合到穿戴原型，考察运动中的读数稳定性、运行时长与舒适性。', 'Module-level wiring and code experiments explore how body conditions can become readable signals. The next step is integration into a wearable prototype to examine signal stability during movement, runtime, and comfort.'),
        pages: [12, 13],
      },
    ],
    archivePages: [10, 11, 13],
    demonstrated: copy('已呈现现场调研、应用原型、设备形态、模块级接线与代码、串口测试及完整使用故事板。', 'Documented work includes field research, app prototypes, device forms, module-level wiring and code, serial tests, and a complete usage storyboard.'),
    limits: copy('项目不作为已验证的防中暑或医疗设备展示。原稿未给出完整穿戴系统的实地对照试验，也未验证预警或降温的实际效果。', 'This is not presented as a validated heat-illness prevention or medical device. The portfolio does not document a controlled field study of the complete wearable system or validated alert/cooling effectiveness.'),
    resultPages: [12, 13],
  },
  purelink: {
    period: '2025.07.27 — 2025.10.08',
    contribution: copy('个人项目：文化探针、访谈与共创、服务系统与双端界面、净水装置建模、材料试验，以及 Arduino 原型。', 'Individual project covering cultural probes, interviews and co-design, service-system and two-sided interface design, purifier modeling, material trials, and Arduino prototyping.'),
    stage: copy('产品与服务原型；有安装、取样、传感及界面反馈记录。', 'Product and service prototype, with installation, sampling, sensing, and interface-feedback records.'),
    contextPages: [14, 16, 17, 18],
    decisions: [
      {
        title: copy('从日常用水记录里找到问题，而不只问偏好', 'Study everyday water use, not only stated preferences'),
        finding: copy('文化探针工具包发给了 2 位社区物业管理者与 3 位邻居，包含记录本、便签、任务提示、水质测试笔与拍照记录。材料呈现出发现问题晚、检测成本高、回复慢和责任不清等痛点。', 'Probe kits were distributed to 2 community property managers and 3 neighbors. They included notebooks, sticky notes, task prompts, a water-testing pen, and photo records. The material surfaced late detection, testing costs, slow responses, and unclear responsibility.'),
        response: copy('研究将痛点拆成健康、经济、信任、沟通与责任五类，使项目从单一净水器扩展到产品、信息呈现与服务协作。', 'The research grouped pain points into health, finances, trust, communication, and accountability, expanding the brief beyond a purifier to information and service coordination.'),
        pages: [16],
      },
      {
        title: copy('居民需要知道水怎么样，也需要知道谁来处理', 'Residents need both water information and a path to action'),
        finding: copy('居民与物业的反馈共同暴露了责任推诿、信息滞后和检测报告难以获取的问题。共创结果提出公开检测结果、降低设备获取成本并明确各方职责。', 'Resident and property-management feedback surfaced blame-shifting, delayed information, and inaccessible testing reports. Co-design outputs called for shared results, lower equipment-access costs, and clearer responsibilities.'),
        response: copy('因此方案设计了居民端与物业端：居民查看数据、文档与求助入口；物业处理集中采购、支持和信息提交。系统图与服务蓝图连接安装、使用、反馈、调查和耗材更换。', 'The proposal separates resident and management interfaces: residents access readings, documents, and support; management handles procurement, assistance, and information submission. System and service maps connect installation, use, feedback, investigation, and consumable replacement.'),
        pages: [16, 17, 19],
      },
      {
        title: copy('测试指出：显示数字，还没有解释数字', 'Testing exposed a gap between displaying and explaining data'),
        finding: copy('界面反馈中，有居民认为信息更直观，也有人仍不清楚各项水质指标意味着什么。硬件记录展示了滤材装入、龙头安装、取样，以及 TDS、浊度和显示模块。', 'Interface feedback included improved readability, but also uncertainty about what the water indicators meant. Hardware records show media loading, tap installation, sampling, and TDS, turbidity, and display modules.'),
        response: copy('原型把传感读数与产品界面连接到同一服务构想中。反馈也给出了下一轮迭代的重点：为指标补充可理解的解释，并将异常状态连接到明确的后续行动。', 'The prototype brings sensor readings and interfaces into one service concept. Feedback defines the next iteration: understandable explanations for each indicator and clear actions connected to abnormal readings.'),
        pages: [17, 18],
      },
    ],
    archivePages: [16, 17, 19],
    demonstrated: copy('已记录滤材与结构探索、龙头安装、取样对比、紫外灯控制、TDS 与浊度传感、显示及代码，以及两类用户的界面反馈。', 'Recorded work includes media and structural exploration, tap installation, sample comparison, UV-lamp control, TDS/turbidity sensing, display/code work, and feedback from both interface audiences.'),
    limits: copy('原稿没有完整列出试验水样、重复次数、校准方式或第三方检测结果。因此这里展示原型与设计过程，不承诺直饮安全，也不推算净化百分比。', 'The portfolio does not fully specify test water, repetitions, calibration, or independent laboratory results. This page presents the prototype and design process without promising drinking safety or inferring a purification percentage.'),
    resultPages: [17, 18],
  },
  'color-showdown': {
    period: '2025.10 — 2025.12',
    demo: { url: 'https://www.youtube.com/watch?v=yZNcYpi3fE4', label: copy('观看原型演示 · YouTube', 'Watch the prototype demo · YouTube'), sourcePage: 20 },
    contribution: copy('个人项目：游戏机制与流程、Unity 开发、Arduino 触摸输入、机器人角色建模、游戏界面与测试。', 'Individual project covering mechanics and flow, Unity development, Arduino touch input, robot modeling, game interfaces, and testing.'),
    stage: copy('可玩的实体—数字交互原型；原稿包含开发、接线、试玩与游戏画面。', 'Playable physical–digital prototype with development, wiring, playtesting, and gameplay records.'),
    contextPages: [20, 22, 23, 24],
    decisions: [
      {
        title: copy('让议题进入规则，而不只停留在背景介绍', 'Put the issue into the rules, not just the introduction'),
        finding: copy('项目关注创作者面对未经授权的 AI 训练时的抵抗。原稿把“吸收与同化”转成机器人 KIKI 持续将棋盘转换为目标颜色的机制。', 'The project explores resistance to unauthorized AI training. The portfolio translates absorption and homogenization into robot KIKI repeatedly converting a board toward a target color.'),
        response: copy('玩家选择并翻转色块，再通过触摸输入锁定颜色、干扰机器人路径。视觉议题因此转化为玩家必须作出的空间与时机选择。', 'Players select and flip tiles, then use touch input to lock colors and interrupt the robot’s route. The visual theme becomes a set of spatial and timing decisions.'),
        pages: [22],
      },
      {
        title: copy('重复的手部动作，是表达的一部分', 'Repetition is part of the interaction’s meaning'),
        finding: copy('原稿用 1 至 5 次触摸对应不同颜色，并将反复阻止机器人的操作负担当作抵抗并不轻松的隐喻。', 'The portfolio maps 1–5 touches to different colors and uses the repeated effort of blocking the robot as a metaphor for the difficulty of resistance.'),
        response: copy('鼠标负责选格，实体触摸模块负责输入次数，将选择与执行分开。它是一个具体的身体交互设计，而不仅是键鼠游戏加上外壳。', 'The mouse selects a tile while a physical touch module supplies the tap count, separating selection from execution and giving the mechanic a concrete physical interaction.'),
        pages: [22, 23],
      },
      {
        title: copy('把机制落实成能运行的交互链路', 'Build the mechanic into a working interaction chain'),
        finding: copy('开发页展示 TTP223 触摸模块、Arduino 开发板与扩展板、Unity 场景、代码、角色建模过程和试玩照片。', 'The development page shows a TTP223 touch module, Arduino board and expansion board, Unity scenes, code, character-modeling steps, and playtesting photographs.'),
        response: copy('页面把输入硬件、程序、棋盘反馈与游戏状态联系起来；成果页进一步展示了关卡、暂停、胜利与失败等界面。', 'The material connects input hardware, code, board feedback, and game states. The outcome page also shows level selection, pause, win, and loss interfaces.'),
        pages: [23, 24],
      },
    ],
    archivePages: [22, 24],
    demonstrated: copy('已记录实体触摸与数字棋盘的原型链路、Unity 开发、角色与界面资产，以及试玩过程。', 'Documented work includes the physical-touch/digital-board prototype, Unity development, character and interface assets, and playtesting.'),
    limits: copy('现有记录侧重原型运行与试玩。后续可围绕规则理解、触摸次数的操作负担，以及玩家如何理解主题展开评估；原作品集尚未列出这些维度的量化结果。', 'The current record focuses on prototype operation and playtesting. Further evaluation could examine rule comprehension, the effort of repeated touch input, and players’ interpretation of the theme; the portfolio does not yet report quantitative findings on these dimensions.'),
    resultPages: [23, 24],
  },
  tacchat: {
    period: '2025.07 — 2025.10',
    contribution: copy('清华大学未来实验室团队项目，共同第一作者。我的贡献包括系统工作流设计、实验设计、实验过程推进、数据分析与论文撰写。', 'Team research at Tsinghua University’s Future Laboratory; co-first author. My contributions included system-workflow design, experimental design and coordination, data analysis, and paper writing.'),
    stage: copy('团队研究系统与用户实验；个人贡献按原稿范围呈现。', 'Team research system and user experiments, with individual contribution scoped to the original record.'),
    contextPages: [25, 26],
    decisions: [
      {
        title: copy('把用户从信息接收者转变为创作者', 'Treat users as creators, not only recipients'),
        finding: copy('研究关注盲人及低视力用户的触觉内容创作需求。访谈与参与者反馈强调了主动表达、参与和交流，而不仅是识别既有图像。', 'The research investigates tactile-content creation for blind and low-vision users. Interviews and participant feedback emphasize expression, agency, and exchange, beyond recognizing existing images.'),
        response: copy('系统工作流分为探索与创作、转换与修改、分享与交流：通过 3D 打印笔与画布创作，在可刷新触觉显示设备上检查修改，再发送给接收者。', 'The workflow has three stages: explore and author, convert and modify, and share and communicate. Users create with a 3D-printing pen and canvas, review on a refreshable tactile display, and send work to a recipient.'),
        pages: [26],
      },
      {
        title: copy('用任务表现与体验评价共同观察系统', 'Combine task performance with experience measures'),
        finding: copy('原稿报告了路线导航与玩具组装两类实验，并用 UEQ-S 评价整体体验。这样的记录能够同时呈现任务表现与创作、分享时的主观感受。', 'The portfolio reports route-navigation and toy-assembly experiments alongside a UEQ-S experience measure, addressing both task performance and the subjective experience of creating and sharing.'),
        response: copy('我参与系统工作流与实验设计，并承担数据分析。评估结合任务表现和体验量表，分别观察使用者能否完成任务，以及他们如何评价交互体验。', 'I contributed to the system workflow and experimental design, and undertook data analysis. Evaluation combines task performance with an experience questionnaire to examine both task completion and perceived interaction quality.'),
        pages: [25, 26],
      },
    ],
    archivePages: [25],
    metrics: [
      { value: '93.3%', label: copy('路线完成率', 'Route completion'), context: copy('路线导航实验；原稿报告值', 'Route-navigation experiment; portfolio-reported') },
      { value: '25%', label: copy('导航任务用时缩短', 'Less navigation time'), context: copy('相对纯语音组；原稿报告值', 'Compared with the verbal-only group; portfolio-reported') },
      { value: '1.43', label: copy('UEQ-S 整体均值', 'Overall UEQ-S mean'), context: copy('原稿将整体体验评为 Good', 'Rated Good in the original portfolio') },
    ],
    demonstrated: copy('原稿另报告玩具组装决策时间减少约三分之一、正确率提高 20%；该页没有进一步说明这两个比较的完整基线。参与者作品与反馈也记录在同页。', 'The portfolio also reports roughly one-third less toy-assembly decision time and 20% higher correctness, without fully specifying those comparison baselines. Participant work and feedback appear on the same page.'),
    limits: copy('以上数值来自原作品集。该摘要未列出样本量、完整分组条件和统计检验，因此仅作为所述任务中的结果呈现，不外推为所有用户或场景的普遍效果。', 'The figures above are reported in the original portfolio. Its summary does not specify sample size, full group conditions, or statistical tests, so these findings are limited to the described tasks rather than generalized to all users or contexts.'),
    resultPages: [26],
    publication: copy('CHI 2026 论文已收录，论文链接见下方。原作品集将 TacChat 的 RTD 触觉图形设备展览记录为同一项目成果：设备于 2025 年 6 月 16–21 日在联合国日内瓦办事处展出。作品集标注的项目时间为 2025 年 7–10 月，晚于展览日期；原稿未解释这段时间关系。', 'The CHI 2026 paper was accepted; see the link below. The original portfolio records the TacChat RTD tactile-graphics exhibition as part of the same project: the device was shown at the United Nations Office at Geneva, June 16–21, 2025. The project period is listed as July–October 2025, after the exhibition; the portfolio does not explain the timeline.'),
  },
};

export function sourcePageUrl(page: number, record?: ProjectEvidence) {
  return `${record?.source?.directory ?? '/research'}/page-${String(page).padStart(2, '0')}.jpg`;
}
