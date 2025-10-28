'use client';

import Link from 'next/link';
import { Button } from './Button';
import NavLink from './NavLink';
import { motion, Variants } from 'motion/react';
import { RefObject } from 'react';
import { ROUTES } from '@/lib/routes';

interface IMobileMenuProps {
  ref: RefObject<HTMLDivElement | null>;
}

interface IHamburgerButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const variants: Variants = {
  closed: {
    y: '0%',
  },
  opened: {
    y: '-50%',
  },
};

export const HamburgerButton = ({
  isOpen,
  toggleMenu,
}: IHamburgerButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className='bg-accent relative size-10 justify-center overflow-hidden rounded-lg text-lg text-white'>
      <motion.div
        variants={variants}
        initial='closed'
        animate={isOpen ? 'opened' : 'closed'}
        transition={{ duration: 0.3 }}
        className='flex w-full flex-col justify-start'>
        <div className='flex aspect-square w-full items-center justify-center'>
          <i className='fas fa-bars transition-all group-hover:scale-110 group-active:scale-90'></i>
        </div>
        <div className='flex aspect-square w-full items-center justify-center'>
          <i className='fas fa-times transition-all group-hover:scale-110 group-active:scale-90'></i>
        </div>
      </motion.div>
    </button>
  );
};

export const MobileMenu = ({ ref }: IMobileMenuProps) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
      className='bg-dark/95 fixed top-0 bottom-1/2 left-0 z-10 flex h-screen w-full items-center justify-center p-8 backdrop-blur-sm'>
      <nav
        ref={ref}
        className='flex flex-col items-center justify-center gap-2'>
        {ROUTES.map((route) =>
          route.isButton ? (
            <Link href={route.href} key={route.href}>
              <Button variant='primary' size='lg' hoverTransition='lift'>
                {route.title}
              </Button>
            </Link>
          ) : (
            <NavLink key={route.href} href={route.href}>
              {route.title}
            </NavLink>
          )
        )}
      </nav>
    </motion.div>
  );
};
