import { Section } from '@/components/Section';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import IntroSectionImage from './IntroSectionImage';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import { IIntro } from '@/types/home';

const IntroSection: React.FC<IIntro> = ({ text }) => {
  return (
    <Section
      bgColor='dark'
      textColor='light'
      className='relative overflow-x-hidden'>
      <div className='relative flex flex-col items-center justify-between gap-8 lg:flex-row-reverse'>
        <IntroSectionImage />
        <div className='z-10 flex basis-1/2 flex-col gap-4 overflow-y-clip'>
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
