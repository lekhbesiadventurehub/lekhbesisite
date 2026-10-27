import {
  BadgeCheck,
  Bird,
  Building2,
  Bus,
  CarFront,
  Footprints,
  Headset,
  Leaf,
  MapIcon,
  Mountain,
  MountainSnow,
  PlaneTakeoff,
  Route,
  School,
  ShieldCheck,
  Signpost,
  Sunrise,
  Tent,
  Van,
  Waves,
} from 'lucide-react';

// All of the site's content lives here: edit this file to update it.

export const company = {
  name: 'Lekhbesi',
  tagline: 'Adventure Hub',
  fullName: 'Lekhbesi Adventure Hub',
  slogan: 'One call. One team. Complete travel, from roads to peaks.',
};

// Anything set to null is hidden from the contact section. Every "Enquire" button opens
// WhatsApp with a ready-made message (or email, then phone, if WhatsApp is null), and the
// contact form delivers messages to `email` (see README).
export const contact = {
  phone: '+977 985-2076345',
  whatsapp: '9779852076345', // digits only, with the country code
  email: 'lekhbesiadventurehub@gmail.com',
  instagram: 'lekhbesi_adventure_hub', // the handle, without the @
  address: 'Sangit Chowk, Itahari 56705, Sunsari',
  // The office pin on Google Maps, and its latitude and longitude for the embedded map.
  mapLink: 'https://maps.app.goo.gl/kQfbScepM6uvxjwb6',
  mapCoordinates: '26.6635939,87.2758318',
};

export const serviceAreas = ['Itahari', 'Biratnagar', 'Dharan', 'Dhankuta', 'Jhapa'];

export const credentials = [
  { label: 'Tourism License', value: '03/82/83' },
  { label: 'Company Registration', value: '393103' },
];

export const navLinks = [
  { name: 'Services', hash: '#services' },
  { name: 'Trips', hash: '#trips' },
  { name: 'Vehicle Hire', hash: '#vehicles' },
  { name: 'Group Packages', hash: '#packages' },
  { name: 'Why Us', hash: '#why-us' },
  { name: 'Contact', hash: '#contact' },
];

// A card links to `hash` on the page, or opens an enquiry about `enquiry` if there is no hash.
export const services = [
  {
    title: 'Tours',
    icon: MapIcon,
    description:
      'From the serene tea gardens of Ilam to the sacred temples of Kathmandu, from the wildlife of Koshi Tappu to the spiritual heights of Pathibhara.',
    cta: 'See our tours',
    hash: '#trips',
  },
  {
    title: 'Air Tickets',
    icon: PlaneTakeoff,
    description:
      'No long queues, no confusion. Just fast, reliable ticketing from a team that knows travel inside out.',
    cta: 'Book a ticket',
    enquiry: 'booking air tickets',
  },
  {
    title: 'Vehicle Hiring',
    icon: CarFront,
    description:
      "Whether you need a quick ride across town or a full road trip through the hills, we've got the right vehicle for your journey.",
    cta: 'See our vehicles',
    hash: '#vehicles',
  },
  {
    title: 'Trekking',
    icon: Footprints,
    description:
      "We don't just walk the trail. We make the whole journey meaningful, safe and unforgettable.",
    cta: 'See our treks',
    hash: '#trips',
  },
];

// `type`: 'tour', 'jeep', 'trek' or 'custom'. `duration` is a typical length; adjust to match your itineraries.
export const trips = [
  {
    title: 'Ilam',
    type: 'tour',
    location: 'Ilam, Koshi',
    duration: '2 days',
    icon: Leaf,
    description:
      'Rolling tea gardens, misty hills and sunrise views towards Kanchenjunga, a short drive from Itahari.',
    highlights: ['Kanyam', 'Antu Danda', 'Mai Pokhari'],
  },
  {
    title: 'Pathibhara',
    type: 'tour',
    location: 'Taplejung, Koshi',
    duration: '3 days',
    icon: Sunrise,
    description:
      'A pilgrimage to Pathibhara Devi, one of the most revered temples in Nepal, high on a ridge facing Kanchenjunga.',
    highlights: ['Phungling', 'Pathibhara Devi Temple', '3,794 m'],
  },
  {
    title: 'Koshi Tappu',
    type: 'tour',
    location: 'Sunsari, Koshi',
    duration: '1 day',
    icon: Bird,
    description:
      'Wetlands and grasslands along the Sapta Koshi, home to wild water buffalo and hundreds of bird species.',
    highlights: ['Wild water buffalo', 'Birdwatching', 'Koshi Barrage'],
  },
  {
    title: 'Mustang',
    type: 'jeep',
    location: 'Mustang, Gandaki',
    duration: '7 days',
    icon: Mountain,
    description:
      'Follow the Kali Gandaki river into the dry trans-Himalayan valleys of Mustang, from Kagbeni and Muktinath Temple to the walled city of Lo Manthang.',
    highlights: ['Kagbeni', 'Muktinath Temple', 'Lo Manthang'],
  },
  {
    title: 'Manang',
    type: 'jeep',
    location: 'Manang, Gandaki',
    duration: '6 days',
    icon: MountainSnow,
    description:
      'Drive up the Marsyangdi valley through Chame and Pisang to Manang village, in the rain shadow of the Annapurnas, with a walk to Gangapurna Lake.',
    highlights: ['Chame', 'Pisang', 'Gangapurna Lake'],
  },
  {
    title: 'Rara Lake',
    type: 'jeep',
    location: 'Mugu, Karnali',
    duration: '8 days',
    icon: Waves,
    description:
      'Travel deep into Karnali to Rara, the largest lake in Nepal, sitting at 2,990 m and ringed by pine forest in Rara National Park.',
    highlights: ['Rara Lake', 'Rara National Park', 'Murma Top'],
  },
  {
    title: 'Annapurna Base Camp',
    type: 'trek',
    location: 'Kaski, Gandaki',
    duration: '8 days',
    icon: Signpost,
    description:
      'Trek through Gurung villages and rhododendron forest into the Annapurna Sanctuary, to a base camp ringed by Annapurna I and Machapuchare.',
    highlights: ['Ghandruk', 'Machapuchare Base Camp', 'ABC, 4,130 m'],
  },
  {
    title: 'Mardi Himal',
    type: 'trek',
    location: 'Kaski, Gandaki',
    duration: '5 days',
    icon: Tent,
    description:
      'A shorter, quieter trek along a forested ridge to Mardi Himal Base Camp, with close-up views of Machapuchare all the way.',
    highlights: ['Forest Camp', 'High Camp', 'Mardi Himal Base Camp'],
  },
  {
    title: 'Your own route',
    type: 'custom',
    icon: Route,
    description:
      'Somewhere else in mind? Tell us where, when and who is coming, and we will plan the route, the tickets, the vehicle and the stays.',
  },
];

export const vehicles = [
  {
    title: 'Scorpio Hire',
    bestFor: 'Families & small groups',
    icon: CarFront,
    description:
      "A sturdy SUV for Nepal's rough mountain roads, and our go-to for Mustang, Manang and Rara.",
  },
  {
    title: 'Toyota Hiace Hire',
    bestFor: 'Medium-sized groups',
    icon: Van,
    description:
      'A comfortable van for highway trips, airport pick-ups and family tours, with room for luggage.',
  },
  {
    title: 'Bus Hire',
    bestFor: 'Large groups',
    icon: Bus,
    description: 'Buses for school trips, office outings, weddings and other big-group travel.',
  },
];

// Shown on every vehicle card.
export const vehicleFeatures = ['Experienced driver', 'Anywhere in Nepal'];

export const packages = [
  {
    title: 'Corporate Tours',
    icon: Building2,
    description:
      'Team outings, retreats and incentive trips that give your people a proper break from the office.',
  },
  {
    title: 'School & College Tours',
    icon: School,
    description:
      'Educational tours and excursions, with safe transport and careful planning for students and teachers.',
  },
];

// Shown on every group package card.
export const packageIncludes = [
  'Transport with experienced drivers',
  'Hotels and meals arranged',
  'Itinerary planned around your group',
  'Good group prices',
];

export const reasons = [
  {
    title: 'Licensed & registered',
    icon: BadgeCheck,
    description:
      "A licensed travel agency and registered company, so you know exactly who you're travelling with.",
  },
  {
    title: 'One call, one team',
    icon: Headset,
    description: 'Tickets, vehicles, hotels and guides, all arranged by the same people.',
  },
  {
    title: 'Drivers who know the roads',
    icon: ShieldCheck,
    description: 'Experienced drivers for highways and rough mountain tracks alike.',
  },
  {
    title: 'Trips your way',
    icon: Route,
    description: 'Every itinerary planned around your dates, group size and budget, at a fair price.',
  },
];
