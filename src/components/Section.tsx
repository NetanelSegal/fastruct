import React from 'react';
import { clsx } from 'clsx';
import { ColorsUnion } from '@/lib/css-constants';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bgColor?: ColorsUnion;
  textColor?: ColorsUnion;
}

export const Section = ({
  children,
  className,
  bgColor,
  textColor,
  ...props
}: SectionProps) => {
  const classes = clsx(
    'section-padding relative',
    `bg-${bgColor}`,
    `text-${textColor}`,
    className
  );

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};
