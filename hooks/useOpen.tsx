"use client"

import { useState } from "react";

const useOpen = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, setIsOpen, toggleBurgerMenu };
};

export default useOpen;