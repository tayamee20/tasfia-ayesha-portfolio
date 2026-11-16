import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../lib/types';
import { Arrow } from '../components/ui/ButtonLink';
import { ImageFrame } from '../components/ui/ImageFrame';

export function ProjectCard({ project, aspect, index }: { project: Project; aspect: string; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
    >
      <Link to={`/work/${project.slug}`} className="group block rounded-[30px]" aria-label={`${project.name} case study`}>
        <div className="relative transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-[0.8deg] group-hover:scale-[0.985] [&_.frame-media]:transition-transform [&_.frame-media]:duration-700 [&_.frame-media]:ease-[cubic-bezier(.16,1,.3,1)] group-hover:[&_.frame-media]:scale-[1.06] [&_.frame-window]:-rotate-[1.5deg] group-hover:[&_.frame-window]:-translate-y-2 group-hover:[&_.frame-window]:rotate-0 group-hover:[&_.frame-window]:scale-[1.04]">
          <ImageFrame image={{ ...project.cover, caption: undefined }} accent={project.accent} aspect={aspect} framed />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-5 hidden h-24 w-24 scale-50 place-items-center rounded-full bg-ink text-center font-display text-sm font-semibold leading-tight text-paper opacity-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-[-12deg] group-hover:scale-100 group-hover:opacity-100 md:grid"
          >
            View case<br />study
          </span>
        </div>
        <div className="mt-6 grid gap-3 px-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-none tracking-[-0.035em]">{project.name}</h3>
            {(project.year || project.status) && (
              <span className="shrink-0 text-right text-smoke">
                {project.year}
                {project.status && <span className="block text-sm">{project.status}</span>}
              </span>
            )}
          </div>
          <p className="max-w-[52ch] text-smoke">{project.summary}</p>
          <p className="text-[0.95rem]"><span className="text-smoke">Role </span><span className="font-semibold">{project.role}</span></p>
          <ul className="flex flex-wrap gap-2" aria-label="Categories">
            {project.categories.map((c) => (
              <li key={c} className="rounded-full border border-ink/20 px-3 py-1 text-sm">{c}</li>
            ))}
          </ul>
          <span className="mt-1 inline-flex items-center gap-2 font-semibold text-volt">
            Read the case study <Arrow />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
