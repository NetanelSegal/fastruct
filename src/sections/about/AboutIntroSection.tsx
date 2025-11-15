'use client';

import { Section } from '@/components/Section';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import { IAbout } from '@/types/about';
import Parallax from '@/components/Parallax';

const AboutIntroSection = ({ paragraph, bigTextLine2 }: IAbout) => {
  return (
    <Section
      bgColor='dark'
      textColor='white'
      className='relative pt-32 text-center md:pt-40'>
      <Parallax
        className='mx-auto max-w-4xl'
        startRange={50}
        endRange={-50}
        unitType='px'
        offset={['start end', 'end start']}>
        <FadeInParagraph className='text-h6 text-light leading-relaxed'>
          {paragraph}
        </FadeInParagraph>
      </Parallax>
      {/* Big text line from hero */}
      <div className='container-padding mt-16 flex justify-start md:mt-24'>
        <Parallax
          className='relative'
          startRange={0}
          endRange={-150}
          unitType='px'
          offset={['start end', 'end start']}>
          <AnimatedHeading
            text={bigTextLine2}
            className='text-h1 font-bebas text-accent md:text-[6rem] lg:text-[8rem]'
            revealColor='dark'
          />
        </Parallax>
      </div>
    </Section>
  );
};

export default AboutIntroSection;
