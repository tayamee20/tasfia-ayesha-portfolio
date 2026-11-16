import { motion } from 'framer-motion';

/** Animated display type: letters rise into place one after another. Screen readers get the plain word. */
export function SplitText({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {Array.from(text).map((ch, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.06em]">
          <motion.span
            className="inline-block"
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.045 }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
