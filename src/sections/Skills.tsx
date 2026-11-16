import { motion } from 'framer-motion';
import { skills } from '../content/site';
import { Reveal } from '../components/ui/Reveal';

const dot = ['bg-lavender', 'bg-coral', 'bg-volt', 'bg-lime'];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-ink py-24 text-paper lg:py-32">
      <div className="page-x">
        <Reveal className="mb-16 grid grid-cols-12 items-end gap-6">
          <h2 id="skills-title" className="col-span-12 font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.88] tracking-squeeze lg:col-span-7">
            Skills &amp; tools
          </h2>
          <p className="col-span-12 max-w-[40ch] text-lg text-paper/75 lg:col-span-5">
            A designer’s toolkit with an engineer’s understanding of what happens after the handoff.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          {skills.map((g, gi) => (
            <Reveal key={g.group} delay={(gi % 2) * 0.08} className={gi % 2 === 1 ? 'md:mt-16' : ''}>
              <div className="flex items-baseline justify-between gap-4 border-b border-paper/20 pb-3">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{g.group}</h3>
                <span className="text-sm text-paper/70">{g.note}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {g.items.map((s, si) => (
                  <li key={s} className="group flex items-center gap-2.5 font-display text-[clamp(1.35rem,2.2vw,1.8rem)] font-medium tracking-[-0.02em]">
                    <motion.span
                      className="block"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.2 + si * 0.05 }}
                      aria-hidden="true"
                    >
                      <span className={`block h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-150 ${dot[gi % dot.length]}`} />
                    </motion.span>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
