import Image from 'next/image';
import { IImageText } from '@/types/about';

const ImageTextSection = ({ image, paragraph }: IImageText) => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative h-96 md:h-full">
          <Image
            src={image}
            alt="Features image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent" />
          <div className="pl-16">
            <p className="text-h6 text-dark leading-relaxed">{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
