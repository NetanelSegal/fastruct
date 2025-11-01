import React from 'react';

import { ITestimonial } from '@/types/content';

import FadeInParagraph from '@/components/FadeInParagraph';

const TestimonialsSection: React.FC<ITestimonial> = ({ quote, author }) => {
  return (
    <blockquote className='text-center'>
      <FadeInParagraph className='text-h4 font-poppins text-light italic'>
        {`"${quote}"`}
      </FadeInParagraph>
      <FadeInParagraph className='text-h6 font-poppins text-light/80 italic'>
        {author}
      </FadeInParagraph>
    </blockquote>
  );
};

export default TestimonialsSection;
