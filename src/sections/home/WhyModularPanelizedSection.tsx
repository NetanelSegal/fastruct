import React from 'react';
import { Section } from '@/components/Section';
import { ValuePropCard } from '@/components/ValuePropCard';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';

import { IWhyModularPanelized } from '@/types/home';

const WhyModularPanelizedSection: React.FC<IWhyModularPanelized> = ({
  modular,
  panelized,
  combinedApproach,
}) => {
  return (
    <Section>
      <div className='mb-8 text-center'>
        <AnimatedHeading
          text='Why Modular & Panelized Construction'
          className='text-h2 font-bebas text-light'
          revealColor='dark'
        />
      </div>
      <div className='grid gap-8 md:grid-cols-3'>
        <ValuePropCard
          title={modular.title}
          description={modular.items.join('. ')}
        />
        <ValuePropCard
          title={panelized.title}
          description={panelized.items.join('. ')}
        />
        <ValuePropCard
          title={combinedApproach.title}
          description={combinedApproach.items.join('. ')}
        />
      </div>
    </Section>
  );
};

export default WhyModularPanelizedSection;
