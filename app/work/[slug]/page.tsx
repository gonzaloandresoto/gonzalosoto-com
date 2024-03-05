import Essay from '@/old/writing/[slug]/page';
import { convertMarkdownToHtml, getWorkBySlug, getAllWorks } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { redirect } from 'next/navigation';

async function Work({ params: { slug } }: { params: { slug: string } }) {
  const work = await getWorkBySlug(slug, [
    'slug',
    'title',
    'date',
    'image',
    'description',
    'content',
  ]);

  const content = await convertMarkdownToHtml(work.content || '');

  return (
    <div className='grid gap-4 section'>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-sm text-black font-medium'>
          {formatDate(work.date || '')}
        </p>
        <h1 className='text-2xl text-black font-semibold'>{work.title}</h1>
      </div>

      <div
        className='grid gap-4 essay-content'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const works = await getAllWorks();

  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default Work;
