import React from 'react';
import Image from 'next/image';
import Parallax from '@/components/Parallax';
import TypingEffect from '@/components/TypingEffect';

const HeroSection = () => {
  return (
    <div className='bg-light pt-28'>
      <Parallax startRange={-50} endRange={50} className='z-10'>
        <div className='flex flex-col flex-wrap justify-end px-[12%] lg:justify-between xl:flex-row xl:items-end'>
          <h1 className='text-h1 font-bebas text-dark whitespace-nowrap uppercase'>
            Build{' '}
            <TypingEffect
              strings={['Faster', 'Smarter', 'For Life']}
              className='text-accent'
            />
          </h1>
          <p className='text-h6 font-poppins text-dark max-w-xl'>
            Fastruct delivers modular and panelized buildings designed to fit
            your needs - from consultation to completion.
          </p>
        </div>
      </Parallax>

      <Parallax startRange={50} endRange={-50} className='z-10'>
        <div className='relative h-[40vw] overflow-hidden'>
          <Image
            priority
            fill
            src='/assets/hero-image.png'
            alt='Modern modular home'
            className='object-cover object-top'
          />
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;
