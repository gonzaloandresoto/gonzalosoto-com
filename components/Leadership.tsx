export default function Leadership() {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <p className='text-lg text-white font-semibold'>Leadership</p>
      <div className='w-full h-full flex flex-col p-2 bg-secondary-black'>
        <div className='flex sm:flex-row flex-col h-full'>
          <div className='flex-col w-full grow'>
            <div
              className='relative h-[208px] w-full flex items-center justify-center'
              style={{
                backgroundImage: "url('/leadership/camp-qmind.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='absolute w-full h-full bg-black opacity-50'></div>
              <div className='flex flex-col items-center gap-1 z-10'>
                <p className='text-lg text-white font-semibold'>QMIND</p>
                <p className='text-base text-white font-medium'>President</p>
              </div>
            </div>
            <div
              className='relative h-[208px] w-full flex items-center justify-center'
              style={{
                backgroundImage: "url('/leadership/cucai-md.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='absolute w-full h-full bg-black opacity-50'></div>
              <div className='flex flex-col items-center gap-1 z-10'>
                <p className='text-lg text-white font-semibold'>CUCAI</p>
                <p className='text-base text-white font-medium'>Chair</p>
              </div>
            </div>
          </div>
          <div
            className='relative sm:w-[280px] sm:h-auto h-[208px] w-full flex grow items-center justify-center bg-[#FFE74C]'
            style={{
              backgroundImage: "url('/leadership/class-2022.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute w-full h-full bg-black opacity-50'></div>
            <div className='flex flex-col items-center gap-1 z-10'>
              <p className='text-lg text-white font-semibold text-center'>
                Cansbridge Fellowship
              </p>
              <p className='text-base text-white font-medium'>Fellow & PM</p>
            </div>
          </div>
        </div>

        {/* <div className='w-full h-[88px] bg-[#FF57BB]'>Ripple</div> */}
      </div>
    </div>
  );
}
