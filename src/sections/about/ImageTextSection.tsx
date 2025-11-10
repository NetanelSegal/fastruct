import Image from 'next/image';
import { IImageText } from '@/types/about';
import Parallax from '@/components/Parallax';

const ImageTextSection = ({ image, paragraph }: IImageText) => {
  return (
    <section className='bg-white py-32'>
      <div className='flex flex-col items-center gap-16 md:grid-cols-2 md:flex-row'>
        <Parallax
          className='size-full'
          startRange={150}
          endRange={-50}
          unitType='px'
          offset={['start end', 'end start']}>
          <div className='relative h-96 w-full translate-x-10 scale-105 overflow-hidden rounded-lg lg:h-[70vh] lg:-translate-y-10 lg:scale-125'>
            <Image
              src={image}
              alt='Construction site'
              fill
              sizes='50vw'
              className='object-cover object-center'
              priority
            />
          </div>
        </Parallax>
        <div className='relative'>
          <div className='bg-accent absolute top-0 bottom-0 left-0 w-[2px]' />
          <div className='pl-16'>
            <p className='text-h6 text-dark leading-relaxed'>{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
