import Image from 'next/image';

export default function WorkSummary() {
  return (
    <div className='w-full h-full flex flex-col gap-12'>
      <div className='flex flex-col gap-4'>
        <p className='text-lg text-white font-semibold'>Work</p>
        <p className='text-sm text-off-white font-regular'>
          Coming off my undergraduate degree in Engineering, I was fortunate to
          lead product & design at a Canadian fintech backed by $1.5M.
        </p>
      </div>

      <div className='flex flex-col cursor-pointer'>
        <div className='w-full p-2 bg-secondary-black'>
          <Image
            src={'/case-studies/blossom-thumbnail-about.png'}
            alt='Work sample for Blossom Social'
            width={632}
            height={412}
          />
        </div>
        <div className='flex justify-center w-full pt-3'>
          <p className='text-xs text-off-white font-regular text-right'>
            Product & Design Lead @ Blossom
          </p>
        </div>
      </div>
    </div>
  );
}
