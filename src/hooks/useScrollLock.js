import { useEffect } from 'react';

/**
 * Locks body scroll while `isLocked` is true.
 * Saves and restores the scroll position so the page doesn't jump.
 */
export default function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const original = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top:      document.body.style.top,
      width:    document.body.style.width,
    };

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top      = `-${scrollY}px`;
    document.body.style.width    = '100%';

    return () => {
      document.body.style.overflow = original.overflow;
      document.body.style.position = original.position;
      document.body.style.top      = original.top;
      document.body.style.width    = original.width;
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}