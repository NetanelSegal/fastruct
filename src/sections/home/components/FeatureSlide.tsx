'use client';

import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import { IFeatureItem } from '@/types/home';
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform,
} from 'motion/react';
import { useState } from 'react';

interface FeatureSlideProps {
  feature: IFeatureItem;
  index: number;
  progress: MotionValue<number>;
  // featuresCount: number;
}

// const SLIDES_GAP = 5;

const FeatureSlide = ({
  feature,
  index,
  progress,
  // featuresCount,
}: FeatureSlideProps) => {
  const { iconClass, title, text, imageUrl } = feature;
  const [runTextAnimation, setRunTextAnimation] = useState(false);

  // Swap horizontal logic to vertical:
  // We'll use "y" instead of "x", use vh instead of vw, and adjust "gaps" to stack vertically from the bottom.
  const y = useTransform(progress, (p) => {
    const currentSlideProgress = p - index;

    if (!runTextAnimation && currentSlideProgress > 0.5) {
      setRunTextAnimation(true);
    }

    const currentSlideY = currentSlideProgress * 100;

    // Stacking from the bottom, so index=0 is at the bottom, index=N is higher
    // const currentSlideTopGap = SLIDES_GAP * (featuresCount - index);
    const currentSlideTopGap = 0;
    // The higher index, the further up; slides move up as progress increases
    return Math.max(Math.min(100 - currentSlideY, 100 - currentSlideTopGap), 0);
  });

  const translate = useMotionTemplate`translateY(${y}vh)`;

  return (
    <motion.div
      style={{ transform: translate, zIndex: index }}
      className={`border-accent absolute box-border h-full w-full overflow-hidden border-t-2 shadow-[0px_0px_15px_10px_#00000035]`}>
      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Enhanced gradient overlay with better transparency */}
      <div className='from-dark/90 via-dark/60 to-dark/30 absolute inset-0 bg-gradient-to-t' />
      <div className='absolute inset-0 bg-dark/20' />

      {/* Centered content container with backdrop blur */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center p-8 md:p-16'>
        <div className='text-center'>
          {/* Icon with impressive styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              runTextAnimation
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='mb-6 flex justify-center'>
            <div className='bg-accent/20 backdrop-blur-sm rounded-full p-6 md:p-8 border-2 border-accent/30'>
              <i className={`${iconClass} text-h1 md:text-[4rem] text-accent`}></i>
            </div>
          </motion.div>

          {/* Title - bigger and centered */}
          <AnimatedHeading
            text={title}
            className='text-h1 md:text-[5rem] font-bebas text-light mb-4 text-center'
            runAnimation={runTextAnimation}
          />

          {/* Description - bigger and centered with backdrop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              runTextAnimation
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className='mx-auto max-w-2xl'>
            <div className='bg-dark/40 backdrop-blur-md rounded-lg px-6 py-4 md:px-8 md:py-6 border border-light/10'>
              <p className='font-poppins text-h4 md:text-h3 text-light/90 text-center leading-relaxed'>
                {text}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSlide;
