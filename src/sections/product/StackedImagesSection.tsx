'use client';

import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  MotionValue,
} from 'motion/react';
import { useRef } from 'react';
import { IStackedImage, IStackedImages } from '@/types/product';
import { Section } from '@/components/Section';

const StackedImagesSection = ({ images }: IStackedImages) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  );

  return (
    <Section
      ref={sectionRef}
      bgColor='dark'
      textColor='white'
      style={{ height: `${images.length * 100}vh` }}
      className='relative w-full p-0'>
      {/* Sticky container for stacked images */}
      <div className='sticky top-0 h-screen w-full overflow-hidden'>
        {images.map((image, index) => (
          <StackedImage
            key={index}
            image={image}
            index={index}
            imageIndex={imageIndex}
            totalImages={images.length}
          />
        ))}
      </div>
    </Section>
  );
};

interface StackedImageProps {
  image: IStackedImage;
  index: number;
  imageIndex: MotionValue<number>;
  totalImages: number;
}

const StackedImage = ({
  image,
  index,
  imageIndex,
  totalImages,
}: StackedImageProps) => {
  const imageProgress = useTransform(imageIndex, (current) => current - index);

  // Calculate scale, opacity, and z-index based on progress
  const scale = useTransform(imageProgress, [-1, 0, 1], [0.7, 1, 0.8]);
  const opacity = useTransform(
    imageProgress,
    [-1, 0, 0.5, 1],
    [0.2, 1, 0.7, 0.3]
  );
  const zIndex = useTransform(imageProgress, (p) => {
    // Higher z-index for images closer to front (progress near 0)
    return Math.round(totalImages - Math.abs(p) * totalImages);
  });

  const transform = useMotionTemplate`scale(${scale})`;

  return (
    <motion.div
      style={{
        transform,
        opacity,
        zIndex,
      }}
      className='absolute inset-0 flex items-center justify-center p-8 md:p-16'>
      <div className='relative h-full w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl'>
        <Image
          src={image.url}
          alt={image.alt || `Product image ${index + 1}`}
          fill
          sizes='(max-width: 768px) 100vw, 90vw'
          className='object-cover object-center'
        />
      </div>
    </motion.div>
  );
};

export default StackedImagesSection;
