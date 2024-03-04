import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className='w-full grid gap-6 section'>
      <div className='flex flex-row gap-6'>
        <div className='flex-none h-max bg-white shadow-md p-2 pb-6 rounded-md -rotate-3'>
          <Image
            src='/gonzaloheadshot.jpeg'
            width={104}
            height={104}
            alt={`Gonzalos profile photo`}
            className='rounded-md'
          />
        </div>
        <div className='hidden md:flex flex-col gap-2 py-2'>
          <h2 className='text-2xl text-black font-semibold font-lexend-deca'>
            Gonzalo Soto Mallqui
          </h2>
          <p className='text-sm text-primary-grey font-medium'>
            {`I'm an experienced engineer, designer, and product leader based in Toronto, Canada. I'm passionate about building products that are delightful, accessible, and inclusive. `}
          </p>
        </div>
      </div>
      <div className='md:hidden grid gap-2'>
        <h2 className='text-2xl text-black font-semibold font-lexend-deca'>
          Gonzalo Soto Mallqui
        </h2>
        <p className=' text-sm text-primary-grey font-medium'>
          {`I'm an experienced engineer, designer, and product leader based in Toronto, Canada. I'm passionate about building products that are delightful, accessible, and inclusive. `}
        </p>
      </div>
    </div>
  );
}
