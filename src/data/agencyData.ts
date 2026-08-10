import { AgencyPillar, ContactInfo, NavLink, StatItem } from '../types';

export const BUSINESS_INFO: ContactInfo = {
  phone: '(551) 428-2590',
  phoneRaw: '5514282590',
  email: 'khandigitaldesign@gmail.com',
  location: 'New Jersey, USA',
  state: 'NJ',
};

export const NAV_LINKS: NavLink[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const AGENCY_STATS: StatItem[] = [
  {
    id: 'stat-bespoke',
    value: 100,
    suffix: '%',
    label: 'Custom Architecture',
    description: 'No generic themes or visual bloat.',
  },
  {
    id: 'stat-fps',
    value: 60,
    suffix: ' FPS',
    label: 'Smooth Motion',
    description: 'Silky 60fps animations engineered for performance.',
  },
  {
    id: 'stat-speed',
    value: 99,
    suffix: '+',
    label: 'Lighthouse Target',
    description: 'Lightning speed and optimized core web vitals.',
  },
  {
    id: 'stat-nj',
    value: 1,
    suffix: ' HQ',
    label: 'New Jersey Roots',
    description: 'Direct partner-level collaboration.',
  },
];

export const AGENCY_PILLARS: AgencyPillar[] = [
  {
    id: 'bespoke',
    number: '01',
    title: 'Bespoke Code & Architecture',
    description:
      'We reject cookie-cutter website builders and bloated generic templates. Every site we craft is custom coded from the ground up for maximum aesthetic distinction, security, and lightning-fast loading speeds.',
    tags: ['Custom React', 'Tailwind Styling', 'Clean Architecture', 'Zero Bloat'],
  },
  {
    id: 'motion',
    number: '02',
    title: 'Precision Motion Engineering',
    description:
      'Animation should elevate design, never distract. We integrate subtle scroll triggers, micro-interactions, and fluid transitions that make visiting your site an unforgettable tactile experience.',
    tags: ['60fps Performance', 'Framer Motion', 'Interactive Physics', 'Accessible'],
  },
  {
    id: 'nj-roots',
    number: '03',
    title: 'New Jersey Craft, Global Reach',
    description:
      'Based in New Jersey, Khan Digital provides transparent, direct-contact partnerships. You work directly with senior designers and developers focused on translating your brand vision into measurable web authority.',
    tags: ['Direct Communication', 'NJ Regional Pride', 'Dedicated Support', 'Tailored Strategy'],
  },
];
