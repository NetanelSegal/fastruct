'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'motion/react';
import clsx from 'clsx';

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number;
}

const AnimatedText = ({
  text,
  className,
  stagger = 0.03,
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={clsx('inline-block', className)}
      variants={containerVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={`letter-${text}-${index}-${letter}`}
          variants={letterVariants}
          className='inline-block'>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
