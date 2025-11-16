'use client';

import { IProcess } from '@/types/home';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import { cloneElement, RefObject, useEffect, useRef, useState } from 'react';
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { calculateDistance, getElementCenter } from '@/lib/utils';
import { TailwindBreakpoints } from '@/lib/css-constants';

const numbersSvgs = [
  <svg
    key='number-1'
    width='137'
    height='360'
    viewBox='0 0 137 360'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M67.5 360V74L0 115.5V40.5L67.5 0H137V360H67.5Z' fill='#E5E0D2' />
  </svg>,
  <svg
    key='number-2'
    width='252'
    height='367'
    viewBox='0 0 252 367'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 367V308L151 174C162.333 164 170.333 154.583 175 145.75C179.667 136.917 182 128.667 182 121C182 110 179.75 100.25 175.25 91.75C170.75 83.0833 164.417 76.3333 156.25 71.5C148.083 66.5 138.5 64 127.5 64C116 64 105.833 66.6667 97 72C88.3333 77.1667 81.5833 84.0833 76.75 92.75C71.9167 101.25 69.6667 110.5 70 120.5H0C0 95.8333 5.41667 74.5 16.25 56.5C27.0833 38.5 42.1667 24.5833 61.5 14.75C80.8333 4.91667 103.333 0 129 0C152.5 0 173.5 5.16666 192 15.5C210.667 25.6666 225.333 39.9166 236 58.25C246.667 76.5833 252 97.8333 252 122C252 139.833 249.5 154.667 244.5 166.5C239.5 178.167 232.083 189 222.25 199C212.417 208.833 200.333 220 186 232.5L88.5 318L83 303H252V367H0Z'
      fill='#E5E0D2'
    />
  </svg>,
  <svg
    key='number-3'
    width='246'
    height='367'
    viewBox='0 0 246 367'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M120 366.5C102 366.5 84.8333 362.917 68.5 355.75C52.1667 348.417 37.9167 338.167 25.75 325C13.75 311.833 5.16667 296.333 0 278.5L66 261C69.5 274.167 76.3333 284.417 86.5 291.75C96.8333 298.917 108 302.5 120 302.5C130.333 302.5 139.75 300 148.25 295C156.917 290 163.75 283.25 168.75 274.75C173.917 266.25 176.5 256.833 176.5 246.5C176.5 231 171.167 217.75 160.5 206.75C150 195.583 136.5 190 120 190C115 190 110.167 190.75 105.5 192.25C100.833 193.583 96.3333 195.5 92 198L61.5 144.5L176 49.5L181 64H14V0H239V64L150 150L149.5 131C170.167 134.167 187.583 141.417 201.75 152.75C216.083 163.917 226.917 177.75 234.25 194.25C241.75 210.583 245.5 228 245.5 246.5C245.5 269.167 239.75 289.583 228.25 307.75C216.75 325.75 201.5 340.083 182.5 350.75C163.5 361.25 142.667 366.5 120 366.5Z'
      fill='#E5E0D2'
    />
  </svg>,
  <svg
    key='number-4'
    width='258'
    height='360'
    viewBox='0 0 258 360'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M156.5 360V304H0V240.5L113.5 0H191.5L78 240.5H156.5V150.5H225.5V240.5H257.5V304H225.5V360H156.5Z'
      fill='#E5E0D2'
    />
  </svg>,
  <svg
    key='number-5'
    width='245'
    height='368'
    viewBox='0 0 245 368'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M117 367.5C98.8333 367.5 81.75 363.75 65.75 356.25C49.9167 348.75 36.25 338.333 24.75 325C13.25 311.667 5 296.167 0 278.5L65.5 261C67.6667 269.5 71.5 276.833 77 283C82.6667 289.167 89.1667 294 96.5 297.5C104 300.833 111.667 302.5 119.5 302.5C129.833 302.5 139.25 300 147.75 295C156.417 290 163.25 283.25 168.25 274.75C173.417 266.25 176 256.833 176 246.5C176 236.167 173.417 226.75 168.25 218.25C163.25 209.75 156.417 203 147.75 198C139.25 193 129.833 190.5 119.5 190.5C106.833 190.5 96.5 192.667 88.5 197C80.5 201.167 74.5 205.167 70.5 209L13 191.5L24 0H220.5V63.5H61.5L85.5 41L78 164.5L66.5 150.5C75.5 143.167 85.75 137.833 97.25 134.5C108.75 131.167 119.5 129.5 129.5 129.5C152.167 129.5 172.083 134.583 189.25 144.75C206.583 154.75 220.083 168.583 229.75 186.25C239.583 203.75 244.5 223.833 244.5 246.5C244.5 269.167 238.583 289.667 226.75 308C214.917 326.167 199.333 340.667 180 351.5C160.667 362.167 139.667 367.5 117 367.5Z'
      fill='#E5E0D2'
    />
  </svg>,
];

const RADIANS_RANGE = 2 * Math.PI;

const OurProcessSection: React.FC<IProcess> = ({ title, steps }) => {
  const { screenWidth } = useScreenWidth();
  const isMobile = screenWidth < TailwindBreakpoints.md;

  const numberContainerRef = useRef<HTMLDivElement>(null);
  const stepsPlaceholderRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [stepNumber, setStepNumber] = useState<number>(0);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([
    ...Array(steps.length).fill({ x: 0, y: 0 }),
  ]);
  const [stepWidth, setStepWidth] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [stepsPositionYOffset, setStepsPositionYOffset] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start -30vh', 'end 120vh'],
  });
  scrollYProgress;
  const snappedIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, steps.length - 1]
  );

  const roundedIndex = useMotionValue(0);

  snappedIndex.on('change', (v) => {
    if (roundedIndex.isAnimating()) {
      return;
    }
    const currentIndex = roundedIndex.get();
    const roundedTargetIndex = Math.round(v);
    const diff = roundedTargetIndex - currentIndex;

    const targetIndex =
      diff === 0 ? currentIndex : currentIndex + Math.sign(diff);

    animate(roundedIndex, targetIndex, {
      ease: 'easeInOut',
      delay: 0,
      duration: 0.5,
    });
  });

  useMotionValueEvent(roundedIndex, 'change', (fi) => {
    const radiansStep = steps.length > 1 ? RADIANS_RANGE / steps.length : 0;

    const offsets = getStepsPositionsOffsetFromNumber(
      radiansStep,
      distance,
      steps.length,
      isMobile,
      fi
    );

    setStepNumber(fi);
    setPositions(
      offsets.map((p) => ({
        x: p.x - (isMobile ? 0 : window.innerWidth * 0.15),
        y: p.y + stepsPositionYOffset,
      }))
    );
  });

  useEffect(() => {
    const calculatePositions = () => {
      if (
        !numberContainerRef.current ||
        !stepsPlaceholderRef.current ||
        !contentContainerRef.current
      )
        return;

      const sectionRect = contentContainerRef.current.getBoundingClientRect();
      const numberContainerRect =
        numberContainerRef.current.getBoundingClientRect();
      const stepsPlaceholderRect =
        stepsPlaceholderRef.current.getBoundingClientRect();

      const numberContainerCenter = getElementCenter(numberContainerRect);
      numberContainerCenter.x -= sectionRect.left;
      numberContainerCenter.y -= sectionRect.top;

      const stepsPlaceholderCenter = getElementCenter(stepsPlaceholderRect);
      stepsPlaceholderCenter.x -= sectionRect.left;
      stepsPlaceholderCenter.y -= sectionRect.top;

      const distance = isMobile
        ? window.innerHeight * 0.7
        : calculateDistance(
            numberContainerCenter.x,
            numberContainerCenter.y,
            stepsPlaceholderCenter.x,
            numberContainerCenter.y
          );

      const radiansDiffBetweenSteps =
        steps.length > 1 ? RADIANS_RANGE / steps.length : 0;

      const offsetsFromNumberContainer = getStepsPositionsOffsetFromNumber(
        radiansDiffBetweenSteps,
        distance,
        steps.length,
        isMobile,
        0
      );

      const stepsPositionYOffset = isMobile
        ? -window.innerHeight * 0.35
        : stepsPlaceholderRect.height * 0.3;

      const stepPositionXOffset = isMobile ? 0 : -window.innerWidth * 0.15;

      setPositions(
        offsetsFromNumberContainer.map((p) => ({
          x: p.x + stepPositionXOffset,
          y: p.y + stepsPositionYOffset,
        }))
      );
      setStepWidth(stepsPlaceholderRect.width);
      setDistance(distance);
      setStepsPositionYOffset(stepsPositionYOffset);
      setStepNumber(0);
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);

    return () => window.removeEventListener('resize', calculatePositions);
  }, [steps, isMobile]);

  return (
    <section ref={sectionRef} className='relative z-0 text-center'>
      <AnimatedHeading
        text={title}
        className='text-h1 font-bebas text-light'
        revealColor='dark'
      />

      {/* content */}

      <div
        ref={contentContainerRef}
        className='sticky top-28 z-0 mt-10 h-screen md:top-0'>
        <div className='relative flex size-full flex-col justify-center overflow-hidden md:flex-row'>
          {/* number */}
          <div className='flex h-1/3 w-full items-center justify-center self-center text-center md:h-auto md:w-1/3'>
            <StepNumber
              number={Math.round(stepNumber) + 1}
              ref={numberContainerRef}
            />
          </div>

          {/* steps */}
          <div ref={stepsPlaceholderRef} className='grow md:self-stretch'>
            {steps.map((s, i) => (
              <StepContent
                index={i}
                updateRef={(ref) => (stepsRefs.current[i] = ref)}
                {...s}
                key={s.title}
                x={positions[i].x}
                y={positions[i].y}
                width={stepWidth}
                tranformValue={Math.abs(stepNumber - i) * 0.5}
              />
            ))}
          </div>
        </div>
      </div>

      {steps.map((s, i) => (
        <motion.div
          key={`placeholder-${s.title}`}
          className='h-screen md:h-[80vh]'></motion.div>
      ))}
    </section>
  );
};

export default OurProcessSection;

type IStepContent = IProcess['steps'][number] & {
  index: number;
  x: number;
  y: number;
  updateRef: (ref: HTMLDivElement | null) => void;
  width: number;
  tranformValue: number;
};

const StepContent = ({
  text,
  title,
  x,
  y,
  updateRef,
  width,
  tranformValue,
}: IStepContent) => {
  return (
    <motion.div
      ref={updateRef}
      style={{
        top: y,
        left: x,
        width,
        opacity: 1 - tranformValue,
        scale: 1 - tranformValue,
        perspective: 1000,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='point absolute p-5 text-start text-white md:p-0 md:pr-10'>
      <motion.h2
        style={{
          rotateY: 360 + tranformValue * 90,
          transformStyle: 'preserve-3d',
        }}
        className='font-bebas text-h1 text-light'>
        {title}
      </motion.h2>
      <motion.p
        style={{
          rotateY: 360 + tranformValue * 90,
          transformStyle: 'preserve-3d',
        }}
        className='font-poppins text-h4'>
        {text}
      </motion.p>
    </motion.div>
  );
};

type IStepNumberProps = {
  number: number;
  ref: RefObject<HTMLDivElement | null>;
};

const StepNumber: React.FC<IStepNumberProps> = ({ number, ref }) => {
  const svgWithClass = cloneElement(numbersSvgs[number - 1], {
    className: 'max-w-full max-h-full',
  });

  return (
    <div className='md:border-accent relative aspect-square size-full md:border-r-2'>
      <AnimatePresence>
        <motion.div
          key={number}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          ref={ref}
          className='text-accent absolute inset-0 flex aspect-square size-full items-center justify-center'>
          {svgWithClass}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/**
 * Calculates the offset positions for process step markers around a central number container,
 * distributing them evenly in a circle, with an optional rotation for mobile layouts.
 *
 * @param radiansDiffBetweenSteps - The difference in angle (in radians) between each step.
 * @param distance                - The radius/distance from the center number container to each step.
 * @param stepsCount              - The total number of steps/markers to position.
 * @param isMobile                - Flag to adjust rotation offset for mobile screens.
 * @param stepIndex               - The index of the current highlighted or "active" step.
 * @returns An array of position objects { x, y } for each step, relative to the center point.
 *
 * The resultant positions place the steps in a circle. The currently highlighted step is at the "0 angle",
 * with others distributed at increments of radiansDiffBetweenSteps, offset as needed for mobile.
 */
const getStepsPositionsOffsetFromNumber = (
  radiansDiffBetweenSteps: number,
  distance: number,
  stepsCount: number,
  isMobile: boolean,
  stepIndex: number
) => {
  return [...Array(stepsCount)].map((_, i) => {
    // On mobile, rotate the circle 90deg (π/2 radians) to align vertically.
    const rotationOffset = isMobile ? Math.PI / 2 : 0;

    // Compute this step's angle, wrapping around the circle.
    const currentRadians =
      ((i - stepIndex + stepsCount) % stepsCount) * radiansDiffBetweenSteps +
      rotationOffset;

    const xFromCenterOfNumberContainer = distance * Math.cos(currentRadians);
    const yFromCenterOfNumberContainer = distance * Math.sin(currentRadians);

    return {
      x: xFromCenterOfNumberContainer,
      y: yFromCenterOfNumberContainer,
    };
  });
};

/**
 * Softly snaps a continuous value to the nearest integer, with a "lock zone".
 *
 * @param value           Continuous index, e.g. from scroll (0 → steps-1)
 * @param innerRadius     Distance where we are fully snapped (|value-n| <= innerRadius)
 * @param outerRadius     Distance where snapping effect completely disappears
 *
 * innerRadius < outerRadius
 */
export function getSoftSnappedIndex(
  value: number,
  innerRadius: number = 0.05,
  outerRadius: number = 0.25
): {
  finalIndex: number; // use this for positions
  snappedIndex: number; // nearest integer index
  blend: number; // 0..1, how much we are pulled to snappedIndex
} {
  const snappedIndex = Math.round(value);
  const diff = Math.abs(value - snappedIndex); // how far we are from that step

  // Completely outside snap range → no snapping at all
  if (diff >= outerRadius) {
    return {
      finalIndex: value,
      snappedIndex,
      blend: 0,
    };
  }

  // Deep inside snap zone → fully snapped (hard lock)
  if (diff <= innerRadius) {
    return {
      finalIndex: snappedIndex,
      snappedIndex,
      blend: 1,
    };
  }

  // Between inner & outer → blend smoothly between continuous and snapped
  // Map diff from [innerRadius, outerRadius] → [0,1]
  const t = (diff - innerRadius) / (outerRadius - innerRadius); // 0..1
  const blend = 1 - t; // 1 near inner, 0 near outer

  // Linear interpolation (lerp) between continuous value and snapped step
  const finalIndex = value * (1 - blend) + snappedIndex * blend;

  return { finalIndex, snappedIndex, blend };
}
