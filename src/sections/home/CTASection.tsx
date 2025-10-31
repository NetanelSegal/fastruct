import React from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';

const CTASection = () => {
  return (
    <Section>
      <div className='flex flex-col items-center gap-6 text-center'>
        <AnimatedText
          text='Want to build with us?'
          className='text-h2 font-bebas text-light'
          revealColor='dark'
        />
        <Link href='/contact'>
          <Button variant='primary' size='lg' hoverTransition='lift'>
            Book Your Free Consultation
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default CTASection;
