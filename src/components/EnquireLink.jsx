import { ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { enquiryLink } from '../utils/enquiry';
import { buttonVariants } from './ui/button';

const EnquireLink = ({ topic, label = 'Enquire', className }) => {
  const { href, external } = enquiryLink(topic);

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={`${label} about ${topic}`}
      className={buttonVariants({ variant: 'link', size: 'none', className: cn('group', className) })}>
      {label}
      <ArrowRight
        className="size-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
};

export default EnquireLink;
