'use client';

import Image from 'next/image';

const IntroSectionImage = () => {
  return (
    <Image
      fill
      sizes='100%'
      src='/assets/intro-image.jpg'
      alt='Construction site'
      className='object-cover'
    />
  );
};

export default IntroSectionImage;
