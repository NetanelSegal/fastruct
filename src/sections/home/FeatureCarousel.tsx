'use client';

import { ReactElement, RefObject, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionTemplate,
  useMotionValueEvent,
} from 'motion/react';

interface Feature {
  icon: ReactElement;
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
  progress: MotionValue<number>;
  featuresCount: number;
}

const SLIDES_GAP = 5;

const FeatureSlide = ({
  feature,
  index,
  progress,
  featuresCount,
}: FeatureSlideProps) => {
  const { icon, title, subtitle, imageUrl } = feature;

  const x = useTransform(progress, (p) => {
    const currentSlideProgress = index == 0 ? 1 : p - index;
    const currentSlideX = currentSlideProgress * 100;
    const currentSlideRightGap = SLIDES_GAP * (featuresCount - index);
    const currentSlideMinX = SLIDES_GAP * index;
    return Math.max(
      Math.min(100 - currentSlideX, 100 - currentSlideRightGap),
      currentSlideMinX
    );
  });

  const translate = useMotionTemplate`translateX(${x}vw)`;

  return (
    <motion.div
      style={{ transform: translate, zIndex: index }}
      className={`border-accent absolute box-border h-full w-full border-l-2 shadow-[0px_0px_15px_10px_#00000035]`}>
      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='from-dark/80 via-dark/40 absolute inset-0 bg-gradient-to-t to-transparent' />

      <div className='relative flex h-full flex-col justify-end p-8 md:p-16'>
        <div className='text-accent mb-4'>{icon}</div>
        <h3 className='text-h3 font-bebas text-light'>{title}</h3>
        <p className='font-poppins text-h6 text-light/80 mt-2 max-w-md pr-16'>
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const FeatureCarousel = ({ features }: FeatureCarouselProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({

    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const numSlides = features.length;
  const slideIndex = useTransform(scrollYProgress, [0, 1], [0, numSlides]);
  useMotionValueEvent(slideIndex, 'change', (value) => {
    console.log(value);
  });
  return (
    <section
      ref={sectionRef}
      className='relative h-[500vh] w-full snap-y snap-mandatory snap-always'>
      {/* Sticky container overlays on top during scroll */}
      <div className='sticky top-0 right-0 left-0 h-screen overflow-hidden'>
        {features.map((feature, index) => (
          <FeatureSlide
            key={`feature-${index}`}
            feature={feature}
            index={index}
            progress={slideIndex}
            featuresCount={features.length}
          />
        ))}
      </div>
      {/* Invisible scroll sections drive the scroll */}
      {features.map((_, index) => (
        <div
          key={`feature-invisible-${index}`}
          className='h-screen snap-start border-2 border-pink-500'
        />
      ))}
    </section>
  );
};

export { FeatureCarousel };
export type { Feature };
