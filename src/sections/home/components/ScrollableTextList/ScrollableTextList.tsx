'use client';

import { motion } from 'motion/react';
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
  const [jumpKey, setJumpKey] = useState(0);

  useEffect(() => {
    // Trigger jump animation by changing key
    setJumpKey((prev) => prev + 1);
  }, [activeIndex]);

  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange]);

  return (
    <div
      ref={containerRef}
      className={`relative ml-auto flex basis-1/2 flex-col`}>
      {/* Cube indicator */}
      <motion.div
        key={jumpKey}
        className='bg-accent absolute h-[14px] w-[14px] rounded-sm'
        style={{
          top: cubeTop,
          left: 0,
        }}
        initial={{ x: -8 }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          bounce: 0.35,
          duration: 0.6,
        }}
      />
      {/* Text items */}
      <div className={`flex flex-col gap-y-24 pl-6`}>
        {items.map((item, index) => {
          const ref = itemRefs[index];
          return (
            <div
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
