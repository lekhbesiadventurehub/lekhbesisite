import { Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../constants';
import { phoneLink, whatsappLink } from '../utils/enquiry';
import ContactForm from './ContactForm';
import { WhatsAppIcon } from './Icons';
import SectionHeading from './SectionHeading';
import { buttonVariants } from './ui/button';
import IconTile from './ui/IconTile';

const DETAILS = [
  {
    label: 'Phone',
    icon: Phone,
    value: contact.phone,
    href: contact.phone && phoneLink(),
  },
  {
    label: 'WhatsApp',
    icon: WhatsAppIcon,
    value: contact.whatsapp && `+${contact.whatsapp.replace(/^977/, '977 ')}`,
    href: contact.whatsapp && whatsappLink(),
    external: true,
  },
  {
    label: 'Email',
    icon: Mail,
    // On narrow screens, let a long address wrap at the @ rather than mid-word.
    value: contact.email && contact.email.replace('@', '​@'),
    href: contact.email && `mailto:${contact.email}`,
  },
  { label: 'Office', icon: MapPin, value: contact.address },
].filter(({ value }) => value);

const Contact = () => (
  <section id="contact" className="border-t border-neutral-200 bg-neutral-50 py-20 sm:py-24">
    <div className="container">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's plan"
        accent="your trip"
        description="Tell us where you want to go, when, and how many of you are travelling. We'll come back with a plan and a price."
      />
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col rounded-2xl bg-neutral-900 p-6 text-white sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight">Ready to travel?</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">
            Call or WhatsApp us for a quick reply, or send a message and we’ll get back to you.
          </p>
          <ul className="mt-8 space-y-5">
            {DETAILS.map(({ label, icon, value, href, external }) => (
              <li key={label} className="flex items-center gap-4">
                <IconTile icon={icon} className="size-11 bg-white/10 text-white" />
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-sm font-semibold transition-colors [overflow-wrap:anywhere] hover:text-red-300 sm:text-base">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold sm:text-base">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {(contact.whatsapp || contact.phone) && (
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {contact.whatsapp && (
                <a
                  href={whatsappLink('Namaste! I would like to plan a trip.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: 'whatsapp' })}>
                  <WhatsAppIcon className="size-4" /> WhatsApp us
                </a>
              )}
              {contact.phone && (
                <a href={phoneLink()} className={buttonVariants({ variant: 'light' })}>
                  <Phone className="size-4" aria-hidden="true" /> Call us
                </a>
              )}
            </div>
          )}
        </div>
        {contact.email && <ContactForm />}
      </div>
    </div>
  </section>
);

export default Contact;
