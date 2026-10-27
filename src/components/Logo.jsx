import { MountainSnow } from 'lucide-react';
import { company } from '../constants';

const Logo = () => (
  <a href="#top" className="flex items-center gap-2.5" aria-label={`${company.fullName}, back to top`}>
    <span className="bg-brand grid size-9 place-items-center rounded-lg text-white">
      <MountainSnow className="size-5" strokeWidth={2} aria-hidden="true" />
    </span>
    <span className="leading-none">
      <span className="block text-lg font-semibold tracking-tight">{company.name}</span>
      <span className="text-brand mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em]">
        {company.tagline}
      </span>
    </span>
  </a>
);

export default Logo;
