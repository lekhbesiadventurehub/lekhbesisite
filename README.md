# Lekhbesi Travels & Tours

A minimal one-page website for a travel and tours company operating within Nepal: popular trips and treks, vehicle hire with driver (Scorpio, Toyota Hiace and bus), group packages for companies and schools, and contact details.

## Built With

- React 18 + Vite
- Tailwind CSS
- Lucide icons and the Poppins font

## Getting Started

Requires Node 18 or newer.

```
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing Content

All content lives in `src/constants/index.js`:

- **`contact`:** phone and WhatsApp (+977 9851231795), email (lekhbesiadventurehub@gmail.com) and office address. Anything set to `null` is hidden. Every "Enquire" and "Book now" button opens WhatsApp with a ready-made message about that trip or vehicle, and a floating WhatsApp button sits in the corner. Without WhatsApp they fall back to email, then phone.
- **`trips`:** the trip cards. Copy an entry to add a trip; `type` is `'jeep'`, `'trek'` or `'custom'`, and the icon can be any [Lucide icon](https://lucide.dev/icons/).
- **`vehicles`**, **`packages`** and **`reasons`:** the vehicle hire, group package and "Why us" sections.

The crimson brand color is set in `tailwind.config.js` (`brand`).

## Contact Form

Messages from the contact form (name, email, optional phone and message) are delivered to `contact.email` through [FormSubmit](https://formsubmit.co/), with the visitor's address set as Reply-To. No account or API key is needed. Setting `contact.email` to `null` hides the form.

**One-time activation:** the first message sent through the form triggers an email from FormSubmit to lekhbesiadventurehub@gmail.com with an "Activate Form" button. Click it once; until then, submissions are not delivered. If sending ever fails, visitors are offered a "WhatsApp us" button instead.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`, at https://lekhbesiadventurehub.github.io/lekhbesisite/.

One-time setup:

1. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. GitHub Pages on a free account only works for **public** repositories. A private repo needs a paid plan (GitHub Pro or above).

Asset paths are relative (`base: './'` in `vite.config.js`), so the same build also works at the root of a custom domain.
