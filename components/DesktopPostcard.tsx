'use client';

import { useState } from 'react';
import Image from 'next/image';
import { images } from '@/constants';

export default function DesktopPostcard() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsFlipped(!isFlipped);
    if (isFlipped) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className='postcard hidden sm:block'>
      <div
        onClick={handleClick}
        className={`postcard-inner ${
          isFlipped ? 'flipped' : ''
        } cursor-pointer`}
      >
        <div className='postcard-front max-w-[632px] p-2 bg-secondary-black'>
          <div className='w-full sm:min-h-[412px] max-h-[234px] overflow-hidden'>
            <Image
              src={images[currentImageIndex].image}
              alt={images[currentImageIndex].title}
              width={632}
              height={412}
            />
          </div>
        </div>

        <div className='postcard-back w-full'>
          <div className='w-full sm:h-[420px] h-[234px] flex flex-col justify-between items-end sm:p-8 p-4 bg-secondary-black'>
            <p className='sm:text-xl text-base text-grey font-regular'>
              {images[currentImageIndex].title}
            </p>

            <div className='flex sm:flex-row flex-col justify-center gap-2'>
              <p className='text-sm text-grey font-medium text-right'>
                {images[currentImageIndex].coordinates}
              </p>
              <p className='text-sm text-off-white font-regular text-right'>
                {images[currentImageIndex].location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
