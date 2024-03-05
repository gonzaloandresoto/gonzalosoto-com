import AboutMe from '@/components/AboutMe';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import { getWorkBySlug } from '@/lib/blog';

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title, description } = await getWorkBySlug(slug);

  if (title && description) {
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
      },
    };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='md:w-[720px] w-full grow md:px-2 px-0'>
      <Divider />
      {children}
      <Divider />
      <Footer />
      <Divider />
    </section>
  );
}
