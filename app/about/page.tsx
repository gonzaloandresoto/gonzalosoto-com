import Postcard from '@/components/postcard';

export default function About() {
  return (
    <div className='w-full h-full flex flex-col gap-12'>
      <h1 className='text-2xl font-medium'>Gonzalo Soto</h1>

      <div className='w-full flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-1 text-sm font-regular'>
          <p>
            Previously led product and design at a Canadian fintech backed by
            $1.5M
          </p>
          <p>Currently immersed in software.</p>
        </div>
        <div className='w-full flex flex-col gap-1 text-sm font-regular'>
          <p>
            My story starts in 2012, playing with html & css, customizing my
            first tumblr blog.
          </p>
          <p>The next chapter is currently being written.</p>
        </div>
      </div>

      <Postcard />
    </div>
  );
}
