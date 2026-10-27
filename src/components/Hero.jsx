import { ArrowRight, MapPinned } from 'lucide-react';
import { contact } from '../constants';
import { enquiryLink } from '../utils/enquiry';
import { WhatsAppIcon } from './Icons';
import { buttonVariants } from './ui/button';

// Two ridgelines that fade into the next section's background.
const Mountains = ({ className }) => (
  <svg
    viewBox="0 0 1440 140"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={className}>
    <path
      className="fill-neutral-100"
      d="M0 140V78l110-38 90 30 140-58 110 50 120-34 100 40 150-62 120 54 110-28 120 44 130-50 140 40v74z"
    />
    <path
      className="fill-neutral-50"
      d="M0 140v-34l140-26 120 22 150-40 130 36 140-24 120 30 160-38 150 34 130-22 200 30v32z"
    />
  </svg>
);

const Hero = () => {
  const { href, external } = enquiryLink('planning a trip');

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container pb-32 pt-16 text-center sm:pb-40 sm:pt-24">
        <p className="border-brand/20 bg-brand-soft text-brand inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
          <MapPinned className="size-3.5" aria-hidden="true" />
          Travels & tours · Nepal only
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl sm:leading-[1.1]">
          Explore Nepal with people who <span className="text-brand">know the road</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-neutral-600 sm:text-lg">
          Join us for an adventurous ride across Nepal. Experienced drivers, hotels and vehicles
          arranged to suit you, and a journey that’s safe and memorable from start to finish.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#trips" className={buttonVariants()}>
            Explore trips <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={buttonVariants({ variant: contact.whatsapp ? 'whatsapp' : 'outline' })}>
            {contact.whatsapp && <WhatsAppIcon className="size-4" />}
            {contact.whatsapp ? 'WhatsApp us' : 'Plan my trip'}
          </a>
        </div>
      </div>
      <Mountains className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full sm:h-28" />
    </section>
  );
};

export default Hero;
