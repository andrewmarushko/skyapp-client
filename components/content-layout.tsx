import { Search } from '@/components/search';
import { CardList } from './card-list';
import { Suspense } from 'react';

export const ContentLayout = ({ locationParam }: { locationParam: string }) => {
  return (
    <div className="flex flex-col gap-7 lg:grid lg:grid-cols-4">
      <div className="col-span-1">
        <Search />
      </div>
      <div className="col-span-3">
        {/* @ts-expect-error Server Component */}
        <CardList locationParam={locationParam} />
      </div>
    </div>
  );
};
