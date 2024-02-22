import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className='flex grow justify-center items-center gap-6'>
      <div className='bg-white shadow-md px-2 pt-2 pb-6 rounded-md -rotate-3 hover:-translate-y-2 cursor-pointer'>
        <Image
          src='/gonzaloheadshot.jpeg'
          width={80}
          height={80}
          alt={`Gonzalos profile photo`}
        />
      </div>

      <div className='grid gap-0'>
        <h1 className='text-xl text-black font-semibold font-lexend-deca'>
          Gonzalo Soto
        </h1>
        <p className='text-sm text-primary-grey font-medium'>
          I like to build consumer experiences.
        </p>
      </div>
    </div>
  );
}
