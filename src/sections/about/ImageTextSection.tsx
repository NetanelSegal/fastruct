import Image from 'next/image';
import { IImageText } from '@/types/about';
import Parallax from '@/components/Parallax';

const ImageTextSection = ({ image, paragraph }: IImageText) => {
  return (
    <section className='bg-light py-32'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 items-center gap-16 md:grid-cols-2'>
          <Parallax
            className='size-full'
            startRange={150}
            endRange={-50}
            unitType='px'
            offset={['start end', 'end start']}>
            <div className='relative h-96 w-full overflow-hidden rounded-xl lg:h-[70vh]'>
              <Image
                src={image}
                alt='Construction site'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover object-center'
                priority
              />
            </div>
          </Parallax>
          <div className='relative'>
            <div className='bg-accent absolute top-0 bottom-0 left-0 w-[2px]' />
            <div className='pl-8 md:pl-16'>
              <p className='text-h6 text-dark leading-relaxed'>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
