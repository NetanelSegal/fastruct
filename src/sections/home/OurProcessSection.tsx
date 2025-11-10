'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Section } from '@/components/Section';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { IProcess } from '@/types/home';
import clsx from 'clsx';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';

const OurProcessSection: React.FC<IProcess> = ({ title, steps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const numSteps = steps.length;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const newIndex = Math.min(Math.floor(latest * numSteps), numSteps - 1);
      setCurrentStepIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, numSteps]);

  const rotateZ = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360 - 360 / numSteps] // Rotate almost a full circle
  );

  return (
    <Section className='relative min-h-[300vh]' ref={containerRef}>
      <div className='sticky top-0 flex h-screen items-center justify-center overflow-hidden'>
        <AnimatedHeading
          text={title}
          className='text-h1 font-bebas text-light basis-1/2'
          revealColor='dark'
        />
        <div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-center p-4 md:flex-row md:items-start'>
          {/* Left side: Animated Number */}
          <div className='relative flex w-full items-center justify-center md:w-1/3 md:justify-end md:pr-8'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentStepIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className='font-bebas text-accent text-[15rem] leading-none'>
                {currentStepIndex + 1}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side: Step Content and Rotating Steps */}
          <div className='border-light/20 relative flex w-full flex-col items-center border-t pt-8 md:h-[500px] md:w-2/3 md:items-start md:border-t-0 md:border-l md:pt-0 md:pl-8'>
            {/* Active Step Content */}
            <div className='relative z-10 text-center md:text-left'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentStepIndex + '-content'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}>
                  <h3 className='text-h3 font-bebas text-light mb-2'>
                    {steps[currentStepIndex].title}
                  </h3>
                  <p className='text-h6 text-light/80'>
                    {steps[currentStepIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rotating Steps (Circular Layout) */}
            <motion.div
              style={{ rotateZ }}
              className='absolute inset-0 flex items-center justify-center md:justify-start'>
              {steps.map((step, index) => {
                const angle = (index / numSteps) * 360;
                const radius = 200; // Adjust radius as needed
                const x =
                  radius * Math.cos((angle * Math.PI) / 180 - Math.PI / 2); // - Math.PI / 2 to start from top
                const y =
                  radius * Math.sin((angle * Math.PI) / 180 - Math.PI / 2);

                const isCurrent = index === currentStepIndex;

                return (
                  <motion.div
                    key={index}
                    className={clsx(
                      'absolute rounded-full p-2 transition-opacity duration-300',
                      {
                        'opacity-0': isCurrent,
                        'opacity-50': !isCurrent,
                      }
                    )}
                    style={{
                      x: x,
                      y: y,
                      rotateZ: -angle, // Counter-rotate to keep text upright
                    }}>
                    <span className='font-bebas text-light text-sm whitespace-nowrap'>
                      {step.title}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurProcessSection;
