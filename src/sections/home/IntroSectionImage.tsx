'use client';

import Parallax from '@/components/Parallax';
import Image from 'next/image';

const IntroSectionImage = () => {
  return (
    <Parallax
      className='size-full'
      startRange={-50}
      endRange={150}
      unitType='px'
      offset={['start end', 'end start']}>
      <div className='relative h-96 w-full translate-x-10 scale-105 overflow-hidden rounded-lg lg:h-[70vh] lg:-translate-y-10 lg:scale-125'>
        <Image
          src='/assets/intro-image.jpg'
          alt='Construction site'
          fill
          sizes='50vw'
          className='object-cover object-center'
          priority
        />
      </div>
    </Parallax>
  );
};

export default IntroSectionImage;
