import { Section } from '@/components/Section';
import AnimatedHeading from '@/components/AnimatedHeading';
import IntroSectionImage from './IntroSectionImage';
import { IIntro } from '@/types/content';
import FadeInParagraph from '@/components/FadeInParagraph';

const IntroSection: React.FC<IIntro> = ({ text }) => {
  return (
    <Section
      bgColor='dark'
      textColor='light'
      className='relative overflow-x-hidden'>
      <div className='flex flex-col items-center justify-between gap-8 lg:flex-row-reverse'>
        <IntroSectionImage />
        <div className='relative z-10 flex basis-1/2 flex-col gap-4 overflow-y-clip'>
          <AnimatedHeading
            text='More Than Just Construction'
            className='text-h2 font-bebas text-light'
            revealColor='dark'
          />
          <FadeInParagraph className='text-h6 text-light'>
            {text}
          </FadeInParagraph>
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
