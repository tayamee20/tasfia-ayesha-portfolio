import type { Project } from '../lib/types';

/**
 * THE PROJECT LIST.
 * - Add a project: copy one object, give it a unique `slug`, fill in what you know.
 * - Remove a project: delete its object. Reorder: move it.
 * - Images: put files in /public/images/projects/<slug>/ and set `src: '/images/projects/<slug>/file.webp'`.
 *   Leave `src` out and a labelled placeholder appears instead.
 * - Case study text left `undefined` shows as a "Placeholder" block telling you what to write.
 *   Nothing here is invented: only facts you provided are filled in.
 */
export const projects: Project[] = [
  {
    slug: 'neduai',
    name: 'NeduAI',
    summary: 'An AI-powered education and career platform that helps people plan their learning and find work.',
    role: 'Product designer, design team',
    year: '[Year]',
    categories: ['Product design', 'AI', 'EdTech', 'Dashboards'],
    accent: 'lavender',
    cover: { alt: 'NeduAI platform screens', placeholder: 'Cover: a hero shot of the NeduAI dashboard or Career Advisor' },
    facts: [{ label: 'Platform', value: '[Web / mobile]' }],
    caseStudy: {
      overview:
        'NeduAI is an AI-powered platform for education and careers. I worked in its design department across several parts of the product, from first-run onboarding to the tools people use to plan and find their next role.',
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
        {
          alt: 'Career Advisor final UI',
          placeholder: 'Career Advisor final screen',
          annotations: [
            { x: 24, y: 30, note: '[Annotation: explain a key design decision here]' },
            { x: 70, y: 62, note: '[Annotation: explain another detail]' },
          ],
        },
        { alt: 'Dashboard final UI', placeholder: 'Dashboard final screen' },
        { alt: 'Job portal final UI', placeholder: 'Job portal final screen' },
      ],
    },
  },
  {
    slug: 'xc-party',
    name: 'XC Party',
    summary: 'A website redesign for a Finnish coaching platform, built around its programs, coaches and client stories.',
    role: 'UI/UX designer',
    year: '[Year]',
    categories: ['Website redesign', 'Coaching', 'Client work'],
    accent: 'coral',
    cover: { alt: 'XC Party website redesign', placeholder: 'Cover: the redesigned XC Party homepage' },
    facts: [{ label: 'Client', value: 'XC Party, Finland' }],
    caseStudy: {
      overview:
        'XC Party is a Finnish coaching platform. I redesigned its website, rethinking how the site is structured and how coaching programs, coaches and reviews are presented, while working closely with the client.',
      responsibilities: [
        'UI/UX design',
        'Website structure and information architecture',
        'Coaching program presentation',
        'Coach profiles',
        'Customer reviews',
        'Client collaboration',
      ],
      wireframes: [
        { alt: 'Site map and structure', placeholder: 'Site map or new page structure' },
        { alt: 'Homepage wireframe', placeholder: 'Homepage wireframe' },
      ],
      finalDesigns: [
        {
          alt: 'Coaching programs page',
          placeholder: 'Coaching programs page',
          annotations: [{ x: 30, y: 40, note: '[Annotation: how programs are compared]' }],
        },
        { alt: 'Coach profile page', placeholder: 'Coach profile page' },
        { alt: 'Customer reviews section', placeholder: 'Customer reviews section' },
      ],
    },
  },
  {
    slug: 'catchswipe',
    name: 'CatchSwipe',
    summary: 'Pricing, subscriptions and paywalls for an OSINT platform where people buy lookups.',
    role: 'UI/UX designer',
    year: '[Year]',
    categories: ['Monetisation', 'Pricing', 'Interface design'],
    accent: 'volt',
    cover: { alt: 'CatchSwipe pricing screens', placeholder: 'Cover: CatchSwipe pricing or paywall screen' },
    caseStudy: {
      overview:
        'CatchSwipe is an OSINT (open-source intelligence) platform. My work focused on how people choose a plan and pay: subscription plans, pricing, lookup purchases and paywalls, along with the wider interface.',
      responsibilities: ['Subscription plans', 'Pricing experience', 'Lookup purchases', 'Paywalls', 'Interface design'],
      wireframes: [
        { alt: 'Pricing page wireframes', placeholder: 'Pricing page wireframes' },
        { alt: 'Paywall iterations', placeholder: 'Paywall iterations' },
      ],
      finalDesigns: [
        {
          alt: 'Subscription plans final UI',
          placeholder: 'Subscription plans screen',
          annotations: [{ x: 50, y: 35, note: '[Annotation: how plans are differentiated]' }],
        },
        { alt: 'Lookup purchase flow', placeholder: 'Lookup purchase flow' },
      ],
    },
  },
  {
    slug: 'gamesim-uav-simulator',
    name: 'Gamesim UAV Simulator',
    summary: 'Interfaces for a drone simulation platform with dense controls and interactive maps.',
    role: 'UI/UX designer',
    year: '[Year]',
    categories: ['Complex interfaces', 'Simulation', 'Mapping'],
    accent: 'ink',
    cover: { alt: 'Gamesim UAV Simulator interface', placeholder: 'Cover: the simulator’s map view' },
    facts: [
      {
        label: 'Technology context',
        value: 'Angular, Leaflet, NGXS, PrimeNG, Java, Spring Boot, MongoDB, RabbitMQ, Unreal Engine',
      },
    ],
    caseStudy: {
      overview:
        'Gamesim is a UAV (drone) simulation platform. The product is complex: interactive mapping sits alongside a lot of simulation data and controls. My focus was interface design, making that complexity understandable and usable. The product is built on Angular, Leaflet, NGXS and PrimeNG on the front end, with Java, Spring Boot, MongoDB, RabbitMQ and Unreal Engine behind it, which shaped what the interface needed to handle.',
      responsibilities: ['Interface design for complex workflows', 'Interactive map interfaces', '[Add any other responsibilities]'],
      wireframes: [
        { alt: 'Map view wireframes', placeholder: 'Map view wireframes' },
        { alt: 'Control panel iterations', placeholder: 'Control panel iterations' },
      ],
      finalDesigns: [
        {
          alt: 'Interactive map final UI',
          placeholder: 'Interactive map screen',
          annotations: [
            { x: 20, y: 25, note: '[Annotation: map controls]' },
            { x: 75, y: 70, note: '[Annotation: simulation panel]' },
          ],
        },
        { alt: 'Simulation settings UI', placeholder: 'Simulation settings screen' },
      ],
    },
  },
  {
    slug: 'animate-earth',
    name: 'AnimateEarth',
    summary: 'An educational website that gets younger audiences curious about climate change.',
    role: 'UI/UX designer',
    year: '[Year]',
    categories: ['Education', 'Climate', 'Web design'],
    accent: 'lime',
    cover: { alt: 'AnimateEarth website', placeholder: 'Cover: the AnimateEarth homepage' },
    caseStudy: {
      overview:
        'AnimateEarth is an educational website about climate awareness, designed to engage younger audiences.',
      responsibilities: ['[Add your responsibilities on this project]'],
      wireframes: [{ alt: 'AnimateEarth wireframes', placeholder: 'Wireframes or early sketches' }],
      finalDesigns: [
        { alt: 'AnimateEarth homepage', placeholder: 'Homepage' },
        { alt: 'AnimateEarth learning page', placeholder: 'A learning or activity page' },
      ],
    },
  },
];

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
