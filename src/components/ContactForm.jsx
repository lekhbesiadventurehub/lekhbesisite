import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { company, contact } from '../constants';
import { cn } from '../utils/cn';
import { whatsappLink } from '../utils/enquiry';
import { buttonVariants } from './ui/button';

// FormSubmit (formsubmit.co) forwards each message to this inbox, with the visitor's
// address as Reply-To. The first message sends an activation link to the inbox that
// has to be clicked once before messages start arriving (see README).
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`;

const sendMessage = async ({ name, email, phone, message, honeypot }) => {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name,
      email,
      phone: phone || 'Not given',
      message,
      _subject: `New enquiry from ${name} via the ${company.fullName} website`,
      _template: 'table',
      // FormSubmit drops submissions where this hidden field was filled in by a bot.
      _honey: honeypot,
    }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || String(result.success) !== 'true') {
    throw new Error(result.message || `Request failed with status ${response.status}`);
  }
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

const validate = ({ name, email, phone, message }) => {
  const errors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName) errors.name = 'Name is required';
  else if (trimmedName.length > 100) errors.name = 'Name is too long';

  if (trimmedEmail.length > 254) errors.email = 'Email is too long';
  else if (!trimmedEmail) errors.email = 'Email is required';
  else if (!EMAIL_PATTERN.test(trimmedEmail)) errors.email = 'Must be a valid email';

  if (trimmedPhone && !PHONE_PATTERN.test(trimmedPhone))
    errors.phone = 'Must be a valid phone number';

  if (!trimmedMessage) errors.message = 'Message is required';
  else if (trimmedMessage.length > 5000)
    errors.message = 'Please keep your message under 5,000 characters';

  return errors;
};

const inputClass =
  'mt-2 flex w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base placeholder:text-neutral-400 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/20 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm';

const Field = ({ id, label, optional, error, children }) => (
  <div>
    <label htmlFor={id} className={cn('text-sm font-medium', error && 'text-red-600')}>
      {label}
      {optional && <span className="font-normal text-neutral-400"> (optional)</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const ContactForm = ({ className }) => {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const nextValues = { ...values, [event.target.name]: event.target.value };
    setValues(nextValues);
    // Validate on submit, then re-validate as the visitor fixes their input.
    if (submitted) setErrors(validate(nextValues));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      event.currentTarget.elements.namedItem(firstInvalid).focus();
      return;
    }

    const name = values.name.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();
    const message = values.message.trim();
    const honeypot = event.currentTarget.elements.namedItem('_honey').value;

    setIsSubmitting(true);
    try {
      await sendMessage({ name, email, phone, message, honeypot });
      toast.success("Thanks for reaching out! We'll get back to you soon.");
      setValues(EMPTY_FORM);
      setErrors({});
      setSubmitted(false);
    } catch {
      toast.error('Could not send your message. Please try again or contact us directly.', {
        action: contact.whatsapp
          ? {
              label: 'WhatsApp us',
              onClick: () => window.open(whatsappLink(message), '_blank', 'noopener'),
            }
          : {
              label: 'Email us',
              onClick: () => {
                const subject = encodeURIComponent(`Enquiry from ${name}`);
                window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
              },
            },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Links each input to its error message for screen readers.
  const describe = (name) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-title"
      className={cn(
        'flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8',
        className,
      )}>
      <h3 id="contact-form-title" className="text-xl font-semibold">
        Send us a message
      </h3>
      {/* Spam trap: hidden from people, but bots tend to fill it in. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        defaultValue=""
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={handleChange}
            className={cn(inputClass, errors.name && 'border-red-600')}
            {...describe('name')}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="98XXXXXXXX"
            value={values.phone}
            onChange={handleChange}
            className={cn(inputClass, errors.phone && 'border-red-600')}
            {...describe('phone')}
          />
        </Field>
      </div>
      <Field id="email" label="Email" error={errors.email}>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          className={cn(inputClass, errors.email && 'border-red-600')}
          {...describe('email')}
        />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          placeholder="Where would you like to go, when, and how many people?"
          value={values.message}
          onChange={handleChange}
          className={cn(inputClass, 'h-36 resize-none', errors.message && 'border-red-600')}
          {...describe('message')}
        />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={buttonVariants({ className: 'self-start disabled:opacity-60' })}>
        {isSubmitting ? 'Sending…' : 'Send message'} <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
};

export default ContactForm;
