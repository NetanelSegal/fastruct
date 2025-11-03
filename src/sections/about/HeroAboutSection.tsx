import Image from 'next/image';
import { IHeroAbout } from '@/types/about';

const HeroAboutSection = ({
  title,
  subtitle,
  backgroundImage,
  bigTextLine1,
}: IHeroAbout) => {
  return (
    <section className='relative h-[calc(100vh+12rem)]'>
      <Image
        priority
        src={backgroundImage}
        alt='About hero background'
        fill
        className='object-cover object-center'
      />
      <div className='bg-dark/50 absolute inset-0' />
      <div className='container-padding h-full text-white'>
        <h1 className='text-h1 font-bebas tracking-wider'>{title}</h1>
        <p className='text-h6 text-light opacity-70'>{subtitle}</p>
        <h2 className='font-bebas mt-20 text-center text-[12vw] leading-none whitespace-nowrap'>
          {bigTextLine1}
        </h2>
      </div>
    </section>
  );
};

export default HeroAboutSection;
