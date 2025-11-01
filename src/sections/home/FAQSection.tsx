import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { Section } from '@/components/Section';
import AnimatedHeading from '@/components/AnimatedHeading';

import { IFAQ } from '@/types/content';

const FAQSection: React.FC<IFAQ> = ({ title, items }) => {
  return (
    <Section>
      <div className='mx-auto max-w-3xl'>
        <AnimatedHeading
          text={title}
          className='text-h2 font-bebas text-light mb-8 text-center'
          revealColor='dark'
        />
        <Accordion type='single' collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQSection;
