import React from 'react';
import { Button } from '@/components/Button';
import { ModuleCard } from '@/components/ModuleCard';
import { ValuePropCard } from '@/components/ValuePropCard';
import TestimonialsSection from '@/sections/home/TestimonialsSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import modules from '@/../public/content/en/modules.json';

const ComponentsReviewPage = () => {
  const moduleData = modules[0];
  const specs = [
    `${moduleData.specs.areaSqft} sqft`,
    `${moduleData.specs.bedrooms} Bedroom`,
    `${moduleData.specs.bathrooms} Bathroom`,
    `${moduleData.specs.modulesCount} modules`,
  ];

  return (
    <div className='bg-dark text-light section-padding'>
      <div className='mx-auto space-y-16'>
        <section>
          <h1 className='text-h2 font-bebas border-accent/20 mb-8 border-b pb-4'>
            Component Review
          </h1>
        </section>

        {/* Buttons */}
        <section>
          <h2 className='text-h3 font-bebas mb-4'>Buttons</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Button variant='primary' size='sm'>
              Primary SM
            </Button>
            <Button variant='primary' size='md'>
              Primary MD
            </Button>
            <Button variant='primary' size='lg'>
              Primary LG
            </Button>
            <Button variant='secondary' size='md'>
              Secondary MD
            </Button>
            <Button variant='outline' size='md'>
              Outline MD
            </Button>
          </div>
        </section>

        {/* Value Proposition Card */}
        <section>
          <h2 className='text-h3 font-bebas mb-4'>Value Proposition Card</h2>
          <ValuePropCard
            title='SPEED WITHOUT COMPROMISE'
            description='By combining modular and panelized construction, we bring together speed, flexibility, and quality. Every client gets a dedicated project manager, and our team handles everything from permits to final delivery.'
          />
        </section>

        {/* Product Card */}
        <section>
          <h2 className='text-h3 font-bebas mb-4'>Product Card</h2>
          <div className='max-w-md'>
            <ModuleCard
              slug={moduleData.slug}
              imageUrl={moduleData.mainImage}
              title={moduleData.title}
              specs={specs}
            />
          </div>
        </section>

        {/* Team Member Card */}
        <section>
          <h2 className='text-h3 font-bebas mb-4'>Team Member Card</h2>
          <div className='max-w-sm'>
            <TeamMemberCard
              imageUrl='/file.svg' // Using a placeholder
              name='Alex Doe'
              title='Lead Architect'
            />
          </div>
        </section>

        {/* Testimonial Block */}
        <section>
          <h2 className='text-h3 font-bebas mb-4'>Testimonial Block</h2>
          <TestimonialsSection
            quote='Fast Struct crafted our forever home with unrivaled care. Every detail felt luxurious and personal.'
            author='John & Jane Smith'
          />
        </section>

        {/* Accordion */}
        <section>
          <h2 className='text-h3 font-bebas mb-4'>Accordion / FAQ</h2>
          <div className='max-w-2xl'>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  Is modular construction more expensive?
                </AccordionTrigger>
                <AccordionContent>
                  Not necessarily. Thanks to faster timelines and efficient
                  processes, overall costs are often lower, with complete
                  transparency from the start.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  Will my home look like a prefab box?
                </AccordionTrigger>
                <AccordionContent>
                  No. We offer a wide range of customization options to ensure
                  your home reflects your personal style, combining factory
                  precision with architectural flexibility.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentsReviewPage;
