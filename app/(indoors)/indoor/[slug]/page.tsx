import { getIndoorBySlug, indoorPageQuery } from '@/query/indoor';
import { Content } from '@/components/content';
import { Page } from '@/ui/page';
import { Metadata } from 'next';
import Image from 'next/image';
import { getIndoorSeoBySlug } from '@/api/queries/seo';
import { client } from '@/lib/graphql/apollo-server';
import { CustomMap } from '@/components/ui/google-map';
import { Suspense } from 'react';
import GooglePlacesSection from '@/components/googlePlaces-section';
import { BecomePartner } from '@/components/become-partner';

interface IndoorTubePageProps {
  params: {
    slug: string;
  };
}

const defaultSeo = {
  title: 'Indooe',
  description: 'Indoor Page',
};

export async function generateMetadata({
  params: { slug },
}: IndoorTubePageProps): Promise<Metadata> {
  const {
    data: {
      indoors: { data },
    },
  } = await client.query({
    query: getIndoorSeoBySlug,
    variables: { slug },
  });

  const { seo } = data[0].attributes;

  if (!seo) return defaultSeo;

  return {
    metadataBase: new URL(`${seo.metadataBase}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    applicationName: seo.applicationName,
    keywords: seo.keywords,
    formatDetection: {
      email: seo.format_description?.email,
      telephone: seo.format_description.telephone,
      address: seo.format_description.address,
    },
    viewport: {
      width: seo.viewport.width,
      initialScale: seo.viewport.initial_scale,
    },
    robots: {
      index: seo.robots.index,
      follow: seo.robots.follow,
      nocache: seo.robots.nocache,
    },
  };
}

const IndoorTubePage = async ({ params: { slug } }: IndoorTubePageProps) => {
  const {
    data: {
      indoors: { data },
    },
  } = await client.query({
    query: getIndoorBySlug,
    variables: { slug: slug },
  });
  // TODO: Display prices and youtube shit
  const {
    data: {
      indoorPage: {
        data: {
          attributes: {
            become_partner,
            related_dropzone_subtitle,
            related_dropzone_title,
            price_title,
            price_subtitle,
          },
        },
      },
    },
  } = await client.query({ query: indoorPageQuery });

  const {
    attributes: {
      title,
      description,
      diameter,
      speed,
      height,
      social,
      cover,
      company_name,
      logo,
      contacts,
      related_dropzones,
      location: { places },
    },
  } = data[0];
  console.log(places);

  return (
    <Page>
      <Content className="flex flex-col gap-2">
        <div>
          <Image
            src={cover.data.attributes.url}
            alt={cover.data.attributes.alternativeText}
            width={600}
            height={300}
          />
        </div>
        <h1>Title - {title}</h1>
        <p className="purge">{description}</p>
        <ul>
          <li>diameter - {diameter}</li>
          <li>speed - {speed}</li>
          <li>height - {height}</li>
        </ul>

        <div>YoutubeId - {social.youtubeId}</div>
        <div>
          {social.links.map((item: any, index: any) => (
            <li key={index}>
              type - {item.type}, linkLabel - {item.link.label}, href -{' '}
              {item.link.href}
            </li>
          ))}
        </div>
        <p>Company Name: {company_name}</p>

        <div>
          <span>LOGO</span>
          <Image
            src={logo.data.attributes.url}
            alt={logo.data.attributes.alternativeText}
            width={100}
            height={100}
          />
        </div>
        <ul>
          <li>Phone - {contacts.phone}</li>
          <li>Email - {contacts.email}</li>
          <li>Website - {contacts.website}</li>
        </ul>

        <div>
          <p>{price_title}</p>
          <p>{price_subtitle}</p>
        </div>
        <div>
          <p>{related_dropzone_title}</p>
          <p>{related_dropzone_subtitle}</p>
          {related_dropzones.data.length > 0 ? (
            related_dropzones.data.map((item: any, index: number) => (
              <div key={index}>{item.attributes.title}</div>
            ))
          ) : (
            <div>No dropzone found</div>
          )}
        </div>

        <div>
          <p>Latitude - {places.lat}</p>
          <p>Lontitude - {places.lng}</p>

          <p>Raiting - {places.details.rating}</p>
          <CustomMap long={places.lng} lat={places} />
        </div>

        <div>
          <p>Photos</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {places.details.photos.map((item: any, index: any) => (
              <div className="h-auto w-full">
                <Image
                  key={index}
                  alt={'Google Photo'}
                  src={item.url}
                  className="pointer-events-none h-full w-full object-cover"
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                />
              </div>
            ))}
          </div>
        </div>
        <Suspense fallback={<h1>loading comments</h1>}>
          <GooglePlacesSection googlePlaceId={places.place_id} />
        </Suspense>
        <BecomePartner data={become_partner} />
      </Content>
      {/* {indoorsList &&
        indoorsList.data.map((item: IndoorDataItemInterface) => (
      {indoorsList.data.attributes.title}
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

//
