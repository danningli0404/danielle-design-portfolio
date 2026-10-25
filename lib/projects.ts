import { summerProjects } from './summer-projects.ts';
export type Project = {
  slug: string; title: string; kicker: string; summary: string; year: string;
  role: string; disciplines: string[]; hero?: string; process?: string; accent: string; experimental?: boolean;
  challenge: string; approach: string; outcome: string; note?: string; heroSize?: [number, number];
};

const projectRecords: Project[] = [
  {
    slug: 'sense-together', title: 'Sense Together', kicker: 'Inclusive music-festival service system', year: '2025',
    role: 'Individual project', disciplines: ['Service design', 'Accessibility', 'UI/UX', '3D modeling'], hero: '/projects/sense.jpg', process: '/projects/sense-process.jpg', accent: '#00d7e5',
    summary: 'A speculative accessibility system combining AR captions, haptic rhythm feedback, and redesigned festival services for Deaf, hard-of-hearing, blind, and low-vision audiences.',
    challenge: 'Large outdoor music festivals create overlapping barriers: dense crowds, limited navigation support, inaccessible performance information, and few ways to experience sound beyond hearing.',
    approach: 'I combined precedent research, stakeholder mapping, interviews, personas, a service blueprint, app flows, and wearable form studies. User feedback identified issues in navigation, map placement, and disability-related language; the high-fidelity screens show assistance-mode selection.',
    outcome: 'The final proposal connects an accessibility service center, priority viewing zones, AR smart glasses, a haptic bracelet, and a companion app into one end-to-end experience.',
    note: 'Concept proposal. The service and wearables are represented through interface prototypes and appearance models; technical implementation remains future work.'
  },
  {
    slug: 'vitalride', title: 'VitalRide', kicker: 'Wearable heat-safety system for delivery riders', year: '2025',
    role: 'Individual project', disciplines: ['Wearable design', 'Field research', 'UI/UX', 'Physical computing'], hero: '/projects/vitalride.jpg', process: '/projects/vitalride-process.jpg', accent: '#c8ef49',
    summary: 'A wearable vest, ventilated helmet, and mobile app concept designed to help delivery riders recognize heat stress before it becomes an emergency.',
    challenge: 'Delivery riders work through the hottest part of the day under intense time pressure. Rest areas are sparse, subjective self-assessment is unreliable, and stopping work can mean losing income.',
    approach: 'Field observation, rider interviews, a survey, journey mapping, garment studies, physiological-sensing research, interface prototyping, and early coding tests shaped the system.',
    outcome: 'The concept combines temperature, heart-rate, and posture sensing with cooling elements and an app that translates readings into timely, understandable actions.',
    note: 'Design concept and appearance prototype. It is not presented as a validated medical device.'
  },
  {
    slug: 'purelink', title: 'PureLink', kicker: 'Domestic water quality made visible', year: '2025',
    role: 'Individual project', disciplines: ['Product design', 'Service design', 'Arduino', 'Participatory research'], hero: '/projects/purelink.jpg', process: '/projects/purelink-process.jpg', accent: '#76b8ff',
    summary: 'A tap-mounted purifier concept and shared information system aimed at making water-quality information and support more accessible, while clarifying responsibility across residents, property management, and public services.',
    challenge: 'In aging residential estates, discoloration and unclear accountability create both health concerns and distrust. Residents often lack affordable testing and understandable information.',
    approach: 'I used cultural probes, interviews, co-design sessions, stakeholder mapping, filtration-material experiments, Arduino sensing, app prototyping, and service blueprinting.',
    outcome: 'The prototype work explores filtration media, UV-lamp control, TDS and turbidity sensing, and a local display, alongside app interfaces and a coordinated service proposal for residents and property managers.',
  },
  {
    slug: 'color-showdown', title: 'Color Showdown', kicker: 'A physical–digital game about AI and authorship', year: '2025',
    role: 'Individual project', disciplines: ['Game design', 'Unity', 'Arduino', '3D character design'], hero: '/projects/color-showdown.jpg', process: '/projects/color-process.jpg', accent: '#74c7a8',
    summary: 'A playable game that turns the struggle over unauthorized AI training into a tactile contest between a player and an image-absorbing robot.',
    challenge: 'Copyright systems move slowly while generative models can absorb and reproduce visual styles at enormous scale. I wanted to make that imbalance felt through play rather than explained through a poster.',
    approach: 'Historical research led to a turn-based color mechanic. I built the game in Unity, modeled the robot character, connected capacitive touch sensors through Arduino, and tested the physical interaction.',
    outcome: 'Players alter and lock colored tiles by tapping a sensor, disrupting the robot’s path. The friction and repetition become part of the metaphor: resisting extraction is difficult work.',
  },
  {
    slug: 'tacchat', title: 'TacChat', kicker: 'Tactile authoring and sharing with BLV creators', year: '2025',
    role: 'Team project · Second author', disciplines: ['Accessibility research', 'Experiment design', 'Data analysis', 'System workflow'], hero: '/projects/tacchat.jpg', process: '/projects/tacchat-process.jpg', accent: '#f0c8a7',
    summary: 'We built a service-design system that supports blind and low-vision people in creating, digitizing, revising, and sharing tactile graphics—making images that are difficult to describe in words easier to communicate.',
    challenge: 'Refreshable tactile graphics often focus on access to information, but far less attention is given to BLV users as creators and communicators of tactile content.',
    approach: 'My contributions included system-workflow design, experimental design and coordination, data analysis, and paper writing. The team evaluated route-navigation and toy-recognition tasks and used UEQ-S to record participant experience.',
    outcome: 'TacChat connects tactile authoring, conversion, revision, and sharing in a complete workflow, evaluated through route-navigation and toy-recognition tasks.',
  },
];

// Keep case-study navigation aligned with the desk: TacChat leads, then
// the other selected projects, followed by the summer experiments.
export const projects: Project[] = [
  ...projectRecords.filter(project => project.slug === 'tacchat'),
  ...projectRecords.filter(project => !project.experimental && project.slug !== 'tacchat'),
  ...summerProjects,
];

export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
