import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/Section';
import AnimatedText from '@/components/AnimatedText';

const IntroSection = () => {
  return (
    <Section bgColor='light' className='-mt-24'>
      <div className='grid items-center gap-12 md:grid-cols-2'>
        <div className='relative z-10 flex flex-col gap-4 md:-mr-24'>
          <AnimatedText
            text='More Than Just Construction'
            className='text-h2 font-bebas text-dark'
          />
          <p className='text-h6 text-dark/80'>
            <AnimatedText text='Fastruct is redefining how homes and spaces are built. By combining modular and panelized construction, we deliver faster timelines, higher quality, and a smoother experience from start to finish.' />
          </p>
        </div>
        <div className='relative aspect-video overflow-hidden rounded-lg'>
          <Image
            fill
            sizes='100%'
            src='https://picsum.photos/800/600'
            alt='Construction site'
            className='object-cover'
          />
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
