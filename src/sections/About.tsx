import { about } from '../content/site';
import { Reveal } from '../components/ui/Reveal';
import { Shape } from '../components/ui/Shape';

export function About() {
  const e = about.education;
  return (
    <section id="about" aria-labelledby="about-title" className="bg-sand py-24 lg:py-32">
      <div className="page-x grid grid-cols-12 gap-y-14 lg:gap-x-12">
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <h2 id="about-title" className="mb-8 font-display text-xl font-semibold text-smoke">About me</h2>
            <p className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-bold leading-[0.98] tracking-[-0.04em]">{about.statement}</p>
          </Reveal>

          {/* Portrait: cut-out photo standing in front of an arch. File lives in /public/images */}
          <Reveal delay={0.1} className="relative mt-12 max-w-[420px]">
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-x-0 bottom-0 top-[10%] overflow-hidden rounded-t-full bg-coral">
                <Shape kind="circle" color="lime" className="absolute -bottom-[14%] -left-[14%] w-[58%]" />
                <Shape kind="quarter" color="volt" className="absolute -right-[6%] bottom-[18%] w-[30%] -rotate-90" />
              </div>
              <img
                src="/images/tasfia-cutout.webp"
                alt="Tasfia Ayesha in a black blazer and white trousers, sitting and smiling"
                width={880}
                height={1100}
                loading="lazy"
                decoding="async"
                className="relative h-full w-full object-contain object-bottom"
              />
            </div>
            <Shape kind="flower" color="ink" className="absolute -right-6 top-[6%] w-20 animate-[spin_26s_linear_infinite]" />
            <Shape kind="pill" color="volt" className="absolute -bottom-5 -left-6 w-28 rotate-[-14deg]" />
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-16">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={`mb-6 max-w-prose ${i === 0 ? 'text-xl leading-relaxed text-ink' : 'text-lg text-smoke'}`}>{p}</p>
            </Reveal>
          ))}

          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-[28px] bg-ink p-7 text-paper sm:p-9">
              <Shape kind="quarter" color="volt" className="absolute -right-4 -top-4 w-28 rotate-90" />
              <h3 className="relative font-display text-2xl font-bold tracking-[-0.02em]">{e.degree}</h3>
              <p className="relative mt-1 text-paper/75">{e.school}, {e.years}</p>
              <dl className="relative mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-paper/70">CGPA</dt>
                  <dd className="font-display text-4xl font-extrabold tracking-[-0.03em] text-lime">{e.cgpa}</dd>
                </div>
                <div>
                  <dt className="text-sm text-paper/70">Graduated with</dt>
                  <dd className="font-display text-xl font-semibold leading-tight">{e.honour}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm text-paper/70">Thesis</dt>
                  <dd className="text-lg">{e.thesis}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
