'use client';

import React, { cloneElement, ReactElement, useRef } from 'react';
import {
  motion,
  MotionStyle,
  MotionValue,
  useScroll,
  useTransform,
  Variants,
} from 'motion/react';

// A simple placeholder icon. In a real app, you'd use an icon library or SVG files.
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4h2V7h-2v6z' />
  </svg>
);

interface Feature {
  icon: ReactElement<{ className?: string }>;
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

interface FeatureSlideProps {
  feature: Feature;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const SLIDES_GAP = 5;

const FeatureSlide = ({
  feature,
  index,
  total,
  progress,
}: FeatureSlideProps) => {
  const { icon, title, subtitle, imageUrl } = feature;
  const totalPercentage = 100 / total;

  const style: MotionStyle = {
    x: useTransform(
      progress,
      [totalPercentage * (index - 1), totalPercentage * index],
      [`${100 - (total - index) * SLIDES_GAP}vw`, `${index * SLIDES_GAP}vw`],
    ),
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      style={style}
      className='border-accent absolute inset-0 h-full w-[90vw] border-l-2 shadow-[0px_0px_15px_10px_#00000035]'
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Gradient Overlay */}
      <div className='from-dark/80 via-dark/40 absolute inset-0 bg-gradient-to-t to-transparent' />

      {/* Content */}
      <motion.div
        className='relative flex h-full flex-col justify-end p-8 md:p-16'
        variants={contentVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={itemVariants} className='text-accent mb-4'>
          {cloneElement(icon, {
            className: 'h-12 w-12',
          })}
        </motion.div>
        <motion.h3
          variants={itemVariants}
          className='text-h3 font-bebas text-light'
        >
          {title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className='font-poppins text-h6 text-light/80 mt-2 max-w-md'
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const FeatureCarousel = ({ features }: FeatureCarouselProps) => {
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ['start start', 'end end'],
  });

  const progress = useTransform(scrollYProgress, (v) => v * 100);

  return (
    <div ref={carouselRef} className='h-[400vh] w-full'>
      <div className='sticky top-0 h-screen w-full overflow-hidden'>
        {features.map((feature, index) => (
          <FeatureSlide
            key={`feature-${index}`}
            feature={feature}
            index={index}
            total={features.length}
            progress={progress}
          />
        ))}
      </div>
    </div>
  );
};

export { FeatureCarousel, PlaceholderIcon };
export type { Feature };
