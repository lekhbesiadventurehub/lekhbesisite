import { Check } from 'lucide-react';
import { vehicleFeatures, vehicles } from '../constants';
import EnquireLink from './EnquireLink';
import SectionHeading from './SectionHeading';
import IconTile from './ui/IconTile';

const Vehicles = () => (
  <section id="vehicles" className="border-y border-neutral-200 bg-neutral-50 py-20 sm:py-24">
    <div className="container">
      <SectionHeading
        eyebrow="Vehicle hire"
        title="Hire a vehicle"
        accent="with a driver"
        description="Comfortable vehicles and experienced drivers for tours, family trips and events, anywhere in Nepal."
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {vehicles.map(({ title, bestFor, icon, description }) => (
          <li
            key={title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <IconTile icon={icon} />
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="text-brand mt-1 text-xs font-semibold uppercase tracking-wider">
              {bestFor}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-neutral-700">
              {vehicleFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="text-brand size-4" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <EnquireLink
              topic={title}
              label="Book now"
              className="mt-auto self-start pt-6"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Vehicles;
