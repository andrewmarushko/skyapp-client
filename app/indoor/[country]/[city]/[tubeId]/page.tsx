import {
  getGooglePlaceReviewsById,
  getIndoorsByID,
  getYoutubeVideosById,
} from '@/api-service/indoor-api';
import { Icons } from '@/components/icons';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import { IndoorDataItemInterface } from '@/types/nav';
import Link from 'next/link';
import Image from 'next/image';
import { CustomMap } from '@/components/ui/google-map';
import YouTubeFrame from '@/components/ui/youtube-framer';
import YouTubeSection from '@/components/youtube-section';
import GooglePlacesSection from '@/components/googlePlaces-section';
import { Suspense } from 'react';

interface IndoorTubePageProps {
  params: {
    country: string,
    city: string,
    tubeId: number,
  };
}

const IndoorTubePage = async ({
  params: { country, city, tubeId },
}: IndoorTubePageProps) => {
  const indoorsList: IndoorDataItemInterface[] = await getIndoorsByID(
    country,
    city,
    tubeId,
  );
  const youtubeChannelId = indoorsList[0].socialMedia?.youtubeChannelId;
  const googlePlaceId = indoorsList[0].socialMedia?.googlePlaceId;
  // const youTubeData = await getYoutubeVideosById(youtubeChannelId);

  return (
    <Page>
      {indoorsList &&
        indoorsList.map((item: IndoorDataItemInterface) => (
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
                <Link
                  target="_blank"
                  href={item.websiteUrl}
                  className="flex h-20 w-24 items-center rounded-lg bg-slate-800 text-center text-white"
                >
                  Go to website
                </Link>
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
            {/* <section className='grid grid-cols-3 gap-4'>
            {youTubeData && youTubeData.items?.map((youTubeDataItem: any) => (
              <YouTubeFrame
                key={`video-${youTubeDataItem.id.videoId}`}
                video={youTubeDataItem.id.videoId}
                width={"100%"}
                height={"100%"}
                thumbnailQuality={"hqdefault"}
                thumbnailClassName="h-full"
              />
            ))}
          </section> */}
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
            {/* <section className='grid grid-cols-3 gap-4'>
            {googlePlacesReviews && googlePlacesReviews.result?.reviews?.map((review : any) => (
              <div 
                key={`review-${review.time}`}
                className='w-72 p-5 shadow-lg rounded-xl'
              >
                <Image
                  src={review.profile_photo_url}
                  alt="avatar"
                  width={20}
                  height={20}
                  className="border-radius-50"
                />
                <p>{review.relative_time_description}</p>
                <p>{review.author_name}</p>
                <p>{review.text}</p>
                <p>Rating - {review.rating}</p>
              </div>
            ))}
          </section> */}
          </div>
        ))}
    </Page>
  );
};

export default IndoorTubePage;
