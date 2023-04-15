import { FunctionComponent, ReactNode } from 'react';

interface CardPropsInterface {
  children?: ReactNode;
  className?: string;
}

// TODO: Use cva for styles

export const Card: FunctionComponent<CardPropsInterface> = ({
  children,
  className,
}) => {
  return (
    <div className="pointer ease flex h-full w-full max-w-xs flex-col overflow-hidden rounded bg-sk-light text-inherit no-underline shadow-geist-shadow-sm transition-box-shadow duration-200 focus-within:shadow-geist-border-shadow-white hover:shadow-geist-border-shadow-white focus:shadow-geist-border-shadow-white dark:bg-sk-dark dark:shadow-geist-shadow-sm-dark dark:focus-within:shadow-geist-border-shadow-white-dark dark:hover:shadow-geist-border-shadow-white-dark dark:focus:shadow-geist-border-shadow-white-dark">
      {children}
    </div>
  );
};
