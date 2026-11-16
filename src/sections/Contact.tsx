import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { links } from '../content/site';
import { Arrow } from '../components/ui/ButtonLink';
import { Reveal } from '../components/ui/Reveal';
import { Shape } from '../components/ui/Shape';

const socials = [
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Behance', href: links.behance },
  { label: 'Dribbble', href: links.dribbble },
  { label: 'GitHub', href: links.github },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 lg:py-32">
      <div className="page-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-lavender px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <Shape kind="arch" color="volt" className="absolute -bottom-10 right-[8%] hidden w-56 md:block" />
            <Shape kind="circle" color="coral" className="absolute right-[28%] top-10 hidden w-16 md:block" />
            <Shape kind="flower" color="lime" className="absolute -right-10 top-16 hidden w-40 animate-[spin_30s_linear_infinite] md:block" />

            <div className="relative max-w-3xl">
              <h2 id="contact-title" className="font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold leading-[0.9] tracking-squeeze">
                Got a product that needs a designer?
              </h2>
              <p className="mt-6 max-w-[44ch] text-lg">
                I’m open to full-time roles, freelance projects and collaborations. Tell me what you’re building.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={`mailto:${links.email}`} className="group inline-flex min-h-[56px] items-center gap-3 rounded-full bg-ink px-7 text-lg font-semibold text-paper transition-colors hover:bg-volt">
                  Email me <Arrow />
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="relative inline-flex min-h-[56px] items-center gap-2 overflow-hidden rounded-full border-2 border-ink px-6 font-semibold transition-colors hover:bg-paper"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'done' : 'idle'}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {copied ? 'Email copied' : links.email}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>

              <ul className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 border-t-2 border-ink sm:grid-cols-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="group flex min-h-[56px] items-center justify-between gap-2 border-b border-ink/20 font-semibold sm:border-b-0">
                      {s.label} <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
