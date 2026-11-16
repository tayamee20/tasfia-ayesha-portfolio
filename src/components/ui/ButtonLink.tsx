import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'lime';

const styles: Record<Variant, string> = {
  solid: 'bg-ink text-paper hover:bg-volt',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
  lime: 'bg-lime text-ink hover:bg-paper',
};

/** A pill-shaped button that is really a link: internal routes, #anchors or external URLs. */
export function ButtonLink({ to, children, variant = 'solid', className = '' }: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const cls = `group inline-flex min-h-[48px] items-center gap-2.5 rounded-full px-6 py-3 font-semibold transition-[background,color,transform] duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`;
  const isExternal = /^(https?:|mailto:)/.test(to);
  if (isExternal) {
    return (
      <a href={to} className={cls} {...(to.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  const [pathname, hash] = to.split('#');
  return (
    <Link to={{ pathname: pathname || '/', hash: hash ? `#${hash}` : '' }} className={cls}>
      {children}
    </Link>
  );
}

/** Small arrow that nudges on hover of its parent `.group`. */
export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
