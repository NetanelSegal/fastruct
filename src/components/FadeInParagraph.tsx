'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface FadeInParagraphProps {
  children?: React.ReactNode;
  className?: string;
}

const FadeInParagraph = ({ children, className }: FadeInParagraphProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? '0%' : '100%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.p>
  );
};

export default FadeInParagraph;
