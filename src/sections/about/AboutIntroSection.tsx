import { Section } from '@/components/Section';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import { IAbout } from '@/types/about';

const AboutIntroSection = ({ paragraph }: IAbout) => {
  return (
    <Section bgColor='light' textColor='dark' className='text-center'>
      <div className='mx-auto max-w-4xl'>
        <FadeInParagraph className='text-h6 leading-relaxed'>
          {paragraph}
        </FadeInParagraph>
      </div>
    </Section>
  );
};

export default AboutIntroSection;
