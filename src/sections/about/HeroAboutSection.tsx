import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import { IHeroAbout } from '@/types/about';

const HeroAboutSection = ({ title, subtitle }: IHeroAbout) => {
  return (
    <section className='relative h-screen'>
      <div className='container-padding absolute bottom-4 left-0 w-full text-white md:bottom-8 md:w-2/3 lg:bottom-16 lg:w-1/2'>
        <AnimatedHeading
          text={title}
          className='text-h1 font-bebas tracking-wider'
        />
        <FadeInParagraph className='text-h6 text-light opacity-70'>
          {subtitle}
        </FadeInParagraph>
      </div>
    </section>
  );
};

export default HeroAboutSection;
