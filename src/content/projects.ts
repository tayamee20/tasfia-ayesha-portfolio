import type { Project } from '../lib/types';

/**
 * THE PROJECT LIST.
 * - Add a project: copy one object, give it a unique `slug`, fill in what you know.
 * - Remove a project: delete its object. Reorder: move it.
 * - Images: put files in /public/images/projects/<slug>/ and set `src: '/images/projects/<slug>/file.jpg'`.
 *   Leave `src` out and a labelled placeholder appears instead.
 * - Case study text left `undefined` shows as a "Placeholder" block telling you what to write.
 *   Problem, approach, challenges and learnings are drafts written from the briefs and live sites. Review them.
 * - Figma links only work for visitors if the file is shared as "Anyone with the link can view".
 */
export const projects: Project[] = [
  {
    slug: 'equipa',
    name: 'Equipa',
    summary: 'An invite-only training app connecting trainees with their trainers and gyms, with separate experiences for trainees, trainers and admins.',
    role: 'UI/UX designer and front-end developer',
    year: '2026',
    status: 'In testing',
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
      { label: 'Team', value: 'Front end built with the TUTORS development team' },
    ],
    links: [
      { label: 'View in Figma', href: 'https://www.figma.com/design/0UH3fXo0qbHM48S5qdMrIF/Equipa?node-id=0-1&p=f&t=QxW79nQtoyL6eOv6-0' },
      { label: 'Equipa app (invite-only)', href: 'https://app.equipa.app/org/tasfia/programs' },
    ],
    caseStudy: {
      overview:
        'Equipa is one app with two sides: trainees on one, trainers and admins on the other, with access by invitation only. Trainees can train with a personal trainer or through a gym. I designed the first full version of the product, from foundations and a component library to the access model and the screens for every role, and then built the front end with my team. The app is now in testing.',
      responsibilities: [
        'Foundations: colour, type and spacing',
        'Component library (30 components plus icons)',
        'Access model: roles, permissions and flow diagrams',
        'Trainee experience, personal and gym (27 mobile screens)',
        'Trainer experience (web and mobile)',
        'Admin experience (web and mobile)',
        'Journey maps for trainees and trainers',
        'Front-end development with the team',
        'Testing and fixes',
      ],
      problem:
        "Training with a coach involves three kinds of people who need very different things: trainees following a program, trainers building and tracking programs, and admins running a gym or a coaching business. Trainees can also train in two ways, with a personal trainer or through a gym. Equipa needed one product that serves all of them, keeps access invite-only, and still feels simple from each person’s side.",
      objectives: [
        "Give each role an experience built around what it actually does, without splitting the product into separate apps.",
        "Make the invite-only access model clear: who can see what, and how people join.",
        "Build one design system that works across web and mobile.",
        "Hand over designs that could be built as drawn, then build them.",
      ],
      approach:
        "I started with the access model rather than the screens: roles, permissions and how people get invited, drawn as flow diagrams, because who sees what shapes every screen after it. With that agreed, I set up the foundations (colour, type and spacing) and a component library of 30 components plus icons.\n\nThen I designed each side of the product: 27 mobile screens for trainees, covering both personal and gym training, and web and mobile experiences for trainers and admins. Journey maps for trainees and trainers helped me check the flows end to end before anything was built.\n\nAfter the design, I built the front end with the TUTORS development team, so the designs and the code stayed close. The app is now in testing, and fixes go back into both the designs and the build.",
      wireframes: [{ alt: 'Equipa access model and journey maps', placeholder: 'Access model diagram or a journey map' }],
      finalDesigns: [
        { alt: 'Equipa trainee mobile screens', placeholder: 'Trainee mobile screens' },
        { alt: 'Equipa trainer dashboard', placeholder: 'Trainer web dashboard' },
      ],
      challenges:
        "Three roles, two platforms and two ways to train add up to a lot of combinations. The hard part was keeping each role focused on what it needs while the whole thing still felt like one product, and keeping the access model simple enough to explain in one diagram.",
      learnings:
        "Designing the access model first saved a lot of rework later. Building the front end myself also showed me which design decisions were easy to implement and which ones cost the team time, and I now design with that in mind.",
      conclusion:
        "Equipa went from an access model and a design system to a working app with separate experiences for trainees, trainers and admins. It is currently in testing, and I’ll update this case study as it launches.",
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
      problem:
        "XC Party coaches four sports, from beginners to competitive athletes, and sells coaching programs and camps. Its website needed to help each visitor find the right coaching quickly, and to show its strongest proof: the results of the athletes it coaches.",
      objectives: [
        "Help visitors find the right coaching for their sport and level.",
        "Put client success stories where people would see them.",
        "Let people buy programs and camps directly from the site.",
        "Keep the site easy for the client to update in Elementor.",
      ],
      approach:
        "I redesigned the site with Md Ferdous Mondol, and Filip B. built it in Elementor. We restructured the site around how people choose a coach. The homepage starts with a simple question, what are you most interested in, which leads each visitor to their sport. Client stories became a carousel of real athletes with their results, and the coaching programs and camps can be bought straight from the homepage.\n\nI was also the client’s main contact on the design side. I helped them put what they wanted from the redesign into words, turned their feedback into clear changes for the team, and handled the fixes after launch.",
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
      challenges:
        "A lot of different content (four sports, programs, camps, coaches and stories) had to share one homepage without crowding it. Client feedback also tended to arrive as general impressions, so a big part of my job was turning it into specific changes the team could act on.",
      learnings:
        "Good client communication is part of the design work. Asking the right questions early meant fewer rounds of changes later. Leading with a choice (\"what are you most interested in\") made a broad offer feel personal.",
      conclusion:
        "The redesigned site is live at xcparty.fi, with clearer routes to each sport, client stories on the homepage and programs that can be bought directly.",
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
      problem:
        "Planning a career means bringing together your skills, what to learn next and which jobs fit, which usually live in different places. NeduAI brings these into one AI-powered platform built around SmartProfile. Each part of the product had to be easy to use on its own and still feel like part of the same experience.",
      objectives: [
        "Make onboarding quick and clear, so people reach value fast.",
        "Make SmartProfile and AI suggestions easy to understand and act on.",
        "Keep dashboards focused on what to do next.",
        "Keep the interface consistent as new features were added.",
      ],
      approach:
        "Over eight months I worked with the NeduAI design team across several parts of the product: Smart Profile, the Career Advisor, dashboards, onboarding and the job portal. Most of the work was iterative. We designed a flow, reviewed it with the team, refined it and moved on, while also improving existing screens across the product.",
      wireframes: [
        { alt: 'Smart Profile wireframes', placeholder: 'Smart Profile wireframes or early sketches' },
        { alt: 'Onboarding flow iterations', placeholder: 'Onboarding flow, first and later iterations' },
      ],
      finalDesigns: [
        { alt: 'Career Advisor final UI', placeholder: 'Career Advisor final screen' },
        { alt: 'Dashboard final UI', placeholder: 'Dashboard final screen' },
        { alt: 'Job portal final UI', placeholder: 'Job portal final screen' },
      ],
      challenges:
        "The product covers a lot of ground, from learning to job search, and new features kept arriving. Keeping each new part consistent with the rest, while still giving it space to do its job, was the ongoing challenge.",
      learnings:
        "Working inside a larger design team taught me to design for the whole system, not just the screen in front of me, and to make my decisions easy for others to pick up and continue.",
      conclusion:
        "I worked on NeduAI from November 2024 to June 2025. The platform is live at nedu.ai.",
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
      problem:
        "The project brings together students aged 12–16 and partner schools and organisations in Poland, Türkiye, Spain and Finland. It needed one place where students’ animations and presentations, workshops and learning resources could be found and shared, and that young students, teachers and partners could all use easily.",
      objectives: [
        "Put the students’ work at the centre of the site.",
        "Keep it simple and inviting for a 12–16 audience.",
        "Make workshops, activities and resources easy to find for teachers.",
        "Show the partners and leave room for the site to grow with the project.",
      ],
      approach:
        "I designed the site around its content. Student work comes first, with featured animations and slide presentations near the top of the homepage. Workshops, activities and learning resources each have their own pages, and partner and team pages show who is involved across the four countries. Because the project is ongoing, I designed sections that can take new work without being redesigned.",
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
      challenges:
        "The site has several audiences at once, students, teachers, partners and the EU funding body, and new content keeps arriving. It had to stay simple for young visitors while still covering everything the project needs to show.",
      learnings:
        "Designing for a project that is still happening means designing for content you haven’t seen yet. Flexible sections and clear content types matter more than perfect individual pages.",
      conclusion:
        "AnimateEarth is ongoing. The site is live at animearth.eu and keeps growing as students add new work.",
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
      problem:
        "Rotary Club Mijas International does a lot, from local and international projects to events and fundraising, and relies on new members to keep going. Its website needed to show that impact clearly and make it easy for visitors to get involved.",
      objectives: [
        "Lead with the club’s impact, not just its history.",
        "Make upcoming events easy to find.",
        "Give visitors a clear way to join or get in touch.",
        "Work well on mobile as well as desktop.",
      ],
      approach:
        "As project lead, I plan the work, keep in touch with the club and make sure decisions are agreed before the design moves on. I started with a new sitemap to settle what the site should contain. Then I designed the homepage for desktop and mobile: the club’s four impact areas come first, followed by upcoming events, members’ stories and a clear call to join. Pages for impact areas and projects, events, FAQ and contact follow from the sitemap.",
      wireframes: [{ alt: 'Rotary Mijas sitemap', placeholder: 'Website sitemap v2' }],
      finalDesigns: [],
      challenges:
        "As a volunteer club, Rotary Mijas has many voices and a lot of content. Leading the project meant agreeing on priorities with the club first, so the design could stay focused.",
      learnings:
        "Leading the project as well as designing it showed me how much smoother design goes when the structure and priorities are agreed early. The sitemap was as much a communication tool as a design one.",
      conclusion:
        "The redesign is in the design phase. I’ll add the final designs and results here as the project moves forward.",
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
      problem:
        "Training to fly a drone in a simulator puts a lot of information on screen at once: the map, the aircraft’s status, the mission checklist and live flight data. If the interface is crowded, trainees spend their attention reading it instead of flying.",
      objectives: [
        "Keep the drone’s path and the map clear during flight.",
        "Make battery, GPS, signal and mission progress readable at a glance.",
        "Make the whole mission flow clear, from briefing and flight to debrief and progress.",
        "Help trainees learn from each flight through a useful debrief.",
      ],
      approach:
        "I mapped the mission flow first: main menu, briefing, flight, debrief and progress. During flight, the interface keeps the mission checklist, aircraft status and flight data around the edges of the screen and leaves the centre for the drone’s path. After each mission, the debrief brings together the score, flight stats, the recorded video and an altitude analysis. The technical stack (Leaflet maps, PrimeNG components, Unreal Engine) shaped what the interface needed to support, so I designed with it in mind.",
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
      challenges:
        "The product has a lot of live data and a complex technical setup. The challenge is deciding what a trainee needs at each moment of a mission, and what can wait until the debrief.",
      learnings:
        "In complex interfaces, the most important design decision is often what to leave out of the main view. Designing around the mission flow, rather than around the data, kept that decision clear.",
      conclusion:
        "GameSim is in the design phase. I’ll update this case study as the designs are tested and built.",
    },
  },
];

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
