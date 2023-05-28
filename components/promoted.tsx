'use client';
import { NavigationCard } from '@/components/navigation-card';

interface PromotedIndoorsPropsInterface {
  // TODO: Add typization
  data: any;
  location: string;
}

const Promoted = ({ data, location }: PromotedIndoorsPropsInterface) => {
  console.log(data);
  console.log(location);
  return (
    <div className="-mt-8 mb-16 flex snap-mandatory justify-start overflow-x-auto py-8 lg:container">
      {data &&
        data.map(({ attributes, id }: any) => (
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

export default Promoted;
