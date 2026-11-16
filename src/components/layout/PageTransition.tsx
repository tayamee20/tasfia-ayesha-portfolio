import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Wraps each route. Pages lift in; the old page fades out first. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      id="main"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } }}
    >
      {children}
    </motion.main>
  );
}
