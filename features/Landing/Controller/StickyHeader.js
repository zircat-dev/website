import { useState, useRef, useEffect, useCallback } from 'react';

const StickyHeader = ({ defaultSticky = false, scrollPastHeight = 80 }) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const elementRef = useRef(null);
  const toggleSticky = useCallback(
    ({ top, bottom }) => {
      if (top <= 0 && bottom > scrollPastHeight) {
        console.log('bottom ::', bottom);
        console.log('top ::', top);
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );

  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(elementRef.current.getBoundingClientRect());
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleSticky]);
  return { elementRef, isSticky };
};

export { StickyHeader };
