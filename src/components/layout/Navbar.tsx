import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../../content/site';
import { Shape } from '../ui/Shape';

const items = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Skills', hash: '#skills' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background,box-shadow] duration-300 ${
        scrolled || open ? 'bg-paper/90 shadow-[0_1px_0_rgba(31,29,36,.08)] backdrop-blur-md' : ''
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <nav aria-label="Main" className="page-x flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <span className="relative h-8 w-8">
            <Shape kind="circle" color="lavender" className="absolute inset-0 transition-transform duration-500 group-hover:-translate-x-1" />
            <Shape kind="half" color="coral" className="absolute inset-0 translate-x-2 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-180" />
          </span>
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <li key={it.hash}>
              <Link
                to={{ pathname: '/', hash: it.hash }}
                className="relative rounded-full px-4 py-2.5 font-medium text-smoke transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {it.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              to={{ pathname: '/', hash: '#contact' }}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-5 font-semibold text-paper transition-colors hover:bg-volt"
            >
              {profile.available && <span className="h-2 w-2 animate-pulse rounded-full bg-lime" aria-hidden="true" />}
              Let’s connect
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="relative grid h-12 w-12 place-items-center rounded-full bg-ink text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`} />
          <span className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[calc(72px+env(safe-area-inset-top,0px))] z-30 overflow-y-auto bg-paper md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="page-x flex flex-col gap-1 pt-8">
              {[...items, { label: 'Contact', hash: '#contact' }].map((it, i) => (
                <motion.li
                  key={it.hash}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={{ pathname: '/', hash: it.hash }} className="block py-2 font-display text-5xl font-bold tracking-squeeze">
                    {it.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="page-x relative mt-12 h-40">
              <Shape kind="flower" color="lime" className="absolute left-6 top-0 w-28 animate-[spin_20s_linear_infinite]" />
              <Shape kind="arch" color="lavender" className="absolute left-36 top-10 w-24" />
              <Shape kind="circle" color="coral" className="absolute left-60 top-2 w-16" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
