'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { images } from '@/constants';

export default function MobilePostcard() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={handleClick}
      className='sm:hidden'
    >
      <div className='max-w-[632px] p-2 bg-secondary-black max-height-[242px]'>
        <div className='w-full sm:min-h-[412px] max-h-[234px] overflow-hidden'>
          <Image
            src={images[currentImageIndex].image}
            alt={images[currentImageIndex].title}
            width={632}
            height={412}
          />
        </div>
      </div>
    </div>
  );
}
