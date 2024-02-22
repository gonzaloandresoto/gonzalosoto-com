import { getAllCases } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';

export default async function Work() {
  const cases = await getAllCases(['date', 'slug', 'title', 'tag', 'image']);
  return (
    <div className='w-full h-full flex flex-col gap-12 py-8'>
      <div className='w-full flex flex-col gap-2'>
        {cases.map((item) => {
          return (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className='w-ful flex flex-col gap-2  rounded-md'
            >
              <div className='p-2 bg-secondary-black'>
                <Image
                  src={item.image || ''}
                  alt={item.title || ''}
                  width={632}
                  height={412}
                />
              </div>

              <div className='flex justify-center w-full pt-3'>
                <p className='text-xs text-off-white font-regular text-right'>
                  {item.title || ''}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
