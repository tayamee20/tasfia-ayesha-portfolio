import { PageTransition } from '../components/layout/PageTransition';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Shape } from '../components/ui/Shape';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta('Page not found — Tasfia Ayesha');
  return (
    <PageTransition>
      <section className="page-x flex min-h-[70vh] flex-col items-start justify-center gap-6 py-24">
        <div className="flex gap-3" aria-hidden="true">
          <Shape kind="circle" color="lavender" className="w-16" />
          <Shape kind="arch" color="coral" className="w-16" />
          <Shape kind="flower" color="lime" className="w-16" />
        </div>
        <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.9] tracking-squeeze">This page doesn’t exist.</h1>
        <p className="max-w-[44ch] text-lg text-smoke">The link may be old or mistyped. Head back home to see the work.</p>
        <ButtonLink to="/">Go to the homepage</ButtonLink>
      </section>
    </PageTransition>
  );
}
