'use client';

import Image from 'next/image';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import Parallax from '@/components/Parallax';
import { IHeroAbout } from '@/types/about';
import { Section } from '@/components/Section';

const HeroAboutSection = ({
  title,
  subtitle,
  backgroundImage,
  bigTextLine1,
}: IHeroAbout) => {
  return (
    <Section
      bgColor='dark'
      textColor='white'
      className='relative h-screen overflow-hidden p-0'>
      {/* Background Image with Parallax */}
      <Parallax
        className='absolute inset-0'
        startRange={0}
        endRange={-30}
        unitType='%'
        offset={['start start', 'end end']}>
        <div className='relative h-full w-full'>
          <Image
            src={backgroundImage}
            alt='Hero background'
            fill
            sizes='100vw'
            className='object-cover object-center'
            priority
          />
          <div className='bg-dark/40 absolute inset-0' />
        </div>
      </Parallax>

      {/* Bottom-left text overlay */}
      <div className='container-padding absolute bottom-4 left-0 z-10 w-full text-white md:bottom-8 md:w-2/3 lg:bottom-16 lg:w-1/2'>
        <AnimatedHeading
          text={title}
          className='text-h1 font-bebas tracking-wider'
        />
        <FadeInParagraph className='text-h6 text-light opacity-70'>
          {subtitle}
        </FadeInParagraph>
      </div>

      {/* Bottom headline extending into next section */}
      <div className='container-padding absolute -bottom-20 left-0 z-10 w-full md:-bottom-32'>
        <Parallax
          className='relative'
          startRange={0}
          endRange={-200}
          unitType='px'
          offset={['start start', 'end start']}>
          <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
            <span className='text-h1 font-bebas text-white md:text-[6rem] lg:text-[8rem]'>
              {bigTextLine1}
            </span>
          </div>
        </Parallax>
      </div>
    </Section>
  );
};

export default HeroAboutSection;
