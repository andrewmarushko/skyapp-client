import { FunctionComponent, ReactNode } from 'react';

interface CardPropsInterface {
  children?: ReactNode,
  className?: string
}


// TODO: Use cva for styles

export const Card: FunctionComponent<CardPropsInterface> = ({ children, className }) => {
  return (
    <div 
      className='pointer flex flex-col max-w-xs rounded text-inherit w-full h-full overflow-hidden shadow-geist-shadow-sm transition-box-shadow duration-200 ease no-underline bg-sk-light dark:bg-sk-dark dark:shadow-geist-shadow-sm-dark hover:shadow-geist-border-shadow-white focus:shadow-geist-border-shadow-white focus-within:shadow-geist-border-shadow-white dark:hover:shadow-geist-border-shadow-white-dark dark:focus:shadow-geist-border-shadow-white-dark dark:focus-within:shadow-geist-border-shadow-white-dark' 
    >
      {children}
    </div>
  );
}
