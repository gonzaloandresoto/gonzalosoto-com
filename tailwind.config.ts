import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      'off-white': '#E3E3E3',
      grey: '#A1A1A1',
      'primary-grey': '#7A7A7A',
      'secondary-grey': '#D1D1D1',
      'tertiary-grey': '#F7F7F7',
      black: '#111111',
      'secondary-black': '#282828',
      'tertiary-black': '#1C1A1C',
      'primary-blue': '#3E7AD3',
      'secondary-blue': '#C3D8F9',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
