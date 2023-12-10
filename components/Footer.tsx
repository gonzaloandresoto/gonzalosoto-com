import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/constants';

export default function Footer() {
  return (
    <div className='w-screen flex justify-center'>
      <div className='w-[640px] flex gap-6 justify-end pb-8'>
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
