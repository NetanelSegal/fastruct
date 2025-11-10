import React from 'react';
import { Section } from '@/components/Section';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import { IWhyModularPanelized } from '@/types/home';
import Image from 'next/image';

const WhyModularPanelizedSectionItem: React.FC<
  IWhyModularPanelized[keyof IWhyModularPanelized]
> = ({ title, items, image }) => {
  return (
    <div className='relative mt-20 flex h-screen items-start text-white'>
      <AnimatedHeading
        text={title}
        className='text-h1 font-bebas text-light basis-1/2'
        revealColor='dark'
      />
      <div className='mt-4 flex basis-1/2 flex-col gap-6'>
        {items.map((item, index) => (
          <p key={index} className='text-h5 font-poppins font-extralight'>
            {item}
          </p>
        ))}
      </div>
      <Image
        src={image}
        alt={title}
        fill
        className='object-contain object-left opacity-40'
      />
    </div>
  );
};

const WhyModularPanelizedSection: React.FC<IWhyModularPanelized> = ({
  modular,
  panelized,
  combinedApproach,
}) => {
  return (
    <Section bgColor='dark'>
      <div className='mb-8 text-center'>
        <AnimatedHeading
          text='Why Modular & Panelized Construction'
          className='text-h2 font-bebas text-light'
          revealColor='dark'
        />
      </div>
      <WhyModularPanelizedSectionItem {...modular} />
      <WhyModularPanelizedSectionItem {...panelized} />
      <WhyModularPanelizedSectionItem {...combinedApproach} />
    </Section>
  );
};

export default WhyModularPanelizedSection;
