import { FunctionComponent, ReactNode } from 'react';

interface CardPropsInterface {
  children?: ReactNode
}

export const Card: FunctionComponent<CardPropsInterface> = ({ children }) => {
  return (
    <div 
      className='flex flex-col max-w-xs rounded-default w-full h-full overflow-hidden shadow-customSm transition-boxShadow duration-200	ease-ease no-underline bg-background dark:bg-background-dark focus:shadow-customMd focus:outline-0 focus-within:shadow-customMd focus-within:outline-0 hover:shadow-customMd hover:outline-0 dark:hover:shadow-whiteBorderShadow dark:focus:shadow-whiteBorderShadow dark:focus-within:shadow-whiteBorderShadow'
    >
      {children}
    </div>
  );
}
