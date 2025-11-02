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
    <Section bgColor='dark'>
      <AnimatedHeading
        text={title}
        className='text-h2 font-bebas text-light mb-8 w-full text-center'
        revealColor='dark'
      />
      <Accordion type='single' collapsible className='mx-auto max-w-xl'>
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-left'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQSection;
