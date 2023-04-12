import { FunctionComponent, ReactNode } from 'react';

interface CardPropsInterface {
  children?: ReactNode
}

export const Card: FunctionComponent<CardPropsInterface> = ({ children }) => {
  return (
    <div 
      className='flex flex-col max-w-xs rounded-default w-full h-full overflow-hidden shadow-geist-shadow-md transition-boxShadow duration-200 ease-ease no-underline bg-sk-light dark:bg-sk-dark focus:shadow-geist-shadow-md focus:outline-0 focus-within:shadow-geist-shadow-md focus-within:outline-0 hover:shadow-geist-shadow-md hover:outline-0 dark:hover:shadow-border-shadow-white dark:focus:shadow-border-shadow-white dark:focus-within:shadow-border-shadow-white'
    >
      {children}
    </div>
  );
}
