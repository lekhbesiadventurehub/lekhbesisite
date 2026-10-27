// A small red eyebrow, a heading whose last words are in red, and an optional intro line.
const SectionHeading = ({ eyebrow, title, accent, description }) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <p className="text-brand text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
      {title} <span className="text-brand">{accent}</span>
    </h2>
    {description && <p className="mt-4 text-neutral-600">{description}</p>}
  </div>
);

export default SectionHeading;
