'use client';

import { useState } from 'react';
import Image from 'next/image';
import { images } from '@/constants';

export default function Postcard() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsFlipped(!isFlipped);
    if (isFlipped) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className='postcard'>
      <div
        onClick={handleClick}
        className={`postcard-inner ${
          isFlipped ? 'flipped' : ''
        } cursor-pointer`}
      >
        <div className='postcard-front'>
          <div className='w-full h-full overflow-hidden'>
            <Image
              src={images[currentImageIndex].image}
              alt={images[currentImageIndex].title}
              width={640}
              height={420}
            />
          </div>
        </div>

        <div className='postcard-back'>
          <p className='text-xl text-grey font-regular'>
            {images[currentImageIndex].title}
          </p>

          <div className='flex items-center gap-2'>
            <p className='text-grey'>
              {images[currentImageIndex].coordinates} ·
            </p>
            <p className='text-off-white font-regular text-right'>
              {images[currentImageIndex].location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
