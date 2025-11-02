import React from 'react';

import { ITestimonial } from '@/types/content';

import FadeInParagraph from '@/components/FadeInParagraph';

const TestimonialsSection: React.FC<ITestimonial> = ({ quote, author }) => {
  return (
    <blockquote className='mx-auto max-w-xl text-center'>
      <FadeInParagraph className='font-poppins text-light text-h6 italic'>
        {`"${quote}"`}
      </FadeInParagraph>
      <FadeInParagraph className='font-poppins text-light/80 text-sm italic'>
        {author}
      </FadeInParagraph>
    </blockquote>
  );
};

export default TestimonialsSection;
