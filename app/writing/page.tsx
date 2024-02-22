import Link from 'next/link';
import { getAllEssays } from '@/lib/blog';

export default async function Essays(): Promise<React.JSX.Element> {
  const essays = await getAllEssays(['date', 'slug', 'title', 'tag']);

  return (
    <div className='w-full h-full flex flex-col gap-12 py-8'>
      <div className='w-full flex flex-col gap-2'>
        {essays.map((essay) => {
          return (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className='w-full flex items-center gap-4 justify-between px-2 py-4 rounded-md hover:bg-tertiary-black'
            >
              <p className='text-sm text-off-white font-medium'>
                {essay.title}
              </p>
              <div className='hidden sm:block flex h-[1px] bg-grey grow'></div>
              <p className='text-sm text-grey'>{essay.date}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
