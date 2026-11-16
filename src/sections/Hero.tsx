import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import type { PointerEvent } from 'react';
import { profile } from '../content/site';
import { Arrow, ButtonLink } from '../components/ui/ButtonLink';
import { Shape, type ShapeColor, type ShapeKind } from '../components/ui/Shape';
import { SplitText } from '../components/ui/SplitText';

const bgs: Record<ShapeColor, string> = {
  lavender: 'bg-lavender', volt: 'bg-volt', coral: 'bg-coral', lime: 'bg-lime', ink: 'bg-ink', paper: 'bg-paper',
};

/** One square tile of the hero poster. Drifts with the pointer and spins when hovered. */
function Tile({ bg, kind, color, depth, delay, mx, my, spin = 90, className = '' }: {
  bg: ShapeColor; kind: ShapeKind; color: ShapeColor; depth: number; delay: number;
  mx: MotionValue<number>; my: MotionValue<number>; spin?: number; className?: string;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`aspect-square ${className}`} aria-hidden="true">
      <motion.div
        className={`grid h-full w-full place-items-center overflow-hidden rounded-[22%] ${bgs[bg]}`}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 16, delay }}
      >
        <motion.div className="w-[72%]" whileHover={{ rotate: spin, scale: 1.08 }} transition={{ type: 'spring', stiffness: 200, damping: 14 }}>
          <Shape kind={kind} color={color} className="block w-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const reset = () => { rawX.set(0); rawY.set(0); };

  const nameSize = 'text-[clamp(4.25rem,17.5vw,15.5rem)] leading-[0.82] tracking-squeeze font-extrabold';

  return (
    <section aria-labelledby="hero-title" onPointerMove={onMove} onPointerLeave={reset} className="relative pb-20 pt-6 sm:pt-10 lg:pb-28">
      <div className="page-x">
        <h1 id="hero-title" className="sr-only">{profile.name}, {profile.title}</h1>

        {/* Row 1: first name + tiles */}
        <div className="grid grid-cols-12 items-end gap-3 sm:gap-4">
          <p className={`col-span-12 font-display lg:col-span-8 ${nameSize}`} aria-hidden="true">
            <SplitText text={profile.firstName} delay={0.1} />
          </p>
          <div className="col-span-12 grid grid-cols-4 gap-3 sm:gap-4 lg:col-span-4 lg:grid-cols-2 lg:pb-2">
            <Tile bg="lavender" kind="circle" color="volt" depth={10} delay={0.55} mx={mx} my={my} />
            <Tile bg="coral" kind="arch" color="paper" depth={-14} delay={0.65} mx={mx} my={my} spin={180} />
            <Tile bg="ink" kind="flower" color="lime" depth={8} delay={0.75} mx={mx} my={my} className="lg:hidden" />
            <Tile bg="lime" kind="quarter" color="ink" depth={-6} delay={0.85} mx={mx} my={my} className="lg:hidden" />
          </div>
        </div>

        {/* Row 2: tiles + last name */}
        <div className="mt-3 grid grid-cols-12 items-end gap-3 sm:mt-4 sm:gap-4">
          <div className="hidden grid-cols-2 gap-4 lg:col-span-4 lg:grid">
            <Tile bg="ink" kind="flower" color="lime" depth={8} delay={0.75} mx={mx} my={my} />
            <Tile bg="lime" kind="quarter" color="ink" depth={-10} delay={0.85} mx={mx} my={my} />
          </div>
          <p className={`col-span-12 font-display lg:col-span-8 lg:text-right ${nameSize}`} aria-hidden="true">
            <SplitText text={profile.lastName} delay={0.3} />
          </p>
        </div>

        {/* Row 3: headline + intro */}
        <div className="mt-14 grid grid-cols-12 gap-y-10 lg:mt-20 lg:gap-x-10">
          <motion.p
            className="col-span-12 max-w-[18ch] font-display text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            {profile.headline}
          </motion.p>
          <motion.div
            className="col-span-12 lg:col-span-5 lg:pt-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-1.5 font-semibold">
              {profile.available && <span className="h-2.5 w-2.5 rounded-full bg-volt" aria-hidden="true" />}
              {profile.title} in {profile.location.split(',')[0]}
            </p>
            <p className="max-w-[46ch] text-lg text-smoke">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/#work">Explore my work <Arrow /></ButtonLink>
              <ButtonLink to="/#contact" variant="outline">Let’s connect</ButtonLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
