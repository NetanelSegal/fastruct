'use client';

import { useMediaQuery } from './useMediaQuery';

const MOBILE_MAX_WIDTH = 768;

/**
 * A hook to determine if the screen is mobile-sized.
 *
 * @param maxWidth The maximum width for a screen to be considered mobile. Defaults to 768px.
 * @returns `true` if the screen width is less than or equal to the max width, `false` otherwise.
 */
export const useIsMobile = (maxWidth: number = MOBILE_MAX_WIDTH): boolean => {
  return useMediaQuery(`(max-width: ${maxWidth}px)`);
};
