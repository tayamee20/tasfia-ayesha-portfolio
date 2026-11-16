import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Fades content up once as it scrolls into view. Reduced motion turns this into a plain fade. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Tag>
  );
}
