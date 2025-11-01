'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionTemplate,
} from 'motion/react';
import { IFeatureItem } from '@/types/content';

interface FeatureCarouselProps {
  features: IFeatureItem[];
}

interface FeatureSlideProps {
  feature: IFeatureItem;
  index: number;
  progress: MotionValue<number>;
  featuresCount: number;
}

const SLIDES_GAP = 5;

import FadeInParagraph from '@/components/FadeInParagraph';
import AnimatedHeading from '@/components/AnimatedHeading';

const FeatureSlide = ({
  feature,
  index,
  progress,
  featuresCount,
}: FeatureSlideProps) => {
  const { iconClass, title, text, imageUrl } = feature;

  const x = useTransform(progress, (p) => {
    const currentSlideProgress = p - index;
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
      className={`border-accent absolute box-border h-full w-full overflow-hidden border-l-2 shadow-[0px_0px_15px_10px_#00000035]`}>
      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='from-dark/80 via-dark/40 absolute inset-0 bg-gradient-to-t to-transparent' />

      <div className='relative flex h-full flex-col justify-end p-8 md:p-16'>
        <div className='text-accent mb-4'>
          <FadeInParagraph className={`${iconClass} text-h3 mb-2`} />
        </div>
        <AnimatedHeading
          text={title}
          className='text-h3 font-bebas text-light w-fit'
        />
        <FadeInParagraph className='font-poppins text-h6 text-light/80 mt-2 max-w-md pr-16'>
          {text}
        </FadeInParagraph>
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
  const slideIndex = useTransform(scrollYProgress, [0, 1], [1, numSlides]);

  return (
    <section
      style={{ height: `${features.length * 100}vh` }}
      ref={sectionRef}
      className={`relative w-full`}>
      {/* Sticky container overlays on top during scroll */}
      <div className='sticky top-0 right-0 left-0 h-screen w-screen overflow-hidden'>
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
    </section>
  );
};

export { FeatureCarousel };
