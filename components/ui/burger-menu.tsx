"use client"

import { FunctionComponent, useState } from 'react';
import { Button } from './button';


export const BurgerMenuIcon: FunctionComponent = () => {
  const burgerMenuBeforeStyles = `before:content-[''] before:block before:h-1px before:w-6 before:bg-accent before:transition-transform before:ease`
  const burgerMenuAfterStyles = `after:content-[''] after:block after:h-1px after:w-6 after:bg-accent after:transition-transform after:ease`
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="lg:hidden flex flex-col items-center gap-2">
      <Button variant={'burger'} onClick={toggleBurgerMenu}>
        <div className={`flex flex-col justify-center items-center w-full h-full pointer-events-none ${burgerMenuBeforeStyles} ${burgerMenuAfterStyles}
          ${isOpen ? 'before:rotate-45 before:translate-y-[1px]' : 'before:rotate-0 before:-translate-y-1'} 
          ${isOpen ? 'after:-rotate-45 after:translate-y-0' : 'after:rotate-0 after:translate-y-1'}
        `}>
        </div>
      </Button>
    </div>
  );
};
