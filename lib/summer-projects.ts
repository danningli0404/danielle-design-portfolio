import type { Project } from './projects';

// Team outcomes come from the supplied course PDFs; personal roles were
// confirmed separately by Danielle. Prototype performance is not inferred.
export const summerProjects: Project[] = [
  {
    slug: 'ice-chamber', title: 'Ice Chamber', kicker: 'iceICL · Summer team project', year: '2026', experimental: true,
    role: 'Team project · Interview synthesis, early CAD iterations, cardboard model',
    disciplines: ['Interview synthesis', 'CAD iteration', 'Cardboard prototyping', 'Digital fabrication'], accent: '#b8ddee',
    hero: '/summer/ice-chamber/prototype.jpg', heroSize: [848, 1080],
    summary: 'A cup lid with an internal ice chamber, developed by the team to cool a drink without mixing meltwater into it. My work focused on interview synthesis, early CAD iterations, and an ice-mold-like cardboard model.',
    challenge: 'The interviewed user drinks slowly: ice melts before she finishes, leaving a diluted drink she often discards. She does not want to carry a reusable container and would prefer a lukewarm drink to a watery one. The team reframed the brief around a café-provided, single-use lid that preserves taste.',
    approach: 'The team explored five directions, then selected an internal ice chamber using user feedback and production feasibility as criteria. Different chamber sizes tested the trade-off between ice capacity and drink volume. Repeated lid and hinge iterations brought attention to tolerances, closure, and repeated bending.',
    outcome: 'The team reached an integrated clear-PLA lid prototype with an opening hinge. The work demonstrates physical iteration, not a production-ready or food-contact-certified product.',
    note: 'Thermoforming and trials with cafés are next steps, not completed outcomes.',
  },
  {
    slug: 'cocokeep', title: 'Coco Carry', kicker: 'Beach storage · Summer team project', year: '2026', experimental: true,
    role: 'Team project · Secondary research, sketching, cardboard fabrication',
    disciplines: ['Secondary research', 'Sketching', 'Form exploration', 'Cardboard fabrication'], accent: '#b9cfb2',
    hero: '/summer/coco-carry/page-14.jpg', heroSize: [1920, 1080],
    summary: 'A coconut-inspired beach storage proposal combining a cooler, a valuables compartment, and an umbrella support. I contributed early secondary research, sketches, and cardboard fabrication; the wider design and prototype collection are team work.',
    challenge: 'A family beach day involves carrying, setting up, storing belongings, eating, and packing away. The team asked how one object could bring these activities together, reducing the number of separate things to manage while keeping belongings close to the family’s spot.',
    approach: 'Secondary research compared beach safes, swim buoys, and lockers. Observations of moka pots, baskets, and stacked tins informed closure and stacking ideas. Sketches explored the overall form and internal compartments, followed by cardboard and 3D-printed team models at different scales.',
    outcome: 'The team produced a storage concept, a use sequence, sketches, 3D-printed models, and a larger low-fidelity physical model. My fabrication contribution was the cardboard model, not the team’s 3D-printed models.',
    note: 'Cooling, waterproofing, theft resistance, and umbrella stability remain design intentions requiring testing, rather than verified product capabilities.',
  },
];

export const summerTranslations: Record<string, Partial<Project>> = {
  'ice-chamber': {
    kicker: 'iceICL · 暑期团队项目', role: '团队项目 · 访谈整理、早期 CAD 迭代、纸板模型',
    disciplines: ['访谈整理', 'CAD 迭代', '纸板原型', '数字制造'],
    summary: '团队通过带内置冰仓的杯盖，探索在不混入融水的情况下为饮品降温。我的工作集中在访谈整理、早期 CAD 迭代，以及一个冰模具式纸板模型的制作。',
    challenge: '受访用户喝饮品较慢，往往还没喝完，冰就融化了，剩下的饮品因味道变淡而被丢弃。她不愿随身携带可重复使用的容器，宁可饮品不那么凉，也不喜欢被水稀释。团队因此将问题聚焦为：如何为咖啡店提供保留饮品味道的一次性杯盖方案？',
    approach: '团队先探索五个方向，再根据用户反馈与生产可行性选择内置冰仓杯盖。不同尺寸的冰仓用于比较储冰量与饮品容量的取舍；反复制作杯盖与铰链，则把设计问题推进到公差、闭合和重复弯折等制造细节。',
    outcome: '团队完成了带可开启铰链的一体式透明 PLA 杯盖原型。这一阶段展示的是实体迭代过程，不是已经量产或通过食品接触认证的产品。',
    note: '热成型制造与咖啡店实地试用是后续计划，尚不作为已完成成果。',
  },
  cocokeep: {
    kicker: '海滩储物 · 暑期团队项目', role: '团队项目 · 二手调研、草图绘制、纸板制作',
    disciplines: ['二手调研', '草图绘制', '形态探索', '纸板制作'],
    summary: '一个以椰子为形态灵感的海滩储物方案，将保冷空间、贵重物品隔层与遮阳伞支撑整合起来。我负责前期二手调研、草图绘制和纸板制作；完整方案与多种原型由团队共同推进。',
    challenge: '家庭海滩活动包含搬运、搭建、保管物品、用餐和收拾离场。团队关注的是：能否用一个物件衔接这些日常动作，减少需要分别管理的用品，并让物品留在家庭活动的位置附近？',
    approach: '二手调研比较了沙滩保险盒、游泳浮袋与储物柜。对摩卡壶、篮子和叠放金属盒的观察带来了开合与堆叠结构的参考。团队通过草图探索形态和内部隔层，再用纸板及不同比例的 3D 打印模型展开实体研究。',
    outcome: '团队形成了储物方案、使用流程、草图、3D 打印模型与较大尺寸的低保真实体模型。我的制作贡献是纸板模型，团队的 3D 打印模型不作为我的个人制作成果。',
    note: '保冷、防水、防盗与遮阳伞稳定性仍是需要测试的设计目标，不作为已验证的产品性能。',
  },
};
