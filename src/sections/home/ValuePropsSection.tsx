import { Section } from '@/components/Section';
import { ValuePropCard } from '@/components/ValuePropCard';

const ValuePropsSection = () => {
  return (
    <Section>
      <div className='grid gap-8 text-center md:grid-cols-3'>
        <ValuePropCard
          title='14+ Years'
          description='Over a decade of proven results in modular and panelized construction'
        />
        <ValuePropCard
          title='500+ Projects'
          description='Across California - from guest units to full-scale residential and commercial builds.'
        />
        <ValuePropCard
          title='3-5 Months'
          description='Most projects are designed, built, and delivered in under half a year'
        />
      </div>
    </Section>
  );
};

export default ValuePropsSection;
