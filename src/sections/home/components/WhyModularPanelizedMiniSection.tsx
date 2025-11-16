'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { IConstructionCategory } from '@/types/home';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import Image from 'next/image';
import ScrollableTextList from './ScrollableTextList/ScrollableTextList';
import Parallax from '@/components/Parallax';

interface WhyModularPanelizedMiniSectionProps {
  category: IConstructionCategory;
  index: number;
  totalSections: number;
}

const WhyModularPanelizedMiniSection: React.FC<
  WhyModularPanelizedMiniSectionProps
> = ({ category, index, totalSections }) => {
  return (
    <div className='relative flex min-h-screen flex-col gap-6 md:flex-row md:gap-0'>
      <Image
        src={category.image}
        alt={category.title}
        fill
        className='-translate-x-1/4 object-contain opacity-20'
      />

      <div className='grow'>
        <AnimatedHeading
          text={category.title}
          className='text-h1 font-bebas text-light sticky top-0 shrink'
          revealColor='dark'
        />
      </div>
      <div className='basis-1/2'>
        <ScrollableTextList items={category.items} />
      </div>
    </div>
  );
};

export default WhyModularPanelizedMiniSection;
