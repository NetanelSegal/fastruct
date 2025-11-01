import Image from 'next/image';

interface IProductCardProps {
  imageUrl: string;
  title: string;
  specs: string[];
}

export const ProductCard = ({ imageUrl, title, specs }: IProductCardProps) => {
  return (
    <div className='bg-light flex flex-col gap-4 rounded-lg shadow-md'>
      <div className='relative aspect-[4/3] w-full'>
        <Image
          fill
          src={imageUrl}
          alt={title}
          className='rounded-t-lg object-cover'
        />
        <div className='absolute top-4 left-4 flex flex-wrap gap-2'>
          {specs.map((spec) => (
            <div
              key={spec}
              className='bg-accent rounded-full px-3 py-1 text-sm font-bold text-white uppercase'>
              {spec}
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-between p-4'>
        <h5 className='text-h5 font-bebas text-dark font-bold uppercase'>
          {title}
        </h5>
        <span className='text-dark text-2xl'>→</span>
      </div>
    </div>
  );
};
