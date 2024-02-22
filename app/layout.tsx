import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gonzalo Soto Mallqui',
  description:
    'gonzalo soto mallqui is a designer, product leader, and developer based in toronto, canada.',
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
        <section className='md:w-[880px] w-full grow md:px-0 px-2'>
          {children}
          <Analytics />
        </section>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
