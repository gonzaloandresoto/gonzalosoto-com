import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gonzalo Soto',
  description:
    'gonzalo is a designer, product leader, and developer based in toronto, canada.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen min-w-screen flex flex-col items-center bg-black overflow-x-hidden`}
      >
        <Navbar />
        <section className='md:w-[640px] w-full grow md:px-0 px-4'>
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
