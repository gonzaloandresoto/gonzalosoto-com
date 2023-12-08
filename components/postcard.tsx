'use client';

import { useState } from 'react';
import Image from 'next/image';
import images from '@/data/postcardImages';

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
              height={320}
            />
          </div>
        </div>
        <div className='postcard-back'>{images[currentImageIndex].title}</div>
      </div>
    </div>
  );
}
