"use client";

import { motion, Variants } from "motion/react";

interface LogoStrokeFillAnimatedProps {
  delay?: number;
  duration?: number;
}

const LogoStrokeFillAnimated = ({
  delay = 0,
  duration = 2,
}: LogoStrokeFillAnimatedProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, strokeOpacity: 0, fillOpacity: 0 },
    visible: {
      pathLength: [0, null, 1, null],
      strokeOpacity: [0, null, 1, null],
      fillOpacity: [0, null, null, 1],
      transition: {
        duration,
        delay,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative">
      <svg
        className="-z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-gray-800/50 stroke-2"
        width="74"
        height="47"
        viewBox="0 0 74 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.879395 8.81963L16.1009 0H71.9013L56.6753 8.81963H0.879395Z" />
        <path d="M0 46.666V12.6816H54.3701V20.1256H6.08061V46.666H0Z" />
        <path d="M10.8862 46.6641V39.2202H48.2849V33.3912H10.8862V25.9473H54.3699V46.6641H10.8862Z" />
        <path d="M58.0298 39.219L69.3915 32.6342V26.5496L58.0298 33.1345V12.6786L73.2557 3.85352V11.0419L64.1104 16.338V22.428L73.2557 17.1265V37.5823L58.0298 46.402V39.219Z" />
      </svg>
      <motion.svg
        width="74"
        height="47"
        viewBox="0 0 74 47"
        fill="white"
        strokeWidth={2}
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          variants={pathVariants}
          d="M0.879395 8.81963L16.1009 0H71.9013L56.6753 8.81963H0.879395Z"
        />
        <motion.path
          variants={pathVariants}
          d="M0 46.666V12.6816H54.3701V20.1256H6.08061V46.666H0Z"
        />
        <motion.path
          variants={pathVariants}
          d="M10.8862 46.6641V39.2202H48.2849V33.3912H10.8862V25.9473H54.3699V46.6641H10.8862Z"
        />
        <motion.path
          variants={pathVariants}
          d="M58.0298 39.219L69.3915 32.6342V26.5496L58.0298 33.1345V12.6786L73.2557 3.85352V11.0419L64.1104 16.338V22.428L73.2557 17.1265V37.5823L58.0298 46.402V39.219Z"
        />
      </motion.svg>
    </div>
  );
};

export default LogoStrokeFillAnimated;
