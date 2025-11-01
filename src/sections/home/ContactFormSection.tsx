import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import Link from 'next/link';

const ContactFormSection = () => {
  return (
    <Section>
      <div className='flex flex-col items-center gap-6 text-center'>
        <h2 className='text-h2 font-bebas text-light'>
          Let&apos;s build together
        </h2>
        <p className='text-h6 text-light/80 max-w-prose'>
          Have a project in mind? Let&apos;s talk about how we can bring it to
          life.
        </p>
        <Link href='/contact'>
          <Button variant='primary' size='lg' hoverTransition='lift'>
            Get in Touch
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default ContactFormSection;
