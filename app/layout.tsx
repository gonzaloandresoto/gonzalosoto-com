import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gonzalo Soto Mallqui',
  description:
    'Gonzalo Soto Mallqui is an engineer, designer, and product leader based in Toronto, Canada.',
  openGraph: {
    images: '/opengraph-image.jpg',
  },
  twitter: {
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen min-w-screen flex flex-col items-center bg-tertiary-grey overflow-x-hidden no-scrollbar`}
      >
        {/* <Navbar /> */}
        <section className='md:w-[720px] w-full grow md:px-2 px-0'>
          {children}
          <Analytics />
        </section>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
