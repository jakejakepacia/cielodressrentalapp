export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-rose-strong)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-ink-soft)]">
        {description}
      </p>
    </div>
  );
}
