import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the top on new pages, or to the #section in the URL once it has rendered. */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    let tries = 0;
    const id = window.setInterval(() => {
      const el = document.getElementById(hash.slice(1));
      if (el || ++tries > 20) {
        window.clearInterval(id);
        el?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    }, 60);
    return () => window.clearInterval(id);
  }, [pathname, hash, key]);
  return null;
}
