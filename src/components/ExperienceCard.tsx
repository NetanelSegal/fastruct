'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';
import RollingText from './RollingText';
import AnimatedHeading from './AnimatedHeading';
import FadeInParagraph from './FadeInParagraph';

interface ExperienceCardProps {
  title: string;
  description: string;
  hasBorder: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  description,
  hasBorder,
}) => {
  return (
    <div
      className={`flex flex-col items-start p-4 md:flex-row md:items-center md:justify-between md:text-left ${hasBorder ? 'border-dark border-b-2' : ''}`}>
      <h3 className='text-h2 text-accent mb-2 font-bold'>
        <AnimatedHeading revealColor='white' text={title} />
      </h3>
      <FadeInParagraph className='text-h6 text-dark basis-1/2'>
        {description}
      </FadeInParagraph>
    </div>
  );
};

export default ExperienceCard;
