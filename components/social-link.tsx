import { NavigationLink } from '@/ui/link';
import { FunctionComponent } from 'react';
import { Icons } from '@/icons';


interface SocialLinkPropsInterface {
  // TODO: Add typization
  data: any;
}

export const SocialLink: FunctionComponent<SocialLinkPropsInterface> = ({
  data,
}) => {
  return (
    <NavigationLink
      className="mr-4 border-r border-r-accent-700 pr-4 leading-0 last:mr-0 last:border-r-0 last:pr-0 dark:border-r-accent-200"
      variant={'socialNetwork'}
      size={'noPadding'}
      href={data.link.href}
      target={data.link.target}
    >
      {data.type === 'instagram' && (
        <Icons.instagram className="h-5 w-5" />
      )}
      {data.type === 'facebook' && (
        <Icons.facebook className="h-5 w-5" />
      )}
      {data.type === 'twitter' && (
        <Icons.twitter className="h-5 w-5" />
      )}
      {data.type === 'youtube' && (
        <Icons.youtube className="h-5 w-5" />
      )}
    </NavigationLink>
  );
};
