import Postcard from '@/components/postcard';

export default function About() {
  return (
    <div className='w-full h-full flex flex-col gap-8 pt-8'>
      <h1 className='text-xl font-bold text-white'>Gonzalo Soto</h1>

      <div className='w-full flex flex-col gap-4 text-sm font-regular text-off-white'>
        <div className='w-full flex flex-col gap-1 '>
          <p>
            Previously led product and design at a Canadian fintech backed by
            $1.5M
          </p>
          <p>Currently immersed in software.</p>
        </div>
        <div className='w-full flex flex-col gap-1'>
          <p>
            My story starts in 2012, playing with html & css, customizing my
            first tumblr blog.
          </p>
          <p>My next chapter is currently being written.</p>
        </div>
      </div>

      <Postcard />
    </div>
  );
}
