import { dropzonePageQuery, getDropzoneBySlug } from '@/api/queries/dropzone';
import { getDropzoneSeoBySlug } from '@/api/queries/seo';
import { BecomePartner } from '@/components/become-partner';
import { Content } from '@/components/content';
import GobackLink from '@/components/goback-link';
import GooglePlacesSection from '@/components/googlePlaces-section';
import { Icons } from '@/components/icons';
import { SocialLink } from '@/components/social-link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CustomMap } from '@/components/ui/google-map';
import LargeHeading from '@/components/ui/large-heading';
import { NavigationLink } from '@/components/ui/link';
import MediumHeading from '@/components/ui/medium-heading';
import { Page } from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import SmallHeading from '@/components/ui/small-heading';
import YouTubeSection from '@/components/youtube-section';
// import { siteCofig } from '@/constants/config';
import { client } from '@/lib/graphql/apollo-server';
import { PriceInterface } from '@/types/general';
import { PricesTypes } from 'enums/enums';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import ReactMarkdown from 'react-markdown';

export const dynamic = 'force-dynamic';

interface DropzoneDzPageProps {
  params: {
    slug: string;
  };
}

const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata({
  params: { slug },
}: DropzoneDzPageProps): Promise<Metadata> {
  const {
    data: {
      dropzones: { data },
    },
  } = await client.query({
    query: getDropzoneSeoBySlug,
    variables: { slug },
  });

  const { seo } = data[0].attributes;

  if (!seo) return defaultSeo;

  return {
    // metadataBase: new URL(`${siteConfig.siteDomen}/dropzone/${slug}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    // applicationName: seo.applicationName,
    // formatDetection: {
    //   email: seo.format_description.email,
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

const DropzonePage = async ({ params: { slug } }: DropzoneDzPageProps) => {
  const {
    data: {
      dropzones: { data },
    },
  } = await client.query({
    query: getDropzoneBySlug,
    variables: { slug },
  });

  const {
    data: {
      dropzonePage: {
        data: {
          attributes: {
            become_partner,
            related_tubes_subtitle,
            related_tubes_title,
            price_title,
            price_subtitle,
          },
        },
      },
    },
  } = await client.query({ query: dropzonePageQuery });

  const {
    title,
    cover,
    logo,
    contacts,
    description,
    related_indoors,
    location: { places },
    social,
    opening_hours,
    prices,
    youtube_videos,
    facilities,
    company_name,
    requirements
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
          href={'/dropzones'}
          label={'dropzones'}
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
          <div>
            <span className='text-3xl'>
              {places.details.rating}
            </span>
            /5
          </div>
        </div>
        <div className='divide-y divide-accent-700 dark:divide-accent-200'>
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
        <div className='flex flex-col md:divide-x dark:divide-accent-200 divide-accent-700 md:flex-row justify-between gap-10 md:gap-0'>
          {prices && (
            <div className="flex flex-col gap-6 md:basis-1/2 md:pr-6">
              <MediumHeading>{price_title}</MediumHeading>
              <div className="flex flex-col gap-3">
                <SmallHeading>{price_subtitle}</SmallHeading>
                <div>
                  {prices.price.map((item: PriceInterface, index: any) => (
                    <Paragraph key={index}>
                      {PricesTypes[item.type]} -
                      <span className="font-medium">
                        {item.price} {item.currency}
                      </span>
                    </Paragraph>
                  ))}
                </div>
                <div className="flex">
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
          )}
          {opening_hours && (
            <div className="flex flex-col gap-6 md:basis-1/2 md:pl-6">
              <MediumHeading>Schedule</MediumHeading>
              <div className="flex flex-col gap-2">
                {opening_hours.weekday_text.map((item: any, index: any) => (
                  <Paragraph key={index}>
                    {item}
                  </Paragraph>
                ))}
              </div>
            </div>
          )}
        </div>
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
        {requirements.jump_requirement && (
          <div className="flex flex-col gap-6">
            <MediumHeading>Jump requirements</MediumHeading>
            <Paragraph className='max-w-full break-words'>{requirements.jump_requirement}</Paragraph>
          </div>
        )}
        <div className="flex flex-col gap-6">
          <MediumHeading>Contact {title} dropzone</MediumHeading>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <Icons.mail className="h-5 w-5" />
              <NavigationLink
                variant={'underline'}
                href={`mailto: ${contacts.email}`}
              >
                {contacts.email}
              </NavigationLink>
            </div>
            <div className="flex items-center gap-1">
              <Icons.phone className="h-5 w-5" />
              <NavigationLink
                variant={'underline'}
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <GooglePlacesSection googlePlaceId={places.place_id} />
        </Suspense>
        <Suspense fallback={<h1>Loading videos...</h1>}>
          <YouTubeSection videos={youtube_videos} />
        </Suspense>
      </div>
    </Content>
    <Content className='bg-accent-800 dark:bg-accent-100' variant={'fluid'}>
      <div className="flex flex-col gap-6 container py-10">
        <div className="flex flex-col gap-4">
          <MediumHeading>{related_tubes_title}</MediumHeading>
          <SmallHeading>{related_tubes_subtitle}</SmallHeading>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {related_indoors.data.length > 0 ? (
            related_indoors.data.map((item: any, index: number) => (
              <Link key={index} href={`indoor/${item.attributes.slug}`}>
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
            <Paragraph>No indoors found</Paragraph>
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

export default DropzonePage;
