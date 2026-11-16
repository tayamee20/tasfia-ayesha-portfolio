import type { Job, MoreProject } from '../lib/types';

/**
 * Everything about Tasfia that is not a project lives here.
 * Edit text and links in this file — components read from it.
 */
export const profile = {
  name: 'Tasfia Ayesha',
  firstName: 'Tasfia',
  lastName: 'Ayesha',
  title: 'UI/UX Designer & Project Manager',
  location: 'Dhaka, Bangladesh',
  available: true,
  headline: 'I design digital products that make complicated things feel clear.',
  intro:
    'I’m a UI/UX designer and project manager with a Computer Science degree. I design web and mobile products, lead projects and look after client communication for teams in Finland, Türkiye and Bangladesh — from AI career tools to drone simulators.',
};

export const links = {
  email: 'tayesha2001@gmail.com',
  behance: 'https://www.behance.net/tayesha',
  linkedin: 'https://www.linkedin.com/in/tasfia-ayesha-129708210/?trk=opento_sprofile_details',
  dribbble: 'https://dribbble.com/tayami',
  github: 'https://github.com/tayamee20',
  // Add your CV to /public and set this to its path, e.g. '/Tasfia-Ayesha-CV.pdf'. The download buttons appear once it's set.
  cv: '',
};

export const about = {
  statement: 'I studied how software works so I could design how it feels.',
  paragraphs: [
    'I came to design through engineering. At BRAC University I studied Computer Science and Engineering, wrote a thesis on securing medical images with a hybrid DNA–AES cryptosystem, and built web apps with React and Spring Boot along the way. Somewhere between debugging and drawing wireframes, I realised the part I cared about most was the person on the other side of the screen.',
    'Since then I’ve designed for a telecom super-app, an AI education and career platform, a Finnish coaching business, a training app for trainers and gyms, an EU climate-education project, a Rotary club and a drone simulator. The products are very different, but the job is the same: understand the system, find what people actually need from it, and shape an interface that gets out of their way.',
    'Knowing how things are built changes how I design. I can talk through constraints with developers, spot when a flow will fight the data model, and hand over designs that survive implementation. I care about clear hierarchy, honest copy and details that make a product feel considered.',
  ],
  education: {
    degree: 'BSc in Computer Science and Engineering',
    school: 'BRAC University, Dhaka',
    years: '2020–2024',
    cgpa: '3.81 / 4.00',
    honour: 'Highest Distinction, 16th Convocation',
    thesis: 'Advancing Medical Image Security: A Hybrid DNA–AES-Based Cryptosystem',
  },
};

/** Newest first. Unknown dates use a visible placeholder in [brackets]. */
export const experience: Job[] = [
  {
    company: 'TUTORS Finland Oy',
    role: 'UI/UX Designer, Project Manager and Client Communication',
    place: 'Remote',
    start: 'Oct 2024',
    end: 'Present',
    current: true,
    points: [
      'Collaborate with international teams on digital products and website design projects.',
      'Lead the end-to-end design process for web and mobile, from user research and wireframes to prototypes and final designs in Figma.',
      'Manage projects and lead client communication, from understanding what clients need to agreeing fixes and delivery.',
      'Project lead for the Rotary Mijas International website redesign.',
      'Designed Equipa and built its front end with the development team.',
      'Projects include NeduAI, Equipa, XC Party, AnimateEarth, Rotary Mijas International and GameSim.',
    ],
  },
  {
    company: 'RUGSOFUS',
    role: 'UI/UX Designer',
    place: 'Türkiye, remote',
    start: 'Aug 2024',
    end: 'Sep 2024',
    points: ['Designed and prototyped user-centred interfaces for web and mobile applications in Figma.'],
  },
  {
    company: 'Banglalink Digital Communications',
    role: 'Digital Services Intern (Digitalyst)',
    place: 'Dhaka',
    start: 'May 2024',
    end: 'Aug 2024',
    points: [
      'Worked on the MyBL app, helping carry designs smoothly from wireframes to high-fidelity prototypes.',
      'Assisted with configuration and testing to keep the app experience high quality.',
    ],
  },
  {
    company: 'BRAC University',
    role: 'Student Tutor, CSE and MNS',
    place: 'Dhaka',
    start: 'Jan 2023',
    end: 'May 2024',
    points: ['Helped students understand lecture concepts and work through coding problems step by step.'],
  },
];

export const skills: { group: string; note: string; items: string[] }[] = [
  {
    group: 'Design practice',
    note: 'How I work',
    items: [
      'UI/UX design',
      'User research',
      'Usability testing',
      'Wireframing',
      'Prototyping',
      'Interaction design',
      'Design systems',
      'Responsive design',
    ],
  },
  {
    group: 'Project leadership',
    note: 'How I run projects',
    items: ['Project management', 'Client communication', 'Project leadership'],
  },
  {
    group: 'Design tools',
    note: 'Where I work',
    items: ['Figma', 'FigJam', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    group: 'Engineering',
    note: 'What I can build and talk through',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Spring Boot', 'Python', 'Java', 'C', 'MySQL', 'MVC, MVP, MVVM'],
  },
  {
    group: 'Languages',
    note: 'Professional proficiency',
    items: ['English', 'Bangla'],
  },
];

/** Smaller projects shown as a list under Selected Work. Add or remove freely. */
export const moreProjects: MoreProject[] = [
  {
    name: 'Inventory-Pro',
    kind: 'Web application',
    description: 'A web app for keeping track of crops held in inventories.',
    year: '2023',
    href: '', // TODO: add GitHub link
  },
  {
    name: 'Weather-Today',
    kind: 'Web application',
    description: 'A JavaScript app for checking real-time weather information.',
    year: '2024',
    href: '', // TODO: add GitHub link
  },
  {
    name: 'Computer Graphics',
    kind: 'Experiment',
    description: 'An OpenGL scene that shows how one setting changes across 24 hours.',
    year: '2022',
    href: '', // TODO: add GitHub link
  },
  {
    name: 'Car Price Prediction',
    kind: 'Machine learning',
    description: 'A model that predicts car prices from trained data.',
    year: '2022',
  },
];
