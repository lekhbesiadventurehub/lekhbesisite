import { contact } from '../constants';

export const whatsappLink = (message) =>
  `https://wa.me/${contact.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const phoneLink = () => `tel:${contact.phone.replace(/[^\d+]/g, '')}`;

// Where an "Enquire" button about `topic` should go: WhatsApp with a ready-made message,
// then email, then phone. Until any of those are set, it scrolls to the contact section.
export const enquiryLink = (topic) => {
  const message = `Namaste! I would like to know more about ${topic}.`;
  if (contact.whatsapp) return { href: whatsappLink(message), external: true };
  if (contact.email) {
    const subject = encodeURIComponent(`Enquiry: ${topic}`);
    return { href: `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(message)}` };
  }
  if (contact.phone) return { href: phoneLink() };
  return { href: '#contact' };
};
