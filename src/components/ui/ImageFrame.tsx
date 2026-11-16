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

/** Reads w/h from a Tailwind class like 'aspect-[16/10]' (first match wins). */
const ratioOf = (aspect: string) => {
  const m = aspect.match(/aspect-\[(\d+)\/(\d+)\]/);
  return m ? Number(m[1]) / Number(m[2]) : 16 / 10;
};

/**
 * A screenshot shown whole inside a small browser window, on the project's accent
 * colour. The window is sized from the image's own proportions, so nothing is cropped.
 */
function BrowserFrame({ image, accent, aspect, eager }: { image: DesignImage; accent: Accent; aspect: string; eager: boolean }) {
  const a = accentClasses[accent];
  const h = hash(image.alt);
  const [c1, c2] = partner[accent];
  const imgRatio = image.width && image.height ? image.width / image.height : 16 / 10;
  // The window may fill 86% of the frame's width or 80% of its height, whichever runs out first.
  const maxW = 0.86, maxH = 0.8;
  const widthLimited = imgRatio >= (ratioOf(aspect) * maxW) / maxH;
  const windowStyle = widthLimited
    ? { width: `${maxW * 100}%` }
    : { height: `${maxH * 100}%`, aspectRatio: `${imgRatio}` };
  return (
    <div className={`relative grid place-items-center overflow-hidden rounded-[28px] ${aspect} ${a.bg}`}>
      <Shape kind={kinds[h % kinds.length]} color={c1} className="absolute -left-[8%] -top-[10%] w-[38%] rotate-12" />
      <Shape kind={kinds[(h >> 3) % kinds.length]} color={c2} className="absolute -bottom-[14%] -right-[6%] w-[42%] -rotate-6" />
      <div
        className="frame-window relative flex flex-col overflow-hidden rounded-xl bg-paper shadow-[0_2px_0_rgba(31,29,36,.9),0_24px_48px_-20px_rgba(31,29,36,.45)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        style={windowStyle}
      >
        <div className="flex h-5 shrink-0 items-center gap-1.5 border-b border-ink/10 px-3 sm:h-6" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-coral" />
          <span className="h-2 w-2 rounded-full bg-lime" />
          <span className="h-2 w-2 rounded-full bg-lavender" />
        </div>
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={widthLimited ? 'block h-auto w-full' : 'block min-h-0 w-full flex-1 object-cover object-top'}
        />
      </div>
    </div>
  );
}

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
  framed = false,
}: {
  image: DesignImage;
  accent: Accent;
  aspect?: string;
  className?: string;
  eager?: boolean;
  showAnnotations?: boolean;
  /** Show a real image whole, inside a browser window on the accent colour. */
  framed?: boolean;
}) {
  const a = accentClasses[accent];
  const h = hash(image.alt);
  const k1 = kinds[h % kinds.length];
  const k2 = kinds[(h >> 3) % kinds.length];
  const [c1, c2, c3] = partner[accent];

  if (image.src && framed) {
    return (
      <figure className={className}>
        <BrowserFrame image={image} accent={accent} aspect={aspect} eager={eager} />
        {image.caption && <figcaption className="mt-4 text-[0.95rem] text-smoke">{image.caption}</figcaption>}
      </figure>
    );
  }

  // A real image with known size keeps its own proportions, so it is never cropped.
  const natural = image.src && image.width && image.height;
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-[28px] ${natural ? 'border border-ink/10' : aspect} ${image.src ? 'bg-sand' : a.bg}`}
        style={natural ? { aspectRatio: `${image.width} / ${image.height}` } : undefined}
      >
        {image.src ? (
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className="frame-media h-full w-full object-cover object-top"
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
