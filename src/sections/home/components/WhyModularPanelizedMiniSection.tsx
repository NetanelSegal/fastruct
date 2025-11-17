'use client';

import { IConstructionCategory } from '@/types/home';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import ScrollableTextList from './ScrollableTextList/ScrollableTextList';
import { useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { TailwindBreakpoints } from '@/lib/css-constants';

interface WhyModularPanelizedMiniSectionProps {
  category: IConstructionCategory;
  updateActiveCategoryIndex: (isInView: boolean) => void;
}

const WhyModularPanelizedMiniSection: React.FC<
  WhyModularPanelizedMiniSectionProps
> = ({ category, updateActiveCategoryIndex }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    updateActiveCategoryIndex(isInView);
  }, [isInView]);

  return (
    <div ref={sectionRef} className='md:min-h-screen'>
      <div className='relative flex flex-col items-start gap-6 md:flex-row md:gap-0'>
        <div className='sticky top-28 h-fit grow'>
          <AnimatedHeading
            text={category.title}
            className='text-h1 font-bebas text-light shrink'
            revealColor='dark'
          />
        </div>
        <div className='basis-1/2'>
          <ScrollableTextList items={category.items} />
        </div>
      </div>
    </div>
  );
};

export default WhyModularPanelizedMiniSection;
