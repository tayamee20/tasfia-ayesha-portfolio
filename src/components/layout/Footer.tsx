import { links, profile } from '../../content/site';
import { Shape } from '../ui/Shape';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="page-x pb-10 pt-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <p className="font-display text-[clamp(3.5rem,13vw,11rem)] font-extrabold leading-[0.85] tracking-squeeze" aria-hidden="true">
            Tasfia<span className="text-lavender">.</span>
          </p>
          <div className="flex gap-3 pb-3" aria-hidden="true">
            <Shape kind="circle" color="lavender" className="w-12" />
            <Shape kind="arch" color="coral" className="w-12" />
            <Shape kind="flower" color="lime" className="w-12 animate-[spin_24s_linear_infinite]" />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-paper/15 pt-6 text-[0.95rem] text-paper/75">
          <p>© {year} {profile.name}. Designed and built in {profile.location.split(',')[0]}.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a className="ink-link hover:text-paper" href={`mailto:${links.email}`}>Email</a></li>
            <li><a className="ink-link hover:text-paper" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="ink-link hover:text-paper" href={links.behance} target="_blank" rel="noreferrer">Behance</a></li>
            <li><a className="ink-link hover:text-paper" href={links.dribbble} target="_blank" rel="noreferrer">Dribbble</a></li>
            <li><a className="ink-link hover:text-paper" href="#main">Back to top</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
