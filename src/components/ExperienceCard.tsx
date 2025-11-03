import AnimatedHeading from './text-animation/AnimatedHeading';
import FadeInParagraph from './text-animation/FadeInParagraph';

interface ExperienceCardProps {
  title: string;
  description: string;
  hasBorder: boolean;
  refUpdateFunction: (el: HTMLDivElement) => void;
  top: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  description,
  hasBorder,
  refUpdateFunction,
  top,
}) => {
  return (
    <div
      ref={refUpdateFunction}
      className={`sticky flex flex-col bg-white p-6 md:flex-row md:items-center md:justify-between ${
        hasBorder ? 'border-dark border-t-2' : ''
      }`}
      style={{ top }}>
      <h3 className='text-h2 text-accent mb-2 font-bold md:mb-0'>
        <AnimatedHeading revealColor='white' text={title} />
      </h3>
      <FadeInParagraph className='text-h6 text-dark md:basis-1/2'>
        {description}
      </FadeInParagraph>
    </div>
  );
};

export default ExperienceCard;
