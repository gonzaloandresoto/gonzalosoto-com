interface Image {
  image: string;
  title: string;
  location: string;
  coordinates?: string;
}

export const images: Image[] = [
  {
    image: '/postcardImages/portugal-field.jpg',
    title: 'A great place to hike with friends and drink fresh orange juice.',
    location: 'Cabo da Roca, Portugal',
    coordinates: '38.78382° N, 9.49477° W',
  },
  {
    image: '/postcardImages/portugal-stones.jpg',
    title: 'Incomparable serenity, balance, and peace.',
    location: 'Praia dos Beijinhos, Portugal',
    coordinates: '37.10084° N, 8.37442° W',
  },
  {
    image: '/postcardImages/japan-street.jpg',
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
    image: '/postcardImages/japan-pilons.jpg',
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
    route: '/blog',
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
    title: 'Twitter',
    link: 'https://twitter.com/gonzalosm77',
    icon: '/icons/twitter.svg',
  },
  {
    title: 'Github',
    link: 'https://github.com/gonzaloandresoto',
    icon: '/icons/github.svg',
  },
  {
    title: 'Medium',
    link: 'https://medium.com/@gonzalosoto7',
    icon: '/icons/medium.svg',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gonzalo-s/',
    icon: '/icons/linkedin.svg',
  },
];
