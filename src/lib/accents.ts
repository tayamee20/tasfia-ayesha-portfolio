import type { Accent } from './types';

/** Full Tailwind class names per accent, so the compiler keeps them. */
export const accentClasses: Record<Accent, { bg: string; text: string; soft: string }> = {
  lavender: { bg: 'bg-lavender', text: 'text-ink', soft: 'bg-lavender/40' },
  volt: { bg: 'bg-volt', text: 'text-white', soft: 'bg-volt/15' },
  coral: { bg: 'bg-coral', text: 'text-ink', soft: 'bg-coral/25' },
  lime: { bg: 'bg-lime', text: 'text-ink', soft: 'bg-lime/50' },
  ink: { bg: 'bg-ink', text: 'text-paper', soft: 'bg-ink/10' },
};
