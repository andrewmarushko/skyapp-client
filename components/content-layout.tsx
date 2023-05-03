import { Search } from '@/components/search';
import { CardList } from './card-list';

export const ContentLayout = ({ locationParam }: { locationParam: string }) => {
  return (
    <div className="container flex flex-col gap-7 lg:grid lg:grid-cols-4">
      <div className="col-span-1">
        <Search />
      </div>
      <div className="col-span-3">
        <CardList locationParam={locationParam} />
      </div>
    </div>
  );
};
