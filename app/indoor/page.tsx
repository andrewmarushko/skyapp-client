import { getIndoorsData } from '@/api-service/indoor-api';
import LargeHeading from '@/components/ui/large-heading';
import IndoorsLayout from './layout';
import { Button } from '@/components/ui/button';

export interface Indoor {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  diameter: string;
  speed: string;
  height: string;
  description: string;
  facilities: string;
  prices: string;
  websiteUrl: string;
  isStillBuilding: boolean;
  companyName: string;
}

const IndoorPage = async () => {
  const { data } = await getIndoorsData();
  return (
    <div>
      <LargeHeading size="lg">Indoor main page</LargeHeading>
      <div className="grid grid-cols-4 gap-12">
        {data.map(
          ({ id, attributes: { name, diameter, speed, height } }: Indoor) => (
            <div
              className="col-span-1 rounded-xl border border-black p-4"
              key={id}
            >
              <div>
                <div>{name}</div>
                <div>{height}</div>
                <div>{speed}</div>
                <div>{diameter}</div>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <Button>Load More</Button>
      </div>
    </div>
  );
};

export default IndoorPage;
