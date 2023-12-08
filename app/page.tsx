import Image from 'next/image';
import About from './about/page';

export default function Home() {
  return (
    <main className='min-w-screen h-screen flex flex-col items-center'>
      <div className='sm:w-[640px] w-full h-full py-16'>
        <About />
      </div>
    </main>
  );
}
