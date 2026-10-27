import { cn } from '../../utils/cn';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors';

const variants = {
  brand: 'bg-brand text-white hover:bg-brand-dark',
  accent: 'bg-accent text-brand-ink hover:bg-accent-dark',
  outline: 'border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900',
  whatsapp: 'bg-green-700 text-white hover:bg-green-800',
  light: 'bg-white text-neutral-900 hover:bg-neutral-100',
  link: 'text-brand hover:text-brand-dark',
};

const sizes = {
  default: 'h-11 px-6',
  sm: 'h-9 px-4',
  none: '',
};

// Button styles that can be applied to <button> and <a> elements alike.
export const buttonVariants = ({ variant = 'brand', size = 'default', className } = {}) =>
  cn(base, variants[variant], sizes[size], className);
