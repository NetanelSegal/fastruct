'use client';

import { HTMLMotionProps, motion, Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { useScreenWidth } from '@/hooks/useScreenWidth';
import clsx from 'clsx';

interface IModuleCardProps {
  isLast: boolean;
  index: number;
  slug: string;
  imageUrl: string;
  title: string;
  specs: string[];
  variants: Variants;
}

const CARD_ANIMATION_DURATION = 0.5;
const ITEMS_ANIMATION_DURATION = 0.5;

export const ModuleCard = ({
  isLast,
  index,
  slug,
  imageUrl,
  title,
  specs,
  variants,
}: IModuleCardProps) => {
  const { breakpoint } = useScreenWidth();
  const isMobile =
    breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md';

  const imageVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: ITEMS_ANIMATION_DURATION } },
  };

  const titleVariants: Variants = {
    initial: { x: '100%', opacity: 0 },
    hover: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeInOut', duration: ITEMS_ANIMATION_DURATION },
    },
  };

  const motionContainerProps: HTMLMotionProps<'div'> = isMobile
    ? {
        whileInView: 'hover',
      }
    : {
        initial: 'initial',
        whileHover: 'hover',
      };

  return (
    <motion.div
      variants={variants}
      className={clsx(
        'w-full overflow-hidden rounded-xl shadow-md',
        isLast && index % 2 === 0 && 'md:col-span-2 md:mx-auto'
      )}>
      <Link href={`/module/${slug}`} className='block'>
        <motion.div
          initial='initial'
          transition={{ duration: CARD_ANIMATION_DURATION }}
          viewport={{ once: false, amount: 0.8 }}
          {...motionContainerProps}
          className='bg-light group relative z-0 flex cursor-pointer flex-col gap-4'>
          <div className='relative aspect-[4/3] w-full overflow-hidden'>
            <motion.div variants={imageVariants} className='h-full w-full'>
              <Image
                fill
                src={imageUrl}
                alt={title}
                className='object-cover object-center'
              />
            </motion.div>
          </div>
          <Specs specs={specs} />
          <ModulesTitle title={title} slug={slug} variants={titleVariants} />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const ModulesTitle = ({
  title,
  slug,
  variants,
}: {
  title: string;
  slug: string;
  variants: Variants;
}) => {
  return (
    <motion.div
      variants={variants}
      className='bg-light absolute right-0 bottom-0 z-10 flex items-center justify-between gap-4 rounded-tl-xl p-4'>
      <h4 className='text-h4 font-bebas text-dark uppercase'>{title}</h4>
      <div className='bg-dark flex h-10 w-10 items-center justify-center rounded-lg p-2 text-white'>
        <i className='fa-solid fa-arrow-up-right-from-square'></i>
      </div>
    </motion.div>
  );
};

const Specs = ({ specs }: { specs: string[] }) => {
  return (
    <div className='absolute top-4 left-4 flex flex-wrap gap-2'>
      {specs.map((spec) => (
        <div
          key={spec}
          className='bg-dark rounded-full px-3 py-1 text-sm font-bold text-white uppercase'>
          {spec}
        </div>
      ))}
    </div>
  );
};
