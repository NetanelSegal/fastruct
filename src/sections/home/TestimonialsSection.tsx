import React from 'react';
import AnimatedText from '@/components/AnimatedText';

interface ITestimonialsSectionProps {
  quote: string;
  author: string;
}

const TestimonialsSection = ({ quote, author }: ITestimonialsSectionProps) => {
  return (
    <blockquote className='text-center'>
      <AnimatedText
        className='text-h4 font-poppins text-light italic'
        text={`"${quote}"`}
        revealColor='dark'
      />
      <cite className='font-bebas text-accent mt-4 block text-base tracking-wider not-italic'>
        <AnimatedText text={`- ${author}`} revealColor='dark' />
      </cite>
    </blockquote>
  );
};

export default TestimonialsSection;
