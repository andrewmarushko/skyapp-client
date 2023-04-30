import { fetchIndoorSEO, fetchTube } from '@/api-service/indoor';
import { Icons } from '@/components/icons';
import LargeHeading from '@/components/ui/large-heading';
import { Page } from '@/components/ui/page';
import { IndoorDataItemInterface } from '@/types/nav';
import Link from 'next/link';
import Image from 'next/image';
import { CustomMap } from '@/components/ui/google-map';
import YouTubeSection from '@/components/youtube-section';
import GooglePlacesSection from '@/components/googlePlaces-section';
import { Suspense } from 'react';
import { Metadata } from 'next';

interface IndoorTubePageProps {
  params: {
    slug: string,
  };
}

const defaultSeo = {
  title: 'Indooe',
  description: "Indoor Page"
}

export async function generateMetadata({ params }: IndoorTubePageProps): Promise<Metadata> {
  const seo = await fetchIndoorSEO(params.slug)

  if (!seo) return defaultSeo

  return {
    metadataBase: new URL(`${seo.metadataBase}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    applicationName: seo.applicationName,
    keywords: seo.keywords,
    formatDetection: {
      email: seo.format_description.email,
      telephone: seo.format_description.telephone,
      address: seo.format_description.address
    },
    viewport: {
      width: seo.viewport.width,
      initialScale: seo.viewport.initial_scale,
    },
    robots: {
      index: seo.robots.index,
      follow: seo.robots.follow,
      nocache: seo.robots.nocache,
    }
  }
}

  // const youtubeChannelId = indoorsList.data.attributes.socialMedia?.youtubeChannelId;
  // const googlePlaceId = indoorsList.data.attributes.socialMedia?.googlePlaceId;
const IndoorTubePage = async ({ params: { slug } }: IndoorTubePageProps) => {
  // const indoorsList: any = await getIndoorsByID(slug);
  const indoor = await fetchTube(slug)
  // const youtubeChannelId = indoorsList.data.attributes.socialMedia?.youtubeChannelId;
  // const googlePlaceId = indoorsList.data.attributes.socialMedia?.googlePlaceId;

  return (
    <Page>
      {indoor.attributes.title}
      {/* TODO: Refactor this no map needed anymore */}
      {/* {indoorsList &&
        indoorsList.data.map((item: IndoorDataItemInterface) => (
      {indoorsList.data.attributes.title}
      {/* TODO: Refactor this no map needed anymore */}
      {/* {indoorsList &&
        indoorsList.data.map((item: IndoorDataItemInterface) => (
          <div className="flex w-full flex-col gap-14" key={item.id}>
            <section className="relative flex w-full flex-col gap-10">
              <Image
                src={item.coverImage?.url}
                alt={item.coverImage?.alternativeText}
                width={item.coverImage?.width}
                height={item.coverImage?.height}
                className="h-[600px] w-full object-cover"
                priority
                quality={100}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-10 ">
                  <div className="border-radius-50 relative flex h-56 w-56 items-center shadow-lg">
                    <Image
                      src={item.logo?.url}
                      alt={item.logo?.alternativeText}
                      width={item.logo?.width}
                      height={item.logo?.height}
                      className="border-radius-50 w-full"
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <LargeHeading size="lg">{item.title}</LargeHeading>
                    <div className="flex items-center gap-3">
                      <Icons.mapPin className="h-5 w-5" />
                      <span>
                        {item.indoorLocation.country},{' '}
                        {item.indoorLocation.city},{' '}
                        {item.indoorLocation.zipcode},{' '}
                        {item.indoorLocation.address}
                      </span>
                    </div>
                  </div>
                </div>
                {item.websiteUrl && 
                  <Link
                  target="_blank"
                  href={item.websiteUrl}
                  className="flex h-20 w-24 items-center rounded-lg bg-slate-800 text-center text-white"
                  >
                    Go to website
                  </Link>
                }
              </div>
            </section>
            <section className="mt-5 flex gap-20">
              <div className="flex basis-1/2 flex-col gap-10 ">
                <div className="flex justify-between gap-5">
                  <div className="flex gap-4">
                    {item.socialMedia?.list?.map(({ id, link, type }) => (
                      <Link href={link} key={id} target="_blank">
                        {type === 'Instagram' && (
                          <Icons.instagram className="h-9 w-9" />
                        )}
                        {type === 'Facebook' && (
                          <Icons.facebook className="h-9 w-9" />
                        )}
                        {type === 'YouTube' && (
                          <Icons.youtube className="h-9 w-9" />
                        )}
                        {type === 'Twitter' && (
                          <Icons.twitter className="h-9 w-9" />
                        )}
                      </Link>
                    ))}
                  </div>
                  <div>
                    {item.isStillBuilding ? (
                      <div className="flex items-center gap-2">
                        <div className="border-radius-50 h-10 w-10 bg-yellow-400"></div>
                        <span>It is still building. The openning is soon!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="border-radius-50 h-10 w-10 bg-green-400"></div>
                        <span>It is already opened!</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <LargeHeading size="sm">About indoor</LargeHeading>
                  <p>{item.description}</p>
                </div>
                <div className="flex flex-col gap-5">
                  <LargeHeading size="sm">Working hours</LargeHeading>
                  <div>
                    {item.workingHours.map(({ id, day, hours }) => (
                      <div className="flex justify-between" key={id}>
                        <span>{day?.map((item) => `${item}, `)}</span>
                        <span className="font-semibold">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <LargeHeading size="sm">Available facilities</LargeHeading>
                  <p>{item.facilities}</p>
                </div>
              </div>
              <div className="flex basis-1/2">
                <div className="flex w-full flex-col gap-5">
                  <LargeHeading size="sm">
                    Indoor technical characteristics
                  </LargeHeading>
                  <table className="border-2 border-black dark:border-white">
                    <thead>
                      <tr>
                        <th>Characteristic name</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Diameter</td>
                        <td>{item.diameter}</td>
                      </tr>
                      <tr>
                        <td>Speed</td>
                        <td>{item.speed}</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{item.height}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <Suspense fallback={<h1>loading comments</h1>}>
              <YouTubeSection youtubeChannelId={youtubeChannelId} />
            </Suspense>
            <section className="flex gap-20">
              <div className="flex basis-1/2 flex-col gap-5 rounded-lg bg-slate-400 p-6">
                <div className="flex w-full items-center justify-between">
                  <LargeHeading size="sm">Find us on the map</LargeHeading>
                  <Icons.map className="h-5 w-5" />
                </div>
                <CustomMap
                  lat={item.indoorLocation.lat}
                  long={item.indoorLocation.long}
                />
              </div>
              <div className="flex basis-1/2"></div>
            </section>
            <Suspense fallback={<h1>loading comments</h1>}>
              <GooglePlacesSection googlePlaceId={googlePlaceId} />
            </Suspense>
          </div>
        ))} */}
    </Page>
  );
};

export default IndoorTubePage;
