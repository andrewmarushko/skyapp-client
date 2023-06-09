import { CardList } from './card-list';
import { Filters } from '@/components/filters/filters';

export const ContentLayout = ({ locationParam }: { locationParam: string }) => {
  return (
    <div className="flex flex-col gap-7 lg:grid lg:grid-cols-4">
      <div className="col-span-1">
        <Filters/>
      </div>
      <div className="col-span-3">
        {/* @ts-expect-error Server Component */}
        <CardList locationParam={locationParam} />
      </div>
    </div>
  );
};
