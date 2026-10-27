import logo from '../assets/logo-sm.webp';
import { company } from '../constants';
import { cn } from '../utils/cn';

// The round badge, with the name beside it since the badge's own lettering is too small to read.
const Logo = ({ dark }) => (
  <a href="#top" className="flex items-center gap-3" aria-label={`${company.fullName}, back to top`}>
    <img src={logo} alt="" width={160} height={160} className="size-14" />
    <span className="leading-none">
      <span
        className={cn(
          'block text-lg font-bold uppercase tracking-wide',
          !dark && 'text-brand-ink',
        )}>
        {company.name}
      </span>
      <span
        className={cn(
          'mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em]',
          dark ? 'text-accent' : 'text-brand',
        )}>
        {company.tagline}
      </span>
    </span>
  </a>
);

export default Logo;
