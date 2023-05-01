import { FunctionComponent, ReactNode } from 'react';

interface PromotedPropsInterface {
  children: ReactNode;
}

export const Promoted: FunctionComponent<PromotedPropsInterface> = ({children}) => {
  return (
    <div className='flex justify-start mb-16 -mt-8 py-8 overflow-x-auto snap-mandatory lg:container'>
      {children}
    </div>
  );
}
