'use client';

import { FunctionComponent } from 'react';
import { Button } from '@/ui/button';

interface BurgerMenuInterface {
  isOpen: boolean;
  toggleBurgerMenu: () => void;
}

// !: Props must be serializable for components in the "use client" entry file, "toggleBurgerMenu" is invalid.
export const BurgerMenu: FunctionComponent<BurgerMenuInterface> = ({
  isOpen,
  toggleBurgerMenu,
}) => {
  const burgerMenuBeforeStyles = `before:content-[''] before:block before:h-px before:w-6 before:bg-accent before:transition-transform before:ease before:dark:bg-sk-light`;
  const burgerMenuAfterStyles = `after:content-[''] after:block after:h-px after:w-6 after:bg-accent after:transition-transform after:ease after:dark:bg-sk-light`;
  return (
    <div className="flex flex-col items-center gap-2 lg:hidden">
      <Button variant={'burger'} onClick={toggleBurgerMenu} aria-label="burger">
        <div
          className={`pointer-events-none flex h-full w-full flex-col items-center justify-center ${burgerMenuBeforeStyles} ${burgerMenuAfterStyles}
          ${
            isOpen
              ? 'before:translate-y-[1px] before:rotate-45'
              : 'before:-translate-y-1 before:rotate-0'
          } 
          ${
            isOpen
              ? 'after:translate-y-0 after:-rotate-45'
              : 'after:translate-y-1 after:rotate-0'
          }
        `}
        ></div>
      </Button>
    </div>
  );
};
