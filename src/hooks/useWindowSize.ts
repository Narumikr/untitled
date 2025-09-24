import { useState, useEffect } from 'react';

const VIEW_BREAKPOINT_PORTRAIT = 768;
const VIEW_BREAKPOINT_TABLET = 1280;

export const ORIENTATION = {
  PORTRAIT: 'PORTRAIT',
  LANDSCAPE: 'LANDSCAPE'
} as const;
export type Orientation = (typeof ORIENTATION)[keyof typeof ORIENTATION];

export const useInnerSize = () => {
  const isClient =
    typeof window !== 'undefined' && typeof document?.documentElement !== 'undefined';

  const [windowSize, setWindowSize] = useState(() => {
    return isClient ? Math.min(document.documentElement.clientWidth, window.innerWidth) : 0;
  });

  const handlerResize = () => {
    setWindowSize(Math.min(document.documentElement.clientWidth, window.innerWidth));
  };

  useEffect(() => {
    // useEffect is guaranteed to run only on the client side. So u need check isClient
    handlerResize();
    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  return windowSize;
};

/**
 * @description This hook is used to get the current window size and orientation.
 * Return Portrait if the window size is 768px or less, otherwise return Landscape.
 */
export const useOrientation = (): Orientation => {
  const windowSize = useInnerSize();
  return windowSize <= VIEW_BREAKPOINT_PORTRAIT ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE;
};

/**
 * @description This hook is used to get the current window size and check if it is in tablet size.
 * Return true if the window size is between 768px and 1280px, otherwise return false.
 */
export const useTabletSize = () => {
  const windowSize = useInnerSize();
  return windowSize >= VIEW_BREAKPOINT_PORTRAIT && windowSize < VIEW_BREAKPOINT_TABLET;
};
