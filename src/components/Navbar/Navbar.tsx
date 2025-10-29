'use client';

import { useEffect, useRef, useState } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { TailwindBreakpoints } from '@/lib/css-constants';
import { useToggle } from '@/hooks/useToggle';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { AnimatePresence, motion, Variants } from 'motion/react';
import Link from 'next/link';
import FastructLogo from '../FastructLogo';
import HamburgerButton from './HamburgerButton';
import clsx from 'clsx';

const NAVBAR_SWAP_BREAKPOINT = TailwindBreakpoints.lg;

const variants: Variants = {
  hidden: {
    y: '-100%',
  },
  visible: {
    y: '0%',
  },
};

export default function Navbar() {
  const [isMobileMenuOpen, toggleIsMobileMenuOpen] = useToggle(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const { screenWidth, breakpoint } = useScreenWidth();
  const previousScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screenWidth < NAVBAR_SWAP_BREAKPOINT) return;

    const handleScroll = () => {
      const directionDown = window.scrollY > previousScrollY.current;

      previousScrollY.current = window.scrollY;
      setShowNavbar(!directionDown);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [screenWidth]);

  return (
    <motion.header
      variants={variants}
      initial={{ y: '0%' }}
      animate={showNavbar ? { y: '0%' } : { y: '-100%' }}
      transition={{ duration: 0.3 }}
      className='fixed top-0 z-20 w-full'>
      <div className='bg-dark absolute z-10 h-full w-full'></div>

      <div className='container-padding relative z-20 flex items-center justify-between border-b py-4'>
        <Link href='/'>
          <FastructLogo
            color='light'
            height={clsx({
              '40': screenWidth > TailwindBreakpoints.lg,
              '35': breakpoint == 'md',
              '25': screenWidth < TailwindBreakpoints.md,
            })}
          />
        </Link>
        {screenWidth > NAVBAR_SWAP_BREAKPOINT ? (
          <DesktopNavbar />
        ) : (
          <HamburgerButton
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleIsMobileMenuOpen}
          />
        )}
      </div>
      {screenWidth < NAVBAR_SWAP_BREAKPOINT && (
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileNavbar key='mobile-menu' menuRef={menuRef} />
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
}
