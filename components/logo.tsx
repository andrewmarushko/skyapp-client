import { FunctionComponent } from 'react';
import { NavigationLink } from '@/ui/link';
import { Icons } from '@/icons';

interface LogoPropsInterface {
  href: string;
  companyName?: string;
  isCompanyName?: boolean;
}

export const Logo: FunctionComponent<LogoPropsInterface> = ({
  href,
  companyName = '',
  isCompanyName = true,
}) => {
  return (
    <NavigationLink href={href} variant={'logo'}>
      <Icons.logo className="h-8 hover:bg-current" />
      {isCompanyName && (
        <span className="text-xl font-bold uppercase">{companyName}</span>
      )}
    </NavigationLink>
  );
};
