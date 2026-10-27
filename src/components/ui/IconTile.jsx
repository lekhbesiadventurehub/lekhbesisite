import { cn } from '../../utils/cn';

// A rounded, tinted square holding an icon, used on every card.
const IconTile = ({ icon: Icon, className }) => (
  <span
    className={cn(
      'bg-brand-soft text-brand grid size-12 shrink-0 place-items-center rounded-xl',
      className,
    )}>
    <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
  </span>
);

export default IconTile;
