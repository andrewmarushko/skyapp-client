import { NavigationCard } from '@/components/navigation-card';
import { FunctionComponent } from 'react';

interface PromotedIndoorsPropsInterface {
  // TODO: Add typization
  data: any;
  location: string;
}

export const Promoted: FunctionComponent<PromotedIndoorsPropsInterface> = ({
  data,
  location,
}) => {
  return (
    <div className="-mt-8 mb-16 flex snap-mandatory justify-start overflow-x-auto py-8 lg:container">
      {data.map(({ attributes, id }: any) => (
        <NavigationCard
          link_location={location}
          variant={'promoted'}
          key={id}
          data={attributes}
        />
      ))}
    </div>
  );
};
