"use client"

import { useEffect, useState } from "react";

const lgBreakpoint = 950;

const useOpen = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const show = () => {
    setIsOpen(() => true);
  };

  const hide = () => {
    setIsOpen(() => false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  //Here is the code that checks the current width and in case it is less than lg  - isOpen becomes false.
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= lgBreakpoint && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return { isOpen, setIsOpen, toggle, show, hide };
};

export default useOpen;