import {
  BadgePercent,
  Building2,
  Bus,
  CarFront,
  MapPinned,
  Mountain,
  MountainSnow,
  Route,
  School,
  ShieldCheck,
  Signpost,
  Tent,
  Van,
  Waves,
} from 'lucide-react';

// All of the site's content lives here: edit this file to update it.

export const company = {
  name: 'Lekhbesi',
  tagline: 'Travels & Tours',
  fullName: 'Lekhbesi Travels & Tours',
};

// Anything set to null is hidden from the contact section. Every "Enquire" button opens
// WhatsApp with a ready-made message (or email, then phone, if WhatsApp is null), and the
// contact form delivers messages to `email` (see README).
export const contact = {
  phone: '+977 9851231795',
  whatsapp: '9779851231795', // digits only, with the country code
  email: 'lekhbesiadventurehub@gmail.com',
  address: null, // TODO: add the office address, e.g. 'Kathmandu, Nepal'
};

export const navLinks = [
  { name: 'Trips', hash: '#trips' },
  { name: 'Vehicle Hire', hash: '#vehicles' },
  { name: 'Group Packages', hash: '#packages' },
  { name: 'Why Us', hash: '#why-us' },
  { name: 'Contact', hash: '#contact' },
];

// `type`: 'jeep', 'trek' or 'custom'. `duration` is a typical length; adjust to match your itineraries.
export const trips = [
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
      'Somewhere else in Nepal in mind? Tell us where, when and who is coming, and we will plan the route, the vehicle and the stays.',
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
    title: 'Nepal only',
    icon: MapPinned,
    description:
      "We don't sell trips abroad. Nepal is all we do, so we know its roads, seasons and stays.",
  },
  {
    title: 'Drivers who know the roads',
    icon: ShieldCheck,
    description: 'Experienced drivers for highways and rough mountain tracks alike.',
  },
  {
    title: 'Fair prices',
    icon: BadgePercent,
    description: 'Honest quotes, with good rates for corporate and school groups.',
  },
  {
    title: 'Trips your way',
    icon: Route,
    description: 'Every itinerary planned around your dates, group size and budget.',
  },
];
