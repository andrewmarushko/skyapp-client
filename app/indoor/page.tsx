import { getIndoorsData } from '@/api-service/indoor-api';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import LargeHeading from '@/components/ui/large-heading';

import Page from '@/components/ui/page';
import { IndoorDataListInterface, IndoorDataItemInterface } from '@/types/nav';
import Image from 'next/image';
import Link from 'next/link';

const IndoorPage = async () => {
  const data = await getIndoorsData();
  return (
    <Page>
      <LargeHeading size="lg">Indoor main page</LargeHeading>
      <div className="grid gap-10">
        {data &&
          data.map((countryData: IndoorDataListInterface) => (
            <div key={countryData.country} className="grid grid-cols-3 gap-8">
              {countryData &&
                countryData.data.map(
                  ({
                    indoorLocation,
                    id,
                    name,
                    websiteUrl,
                    coverImage,
                  }: IndoorDataItemInterface) => (
                    <div key={id} className={`relative col-span-1 rounded-xl`}>
                      <Link
                        href={`/indoor/${indoorLocation.country}/${indoorLocation.city}/${id}`}
                      >
                        <Image
                          src={coverImage?.url}
                          alt={coverImage?.alternativeText}
                          width={coverImage?.width}
                          height={200}
                          className="h-[200px] w-full rounded-t-xl object-cover"
                          priority
                          quality={100}
                        />
                      </Link>

                      <div className="rounded-b-xl border border-t-0 border-[#d2d2d2] p-3">
                        <div className="flex justify-between">
                          <p className="mb-3 font-semibold underline">
                            <Link
                              href={`/indoor/${indoorLocation.country}/${indoorLocation.city}/${id}`}
                            >
                              {name}
                            </Link>
                          </p>
                          {websiteUrl && (
                            <a target="_blank" href={websiteUrl}>
                              <div className="flex items-center gap-1">
                                <p>Visit Site</p>
                                <Icons.externalLink
                                  width="20px"
                                  height="20px"
                                />
                              </div>
                            </a>
                          )}
                        </div>
                        <div>
                          <span>
                            <Link
                              className="underline"
                              href={`/indoor/${indoorLocation.country}`}
                            >
                              {indoorLocation.country + ', '}
                            </Link>
                          </span>
                          <span>
                            <Link
                              className="underline"
                              href={`/indoor/${indoorLocation.country}/${indoorLocation.city}`}
                            >
                              {indoorLocation.city}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  ),
                )}
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
