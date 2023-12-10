import Link from 'next/link';
import { navbarLinks } from '@/constants';

export default function Navbar() {
  return (
    <div className='w-screen flex justify-center'>
      <div className='w-[640px] flex gap-4 justify-end pt-8'>
        {navbarLinks.map((item, index) => (
          <Link
            key={index}
            href={item.route}
          >
            <p className='text-white hover:text-off-white'>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
