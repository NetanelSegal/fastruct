'use client';

import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { IFeaturesGrid, IFeatureItem } from '@/types/about';
import { Section } from '@/components/Section';
import Parallax from '@/components/Parallax';

const FeatureCard = ({
  title,
  text,
  imageUrl,
  index,
  sectionProgress,
}: IFeatureItem & { index: number; sectionProgress: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  // Staggered parallax effect based on card position
  const cardY = useTransform(
    sectionProgress,
    [0, 1],
    [index % 2 === 0 ? 100 : -100, index % 2 === 0 ? -100 : 100]
  );
  const cardOpacity = useTransform(
    sectionProgress,
    [0, 0.2 + index * 0.1, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: cardY, opacity: cardOpacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='group relative aspect-[4/3] overflow-hidden rounded-xl'>
      {/* Background Image with Parallax */}
      {imageUrl && (
        <Parallax
          className='absolute inset-0'
          startRange={0}
          endRange={-30}
          unitType='%'
          offset={['start end', 'end start']}>
          <div className='relative h-full w-full'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover object-center transition-transform duration-700 group-hover:scale-110'
            />
          </div>
        </Parallax>
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <Section
      ref={sectionRef}
      bgColor='light'
      textColor='dark'
      className='py-32'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {items.map((item, index) => (
            <FeatureCard
              key={index}
              {...item}
              index={index}
              sectionProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturesGridSection;
