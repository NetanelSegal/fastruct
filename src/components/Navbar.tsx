'use client';

import Link from 'next/link';
import FastructLogo from './FastructLogo';
import { Button } from './Button';
import NavLink from './NavLink';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { HamburgerButton, MobileMenu } from './MobileNavbar';
import { ROUTES } from '@/lib/routes';
import { TailwindBreakpoints } from '@/lib/css-constants';
import { useToggle } from '@/hooks/useToggle';

const NAVBAR_SWAP_BREAKPOINT = TailwindBreakpoints.lg;

export default function Navbar() {
  // mobile navbar state
  const [isMobileMenuOpen, toggleIsMobileMenuOpen] = useToggle(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // desktop navbar state
  const [showNavbar, setShowNavbar] = useState(true);
  const { screenWidth } = useScreenWidth();
  const previousScrollY = useRef(0);

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

  const variants: Variants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: '0%',
    },
  };

  return (
    <div className='relative'>
      <motion.header
        className='bg-dark container-padding fixed top-0 z-20 flex w-full items-center justify-between gap-4 border-b py-4'
        variants={variants}
        initial='visible'
        animate={showNavbar ? 'visible' : 'hidden'}
        exit='hidden'
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}>
        <Link href='/'>
          <FastructLogo color='light' height='40' />
        </Link>
        {screenWidth > NAVBAR_SWAP_BREAKPOINT ? (
          <nav className='flex items-center gap-6'>
            {ROUTES.map((route) =>
              route.isButton ? (
                <Link href={route.href} key={route.href}>
                  <Button variant='primary' size='md' hoverTransition='lift'>
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
        ) : (
          <HamburgerButton
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleIsMobileMenuOpen}
          />
        )}
      </motion.header>
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu ref={menuRef} />}
      </AnimatePresence>
    </div>
  );
}
