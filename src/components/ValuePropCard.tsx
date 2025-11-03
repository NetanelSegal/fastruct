import FadeInParagraph from './text-animation/FadeInParagraph';

interface IValuePropCardProps {
  title: string;
  description: string;
}

export const ValuePropCard = ({ title, description }: IValuePropCardProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <FadeInParagraph className='text-h4 font-bebas text-accent'>
        {title}
      </FadeInParagraph>
      <FadeInParagraph className='text-h6 font-poppins text-light/80 max-w-prose'>
        {description}
      </FadeInParagraph>
    </div>
  );
};
