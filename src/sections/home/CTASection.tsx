import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import Link from 'next/link';

import { ICTA } from '@/types/content';

const CTASection: React.FC<ICTA> = ({ title }) => {
  return (
    <Section>
      <div className='flex flex-col items-center gap-6 text-center'>
        <h2 className='text-h2 font-bebas text-light'>{title}</h2>
        <Link href='/contact'>
          <Button variant='primary' size='lg' hoverTransition='lift'>
            Book Your Free Consultation
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default CTASection;
