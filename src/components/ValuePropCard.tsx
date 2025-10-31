import React from 'react';
import AnimatedText from './AnimatedText';

interface IValuePropCardProps {
  title: string;
  description: string;
}

export const ValuePropCard = ({ title, description }: IValuePropCardProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <AnimatedText
        text={title}
        className='text-h4 font-bebas text-accent'
        revealColor='dark'
      />
      <AnimatedText
        className='text-h6 font-poppins text-light/80 max-w-prose'
        text={description}
        revealColor='dark'
      />
    </div>
  );
};
