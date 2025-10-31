import React from 'react';
import { Section } from '@/components/Section';
import AnimatedText from '@/components/AnimatedText';

const OurProcessSection = () => {
  return (
    <Section>
      <div className='mb-8 text-center'>
        <AnimatedText
          text='Our Process'
          className='text-h2 font-bebas text-light'
          revealColor='dark'
        />
      </div>
      <div className='grid gap-8 md:grid-cols-3'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <div className='text-h1 font-bebas text-accent'>1</div>
          <AnimatedText
            text='Consultation'
            className='text-h4 font-bebas text-light'
            revealColor='dark'
          />
          <AnimatedText
            className='text-h6 text-light/80'
            text='We start with a conversation to understand your vision, needs, and budget.'
            revealColor='dark'
          />
        </div>
        <div className='flex flex-col items-center gap-4 text-center'>
          <div className='text-h1 font-bebas text-accent'>2</div>
          <AnimatedText
            text='Proposal & Agreement'
            className='text-h4 font-bebas text-light'
            revealColor='dark'
          />
          <AnimatedText
            className='text-h6 text-light/80'
            text='You receive a transparent scope of work, timeline, and cost breakdown.'
            revealColor='dark'
          />
        </div>
        <div className='flex flex-col items-center gap-4 text-center'>
          <div className='text-h1 font-bebas text-accent'>3</div>
          <AnimatedText
            text='Design & Permits'
            className='text-h4 font-bebas text-light'
            revealColor='dark'
          />
          <AnimatedText
            className='text-h6 text-light/80'
            text='Our team prepares drawings, selects materials, and manages permits.'
            revealColor='dark'
          />
        </div>
      </div>
    </Section>
  );
};

export default OurProcessSection;
