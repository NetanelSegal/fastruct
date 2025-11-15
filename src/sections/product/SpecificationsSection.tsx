'use client';

import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Section } from '@/components/Section';
import { ISpecifications } from '@/types/product';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';

interface CounterProps {
  value: number;
  delay?: number;
}

const Counter = ({ value, delay = 0 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        delay,
        ease: 'easeOut',
      });
      return () => animation.stop();
    }
  }, [isInView, value, delay, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [rounded]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const SpecItem = ({
  label,
  value,
  index,
}: {
  label: string;
  value: number;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='flex flex-col gap-2'>
      <span className='text-h6 text-dark/70 uppercase tracking-wider'>
        {label}
      </span>
      <span className='text-h1 font-bebas text-dark md:text-[5rem]'>
        <Counter value={value} delay={index * 0.1} />
      </span>
    </motion.div>
  );
};

const SpecificationsSection = ({
  floorPlanImage,
  floorPlanLabel,
  area,
  specs,
}: ISpecifications) => {
  const floorPlanRef = useRef<HTMLDivElement>(null);
  const isFloorPlanInView = useInView(floorPlanRef, { once: true, amount: 0.3 });

  return (
    <Section bgColor='light' textColor='dark' className='py-32'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16'>
          {/* Left: Floor Plan */}
          <motion.div
            ref={floorPlanRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isFloorPlanInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8 }}
            className='flex flex-col gap-4'>
            <div className='relative aspect-square w-full overflow-hidden rounded-xl'>
              <Image
                src={floorPlanImage}
                alt={floorPlanLabel}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-contain object-center'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-h5 font-bebas text-dark uppercase'>
                {floorPlanLabel}
              </span>
              <span className='text-body text-dark/70'>{area}</span>
            </div>
          </motion.div>

          {/* Right: Specifications */}
          <div className='flex flex-col justify-center gap-8 md:gap-12'>
            {specs.map((spec, index) => (
              <SpecItem
                key={spec.label}
                label={spec.label}
                value={spec.value}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SpecificationsSection;

