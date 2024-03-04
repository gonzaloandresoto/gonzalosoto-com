import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/constants';

export default function Footer() {
  return (
    <div className='flex grow gap-8 items-center section'>
      {footerLinks.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target='_blank'
          className={`w-full flex items-center justify-center bg-tertiary-grey hover:bg-secondary-blue rounded-lg p-4 px-4 py-4 text-sm text-primary-grey hover:text-primary-blue font-semibold font-lexend-deca hover:underline hover:decoration-wavy underline-offset-4 ${
            item.title === 'Github' && '!bg-secondary-blue !text-primary-blue'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
