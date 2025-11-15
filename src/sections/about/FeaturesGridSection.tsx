'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { IFeaturesGrid, IFeatureItem } from '@/types/about';
import { Section } from '@/components/Section';

const FeatureCard = ({
  title,
  text,
  imageUrl,
  index,
}: IFeatureItem & { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='group relative aspect-[4/3] overflow-hidden rounded-xl'>
      {/* Background Image */}
      {imageUrl && (
        <div className='absolute inset-0'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover object-center transition-transform duration-700 group-hover:scale-110'
          />
        </div>
      )}

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-dark/60 transition-opacity duration-300 group-hover:bg-dark/40' />

      {/* Content */}
      <div className='relative flex h-full flex-col justify-between p-6 md:p-8'>
        <h3 className='text-h2 font-bebas text-white md:text-h1'>{title}</h3>
        <p className='text-h6 text-light/90 max-w-md'>{text}</p>
      </div>
    </motion.div>
  );
};

const FeaturesGridSection = ({ items }: IFeaturesGrid) => {
  return (
    <Section bgColor='light' textColor='dark' className='py-32'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {items.map((item, index) => (
            <FeatureCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturesGridSection;
