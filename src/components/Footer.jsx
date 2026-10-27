import { company } from '../constants';
import Logo from './Logo';

const Footer = () => (
  <footer className="border-t border-neutral-200">
    <div className="container flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
      <Logo />
      <p className="text-sm text-neutral-500">
        © {new Date().getFullYear()} {company.fullName}. Tours and travel within Nepal.
      </p>
    </div>
  </footer>
);

export default Footer;
