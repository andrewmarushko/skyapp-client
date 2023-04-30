'use client';

import { useEffect, useRef, useState } from 'react';

const useStickyElement = () => {
  const [isSticky, setIsSticky] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (elementRef.current) {
      setIsSticky(
        elementRef.current.getBoundingClientRect().top <= 0 &&
          window.pageYOffset > 0,
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { elementRef, isSticky };
};

export default useStickyElement;
