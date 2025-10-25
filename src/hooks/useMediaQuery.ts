'use client';

import { useState, useEffect } from 'react';

/**
 * A hook to track the state of a CSS media query.
 *
 * @param query The media query string to match.
 * @returns `true` if the media query matches, `false` otherwise.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    // Ensure window is defined (for SSR)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      const listener = () => {
        setMatches(media.matches);
      };
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};
