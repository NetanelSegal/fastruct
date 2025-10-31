import React from 'react';
import { Section } from '@/components/Section';
import { ValuePropCard } from '@/components/ValuePropCard';
import AnimatedText from '@/components/AnimatedText';

const WhyModularPanelizedSection = () => {
  return (
    <Section>
      <div className='mb-8 text-center'>
        <AnimatedText
          text='Why Modular & Panelized Construction'
          className='text-h2 font-bebas text-light'
          revealColor='bg-dark'
        />
      </div>
      <div className='grid gap-8 md:grid-cols-3'>
        <ValuePropCard
          title='Modular'
          description='Factory-built precision modules. Faster timelines (up to 50% quicker). Consistent quality control in a controlled environment. Minimal disruption on-site.'
        />
        <ValuePropCard
          title='Panelized'
          description='Pre-engineered wall and roof panels. Flexible for complex or hard-to-reach sites. Easier permitting in many regions. Scalable for a variety of project sizes.'
        />
        <ValuePropCard
          title='Combined Approach'
          description='Best of both worlds. Tailored to project needs and client vision. Maximum flexibility and efficiency.'
        />
      </div>
    </Section>
  );
};

export default WhyModularPanelizedSection;
