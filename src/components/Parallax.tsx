'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  startRange?: number;
  endRange?: number;
}

const Parallax = ({
  children,
  className,
  startRange = 0,
  endRange = 0,
}: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const start = 0;
  const end = 1;

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [`${startRange}%`, `${endRange}%`],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export default Parallax;
