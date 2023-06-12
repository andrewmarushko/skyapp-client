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
import Paragraph from '@/components/ui/paragraph';
import MediumHeading from '@/components/ui/medium-heading';
import SmallHeading from '@/components/ui/small-heading';
import { SocialLink } from '@/components/social-link';
import { NavigationLink } from '@/components/ui/link';
import { Icons } from '@/components/icons';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { siteConfig } from '@/constants/config';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import LargeHeading from '@/components/ui/large-heading';
import GobackLink from '@/components/goback-link';
import { Badge } from '@/components/ui/badge';
import CompanyDataTabs from '@/components/companyDataTabs';

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
    // metadataBase: new URL(`${siteConfig.siteDomen}/indoor/${slug}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    // applicationName: seo.applicationName,
    // formatDetection: {
    //   email: seo.format_description?.email,
    //   telephone: seo.format_description.telephone,
    //   address: seo.format_description.address,
    // },
    // viewport: {
    //   width: seo.viewport.width,
    //   initialScale: seo.viewport.initial_scale,
    // },
    // robots: {
    //   index: seo.robots.index,
    //   follow: seo.robots.follow,
    //   nocache: seo.robots.nocache,
    // },
  };
}

// enum PricesTypes {
//   tandem = 'Tandem',
//   aff = 'AFF',
//   tandem_course = 'Tandem course',
//   aff_course = 'Aff course',
//   gear = 'Gear',
//   junior_flyer = 'Junior flyer',
//   pro_flyer = 'Pro flyer',
//   kids = 'Kids',
// }
// enum PricesTypes {
//   tandem = 'Tandem',
//   aff = 'AFF',
//   tandem_course = 'Tandem course',
//   aff_course = 'Aff course',
//   gear = 'Gear',
//   junior_flyer = 'Junior flyer',
//   pro_flyer = 'Pro flyer',
//   kids = 'Kids',
// }

// interface PriceInterface {
//   type: keyof typeof PricesTypes;
//   price: number;
//   currency: string;
// }

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
    youtube_videos,
    facilities
  } = data[0].attributes;

  return (
    <Page variant="fluid">
      <Content variant="fluid" className="relative h-80 md:hidden">
        <Image
          src={cover.data.attributes.url}
          alt={cover.data.attributes.alternativeText}
          width={600}
          height={100}
          className="h-full w-full object-cover lg:rounded-lg"
          quality={100}
        />
      </Content>
      <Content className="flex flex-col md:flex-row gap-10 lg:gap-0 md:divide-x divide-accent-700 dark:divide-accent-200">
        <div className="flex w-full flex-col pr-0 lg:pr-12 gap-8 self-start md:sticky md:top-16 md:basis-1/3 md:py-6">
          <GobackLink 
            href={'/indoors'}
            label={'indoors'}
          />
          <div className='flex justify-between items-center gap-2'>
            <div className="flex items-center gap-2 md:gap-4">
              <Image
                src={logo.data.attributes.url}
                alt={logo.data.attributes.alternativeText}
                width={60}
                height={60}
                className="aspect-square rounded-full border border-accent-700"
              />
              <LargeHeading size={'md'}>
                {title}
              </LargeHeading>
            </div>
            {places &&
              <div>
                <span className='text-3xl'>
                  {places?.details.rating}
                </span>
                /5
              </div>
            }

          </div>
          <div className='divide-y divide-accent-700 dark:divide-accent-200'>
            {diameter > 0 && (
              <div className='py-4 first:pt-0 last:pb-0'>
                <div className="flex justify-between">
                  <SmallHeading headingStyles="uppercase">
                    Diameter
                  </SmallHeading>
                  <span>{diameter} ft.</span>
                </div>
              </div>
            )}
            {speed > 0 && (
              <div className='py-4 first:pt-0 last:pb-0'>
                <div className="flex justify-between">
                  <SmallHeading headingStyles="uppercase">Speed</SmallHeading>
                  <span>{speed} mph.</span>
                </div>
              </div>
            )}
            {height > 0 && (
              <div className='py-4 first:pt-0 last:pb-0'>
                <div className="flex justify-between">
                  <SmallHeading headingStyles="uppercase">
                    Height
                  </SmallHeading>
                  <span>{height} ft.</span>
                </div>
              </div>
            )}
            {company_name && (
              <div className='py-4 first:pt-0 last:pb-0'>
                <div className="flex justify-between">
                  <SmallHeading headingStyles="uppercase">
                    Company
                  </SmallHeading>
                  <span>{company_name}</span>
                </div>
              </div>
            )}
          </div>
          <CompanyDataTabs 
            price_title={price_title}
            price_subtitle={price_subtitle}
            prices={prices}
            opening_hours={opening_hours}
          />
          <div className="flex">
            <NavigationLink
              size={'lg'}
              variant={'black'}
              target="_blank"
              href={contacts.website}
              className="justify-center basis-1/2"
            >
              Get in touch
            </NavigationLink>
          </div>
        </div>
        <div className="flex pl-0 md:pl-12 flex-col gap-10 md:basis-2/3 md:py-6">
          <div className="relative h-96 hidden md:block">
            <Image
              src={cover.data.attributes.url}
              alt={cover.data.attributes.alternativeText}
              width={600}
              height={100}
              className="h-full w-full object-cover lg:rounded-lg"
              quality={100}
            />
          </div>
          <div className="prose prose-stone flex flex-col gap-6">
            <MediumHeading>Overview</MediumHeading>
            <ReactMarkdown className="prose prose-stone">
              {description}
            </ReactMarkdown>
          </div>
          {facilities && (
            <div className="flex flex-col gap-6">
              <MediumHeading>Facilities</MediumHeading>
              <div className='flex flex-wrap gap-2'>
                {facilities.map((item: any, index: any) => (
                  <Badge key={index}>{item}</Badge>
                ))}
              </div>
            </div>
          )}
          {places && (
            <div className="flex flex-col gap-6">
              <MediumHeading>Find {title} on the map</MediumHeading>
              <CustomMap long={places.lng} lat={places.lat} />
            </div>
          )}
          <div className="flex flex-col gap-6">
            <MediumHeading>Contact {title} indoor</MediumHeading>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <Icons.mail className="h-5 w-5" />
                <NavigationLink
                  variant={'headerNav'}
                  href={`mailto: ${contacts.email}`}
                >
                  {contacts.email}
                </NavigationLink>
              </div>
              <div className="flex items-center gap-1">
                <Icons.phone className="h-5 w-5" />
                <NavigationLink
                  variant={'headerNav'}
                  href={`tel: ${contacts.phone}`}
                >
                  {contacts.phone}
                </NavigationLink>
              </div>
            </div>
            <div className='flex h-full'>
              {social.links.map((data: any, index: any) => (
                // TODO: Add Id instead of index at Strapi
                <SocialLink key={index} data={data} />
              ))}
            </div>
          </div>
          {
            places && 
            <Suspense fallback={<h1>Loading...</h1>}>
              <GooglePlacesSection googlePlaceId={places.place_id} />
            </Suspense>
          }
          {
            youtube_videos &&
            <Suspense fallback={<h1>Loading videos...</h1>}>
              <YouTubeSection videos={youtube_videos} />
            </Suspense>
          }

        </div>
      </Content>
      <Content className='bg-accent-800 dark:bg-accent-100' variant={'fluid'}>
        <div className="flex flex-col gap-6 container py-10">
          <div className="flex flex-col gap-4">
            <MediumHeading>{related_dropzone_title}</MediumHeading>
            <SmallHeading>{related_dropzone_subtitle}</SmallHeading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {related_dropzones.data.length > 0 ? (
              related_dropzones.data.map((item: any, index: number) => (
                <Link key={index} href={`dropzone/${item.attributes.slug}`}>
                  <Card>
                    <div className="h-44">
                      <Image
                        loading="lazy"
                        src={item.attributes.cover.data.attributes.url}
                        alt={
                          item.attributes.cover.data.attributes
                            .alternativeText
                        }
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        quality={100}
                      />
                    </div>
                    <div className="p-4">
                      <Paragraph>{item.attributes.title}</Paragraph>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <Paragraph>No dropzone found</Paragraph>
            )}
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
