'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Section } from '@/components/Section';
import { IProductDescription } from '@/types/product';
import Parallax from '@/components/Parallax';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';

const ProductDescriptionSection = ({
  image,
  paragraph,
}: IProductDescription) => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Image Section */}
      <section ref={sectionRef} className='relative overflow-hidden'>
        <Parallax
          ref={sectionRef}
          className='relative h-[60vh] w-full md:h-[80vh]'
          startRange={0}
          endRange={-20}
          unitType='%'
          offset={['start end', 'end start']}>
          <div className='relative h-full w-full'>
            <Image
              src={image}
              alt='Product description'
              fill
              sizes='100vw'
              className='object-cover object-center'
            />
          </div>
        </Parallax>
      </section>

      {/* Text Section */}
      <Section bgColor='dark' textColor='white' className='py-32'>
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='mx-auto max-w-4xl text-center'>
          <FadeInParagraph className='text-h6 text-light leading-relaxed'>
            {paragraph}
          </FadeInParagraph>
        </motion.div>
      </Section>
    </>
  );
};

export default ProductDescriptionSection;
