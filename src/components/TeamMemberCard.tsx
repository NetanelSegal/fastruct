import Image from 'next/image';

interface ITeamMemberCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

export const TeamMemberCard = ({
  imageUrl,
  name,
  title,
}: ITeamMemberCardProps) => {
  return (
    <div className='flex flex-col gap-4 text-center'>
      <div className='relative mx-auto aspect-square w-full max-w-sm'>
        <Image
          fill
          src={imageUrl}
          alt={name}
          className='rounded-lg object-cover'
        />
      </div>
      <div>
        <h3 className='text-h4 font-bebas text-accent'>{name}</h3>
        <p className='text-h6 font-poppins text-light/80'>{title}</p>
      </div>
    </div>
  );
};
