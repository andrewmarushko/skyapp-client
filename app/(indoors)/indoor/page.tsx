import { Metadata } from 'next';
import { Page } from '@/components/ui/page';
import { Hero } from '@/components/hero';
import { indoorLandingPageSeoQuery } from '@/api/queries/seo';
import { indoorLandingPageQuery } from '@/api/queries/indoor';
import { client } from '@/lib/graphql/apollo-server';

const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: {
      indoorLanding: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await client.query({ query: indoorLandingPageSeoQuery });

  if (!seo) return defaultSeo;

  return {
    metadataBase: new URL(`${seo.metadataBase}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    applicationName: seo.applicationName,
    keywords: seo.keywords,
    formatDetection: {
      email: seo.format_description.email,
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

const IndoorPage = async () => {
  const {
    data: {
      indoorLanding: {
        data: {
          attributes: { hero },
        },
      },
    },
  } = await client.query({ query: indoorLandingPageQuery });

  return (
    <Page>
      <Hero title={hero.title} subtitle={hero.subtitle} />
    </Page>
  );
};

export default IndoorPage;
