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
import YouTubeSection from '@/components/youtube-section';
import { Separator } from '@/components/ui/separator';
import Paragraph from '@/components/ui/paragraph';
import MediumHeading from '@/components/ui/medium-heading';
import SmallHeading from '@/components/ui/small-heading';
import { SocialLink } from '@/components/social-link';
import { NavigationLink } from '@/components/ui/link';
import { Icons } from '@/components/icons';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export const dynamic = 'force-dynamic';

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
    opening_hours,
    location: { places },
    prices,
  } = data[0].attributes;

  return (
    <Page variant="fluid">
      <Content variant="fluid" className="relative h-80 lg:container lg:h-96">
        <Image
          src={cover.data.attributes.url}
          alt={cover.data.attributes.alternativeText}
          width={600}
          height={100}
          className="h-full w-full object-cover lg:rounded-lg"
          quality={100}
        />
      </Content>
      <Content className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={logo.data.attributes.url}
            alt={logo.data.attributes.alternativeText}
            width={80}
            height={80}
            className="aspect-square rounded-full border border-accent-700"
          />
          <h1 className="text-4xl font-semibold tracking-tight-title sm:text-5xl">
            {title}
          </h1>
        </div>
        {/* TODO:  Expand website data with target and link label values*/}
        <NavigationLink
          size={'lg'}
          variant={'black'}
          target="_blank"
          href={contacts.website}
        >
          Get in touch
        </NavigationLink>
      </Content>
      <Content className="flex gap-20">
        <div className="flex basis-2/3 flex-col gap-10 py-6">
          <div className="prose prose-stone flex flex-col gap-6">
            <MediumHeading>Overview</MediumHeading>
            <ReactMarkdown className="prose prose-stone">
              {description}
            </ReactMarkdown>
          </div>
          <div>
            <p>{price_title}</p>
            <p>{price_subtitle}</p>
            <div>
              {prices.price.map((item: any, index: any) => (
                <p key={index}>
                  {item.type} - {item.price} {item.currency}
                </p>
              ))}
              <div>{prices.price_link.href}</div>
            </div>
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
            <CustomMap long={places.lng} lat={places.lat} />
          </div>

          <div>
            <p>Photos</p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {places.details.photos.map((item: any, index: any) => (
                <div className="h-auto w-full" key={index}>
                  <Image
                    key={index}
                    alt={'Google Photo'}
                    src={item.url}
                    className="pointer-events-none h-full w-full object-cover"
                    width={720}
                    height={480}
                    unoptimized
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
          <Suspense fallback={<h1>loading comments</h1>}>
            <YouTubeSection youtubeChannelId={social.youtubeId} />
          </Suspense>
        </div>
        <div className="sticky top-16 flex basis-1/3 flex-col gap-10 self-start py-6">
          <div>
            <MediumHeading>Details</MediumHeading>
            <div>
              {diameter > 0 && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading>Diameter</SmallHeading>
                    <span>{diameter} ft.</span>
                  </div>
                </div>
              )}
              {speed > 0 && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading>Speed</SmallHeading>
                    <span>{speed} mph.</span>
                  </div>
                </div>
              )}
              {height > 0 && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading>Height</SmallHeading>
                    <span>{height} ft.</span>
                  </div>
                </div>
              )}
              {company_name && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading>Company</SmallHeading>
                    <span>{company_name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex">
            {social.links.map((data: any, index: any) => (
              // TODO: Add Id instead of index at Strapi
              <SocialLink key={index} data={data} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <MediumHeading>Schedule</MediumHeading>
            <div className="flex flex-col">
              {opening_hours.weekday_text.map((item: any, index: any) => (
                <Paragraph paragraphStyles={'description'} key={index}>
                  {item}
                </Paragraph>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <MediumHeading>Contact {title} indoor</MediumHeading>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Icons.mail className="h-6 w-6" />
                <NavigationLink
                  className="hover:underline hover:transition-all"
                  href={`mailto: ${contacts.email}`}
                >
                  {contacts.email}
                </NavigationLink>
              </div>
              <div className="flex items-center gap-2">
                <Icons.phone className="h-6 w-6" />
                <NavigationLink
                  className="hover:underline hover:transition-all"
                  href={`tel: ${contacts.phone}`}
                >
                  {contacts.phone}
                </NavigationLink>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content>
        <BecomePartner data={become_partner} />
      </Content>
    </Page>
  );
};

export default IndoorTubePage;
