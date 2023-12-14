import {
  getEssayBySlug,
  convertMarkdownToHtml,
  getAllEssays,
} from '@/lib/blog';

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title, description } = await getEssayBySlug(slug);
  return {
    title,
    description,
  };
}

async function Essay({ params: { slug } }: { params: { slug: string } }) {
  const essay = await getEssayBySlug(slug, [
    'slug',
    'title',
    'date',
    'image',
    'description',
    'content',
  ]);

  const content = await convertMarkdownToHtml(essay.content || '');

  return (
    <div className='flex flex-col gap-4'>
      <div className='w-full flex flex-col gap-2 py-4'>
        <p className='text-sm text-grey font-medium'>{essay.date}</p>
        <h1 className='text-2xl text-white font-semibold'>{essay.title}</h1>
      </div>

      <div className='bg-grey h-[1px] w-[120px]'></div>

      <div
        className='flex flex-col gap-4 py-6 essay-content'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const essays = await getAllEssays();

  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export default Essay;
