import { CircleCheck } from 'lucide-react';
import { packageIncludes, packages } from '../constants';
import EnquireLink from './EnquireLink';
import SectionHeading from './SectionHeading';
import IconTile from './ui/IconTile';

const Packages = () => (
  <section id="packages" className="py-20 sm:py-24">
    <div className="container">
      <SectionHeading
        eyebrow="Group packages"
        title="For companies"
        accent="& schools"
        description="Package tours at good prices, planned from start to finish so your group only has to show up."
      />
      <ul className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {packages.map(({ title, icon, description }) => (
          <li
            key={title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <IconTile icon={icon} />
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{description}</p>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-700">
              {packageIncludes.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CircleCheck className="text-brand size-4 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <EnquireLink
              topic={`a ${title.toLowerCase().replace(/s$/, '')} package`}
              label="Get a group quote"
              className="mt-auto self-start pt-6"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Packages;
