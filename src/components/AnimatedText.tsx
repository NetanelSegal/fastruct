'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import clsx from 'clsx';
import { ColorsUnion } from '@/lib/css-constants';

interface AnimatedTextProps {
  text: string;
  className?: string;
  revealColor?: ColorsUnion;
}

const AnimatedText = ({
  text,
  className,
  revealColor = 'dark',
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div ref={ref} className={clsx('relative inline-block', className)}>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: isInView ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className={clsx(
          'absolute inset-0 z-10 origin-right',
          `bg-${revealColor}`
        )}>
        <div className='bg-accent absolute top-0 bottom-0 left-0 w-1 rounded-full'></div>
      </motion.div>
      <span>{text}</span>
    </div>
  );
};

export default AnimatedText;
