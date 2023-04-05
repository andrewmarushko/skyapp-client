import { getAllIndoors } from '@/api-service/indoor-api';
import { Button } from '@/components/ui/button';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import { IndoorDataListInterface, IndoorDataItemInterface } from '@/types/nav';
import Link from 'next/link';

const IndoorPage = async () => {
  const data = await getAllIndoors();
  return (
    <Page>
      <LargeHeading size="lg">Indoor main page</LargeHeading>
      <div className="grid gap-10">
        {data.map((countryData: IndoorDataListInterface) => (
          <div key={countryData.country} className="grid grid-cols-4 gap-12">
            {countryData.data.map((indoor: IndoorDataItemInterface) => (
              <Link
                key={indoor.id}
                href={`/${indoor.indoorLocation.country}/${indoor.indoorLocation.city}`}
                className="col-span-1"
              >
                <div className="rounded-xl border border-black p-4">
                  <p>{indoor.name}</p>
                  <p>{indoor.indoorLocation.city}</p>
                  <p>{indoor.indoorLocation.address}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex w-full justify-center">
        <Button>Load More</Button>
      </div>
    </Page>
  );
};

export default IndoorPage;
