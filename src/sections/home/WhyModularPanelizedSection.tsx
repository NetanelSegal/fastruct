'use client';

import { Section } from '@/components/Section';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import { IWhyModularPanelized } from '@/types/home';
import WhyModularPanelizedMiniSection from './components/WhyModularPanelizedMiniSection';

const WhyModularPanelizedSection: React.FC<IWhyModularPanelized> = ({
  modular,
  panelized,
  combinedApproach,
}) => {
  const categories = [modular, panelized, combinedApproach];

  return (
    <Section bgColor='dark'>
      <div className='mb-8 text-center'>
        <AnimatedHeading
          text='Why Modular & Panelized Construction'
          className='text-h2 font-bebas text-light'
          revealColor='dark'
        />
      </div>

      <div className='flex flex-col'>
        {categories.map((category, index) => (
          <WhyModularPanelizedMiniSection
            key={category.title}
            category={category}
            index={index}
            totalSections={categories.length}
          />
        ))}
      </div>
    </Section>
  );
};

export default WhyModularPanelizedSection;
