import { FunctionComponent } from 'react';
import { BecomePartnerInterface } from '@/types/general';
import { NavigationLink } from '@/components/ui/link';

interface BecomePartnerPropsInterface {
  data: BecomePartnerInterface;
}

export const BecomePartner: FunctionComponent<BecomePartnerPropsInterface> = ({ data }) => {

  const { link, title } = data || {};
  return (
    <div className='p-8 lg:p-16 mt-8 rounded-2xl font-bold border border-accent-200 bg-accent-100 text-accent-900 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0'>
      <div className='basis-3/5'>
        <h2 className='text-center text-2xl leading-9 -tracking-tight-title lg:text-left lg:text-5xl lg:leading-14 lg:-tracking-tighter'>
          {title}
        </h2>
      </div>
      {link &&
        <NavigationLink className='' variant={'ghostWhite'} textSize={'md'} href={link.href} target={link.target}>
          {link.label}
        </NavigationLink>
      }
    </div>
  );
}
