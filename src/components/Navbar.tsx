'use client';
import Link from 'next/link';
import FastructLogo from './FastructLogo';
import { Button } from './Button';
import NavLink from './NavLink';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const directionDown = window.scrollY > previousScrollY.current;

      previousScrollY.current = window.scrollY;
      setShowNavbar(!directionDown);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: '0%',
    },
  };

  return (
    <motion.header
      className='container-padding bg-dark sticky top-0 z-50 flex items-center justify-between gap-4 border-b py-4'
      variants={variants}
      initial='visible'
      animate={showNavbar ? 'visible' : 'hidden'}
      exit='hidden'
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <Link href='/'>
        <FastructLogo color='light' height='40' />
      </Link>
      <nav className='flex items-center gap-6'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/technical'>Technical</NavLink>
        <Link href='/contact'>
          <Button variant='primary' size='md' hoverTransition='lift'>
            Call us
          </Button>
        </Link>
      </nav>
    </motion.header>
  );
}
