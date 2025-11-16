import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import { IWhyModularPanelized } from '@/types/home';
import Image from 'next/image';

const WhyModularPanelizedSectionItem: React.FC<
  IWhyModularPanelized[keyof IWhyModularPanelized]
> = ({ title, items, image }) => {
  return (
    <div className='relative mt-20 flex h-screen flex-col items-start text-white md:flex-row md:items-start md:justify-between'>
      <AnimatedHeading
        text={title}
        className='text-h1 font-bebas text-light md:basis-1/2'
        revealColor='dark'
      />
      <div className='mt-4 flex flex-col gap-6 md:basis-1/2'>
        {items.map((item, index) => (
          <p key={index} className='text-h5 font-poppins font-extralight'>
            {item}
          </p>
        ))}
      </div>
      <Image
        src={image}
        alt={title}
        fill
        className='object-contain object-left opacity-40'
      />
    </div>
  );
};

export default WhyModularPanelizedSectionItem;
