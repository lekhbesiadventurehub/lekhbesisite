import { ArrowRight, BadgeCheck, Mountain } from 'lucide-react';
import logo from '../assets/logo.webp';
import { company, contact, credentials } from '../constants';
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
      className="fill-brand-soft"
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
      <div className="container grid items-center gap-10 pb-32 pt-12 text-center sm:pb-40 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-20 lg:text-left">
        <div>
          <p className="border-accent/50 bg-accent-soft text-brand-ink inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            <Mountain className="size-3.5" aria-hidden="true" />
            From roads to peaks
          </p>
          <h1 className="text-brand-ink mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl sm:leading-[1.1] lg:mx-0 lg:text-[3.25rem]">
            One call. One team. <span className="text-brand sm:block">Complete travel.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-600 sm:text-lg lg:mx-0">
            Tours, air tickets, vehicle hire and treks, all arranged by {company.fullName}. From
            the tea gardens of Ilam to the base camps of the Annapurnas, we plan the trip and take
            care of the details.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#services" className={buttonVariants()}>
              Explore services <ArrowRight className="size-4" aria-hidden="true" />
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
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-neutral-500 lg:justify-start">
            <BadgeCheck className="text-brand size-4" aria-hidden="true" />
            {credentials.map(({ label, value }, index) => (
              <span key={label}>
                {index > 0 && <span aria-hidden="true">· </span>}
                {label} {value}
              </span>
            ))}
          </p>
        </div>
        <div className="relative order-first mx-auto w-48 sm:w-64 lg:order-none lg:w-full lg:max-w-md">
          {/* A soft sun-yellow glow behind the badge. */}
          <div
            className="bg-accent/30 absolute inset-[6%] rounded-full blur-3xl"
            aria-hidden="true"
          />
          <img
            src={logo}
            alt={`${company.fullName} logo`}
            width={800}
            height={800}
            className="relative w-full drop-shadow-xl"
          />
        </div>
      </div>
      <Mountains className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full sm:h-28" />
    </section>
  );
};

export default Hero;
