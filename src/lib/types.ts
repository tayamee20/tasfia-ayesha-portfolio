export type Accent = 'lavender' | 'volt' | 'coral' | 'lime' | 'ink';

/** An image. Leave `src` empty to show a clearly labelled placeholder instead. */
export interface ImageAsset {
  src?: string;
  alt: string;
  /** What should go here, shown on the placeholder until a real image is added. */
  placeholder?: string;
  caption?: string;
  width?: number;
  height?: number;
}

/** A numbered note pinned on top of a final design (x/y are % of the image). */
export interface Annotation {
  x: number;
  y: number;
  note: string;
}

export interface DesignImage extends ImageAsset {
  annotations?: Annotation[];
}

/**
 * Case study content. Any text field left `undefined` renders as a visible
 * "Placeholder" block telling you what to write — nothing is invented.
 */
export interface CaseStudy {
  overview: string;
  responsibilities: string[];
  problem?: string;
  objectives?: string[];
  approach?: string;
  wireframes: ImageAsset[];
  finalDesigns: DesignImage[];
  challenges?: string;
  learnings?: string;
  conclusion?: string;
}

export interface Project {
  slug: string;
  name: string;
  /** One or two sentences for the work grid. */
  summary: string;
  role: string;
  year?: string;
  categories: string[];
  accent: Accent;
  cover: ImageAsset;
  /** e.g. 'In design phase' or 'Ongoing'. Shown on the card and the case study. */
  status?: string;
  /** Extra facts shown on the case study, e.g. client, platform, technology context. */
  facts?: { label: string; value: string }[];
  /** External links shown as buttons on the case study: live site, Figma file, posts. */
  links?: { label: string; href: string }[];
  caseStudy: CaseStudy;
}

export interface MoreProject {
  name: string;
  kind: string;
  description: string;
  year?: string;
  href?: string;
}

export interface Job {
  company: string;
  role: string;
  place: string;
  start: string;
  end: string;
  current?: boolean;
  points: string[];
}
