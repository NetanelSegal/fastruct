'use client';

import Image from 'next/image';
import TypingEffect from '@/components/TypingEffect';
import { useRef } from 'react';
import Parallax from '@/components/Parallax';
import { UseScrollOptions } from 'motion/react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { TailwindBreakpoints } from '@/lib/css-constants';

const HeroSection = () => {
  const { screenWidth } = useScreenWidth();
  const ref = useRef<HTMLDivElement>(null);
  const offset: UseScrollOptions['offset'] = [
    screenWidth > TailwindBreakpoints.md ? 'center center' : '50% 30%',
    'end start',
  ];
  const unitType = 'px';

  return (
    <div ref={ref} className={`bg-light psnap-center pt-[30vh]`}>
      {/* text container */}
      <Parallax endRange={100} ref={ref} offset={offset} unitType={unitType}>
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

      {/* image container */}
      <div className='relative aspect-[3/1] overflow-hidden'>
        <Image
          priority
          fill
          src='/assets/hero-image.png'
          alt='Modern modular home'
          className='object-cover object-top'
        />
      </div>
    </div>
  );
};

export default HeroSection;
