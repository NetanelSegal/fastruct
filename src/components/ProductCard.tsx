import Image from 'next/image';
import AnimatedText from './AnimatedText';

interface IProductCardProps {
  imageUrl: string;
  title: string;
  specs: string;
}

export const ProductCard = ({ imageUrl, title, specs }: IProductCardProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative aspect-[4/3] w-full'>
        <Image
          fill
          src={imageUrl}
          alt={title}
          className='rounded-lg object-cover'
        />
      </div>
      <div>
        <AnimatedText text={title} className='text-h5 font-bebas text-light' />
        <p className='text-h6 font-poppins text-light/80'>
          <AnimatedText text={specs} />
        </p>
      </div>
    </div>
  );
};
