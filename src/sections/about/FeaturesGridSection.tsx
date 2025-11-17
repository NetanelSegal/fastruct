'use client';

import Image from 'next/image';
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { IFeaturesGrid, IFeatureItem } from '@/types/about';
import { Section } from '@/components/Section';
import Parallax from '@/components/Parallax';

// Utility to detect mobile (SSR-safe)
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

const FeatureCard = ({
  title,
  text,
  imageUrl,
  index,
  sectionProgress,
}: IFeatureItem & { index: number; sectionProgress: MotionValue<number> }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const isMobile = useIsMobile();

  // Only apply parallax effect on desktop
  const cardY = useTransform(
    sectionProgress,
    [0, 1],
    isMobile
      ? [0, 0]
      : [index % 2 === 0 ? 100 : -100, index % 2 === 0 ? -100 : 100]
  );
  const cardOpacity = useTransform(
    sectionProgress,
    [0, 0.2 + index * 0.1, 0.8, 1],
    isMobile ? [1, 1, 1, 1] : [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: cardY, opacity: cardOpacity }}
      initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='group relative aspect-[4/3] overflow-hidden rounded-xl'>
      {/* Background Image: No Parallax for mobile */}
      {imageUrl &&
        (isMobile ? (
          <div className='absolute inset-0'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='scale-125 object-cover object-center transition-transform duration-700 group-hover:scale-150'
            />
          </div>
        ) : (
          <Parallax
            className='absolute inset-0'
            startRange={30}
            endRange={-30}
            unitType='px'
            offset={['start center', 'end center']}>
            <div className='relative h-full w-full'>
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='scale-125 object-cover object-center transition-transform duration-700 group-hover:scale-150'
              />
            </div>
          </Parallax>
        ))}

      {/* Dark Overlay */}
      <div className='bg-dark/60 group-hover:bg-dark/40 absolute inset-0 transition-opacity duration-300' />

      {/* Content */}
      <div className='relative flex h-full flex-col justify-between p-6 md:p-8'>
        <h3 className='text-h2 font-bebas md:text-h1 text-white'>{title}</h3>
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
