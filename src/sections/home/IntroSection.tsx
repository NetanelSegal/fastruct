import { Section } from '@/components/Section';
import AnimatedText from '@/components/AnimatedText';
import Parallax from '@/components/Parallax';
import IntroSectionImage from './IntroSectionImage';

const IntroSection = () => {
  return (
    <Section bgColor='dark' textColor='light' className='z-20'>
      <div className='grid items-center gap-12 md:grid-cols-2'>
        <div className='relative z-10 flex flex-col md:-mr-24'>
          <AnimatedText
            text='More Than Just Construction'
            className='text-h2 font-bebas'
          />
          <p className='text-h6'>
            <AnimatedText text='Fastruct is redefining how homes and spaces are built. By combining modular and panelized construction, we deliver faster timelines, higher quality, and a smoother experience from start to finish.' />
          </p>
        </div>
        <Parallax startRange={10} endRange={-10} unitType='vh'>
          <div className='relative aspect-video translate-x-[10%] -translate-y-[30%] scale-125 overflow-hidden rounded-lg'>
            <IntroSectionImage />
          </div>
        </Parallax>
      </div>
    </Section>
  );
};

export default IntroSection;
