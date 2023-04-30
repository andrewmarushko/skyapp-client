import { FunctionComponent, ReactNode } from 'react';

interface ContentPropsInterface {
  children: ReactNode;
}

export const Content: FunctionComponent<ContentPropsInterface> = ({children}) => {
  return (
    <div className='mt-12 md:mt-16'>
      {children}
    </div>
  );
}
