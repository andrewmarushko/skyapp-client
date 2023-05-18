import { homePageQuery } from '@/api/queries/home';
import { homePageSeoQuery } from '@/api/queries/seo';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { getClient } from '@/lib/graphql/apollo';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Home Page',
  description: 'Home page description',
};

export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const {
    data: {
      homePage: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await client.query({ query: homePageSeoQuery });

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

export default async function Home() {
  const client = getClient();
  const {
    data: {
      homePage: {
        data: {
          attributes: { hero },
        },
      },
    },
  } = await client.query({ query: homePageQuery });

  return (
    <Page>
      <Hero title={hero.title} subtitle={hero.subtitle} />
    </Page>
  );
}
