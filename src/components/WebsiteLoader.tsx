"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import LogoStrokeFillAnimated from "./LogoStrokeFillAnimated";
import { AnimatePresence, motion, Variants } from "motion/react";

interface IWebsiteLoaderProps {
  children: ReactNode;
}

const LOGO_ANIMATION_DURATION = 3; // seconds
const FRAME_ANIMATION_DURATION = 1.2; // seconds

const WebsiteLoader = ({ children }: IWebsiteLoaderProps) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowLoader(false);
      },
      (LOGO_ANIMATION_DURATION + FRAME_ANIMATION_DURATION) * 1000
    );
    return () => clearTimeout(timer);
  }, []);

  const loaderVariants: Variants = {
    hidden: {
      y: "-120vh",
    },
    visible: {
      y: "0vh",
    },
  };

  return (
    <AnimatePresence>
      {showLoader ? (
        <motion.div
          key="website-loader"
          variants={loaderVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: FRAME_ANIMATION_DURATION,
            ease: "easeInOut",
          }}
          className="bg-dark fixed top-[-10vh] h-[120vh] z-50 flex w-full items-center justify-center"
        >
          <LogoStrokeFillAnimated
            delay={FRAME_ANIMATION_DURATION - LOGO_ANIMATION_DURATION * 0.25}
            duration={LOGO_ANIMATION_DURATION}
          />
        </motion.div>
      ) : (
        <Fragment key="website-content">{children}</Fragment>
      )}
    </AnimatePresence>
  );
};

export default WebsiteLoader;
