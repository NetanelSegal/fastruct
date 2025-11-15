import { Section } from '@/components/Section';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import { IAbout } from '@/types/about';

const AboutIntroSection = ({ paragraph, bigTextLine2 }: IAbout) => {
  return (
    <Section bgColor='dark' textColor='white' className='pt-32 text-center md:pt-40'>
      <div className='mx-auto max-w-4xl'>
        <FadeInParagraph className='text-h6 text-light leading-relaxed'>
          {paragraph}
        </FadeInParagraph>
      </div>
      {/* Big text line from hero */}
      <div className='container-padding mt-16 flex justify-start md:mt-24'>
        <AnimatedHeading
          text={bigTextLine2}
          className='text-h1 font-bebas text-accent md:text-[6rem] lg:text-[8rem]'
          revealColor='dark'
        />
      </div>
    </Section>
  );
};

export default AboutIntroSection;
