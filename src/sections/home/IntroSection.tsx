import { Section } from '@/components/Section';
import AnimatedText from '@/components/AnimatedText';
import IntroSectionImage from './IntroSectionImage';

const IntroSection = () => {
  return (
    <Section
      bgColor='dark'
      textColor='light'
      className='relative overflow-x-hidden'>
      <div className='flex flex-col items-center justify-between gap-8 lg:flex-row-reverse'>
        <IntroSectionImage />
        <div className='relative z-10 flex basis-1/2 flex-col gap-4'>
          <AnimatedText
            text='More Than Just Construction'
            className='text-h2 font-bebas text-light'
            revealColor='dark'
          />
          <AnimatedText
            className='text-h6 text-light max-w-lg'
            text='Fastruct is redefining how homes and spaces are built. By combining modular and panelized construction, we deliver faster timelines, higher quality, and a smoother experience from start to finish.'
            revealColor='dark'
          />
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
