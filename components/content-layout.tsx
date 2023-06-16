import { CardList } from '@/components/card-list';
import { Filters } from '@/components/filters/filters';

export const ContentLayout = ({ locationParam }: { locationParam: string }) => {

  return (
    <div className="flex flex-col gap-7 lg:grid lg:grid-cols-4">
      <div className="col-span-1">
        <Filters 
          locationParam={locationParam} 
        />
      </div>
      <div className="col-span-3">
        <CardList locationParam={locationParam} />
      </div>
    </div>
  );
};