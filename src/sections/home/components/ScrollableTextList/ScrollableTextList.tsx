'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { useActiveTextIndex } from './useActiveTextIndex';

interface ScrollableTextListProps {
  items: string[];
  onActiveIndexChange?: (index: number) => void;
}

const ScrollableTextList: React.FC<ScrollableTextListProps> = ({
  items,
  onActiveIndexChange,
}) => {
  const { activeIndex, cubeTop, itemRefs, containerRef } = useActiveTextIndex(
    items.length
  );

  const [prevCubeTop, setPrevCubeTop] = useState(cubeTop);
  const [prevActiveIndex, setPrevActiveIndex] = useState(activeIndex);

  // Use motion values for smooth animations
  const top = useMotionValue(cubeTop);
  const x = useMotionValue(0);

  // Shared spring configuration for synchronized animations
  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  // Spring animations - both use the same config for perfect synchronization
  const springTop = useSpring(top, springConfig);
  const springX = useSpring(x, springConfig);

  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange, setPrevActiveIndex]);

  useEffect(() => {
    const triggerBounceAnimation = () => {
      // Trigger bounce animation when active index changes
      if (activeIndex !== prevActiveIndex && cubeTop !== prevCubeTop) {
        setPrevActiveIndex(activeIndex);
        setPrevCubeTop(cubeTop);

        // Update both positions simultaneously - they will animate in sync
        top.set(cubeTop);
        // Bounce left first, then return to 0
        x.set(-28);

        // After a brief delay, return x to 0 (this creates the bounce effect)
        // The delay should be about 30% of the spring duration
        const bounceDelay = 200; // milliseconds
        setTimeout(() => {
          x.set(0);
        }, bounceDelay);
      }
    };
    triggerBounceAnimation();
  }, [activeIndex, prevActiveIndex, cubeTop, prevCubeTop, x, top]);

  return (
    <div
      ref={containerRef}
      className={`relative ml-auto flex basis-1/2 flex-col`}>
      {/* Cube indicator */}
      <motion.div
        className='bg-accent absolute h-[14px] w-[14px] rounded-sm'
        style={{
          left: 0,
          top: springTop,
          x: springX,
        }}
      />
      {/* Text items */}
      <div className={`flex flex-col gap-y-24 pl-6`}>
        {items.map((item, index) => {
          const ref = itemRefs[index];
          return (
            <div
              style={{ opacity: index === activeIndex ? 1 : 0.5 }}
              key={index}
              ref={ref}
              className='text-h4 font-poppins text-light text-left font-extralight'>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollableTextList;
