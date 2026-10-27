import { cn } from '../utils/cn';

// An eyebrow between two yellow dashes (as on the logo), a heading whose last words are in the
// brand color, and an optional intro line. `dark` is for sections on the navy background.
const SectionHeading = ({ eyebrow, title, accent, description, dark }) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <p
      className={cn(
        'flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]',
        dark ? 'text-accent' : 'text-brand',
      )}>
      <span className="bg-accent h-0.5 w-6 rounded-full" aria-hidden="true" />
      {eyebrow}
      <span className="bg-accent h-0.5 w-6 rounded-full" aria-hidden="true" />
    </p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
      {title} <span className={dark ? 'text-accent' : 'text-brand'}>{accent}</span>
    </h2>
    {description && (
      <p className={cn('mt-4', dark ? 'text-white/70' : 'text-neutral-600')}>{description}</p>
    )}
  </div>
);

export default SectionHeading;
