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
import { siteConfig } from '@/constants/config';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

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
    metadataBase: new URL(`${siteConfig.siteDomen}/indoor/${slug}`),
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

enum PricesTypes {
  tandem = 'Tandem',
  aff = 'AFF',
  tandem_course = 'Tandem course',
  aff_course = 'Aff course',
  gear = 'Gear',
  junior_flyer = 'Junior flyer',
  pro_flyer = 'Pro flyer',
  kids = 'Kids'
}

interface PriceInterface {
  type: keyof typeof PricesTypes,
  price: number,
  currency: string,
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
      <Content className="container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
          className='justify-center'
        >
          Get in touch
        </NavigationLink>
      </Content>
      <Content className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="order-2 md:order-1 flex md:basis-2/3 flex-col gap-10 md:py-6">
          <div className="prose prose-stone flex flex-col gap-6">
            <MediumHeading>Overview</MediumHeading>
            <ReactMarkdown className="prose prose-stone">
              {description}
            </ReactMarkdown>
          </div>
          {prices && 
            <div className="flex flex-col gap-6">
              <MediumHeading>{price_title}</MediumHeading>
              <div className='flex flex-col gap-4'>
                <SmallHeading>{price_subtitle}</SmallHeading>
                <div>
                  {prices.price.map((item: PriceInterface, index: any) => (
                    <Paragraph key={index}>
                      {PricesTypes[item.type]} - 
                      <span className='font-medium'>{item.price} {item.currency}</span>
                    </Paragraph>
                  ))}
                </div>
                <div className='flex'>
                  <NavigationLink
                    variant={'black'}
                    target={prices.price_link.target}
                    href={prices.price_link.href}
                  >
                    {prices.price_link.label}
                  </NavigationLink>
                </div>
              </div>
            </div>
          }
          {places && 
            <div className="flex flex-col gap-6">
              <MediumHeading>Find {title} on the map</MediumHeading>
              <CustomMap long={places.lng} lat={places.lat} />
            </div>
          }
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <MediumHeading>{related_dropzone_title}</MediumHeading>
              <SmallHeading>{related_dropzone_subtitle}</SmallHeading>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {related_dropzones.data.length > 0 ? (
                related_dropzones.data.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={`dropzone/${item.attributes.slug}`}
                  >
                    <Card>
                        <div className="h-44">
                          <Image
                            loading="lazy"
                            src={item.attributes.cover.data.attributes.url}
                            alt={item.attributes.cover.data.attributes.alternativeText}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover"
                            quality={100}
                          />
                        </div>
                        <div className='p-4'>
                          <Paragraph>{item.attributes.title}</Paragraph>
                        </div>
                    </Card>
                  </Link>
                ))
              ) : (
                <div>No dropzone found</div>
              )}
            </div>
          </div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <GooglePlacesSection googlePlaceId={places.place_id} />
          </Suspense>
          <Suspense fallback={<h1>Loading videos...</h1>}>
            <YouTubeSection youtubeChannelId={social.youtubeId} />
          </Suspense>
        </div>
        <div className="w-full order-1 md:order-2 md:sticky md:top-16 flex md:basis-1/3 flex-col gap-10 self-start md:py-6">
          <div>
            <MediumHeading>Details</MediumHeading>
            <div>
              {diameter > 0 && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading headingStyles='uppercase'>Diameter</SmallHeading>
                    <span>{diameter} ft.</span>
                  </div>
                </div>
              )}
              {speed > 0 && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading headingStyles='uppercase'>Speed</SmallHeading>
                    <span>{speed} mph.</span>
                  </div>
                </div>
              )}
              {height > 0 && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading headingStyles='uppercase'>Height</SmallHeading>
                    <span>{height} ft.</span>
                  </div>
                </div>
              )}
              {company_name && (
                <div>
                  <Separator className="my-6" />
                  <div className="flex justify-between">
                    <SmallHeading headingStyles='uppercase'>Company</SmallHeading>
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
          {opening_hours && 
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
          }

          <div className="flex flex-col gap-6">
            <MediumHeading>Contact {title} indoor</MediumHeading>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex items-center gap-1">
                <Icons.mail className="h-6 w-6" />
                <NavigationLink
                  className="hover:underline hover:transition-all"
                  href={`mailto: ${contacts.email}`}
                >
                  {contacts.email}
                </NavigationLink>
              </div>
              <div className="flex items-center gap-1">
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
