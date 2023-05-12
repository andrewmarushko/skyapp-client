import { getIndoorBySlug, indoorPageQuery } from '@/query/indoor';
import { Content } from '@/components/content';
import { Card } from '@/ui/card';
import LargeHeading from '@/ui/large-heading';
import { Page } from '@/ui/page';
import Paragraph from '@/ui/paragraph';
import { Separator } from '@/ui/separator';
import { apiClient } from '@/lib/graphql/apollo';
import { Metadata } from 'next';
import Image from 'next/image';
import { getIndoorSeoBySlug } from '@/api/queries/seo';

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
  } = await apiClient.query({
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

export const revalidate = 1;
// const youtubeChannelId = indoorsList.data.attributes.socialMedia?.youtubeChannelId;
// const googlePlaceId = indoorsList.data.attributes.socialMedia?.googlePlaceId;
const IndoorTubePage = async ({ params: { slug } }: IndoorTubePageProps) => {
  // const indoorsList: any = await getIndoorsByID(slug);
  // const indoor = await fetchTube(slug);

  // const youtubeChannelId = indoorsList.data.attributes.socialMedia?.youtubeChannelId;
  // const googlePlaceId = indoorsList.data.attributes.socialMedia?.googlePlaceId;

  const {
    data: {
      indoors: { data },
    },
  } = await apiClient.query({
    query: getIndoorBySlug,
    variables: { slug: slug },
  });

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
  } = await apiClient.query({ query: indoorPageQuery });

  const {
    attributes: {
      title,
      location,
      diameter,
      speed,
      height,
      description,
      facilities,
      opening_hours,
      contacts,
      social,
      cover,
      building_status,
      company_name,
      logo,
      prices,
      price_link,
      related_dropzones,
    },
  } = data[0];

  return (
    <Page>
      <Content>
        <Image
          src={cover.data.attributes.url}
          alt={cover.data.attributes.alternativeText}
          width={500}
          height={500}
        />
        <LargeHeading>
          <Image
            src={logo.data?.attributes.url}
            width={100}
            height={100}
            alt={logo.data.attributes.alternativeText}
          />
          {title} - {company_name}
        </LargeHeading>
        <Paragraph>{description}</Paragraph>
        <Separator />
        <p>Diameter: {diameter}</p>
        <p>Speed: {speed}</p>
        <p>Height: {height}</p>
        <p>
          Location: {location.city} / {location.country}, {location.lat},{' '}
          {location.lng}, {location.continent}, {location.address},{' '}
          {location.zipcode}
        </p>
        <Separator />
        <p>Facilities: {facilities.join(' ')}</p>
        <p>
          Opening Hours:{' '}
          {opening_hours.period?.map(
            ({ item, index }: { item: any; index: number }) => (
              <div key={index}>
                <span>Open: {item.open.time}</span>
                <span>Close: {item.close.time}</span>
              </div>
            ),
          )}
        </p>
        <p>
          Contacts: {contacts.phone}, {contacts.email}, {contacts.website}
        </p>
        <div>
          <span>
            Social:{' '}
            <ul>
              <li>Youtube Chanel Id{social.youtubeId}</li>
              <li>Place Id{social.placeId}</li>
            </ul>
          </span>
        </div>
        <p>
          {' '}
          Prices:{' '}
          {prices.price.map(({ item, index }: { item: any; index: number }) => (
            <div key={index}>
              <span>{item.type}</span> -{' '}
              <span>
                {item.price}
                {item.currency}
              </span>
              <span>
                <span>{item.vendor_text}</span> - {item.link_to_prices}
              </span>
            </div>
          ))}
        </p>
        <p>Building status - `${building_status}`</p>

        <div>
          <h1>Related Dropzones</h1>
          {related_dropzones.data.map(
            ({ item, index }: { item: any; index: number }) => {
              return (
                <div key={index}>
                  <Card>
                    <Image
                      src={item.attributes.cover.data.attributes.url}
                      width={500}
                      height={500}
                      alt={
                        item.attributes.cover.data.attributes.alternativeText
                      }
                    />
                    <h1>
                      <Image
                        src={item.attributes.logo.data.attributes.url}
                        width={100}
                        height={100}
                        alt={
                          item.attributes.logo.data.attributes.alternativeText
                        }
                      />
                      {item.attributes.title}
                    </h1>
                  </Card>
                </div>
              );
            },
          )}
        </div>
        <Separator />
        <div>
          Data from page for a titles etc
          <div>
            become_partner - {become_partner.title}, {become_partner.subtitle},{' '}
            {become_partner.link.label}
          </div>
          <div>
            Related Dropzones = {related_dropzone_title},{' '}
            {related_dropzone_subtitle}
          </div>
          <div>
            Prices - {price_title}, {price_subtitle}
          </div>
        </div>
      </Content>
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
