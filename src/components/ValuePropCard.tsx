import React from 'react';
import AnimatedText from './AnimatedText';

interface IValuePropCardProps {
  title: string;
  description: string;
}

export const ValuePropCard = ({ title, description }: IValuePropCardProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <AnimatedText text={title} className='text-h4 font-bebas text-accent' />
      <p className='text-h6 font-poppins text-light/80 max-w-prose'>
        <AnimatedText text={description} />
      </p>
    </div>
  );
};
