import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../constants';
import { cn } from '../utils/cn';
import Logo from './Logo';
import { buttonVariants } from './ui/button';

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <a
        href="#main-content"
        className="bg-brand fixed left-4 top-4 z-50 -translate-y-20 rounded px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0">
        Skip to main content
      </a>
      <div className="container flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex gap-8 text-sm text-neutral-600">
            {navLinks.map(({ name, hash }) => (
              <li key={name}>
                <a href={hash} className="hover:text-brand transition-colors">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className={buttonVariants({ size: 'sm', className: 'hidden lg:inline-flex' })}>
          Enquire now
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          className="-mr-2 grid size-10 place-items-center rounded-full hover:bg-neutral-100 lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={cn('border-t border-neutral-200 bg-white lg:hidden', !open && 'hidden')}>
        <ul className="container py-2">
          {navLinks.map(({ name, hash }) => (
            <li key={name} className="border-neutral-100 [&:not(:last-child)]:border-b">
              <a
                href={hash}
                onClick={() => setOpen(false)}
                className="hover:text-brand block py-3 text-sm font-medium text-neutral-700">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
