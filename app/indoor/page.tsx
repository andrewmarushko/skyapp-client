import { getIndoorsData } from '@/api-service/indoor-api';
import LargeHeading from '@/components/ui/large-heading';
import { Button } from '@/components/ui/button';

import { Icons } from '@/components/icons';
import Page from '@/components/ui/page';
import { useState } from 'react';

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

const riseLimit = () => {
  console.log(123);
};

const IndoorPage = async () => {
  const data = await getIndoorsData();
  console.log(data);
  return (
    <Page>
      <LargeHeading size="lg">Indoor main page</LargeHeading>
      <div className="grid gap-10">
        {data.map((countryData: any) => (
          <div key={countryData.country} className="grid grid-cols-4 gap-12">
            {countryData.data.map((indoor: any) => (
              <div
                className="col-span-1 rounded-xl border border-black p-4"
                key={indoor.id}
              >
                <p>{indoor.indoorName}</p>
                <p>{indoor.indoorLocation.city}</p>
                <p>{indoor.indoorLocation.address}</p>
              </div>
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
