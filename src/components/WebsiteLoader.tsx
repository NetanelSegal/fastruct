'use client';

import { ReactNode, useEffect, useState } from 'react';
import LogoStrokeFillAnimated from './LogoStrokeFillAnimated';
import { motion, Variants } from 'motion/react';

interface IWebsiteLoaderProps {
  children: ReactNode;
}

const LOGO_ANIMATION_DURATION = 2;

const WebsiteLoader = ({ children }: IWebsiteLoaderProps) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, LOGO_ANIMATION_DURATION * 1000);
    return () => clearTimeout(timer);
  }, []);

  const loaderVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {/* <AnimatePresence> */}
      {showLoader ? (
        <motion.div
          key='website-loader'
          variants={loaderVariants}
          initial='hidden'
          animate='visible'
          exit={{ y: '-120vh' }}
          transition={{ duration: 1.2, ease: 'backIn' }}
          className='bg-dark fixed top-[-10vh] z-50 flex h-[120vh] w-full items-center justify-center'
        >
          <LogoStrokeFillAnimated
            delay={1.2}
            duration={LOGO_ANIMATION_DURATION}
          />
        </motion.div>
      ) : (
        children
      )}
      {/* </AnimatePresence> */}
    </>
  );
};

export default WebsiteLoader;
