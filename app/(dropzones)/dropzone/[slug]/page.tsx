import { dropzonePageQuery, getDropzoneBySlug } from '@/api/queries/dropzone';
import { getDropzoneSeoBySlug } from '@/api/queries/seo';
import { BecomePartner } from '@/components/become-partner';
import { Content } from '@/components/content';
import GooglePlacesSection from '@/components/googlePlaces-section';
import { Icons } from '@/components/icons';
import { SocialLink } from '@/components/social-link';
import { CustomMap } from '@/components/ui/google-map';
import { NavigationLink } from '@/components/ui/link';
import MediumHeading from '@/components/ui/medium-heading';
import { Page } from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import YouTubeSection from '@/components/youtube-section';
// import { siteConfig } from '@/constants/config';
import { client } from '@/lib/graphql/apollo-server';
import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
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
            <p>{related_tubes_title}</p>
            <p>{related_tubes_subtitle}</p>
            {related_indoors.data.length > 0 ? (
              related_indoors.data.map((item: any, index: number) => (
                <div key={index}>{item.attributes.title}</div>
              ))
            ) : (
              <div>No related indoors found</div>
            )}
          </div>
          <div>
            <p>Raiting - {places.details.rating}</p>
            <CustomMap long={places.lng} lat={places.lat} />
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
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="afterInteractive"
      />
      <Script
        strategy="afterInteractive"
        src="https://platform.twitter.com/widgets.js"
      />
    </Page>
  );
};

export default DropzonePage;
