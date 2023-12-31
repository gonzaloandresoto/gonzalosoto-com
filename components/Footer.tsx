import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/constants';

export default function Footer() {
  return (
    <div className='w-screen flex justify-center md:px-0 px-4'>
      <div className='w-[640px] flex gap-6 sm:justify-end justify-center pb-10 pt-4'>
        {footerLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target='_blank'
          >
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt={item.title}
              className='hover:scale-110'
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
