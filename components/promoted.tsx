'use client';
import { NavigationCard } from '@/components/navigation-card';
import { Slider } from '@/ui/slider';

interface PromotedIndoorsPropsInterface {
  // TODO: Add typization
  data: any;
  location: string;
}

const Promoted = ({ data, location }: PromotedIndoorsPropsInterface) => {
  return (
    <Slider variant={'promoted'}>
      {data &&
        data.map(({ attributes, id }: any) => (
          <NavigationCard
            link_location={location}
            variant={'promoted'}
            key={id}
            data={attributes}
          />
        ))}
    </Slider>
  );
};

export default Promoted;
