'use client';

import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import { ITestimonial } from '@/types/home';
import { motion, Variants } from 'motion/react';

interface ITestimonialsSectionProps {
  testimonials: ITestimonial[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TestimonialsSection: React.FC<ITestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <motion.div
      className='flex flex-col gap-12 md:gap-16'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}>
      {testimonials.map((testimonial, index) => (
        <motion.blockquote
          key={index}
          variants={itemVariants}
          className='mx-auto max-w-xl text-center'>
          <FadeInParagraph className='font-poppins text-light text-h6 italic'>
            {`"${testimonial.quote}"`}
          </FadeInParagraph>
          <FadeInParagraph className='font-poppins text-light/80 mt-4 text-sm italic'>
            {testimonial.author}
          </FadeInParagraph>
        </motion.blockquote>
      ))}
    </motion.div>
  );
};

export default TestimonialsSection;
