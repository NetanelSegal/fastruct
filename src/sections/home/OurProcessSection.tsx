import React from 'react';
import { Section } from '@/components/Section';
import AnimatedHeading from '@/components/AnimatedHeading';

import { IProcess } from '@/types/content';

import FadeInParagraph from '@/components/FadeInParagraph';

const OurProcessSection: React.FC<IProcess> = ({ title, steps }) => {
  return (
    <Section>
      <div className='mb-8 text-center'>
        <AnimatedHeading
          text={title}
          className='text-h2 font-bebas text-light'
          revealColor='dark'
        />
      </div>
      <div className='grid gap-8 md:grid-cols-3'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-4 text-center'>
            <div className='text-h1 font-bebas text-accent'>{index + 1}</div>
            <FadeInParagraph className='text-h4 font-bebas text-light'>
              {step.title}
            </FadeInParagraph>
            <FadeInParagraph className='text-h6 text-light/80'>
              {step.text}
            </FadeInParagraph>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default OurProcessSection;
