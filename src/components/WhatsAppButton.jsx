import { contact } from '../constants';
import { whatsappLink } from '../utils/enquiry';
import { WhatsAppIcon } from './Icons';

// A floating chat button, shown once a WhatsApp number is set.
const WhatsAppButton = () =>
  contact.whatsapp ? (
    <a
      href={whatsappLink('Namaste! I would like to plan a trip.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-green-700 text-white shadow-lg transition hover:scale-105 hover:bg-green-800">
      <WhatsAppIcon className="size-7" />
    </a>
  ) : null;

export default WhatsAppButton;
