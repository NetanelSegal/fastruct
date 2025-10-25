import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { Section } from '@/components/Section';
import AnimatedText from '@/components/AnimatedText';

const FAQSection = () => {
  return (
    <Section>
      <div className='mx-auto max-w-3xl'>
        <AnimatedText
          text='Frequently Asked Questions'
          className='text-h2 font-bebas text-light mb-8 text-center'
        />
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              Is modular or panelized construction more expensive than
              traditional building?
            </AccordionTrigger>
            <AccordionContent>
              Not necessarily. Thanks to faster timelines and efficient
              processes, overall costs are often competitive - with complete
              transparency from the start.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Will my home look like a &quot;prefab box&quot;?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely not. Our modular and panelized systems allow for
              immense design flexibility. We can create any style you envision,
              from traditional to ultra-modern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>How long does it take to build?</AccordionTrigger>
            <AccordionContent>
              While every project is unique, most of our homes are designed,
              fabricated, and installed within 3-5 months, a significant time
              saving over traditional construction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              Do you handle permits and approvals?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our team manages the entire permitting process, ensuring your
              project complies with all local building codes and regulations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>
              Is modular/panelized construction durable?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Our homes are built to the same (and often higher) standards
              as site-built homes, using high-quality materials in a
              climate-controlled factory environment. They are engineered to
              withstand transportation and craning, which often makes them even
              more robust.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQSection;
