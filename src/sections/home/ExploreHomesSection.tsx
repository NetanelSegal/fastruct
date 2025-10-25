import React from 'react';
import { Section } from '@/components/Section';
import { ProductCard } from '@/components/ProductCard';
import { Module } from '@/lib/types';
import AnimatedText from '@/components/AnimatedText';

interface IExploreHomesSectionProps {
  featuredModules: Module[];
}

const ExploreHomesSection = ({
  featuredModules,
}: IExploreHomesSectionProps) => {
  return (
    <Section>
      <div className='flex flex-col gap-8'>
        <div className='text-center'>
          <AnimatedText
            text='Explore Our Homes'
            className='text-h2 font-bebas text-light'
          />
          <p className='text-h6 text-light/80 mx-auto max-w-2xl'>
            <AnimatedText text='Explore our range of models, each designed for flexibility and comfort' />
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-3'>
          {featuredModules.map((module) => (
            <ProductCard
              key={module.slug}
              imageUrl='https://picsum.photos/400/300'
              title={module.title}
              specs={`${module.specs.areaSqm} sqft | ${module.specs.bedrooms} Bedroom | ${module.specs.bathrooms} Bathroom`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExploreHomesSection;
