import type { Accent, DesignImage } from '../../lib/types';
import { accentClasses } from '../../lib/accents';
import { Shape, type ShapeColor, type ShapeKind } from './Shape';

const kinds: ShapeKind[] = ['circle', 'arch', 'quarter', 'pill', 'flower', 'half'];
const partner: Record<Accent, ShapeColor[]> = {
  lavender: ['volt', 'paper', 'coral'],
  volt: ['lime', 'paper', 'lavender'],
  coral: ['ink', 'paper', 'lime'],
  lime: ['volt', 'ink', 'paper'],
  ink: ['lavender', 'lime', 'coral'],
};

const hash = (s: string) => Array.from(s).reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);

/**
 * Shows a project image, or — until one is supplied — a placeholder that
 * says exactly which screenshot belongs here.
 */
export function ImageFrame({
  image,
  accent,
  aspect = 'aspect-[16/10]',
  className = '',
  eager = false,
  showAnnotations = false,
}: {
  image: DesignImage;
  accent: Accent;
  aspect?: string;
  className?: string;
  eager?: boolean;
  showAnnotations?: boolean;
}) {
  const a = accentClasses[accent];
  const h = hash(image.alt);
  const k1 = kinds[h % kinds.length];
  const k2 = kinds[(h >> 3) % kinds.length];
  const [c1, c2, c3] = partner[accent];

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-[28px] ${aspect} ${image.src ? 'bg-sand' : a.bg}`}>
        {image.src ? (
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className="frame-media h-full w-full object-cover"
          />
        ) : (
          <div className="frame-media absolute inset-0" role="img" aria-label={`Placeholder for ${image.alt}`}>
            <Shape kind={k1} color={c1} className="absolute -left-[6%] top-[12%] w-[34%] rotate-12" />
            <Shape kind={k2} color={c2} className="absolute -right-[4%] -bottom-[10%] w-[40%] -rotate-6" />
            <Shape kind="circle" color={c3} className="absolute right-[22%] top-[10%] w-[9%]" />
            <div className="absolute inset-x-[14%] top-1/2 -translate-y-1/2 rounded-2xl bg-paper/95 p-4 text-center text-ink shadow-[0_2px_0_rgba(31,29,36,.9)] sm:p-5">
              <p className="font-display text-sm font-semibold text-volt">Image placeholder</p>
              <p className="mt-1 text-sm leading-snug sm:text-base">{image.placeholder ?? image.alt}</p>
            </div>
          </div>
        )}
        {showAnnotations &&
          image.annotations?.map((n, i) => (
            <span
              key={i}
              className="absolute grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-lime font-display text-sm font-bold text-ink"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              aria-hidden="true"
            >
              {i + 1}
            </span>
          ))}
      </div>
      {(image.caption || (showAnnotations && image.annotations?.length)) && (
        <figcaption className="mt-4 grid gap-2 text-[0.95rem] text-smoke">
          {image.caption && <span>{image.caption}</span>}
          {showAnnotations && image.annotations && (
            <ol className="grid gap-2 sm:grid-cols-2">
              {image.annotations.map((n, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime font-display text-xs font-bold text-ink">{i + 1}</span>
                  <span>{n.note}</span>
                </li>
              ))}
            </ol>
          )}
        </figcaption>
      )}
    </figure>
  );
}
