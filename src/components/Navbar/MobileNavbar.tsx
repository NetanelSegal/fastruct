'use client';

import Link from 'next/link';
import NavLink from '../NavLink';
import { Button } from '../Button';
import { ROUTES } from '@/lib/routes';
import { RefObject } from 'react';
import { motion, Variants } from 'motion/react';

interface IMobileNavbarProps {
  menuRef: RefObject<HTMLDivElement | null>;
}

const variants: Variants = {
  closed: {
    y: '-100%',
    opacity: 0,
  },
  opened: {
    y: '0%',
    opacity: 1,
  },
};

const MobileNavbar = ({ menuRef }: IMobileNavbarProps) => {
  return (
    <motion.div
      initial='closed'
      animate='opened'
      exit='closed'
      transition={{ duration: 0.3 }}
      variants={variants}
      className='bg-dark/95 absolute top-full left-0 z-0 flex w-full items-center justify-center p-8 backdrop-blur-sm lg:hidden'>
      <nav
        ref={menuRef}
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

export default MobileNavbar;
