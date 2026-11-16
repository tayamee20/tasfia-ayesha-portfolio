export type ShapeKind = 'circle' | 'half' | 'quarter' | 'arch' | 'pill' | 'flower' | 'square';

const fills = {
  lavender: '#CDBEFF',
  volt: '#2E4CFF',
  coral: '#FF6F59',
  lime: '#D9F46A',
  ink: '#1F1D24',
  paper: '#F7F3EC',
} as const;
export type ShapeColor = keyof typeof fills;

/** The geometric vocabulary of the site. Decorative, so hidden from screen readers. */
export function Shape({ kind, color, className = '' }: { kind: ShapeKind; color: ShapeColor; className?: string }) {
  const f = fills[color];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      {kind === 'circle' && <circle cx="50" cy="50" r="50" fill={f} />}
      {kind === 'half' && <path d="M0 100 A50 50 0 0 1 100 100 Z" fill={f} transform="translate(0 -25)" />}
      {kind === 'quarter' && <path d="M0 0 H100 V100 A100 100 0 0 1 0 0 Z" fill={f} />}
      {kind === 'arch' && <path d="M0 100 V50 A50 50 0 0 1 100 50 V100 Z" fill={f} />}
      {kind === 'pill' && <rect x="0" y="25" width="100" height="50" rx="25" fill={f} />}
      {kind === 'square' && <rect width="100" height="100" rx="14" fill={f} />}
      {kind === 'flower' && (
        <path
          fill={f}
          d="M50 0c9 0 16 9 16 20 9-7 21-7 27 1s3 19-6 25c9 6 12 17 6 25s-18 8-27 1c0 11-7 20-16 20s-16-9-16-20c-9 7-21 7-27-1s-3-19 6-25C4 40 1 29 7 21s18-8 27-1C34 9 41 0 50 0z"
        />
      )}
    </svg>
  );
}
