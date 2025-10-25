import React from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';

const ContactFormSection = () => {
  return (
    <Section>
      <div className='flex flex-col items-center gap-6 text-center'>
        <AnimatedText
          text="Let's build together"
          className='text-h2 font-bebas text-light'
        />
        <p className='text-h6 text-light/80 max-w-prose'>
          <AnimatedText text="Have a project in mind? Let's talk about how we can bring it to life." />
        </p>
        <Link href='/contact'>
          <Button variant='primary' size='lg' hoverTransition='lift'>
            Get in Touch
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default ContactFormSection;
