import { reasons } from '../constants';
import SectionHeading from './SectionHeading';
import IconTile from './ui/IconTile';

const WhyUs = () => (
  <section id="why-us" className="bg-brand-ink py-20 text-white sm:py-24">
    <div className="container">
      <SectionHeading eyebrow="Why travel with us" title="People who" accent="know the road" dark />
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ title, icon, description }) => (
          <li key={title} className="flex flex-col items-center text-center">
            <IconTile icon={icon} className="text-accent bg-white/10" />
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyUs;
