import { motion } from 'framer-motion';
import { experience } from '../content/site';
import { Reveal } from '../components/ui/Reveal';
import { Shape, type ShapeKind } from '../components/ui/Shape';

const markers: ShapeKind[] = ['circle', 'arch', 'flower', 'quarter', 'pill'];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="py-24 lg:py-32">
      <div className="page-x grid grid-cols-12 gap-y-12 lg:gap-x-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 id="exp-title" className="font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.88] tracking-squeeze">
                Where I’ve worked
              </h2>
              <p className="mt-6 max-w-[34ch] text-lg text-smoke">
                Remote teams in Finland and Türkiye, a national telecom in Dhaka and my university. Newest first.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="relative col-span-12 lg:col-span-8">
          <span className="absolute bottom-6 left-[19px] top-6 w-0.5 bg-ink/15" aria-hidden="true" />
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              className="group relative grid grid-cols-[40px_1fr] gap-x-6 pb-14 last:pb-0"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={`relative z-10 mt-1 grid h-10 w-10 place-items-center rounded-full border-2 border-ink ${job.current ? 'bg-lime' : 'bg-paper'}`}>
                <Shape
                  kind={markers[i % markers.length]}
                  color={job.current ? 'ink' : 'volt'}
                  className="w-5 transition-transform duration-500 group-hover:rotate-180"
                />
              </span>
              <div>
                <p className="flex flex-wrap items-center gap-2 text-[0.95rem] font-semibold text-smoke">
                  <span>{job.start} to {job.end}</span>
                  {job.current && <span className="rounded-full bg-lime px-2.5 py-0.5 text-ink">Now</span>}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-none tracking-[-0.035em]">{job.company}</h3>
                <p className="mt-2 text-lg font-semibold">
                  {job.role}<span className="font-normal text-smoke">, {job.place}</span>
                </p>
                <ul className="mt-4 grid max-w-prose gap-2 text-smoke">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
