import { CalendarDays, CarFront, Compass, Footprints, MapPin, Sparkles } from 'lucide-react';
import { trips } from '../constants';
import { cn } from '../utils/cn';
import EnquireLink from './EnquireLink';
import SectionHeading from './SectionHeading';
import IconTile from './ui/IconTile';

const TYPES = {
  tour: { label: 'Tour', icon: Compass },
  jeep: { label: 'Jeep tour', icon: CarFront },
  trek: { label: 'Trek', icon: Footprints },
  custom: { label: 'Tailor-made', icon: Sparkles },
};

const TripCard = ({ trip }) => {
  const { title, type, location, duration, icon, description, highlights } = trip;
  const { label, icon: TypeIcon } = TYPES[type];
  const custom = type === 'custom';

  return (
    <li
      className={cn(
        'flex flex-col rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg',
        custom ? 'border-dashed border-neutral-300' : 'border-neutral-200',
      )}>
      <div className="flex items-start justify-between gap-3">
        <IconTile icon={icon} />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
          <TypeIcon className="size-3.5" aria-hidden="true" />
          {label}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      {(location || duration) && (
        <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-500">
          {location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden="true" />
              {location}
            </span>
          )}
          {duration && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {duration}
            </span>
          )}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
      {highlights && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${title} highlights`}>
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-600">
              {highlight}
            </li>
          ))}
        </ul>
      )}
      <EnquireLink
        topic={custom ? 'a tailor-made trip' : `the ${title} trip`}
        label={custom ? 'Plan my trip' : 'Enquire'}
        className="mt-auto self-start pt-6"
      />
    </li>
  );
};

const Trips = () => (
  <section id="trips" className="py-20 sm:py-24">
    <div className="container">
      <SectionHeading
        eyebrow="Trips & treks"
        title="Popular"
        accent="trips"
        description="From the tea gardens of Ilam to the dry valleys of Mustang, these are our most-loved routes. Every trip can be tailored to your dates and group."
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <TripCard key={trip.title} trip={trip} />
        ))}
      </ul>
    </div>
  </section>
);

export default Trips;
