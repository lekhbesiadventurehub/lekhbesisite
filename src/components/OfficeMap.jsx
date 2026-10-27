import { MapPin, Navigation } from 'lucide-react';
import { company, contact, serviceAreas } from '../constants';
import { buttonVariants } from './ui/button';

// Google's keyless embed: a pin at the office coordinates.
const EMBED_URL = `https://maps.google.com/maps?q=${contact.mapCoordinates}&z=16&output=embed`;

const OfficeMap = () => (
  <div className="grid overflow-hidden rounded-2xl border border-neutral-200 bg-white md:grid-cols-[2fr_3fr]">
    <div className="flex flex-col p-6 sm:p-8">
      <h3 className="text-xl font-semibold">Visit our office</h3>
      <p className="mt-3 flex items-start gap-2 text-sm text-neutral-600">
        <MapPin className="text-brand mt-0.5 size-4 shrink-0" aria-hidden="true" />
        {contact.address}
      </p>
      {serviceAreas.length > 0 && (
        <>
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-neutral-500">
            Serving
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Areas we serve">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="border-accent/60 bg-accent-soft text-brand-ink rounded-full border px-2.5 py-0.5 text-xs font-medium">
                {area}
              </li>
            ))}
          </ul>
        </>
      )}
      {contact.mapLink && (
        <div className="mt-auto pt-6">
          <a
            href={contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'outline' })}>
            <Navigation className="size-4" aria-hidden="true" /> Get directions
          </a>
        </div>
      )}
    </div>
    <iframe
      title={`Map showing the ${company.fullName} office`}
      src={EMBED_URL}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-72 w-full border-0 md:h-full md:min-h-72"
    />
  </div>
);

export default OfficeMap;
