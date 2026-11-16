import { Link, useParams } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getNextProject, getProject } from '../content/projects';
import { accentClasses } from '../lib/accents';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageTransition } from '../components/layout/PageTransition';
import { Arrow } from '../components/ui/ButtonLink';
import { ImageFrame } from '../components/ui/ImageFrame';
import { Placeholder } from '../components/ui/Placeholder';
import { Reveal } from '../components/ui/Reveal';
import { Shape } from '../components/ui/Shape';
import { SplitText } from '../components/ui/SplitText';
import { NotFoundPage } from './NotFoundPage';

function Block({ title, children, id }: { title: string; children: ReactNode; id: string }) {
  return (
    <section aria-labelledby={id} className="grid grid-cols-12 gap-y-6 border-t border-ink/15 py-14 lg:gap-x-10 lg:py-20">
      <div className="col-span-12 lg:col-span-4">
        <h2 id={id} className="font-display text-3xl font-bold tracking-[-0.03em] lg:sticky lg:top-28">{title}</h2>
      </div>
      <Reveal className="col-span-12 lg:col-span-8">{children}</Reveal>
    </section>
  );
}

const Prose = ({ text }: { text: string }) => <p className="max-w-prose text-xl leading-relaxed">{text}</p>;

export function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  useDocumentMeta(
    project ? `${project.name} case study — Tasfia Ayesha` : 'Case study not found — Tasfia Ayesha',
    project?.summary,
  );
  if (!project) return <NotFoundPage />;

  const cs = project.caseStudy;
  const a = accentClasses[project.accent];
  const next = getNextProject(project.slug);
  const facts = [
    { label: 'My role', value: project.role },
    ...(project.year ? [{ label: 'Year', value: project.year }] : []),
    { label: 'Categories', value: project.categories.join(', ') },
    ...(project.facts ?? []),
  ];

  return (
    <PageTransition>
      <article>
        {/* Header */}
        <header className="page-x pb-12 pt-8 lg:pt-14">
          <Link to={{ pathname: '/', hash: '#work' }} className="group inline-flex min-h-[44px] items-center gap-2 font-semibold text-smoke hover:text-ink">
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            All work
          </Link>
          <div className="mt-8 flex items-start gap-5">
            <h1 className="font-display text-[clamp(3.4rem,11vw,9.5rem)] font-extrabold leading-[0.86] tracking-squeeze">
              <SplitText text={project.name} />
            </h1>
            <span className={`mt-3 hidden h-16 w-16 shrink-0 place-items-center rounded-2xl sm:grid ${a.bg}`} aria-hidden="true">
              <Shape kind="flower" color={project.accent === 'ink' || project.accent === 'volt' ? 'lime' : 'ink'} className="w-9 animate-[spin_18s_linear_infinite]" />
            </span>
          </div>
          <p className="mt-8 max-w-[34ch] font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.02em]">{project.summary}</p>
          <dl className="mt-12 grid gap-6 border-t-2 border-ink pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className={f.value.length > 60 ? 'sm:col-span-2' : ''}>
                <dt className="text-sm text-smoke">{f.label}</dt>
                <dd className="mt-1 font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="page-x">
          <ImageFrame image={project.cover} accent={project.accent} aspect="aspect-[4/3] sm:aspect-[16/8]" eager />
        </div>

        <div className="page-x mt-16">
          <Block id="overview" title="Overview"><Prose text={cs.overview} /></Block>

          <Block id="role" title="My role and responsibilities">
            <p className="mb-6 text-lg text-smoke">{project.role}</p>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {cs.responsibilities.map((r, i) => (
                <li key={r} className="flex items-start gap-3 text-lg">
                  <Shape kind={(['circle', 'arch', 'quarter', 'flower'] as const)[i % 4]} color={project.accent === 'lime' ? 'volt' : project.accent} className="mt-1 w-5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </Block>

          <Block id="problem" title="The problem">
            {cs.problem ? <Prose text={cs.problem} /> : <Placeholder>Describe the problem this project set out to solve: who was struggling, with what, and why it mattered to the business.</Placeholder>}
          </Block>

          <Block id="objectives" title="Design objectives">
            {cs.objectives?.length ? (
              <ol className="grid gap-4">
                {cs.objectives.map((o, i) => (
                  <li key={o} className="flex gap-4 text-lg">
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display font-bold ${a.bg} ${a.text}`}>{i + 1}</span>
                    {o}
                  </li>
                ))}
              </ol>
            ) : (
              <Placeholder>List 2–4 goals the design had to meet, in the order they mattered.</Placeholder>
            )}
          </Block>

          <Block id="approach" title="Design approach">
            {cs.approach ? <Prose text={cs.approach} /> : <Placeholder>Walk through how you worked: research or inputs, key decisions, how you collaborated and how ideas were tested.</Placeholder>}
          </Block>
        </div>

        {/* Wireframes: wide gallery on a tinted band */}
        <section aria-labelledby="wireframes" className={`mt-6 py-16 lg:py-24 ${a.soft}`}>
          <div className="page-x">
            <h2 id="wireframes" className="font-display text-3xl font-bold tracking-[-0.03em]">Wireframes and iterations</h2>
            <p className="mt-3 max-w-prose text-smoke">How the structure took shape before the visual design.</p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {cs.wireframes.map((w, i) => (
                <Reveal key={w.alt} delay={i * 0.08} className={i % 2 === 1 ? 'md:mt-20' : ''}>
                  <ImageFrame image={w} accent="ink" aspect="aspect-[4/3]" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final designs: large, annotated */}
        <section aria-labelledby="final" className="page-x py-16 lg:py-24">
          <h2 id="final" className="font-display text-3xl font-bold tracking-[-0.03em]">Final designs</h2>
          <div className="mt-10 grid gap-14">
            {cs.finalDesigns.map((d, i) => (
              <Reveal key={d.alt}>
                <ImageFrame
                  image={d}
                  accent={project.accent}
                  aspect={i === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'}
                  showAnnotations
                  className={i > 0 && i % 2 === 0 ? 'lg:mx-[8%]' : i % 2 === 1 ? 'lg:mr-[16%]' : ''}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <div className="page-x">
          <Block id="learnings" title="Challenges and learnings">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold">Challenges</h3>
                {cs.challenges ? <p className="text-lg">{cs.challenges}</p> : <Placeholder>What made this project hard, and how you worked through it.</Placeholder>}
              </div>
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold">Learnings</h3>
                {cs.learnings ? <p className="text-lg">{cs.learnings}</p> : <Placeholder>What you’d keep, and what you’d do differently next time.</Placeholder>}
              </div>
            </div>
          </Block>
          <Block id="conclusion" title="Conclusion">
            {cs.conclusion ? <Prose text={cs.conclusion} /> : <Placeholder>Close the story: where the project landed and any outcomes you can share. Only include results you can verify.</Placeholder>}
          </Block>
        </div>

        {/* Next project */}
        <nav aria-label="Next project" className="page-x pb-24 pt-6">
          <Link
            to={`/work/${next.slug}`}
            className={`group relative flex flex-wrap items-end justify-between gap-6 overflow-hidden rounded-[40px] px-7 py-12 sm:px-12 lg:py-16 ${accentClasses[next.accent].bg} ${accentClasses[next.accent].text}`}
          >
            <div>
              <p className="font-semibold opacity-80">Next project</p>
              <p className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-squeeze transition-transform duration-500 group-hover:translate-x-2">{next.name}</p>
            </div>
            <span className="grid h-20 w-20 place-items-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:rotate-[-45deg]">
              <Arrow className="h-7 w-7" />
            </span>
          </Link>
        </nav>
      </article>
    </PageTransition>
  );
}
