import { IAbout } from '@/types/about';

const AboutIntroSection = ({ paragraph }: IAbout) => {
  return (
    <div className='bg-light py-32 text-center'>
      <div className='container mx-auto mt-16 max-w-4xl'>
        <p className='text-h6 text-dark leading-relaxed'>{paragraph}</p>
      </div>
    </div>
  );
};

export default AboutIntroSection;
