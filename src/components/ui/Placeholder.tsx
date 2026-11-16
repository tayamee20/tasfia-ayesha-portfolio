/** A visible note for content that still needs writing. Never ship real-looking filler. */
export function Placeholder({ children }: { children: string }) {
  return (
    <div className="placeholder-stripes rounded-2xl border-2 border-dashed border-ink/25 p-5">
      <p className="mb-1 font-display text-sm font-semibold text-volt">Placeholder</p>
      <p className="text-smoke">{children}</p>
    </div>
  );
}
