'use client';

import { FC } from 'react';
import { motion, Variants } from 'motion/react';

interface SwapTextProps {
  text: string;
  className?: string;
}

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  swap: {
    y: [0, -10, 10, 0],
    rotate: [0, 10, -10, 0],
    scale: [1, 1.1, 0.9, 1],
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const SwappingText: FC<SwapTextProps> = ({ text, className = '' }) => {
  return (
    <motion.div
      className={`inline-block overflow-hidden ${className}`}
      variants={parentVariants}
      initial='hidden'
      animate='visible'>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          animate={['visible', 'swap']}
          className='inline-block'>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SwappingText;
