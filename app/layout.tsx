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
        className={`${inter.className} min-h-screen min-w-screen flex flex-col items-center bg-black`}
      >
        <Navbar />
        <section className='w-[640px] grow'>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
