import { ArrowRight } from 'lucide-react';
import { company, services } from '../constants';
import EnquireLink from './EnquireLink';
import SectionHeading from './SectionHeading';
import { buttonVariants } from './ui/button';
import IconTile from './ui/IconTile';

const Services = () => (
  <section id="services" className="border-b border-neutral-200 bg-neutral-50 py-20 sm:py-24">
    <div className="container">
      <SectionHeading
        eyebrow="What we do"
        title="Comprehensive"
        accent="travel solution"
        description={company.slogan}
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, icon, description, cta, hash, enquiry }) => (
          <li
            key={title}
            className="border-t-accent flex flex-col rounded-2xl border border-t-4 border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <IconTile icon={icon} />
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
            {hash ? (
              <a
                href={hash}
                className={buttonVariants({
                  variant: 'link',
                  size: 'none',
                  className: 'group mt-auto self-start pt-6',
                })}>
                {cta}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <EnquireLink topic={enquiry} label={cta} className="mt-auto self-start pt-6" />
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
