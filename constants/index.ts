import { Experience } from '@/types';

interface Image {
  image: string;
  title: string;
  location: string;
  coordinates?: string;
}

export const images: Image[] = [
  {
    image: '/postcardImages/portugal-field.jpeg',
    title: 'A great place to hike with friends and drink fresh orange juice.',
    location: 'Cabo da Roca, Portugal',
    coordinates: '38.78382° N, 9.49477° W',
  },
  {
    image: '/postcardImages/portugal-stones.jpeg',
    title: 'Incomparable serenity, balance, and peace.',
    location: 'Praia dos Beijinhos, Portugal',
    coordinates: '37.10084° N, 8.37442° W',
  },
  {
    image: '/postcardImages/japan-street.jpeg',
    title: 'Remember feeling lost, yet immersed.',
    location: 'Shinjuku, Japan',
    coordinates: '35.68776° N, 139.71484° E',
  },
  {
    image: '/postcardImages/huaraz-parked.jpeg',
    title: 'Avenida las flores.',
    location: 'Huaraz, Peru',
    coordinates: '9.52128° S, 77.52374° W',
  },
  {
    image: '/postcardImages/japan-pilons.jpeg',
    title: 'What were they trying to show me?',
    location: 'Shinjuku, Japan',
    coordinates: '35.69260° N, 139.70549° E',
  },
];

interface NavbarLink {
  title: string;
  route: string;
}

export const navbarLinks: NavbarLink[] = [
  {
    title: 'About',
    route: '/about',
  },
  {
    title: 'Writing',
    route: '/writing',
  },
  {
    title: 'Work',
    route: '/work',
  },
];

interface FooterLink {
  icon: string;
  title: string;
  link: string;
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Email',
    link: 'mailto:gonza.soto@outlook.com',
    icon: '/icons/twitter.svg',
  },
  {
    title: 'Github',
    link: 'https://github.com/gonzaloandresoto',
    icon: '/icons/github.svg',
  },

  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gonzalo-s/',
    icon: '/icons/linkedin.svg',
  },
];

export const workExperiences: Experience[] = [
  {
    role: 'Product & Design lead',
    company: 'Blossom Social',
    date: '2022 – 2023',
    description: `Blossom is Canada’s 1st social investing app backed by $1.5M. As the first hire, I led product & design from 0-1 for multiple products.`,
    image: '/experiences/blossomthumbnail.jpg',
    slug: 'blossom-social',
    active: true,
  },
  {
    role: 'Product Manager',
    company: 'Publicis Sapient',
    date: '2022',
    description: `Publicis is a digital consulting company. As a PM, I designed and oversaw the development of an internal tool to increase deliverable compliance with the WCAGs.`,
    image: '/experiences/publicisthumbnail.jpg',
    slug: 'publicis-sapient',
    active: false,
  },
  {
    role: 'President & Co-Chair',
    company: 'QMIND & CUCAI',
    date: '2021 – 2023',
    description: `I led an undergraduate organization to host Canada’s largest AI conference ($XX,000 funding) and output 35 research papers & client projects.`,
    image: '/experiences/cucaithumbnail.jpg',
    slug: 'qmind-cucai',
    active: false,
  },
  {
    role: 'Founder',
    company: 'iWannaLearn',
    date: '2024',
    description: `IWL is an AI-enhanced learning experience, built to harness the limitless knowledge of LLMs, into digestible courses. As the sole founder, I coded and designed the app.`,
    image: '/experiences/iwlthumbnail.jpg',
    slug: 'iwannalearn',
    active: false,
  },
];

export const communityExperiences: Experience[] = [
  {
    role: 'Fellow',
    company: 'The Cansbridge Fellowship',
    date: '2022',
    description: `The Cansbridge Fellowship (2.4% acceptance rate) is awarded to Canada’s brightest undergraduate students. Recipients receive $10,000 to explore internships in Asia.`,
    image: '/experiences/cansbridgethumbnail.jpg',
    slug: 'cansbridge-fellowship',
    active: false,
  },
  {
    role: 'Fellow',
    company: 'Ripple Ventures',
    date: '2022',
    description: `The Ripple Ventures Fellowship program empowers founders to build B2B software companies from idea to revenue and funding.`,
    image: '/experiences/ripplethumbnail.jpg',
    slug: 'ripple-fellowship',
    active: false,
  },
];
