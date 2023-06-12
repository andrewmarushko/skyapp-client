import { CardList } from '@/components/card-list';

export const ContentLayout = ({ locationParam }: { locationParam: string }) => {

  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <CardList locationParam={locationParam} />
    </div>
  );
};
