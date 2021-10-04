import { useState, useRef, useEffect, useCallback } from 'react';

const useWindowEvent = (eventName, handler) => {
  if (typeof window === 'undefined') return;

  useEffect(() => {
    window.addEventListener(eventName, handler);

    return () => {
      window.removeEventListener(eventName, handler)
    }
  })
}

const getScrollPosition = (refElement) => (
  refElement.current.ownerDocument.scrollingElement.scrollTop
)

const hasScrolledPast = ({ distance = 80 }) => {
  const [isPast, setIsPast] = useState(false);
  const scroller = useRef();

  const togglePast = (nextValue) => isPast !== nextValue && setIsPast(nextValue);

  const handleScroll = () => togglePast(
    distance < getScrollPosition(scroller)
  );

  useWindowEvent('scroll', handleScroll);

  return { isPast, scroller };
};

export { hasScrolledPast };
