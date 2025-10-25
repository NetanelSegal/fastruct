import React from 'react';
import AnimatedText from '@/components/AnimatedText';

interface ITestimonialsSectionProps {
  quote: string;
  author: string;
}

const TestimonialsSection = ({ quote, author }: ITestimonialsSectionProps) => {
  return (
    <blockquote className='text-center'>
      <p className='text-h4 font-poppins text-light italic'>
        <AnimatedText text={`"${quote}"`} />
      </p>
      <cite className='font-bebas text-accent mt-4 block text-base tracking-wider not-italic'>
        <AnimatedText text={`- ${author}`} />
      </cite>
    </blockquote>
  );
};

export default TestimonialsSection;
