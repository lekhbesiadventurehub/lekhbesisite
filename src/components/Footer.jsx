import { Mail, MapPin, Phone } from 'lucide-react';
import { company, contact, credentials } from '../constants';
import { phoneLink } from '../utils/enquiry';
import { InstagramIcon } from './Icons';
import Logo from './Logo';

const LINKS = [
  { icon: Phone, label: contact.phone, href: contact.phone && phoneLink() },
  { icon: Mail, label: contact.email, href: contact.email && `mailto:${contact.email}` },
  {
    icon: InstagramIcon,
    label: contact.instagram && `@${contact.instagram}`,
    href: contact.instagram && `https://www.instagram.com/${contact.instagram}/`,
    external: true,
  },
  { icon: MapPin, label: contact.address, href: contact.mapLink, external: true },
].filter(({ label }) => label);

const FooterHeading = ({ children }) => (
  <h2 className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">{children}</h2>
);

const Footer = () => (
  <footer className="bg-brand-ink text-white">
    <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <Logo dark />
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{company.slogan}</p>
      </div>
      <div className="min-w-0">
        <FooterHeading>Contact</FooterHeading>
        <ul className="mt-4 space-y-3 text-sm text-white/80">
          {LINKS.map(({ icon: Icon, label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="hover:text-accent inline-flex items-start gap-2.5 transition-colors [overflow-wrap:anywhere]">
                <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <FooterHeading>Licensed & registered</FooterHeading>
        <dl className="mt-4 space-y-3 text-sm">
          {credentials.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-white/60">{label}</dt>
              <dd className="font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <div className="border-t border-white/10">
      <p className="container py-5 text-center text-xs text-white/60 sm:text-left">
        © {new Date().getFullYear()} {company.fullName}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
