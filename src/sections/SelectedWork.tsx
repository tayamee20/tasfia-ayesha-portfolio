import { useState } from 'react';
import { projects } from '../content/projects';
import { moreProjects } from '../content/site';
import { Reveal } from '../components/ui/Reveal';
import { Shape } from '../components/ui/Shape';
import { ProjectCard } from './ProjectCard';

/** How many projects show before "Show more projects". */
const INITIAL_COUNT = 4;

/** Asymmetric editorial rhythm. Repeats if you add more projects. */
const layout = [
  { cell: 'lg:col-span-7', aspect: 'aspect-[4/3]' },
  { cell: 'lg:col-span-5 lg:mt-40', aspect: 'aspect-[4/5]' },
  { cell: 'lg:col-span-5 lg:col-start-2', aspect: 'aspect-[4/5]' },
  { cell: 'lg:col-span-6 lg:mt-56', aspect: 'aspect-[16/11]' },
  { cell: 'lg:col-span-8 lg:col-start-3', aspect: 'aspect-[16/9]' },
];

export function SelectedWork() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hidden = projects.length - INITIAL_COUNT;
  return (
    <section id="work" aria-labelledby="work-title" className="relative py-20 lg:py-28">
      <div className="page-x">
        <div className="mb-14 grid grid-cols-12 items-end gap-6 lg:mb-20">
          <Reveal className="col-span-12 lg:col-span-8">
            <h2 id="work-title" className="font-display text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[0.88] tracking-squeeze">
              Selected<br />
              <span className="inline-flex items-center gap-4">
                work
                <Shape kind="flower" color="coral" className="inline-block h-[0.7em] w-[0.7em] animate-[spin_22s_linear_infinite]" />
              </span>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4" delay={0.1}>
            <p className="max-w-[40ch] text-lg text-smoke">
              Product, web and platform design across education, coaching, climate, nonprofits and simulation. Open a project for the full story.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
          {visible.map((p, i) => {
            const l = layout[i % layout.length];
            return (
              <div key={p.slug} className={l.cell}>
                <ProjectCard project={p} aspect={l.aspect} index={i} />
              </div>
            );
          })}
        </div>

        {hidden > 0 && (
          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full border-2 border-ink px-6 py-3 font-semibold transition-[background,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
            >
              {showAll ? 'Show fewer projects' : `Show more projects (${hidden})`}
              <svg className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* More projects */}
        <div className="mt-28 grid grid-cols-12 gap-y-8 lg:gap-x-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <h3 className="font-display text-4xl font-bold tracking-[-0.035em]">More projects</h3>
            <p className="mt-3 max-w-[34ch] text-smoke">Web apps, experiments and side projects, many from my Computer Science years.</p>
          </Reveal>
          <ul className="col-span-12 border-t-2 border-ink lg:col-span-8">
            {moreProjects.map((m) => {
              const inner = (
                <>
                  <span className="font-display text-2xl font-bold tracking-[-0.03em]">{m.name}</span>
                  <span className="text-smoke md:col-start-2 md:row-start-1">{m.kind}</span>
                  <span className="text-smoke md:col-span-2">{m.description}</span>
                  <span className="text-smoke md:col-start-3 md:row-start-1 md:text-right">{m.year ?? ''}</span>
                </>
              );
              const cls =
                'grid gap-1 px-2 py-6 transition-[background,padding] duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:grid-cols-[1.3fr_1fr_auto] md:gap-x-6 hover:bg-lavender/50 hover:px-5';
              return (
                <li key={m.name} className="border-b border-ink/15">
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noreferrer" className={`${cls} block`}>{inner}</a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
