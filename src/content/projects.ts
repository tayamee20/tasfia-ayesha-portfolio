import type { Project } from '../lib/types';

/**
 * THE PROJECT LIST.
 * - Add a project: copy one object, give it a unique `slug`, fill in what you know.
 * - Remove a project: delete its object. Reorder: move it.
 * - Images: put files in /public/images/projects/<slug>/ and set `src: '/images/projects/<slug>/file.jpg'`.
 *   Leave `src` out and a labelled placeholder appears instead.
 * - Case study text left `undefined` shows as a "Placeholder" block telling you what to write.
 *   Nothing here is invented: only facts you provided, or that are on the live sites, are filled in.
 * - Figma links only work for visitors if the file is shared as "Anyone with the link can view".
 */
export const projects: Project[] = [
  {
    slug: 'equipa',
    name: 'Equipa',
    summary: 'An invite-only training app connecting trainees with their trainers and gyms, with separate experiences for trainees, trainers and admins.',
    role: 'UI/UX designer',
    year: '2026',
    status: 'Draft for review',
    categories: ['Product design', 'Mobile and web', 'Fitness', 'Design system'],
    accent: 'lime',
    cover: {
      src: '/images/projects/equipa/cover.jpg',
      alt: 'Equipa Product design v1 overview in Figma, listing foundations, components, access model, trainee, trainer and admin screens and journey maps',
      width: 1600,
      height: 900,
    },
    facts: [
      { label: 'Through', value: 'TUTORS Finland Oy' },
      { label: 'Platform', value: 'Mobile app and web' },
    ],
    links: [
      { label: 'View in Figma', href: 'https://www.figma.com/design/0UH3fXo0qbHM48S5qdMrIF/Equipa?node-id=0-1&p=f&t=QxW79nQtoyL6eOv6-0' },
      { label: 'Equipa app (invite-only)', href: 'https://app.equipa.app/org/tasfia/programs' },
    ],
    caseStudy: {
      overview:
        'Equipa is one app with two sides: trainees on one, trainers and admins on the other, with access by invitation only. Trainees can train with a personal trainer or through a gym. The first full version of the product design covers foundations, a component library, the access model and the screens for every role.',
      responsibilities: [
        'Foundations: colour, type and spacing',
        'Component library (30 components plus icons)',
        'Access model: roles, permissions and flow diagrams',
        'Trainee experience, personal and gym (27 mobile screens)',
        'Trainer experience (web and mobile)',
        'Admin experience (web and mobile)',
        'Journey maps for trainees and trainers',
      ],
      wireframes: [{ alt: 'Equipa access model and journey maps', placeholder: 'Access model diagram or a journey map' }],
      finalDesigns: [
        { alt: 'Equipa trainee mobile screens', placeholder: 'Trainee mobile screens' },
        { alt: 'Equipa trainer dashboard', placeholder: 'Trainer web dashboard' },
      ],
    },
  },
  {
    slug: 'xc-party',
    name: 'XC Party',
    summary: 'A website redesign for a Finnish endurance coaching business, making its coaching programs and client stories easier to find.',
    role: 'UI/UX designer and client communication',
    year: '2026',
    categories: ['Website redesign', 'Coaching', 'Client work'],
    accent: 'coral',
    cover: {
      src: '/images/projects/xc-party/home.jpg',
      alt: 'The redesigned XC Party homepage with a cross-country skier and a guided "what are you most interested in" chooser',
      width: 1440,
      height: 1000,
    },
    facts: [
      { label: 'Client', value: 'XC Party, Finland' },
      { label: 'Through', value: 'TUTORS Finland Oy' },
      { label: 'Team', value: 'Designed with Md Ferdous Mondol, developed by Filip B., built with Elementor' },
    ],
    links: [
      { label: 'Visit xcparty.fi', href: 'https://xcparty.fi/' },
      { label: 'Read the LinkedIn post', href: 'https://lnkd.in/p/gmbSDhT4' },
    ],
    caseStudy: {
      overview:
        'XC Party is a Finnish coaching business for skiing, trail running, mountain biking and gravel cycling, serving everyone from beginners to competitive athletes. I redesigned its website with TUTORS Finland so that coaching options and client success stories are easier to find, and I was the client’s main design contact, helping them put their needs for the redesign and later fixes into words.',
      responsibilities: [
        'UI/UX design',
        'Website structure and information architecture',
        'Coaching program and online shop presentation',
        'Coach profiles',
        'Client success stories',
        'Client communication and requirements',
      ],
      wireframes: [
        { alt: 'XC Party site map and structure', placeholder: 'Site map or new page structure' },
        { alt: 'XC Party homepage wireframe', placeholder: 'Homepage wireframe' },
      ],
      finalDesigns: [
        {
          src: '/images/projects/xc-party/stories.jpg',
          alt: 'Client stories carousel with photos, star ratings and short quotes from athletes',
          caption: 'Client stories, presented as a carousel of real athletes and their results.',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/xc-party/shop.jpg',
          alt: 'Online shop section showing coaching programs and ski camps with prices and add-to-cart buttons',
          caption: 'Coaching programs and camps, bought directly from the homepage.',
          width: 1440,
          height: 1050,
        },
      ],
    },
  },
  {
    slug: 'neduai',
    name: 'NeduAI',
    summary: 'An AI-powered career and talent discovery platform, built around SmartProfile, that helps people plan their learning and find work.',
    role: 'Product designer, design team',
    year: '2024–2025',
    categories: ['Product design', 'AI', 'EdTech', 'Dashboards'],
    accent: 'lavender',
    cover: {
      src: '/images/projects/neduai/home.jpg',
      alt: 'NeduAI website hero: "AI-Powered Career & Talent Discovery — Powered by SmartProfile", next to dashboard cards for job matches, onboarding status and the Smart Assistant',
      caption: 'The NeduAI website today.',
      width: 1440,
      height: 1000,
    },
    facts: [
      { label: 'Through', value: 'TUTORS Finland Oy' },
      { label: 'Duration', value: 'November 2024 – June 2025' },
    ],
    links: [{ label: 'Visit nedu.ai', href: 'https://nedu.ai/en' }],
    caseStudy: {
      overview:
        'NeduAI is an AI-powered platform for education and careers. From November 2024 to June 2025 I worked with its design team across several parts of the product, from first-run onboarding to the tools people use to plan and find their next role.',
      responsibilities: [
        'Smart Profile',
        'Career Advisor',
        'Dashboards',
        'Onboarding experiences',
        'Job portal experiences',
        'Ongoing interface improvements across the product',
      ],
      wireframes: [
        { alt: 'Smart Profile wireframes', placeholder: 'Smart Profile wireframes or early sketches' },
        { alt: 'Onboarding flow iterations', placeholder: 'Onboarding flow, first and later iterations' },
      ],
      finalDesigns: [
        { alt: 'Career Advisor final UI', placeholder: 'Career Advisor final screen' },
        { alt: 'Dashboard final UI', placeholder: 'Dashboard final screen' },
        { alt: 'Job portal final UI', placeholder: 'Job portal final screen' },
      ],
    },
  },
  {
    slug: 'animate-earth',
    name: 'AnimateEarth',
    summary: 'The website for an Erasmus+ climate education project where students aged 12–16 tell climate stories through animation.',
    role: 'UI/UX designer',
    year: '2026',
    status: 'Ongoing',
    categories: ['Education', 'Climate', 'Web design', 'EU project'],
    accent: 'volt',
    cover: {
      src: '/images/projects/animate-earth/home.jpg',
      alt: 'AnimateEarth homepage: "Animate Our Planet: Crafting Stories, Shaping Futures" on a purple gradient with a view of Earth from orbit',
      width: 1440,
      height: 1000,
    },
    facts: [
      { label: 'Through', value: 'TUTORS Finland Oy, a project partner' },
      { label: 'Partners', value: 'Schools and organisations in Poland, Türkiye, Spain and Finland' },
      { label: 'Funding', value: 'Co-funded by the European Union (Erasmus+)' },
    ],
    links: [
      { label: 'Visit animearth.eu', href: 'https://animearth.eu/' },
      { label: 'View in Figma', href: 'https://www.figma.com/design/uUFj01q26bAoYTXDUiRX1k/AnimEarth-Website?node-id=590-2421&p=f&t=Jv9O2dwmmiFE5keG-0' },
    ],
    caseStudy: {
      overview:
        'Animate Our Planet: Crafting Stories, Shaping Futures is an Erasmus+ project that helps students aged 12–16 tell climate stories through digital storytelling and animation. The website is where the project lives: student animations and presentations, workshops and activities, learning resources and the partner schools across Europe. The project is ongoing and the site keeps growing with it.',
      responsibilities: [
        'Website UI/UX design',
        'Gallery for student animations and presentations',
        'Workshops, activities and learning pages',
        'Partner and team pages',
      ],
      wireframes: [{ alt: 'AnimateEarth wireframes', placeholder: 'Wireframes or early sketches' }],
      finalDesigns: [
        {
          src: '/images/projects/animate-earth/animations.jpg',
          alt: 'Featured Animations section with three student-made climate videos, followed by slide presentations',
          caption: 'Student work is the centre of the site: featured animations and presentations.',
          width: 1440,
          height: 860,
        },
      ],
    },
  },
  {
    slug: 'rotary-mijas',
    name: 'Rotary Mijas International',
    summary: 'A website redesign for an international Rotary club on Spain’s Costa del Sol, built around its projects, events and how to join.',
    role: 'Project lead and UI/UX designer',
    year: '2026',
    status: 'In design phase',
    categories: ['Website redesign', 'Nonprofit', 'Community'],
    accent: 'coral',
    cover: {
      src: '/images/projects/rotary-mijas/home.jpg',
      alt: 'Redesigned Rotary Club Mijas International homepage: "People of Action" over a photo of Mijas, followed by the four impact areas',
      width: 904,
      height: 1080,
    },
    facts: [
      { label: 'Client', value: 'Rotary Club Mijas International, Spain' },
      { label: 'Through', value: 'TUTORS Finland Oy' },
    ],
    links: [
      { label: 'View in Figma', href: 'https://www.figma.com/design/63cNjj2rAbWx4sAXYHAOHo/Rotary-Mijas?node-id=26-4&p=f&t=QxW79nQtoyL6eOv6-0' },
      { label: 'Current website', href: 'https://www.rotarymijasinternational.org/' },
    ],
    caseStudy: {
      overview:
        'Rotary Club Mijas International is a Rotary club in Mijas, Spain, working locally and on international projects. I lead the project and am redesigning its website: a new sitemap and a homepage that leads with the club’s impact areas, upcoming events, members’ stories and a clear way to join. The redesign is still in the design phase.',
      responsibilities: [
        'Project leadership',
        'Sitemap and information architecture',
        'Homepage design, desktop and mobile',
        'Impact areas and project pages',
        'Events, FAQ and contact',
      ],
      wireframes: [{ alt: 'Rotary Mijas sitemap', placeholder: 'Website sitemap v2' }],
      finalDesigns: [],
    },
  },
  {
    slug: 'gamesim-uav-simulator',
    name: 'GameSim UAV Simulator',
    summary: 'Interfaces for a drone training simulator: missions, live flight data on interactive maps and debriefs.',
    role: 'UI/UX designer',
    year: '2026',
    status: 'In design phase',
    categories: ['Complex interfaces', 'Simulation', 'Mapping'],
    accent: 'ink',
    cover: {
      src: '/images/projects/gamesim/hangar.jpg',
      alt: 'GameSim main menu: a drone hovering in a warehouse hangar with buttons for Continue mission, New mission, Foundation, My progress and Documentation',
      width: 1009,
      height: 666,
    },
    facts: [
      {
        label: 'Technology context',
        value: 'Angular, Leaflet, NGXS, PrimeNG, Java, Spring Boot, MongoDB, RabbitMQ, Unreal Engine',
      },
    ],
    links: [
      { label: 'View in Figma', href: 'https://www.figma.com/design/sTa9A7WWSS57XkkBVtmnRP/GameSim-Website-Ideation?node-id=1476-2307&t=xZqqcOMhbpX6IRJk-0' },
    ],
    caseStudy: {
      overview:
        'GameSim is a UAV (drone) simulation platform for training pilots through missions, from a foundation course to tasks such as inspecting wind turbine blades. The product is complex: interactive mapping sits alongside a lot of live flight data and controls. My focus is interface design, making that complexity understandable and usable. The product is built on Angular, Leaflet, NGXS and PrimeNG on the front end, with Java, Spring Boot, MongoDB, RabbitMQ and Unreal Engine behind it, which shapes what the interface needs to handle. The project is still in the design phase.',
      responsibilities: [
        'Interface design for complex workflows',
        'In-flight HUD and interactive map interfaces',
        'Mission flow: briefing, flight, debrief and progress',
        'Main menu and navigation',
      ],
      wireframes: [],
      finalDesigns: [
        {
          src: '/images/projects/gamesim/map.jpg',
          alt: 'In-flight map view showing the drone’s path over farmland, battery, GPS and signal status, a mission checklist and flight data',
          caption: 'In flight: the map view keeps the mission checklist, aircraft status and flight data around the edges, leaving the centre for the drone’s path.',
          width: 1010,
          height: 666,
        },
        {
          src: '/images/projects/gamesim/debrief.jpg',
          alt: 'Mission complete debrief with score, flight time, distance, a video preview and an altitude chart',
          caption: 'Debrief: score, flight stats, recorded video and a detailed altitude analysis after each mission.',
          width: 1010,
          height: 928,
        },
      ],
    },
  },
];

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
