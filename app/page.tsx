import { homePageQuery } from '@/api/queries/home';
import { homePageSeoQuery } from '@/api/queries/seo';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { client } from '@/lib/graphql/apollo-server';
import { Metadata } from 'next';
// import { siteConfig } from '@/constants/config';

export const dynamic = 'force-dynamic';

const defaultSeo = {
  title: 'Home Page',
  description: 'Home page description',
};

export async function generateMetadata(): Promise<Metadata> {
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
    // metadataBase: new URL(`${siteConfig.siteDomen}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    // applicationName: seo.applicationName,
    // formatDetection: {
    //   email: seo.format_description?.email,
    //   telephone: seo.format_description?.telephone,
    //   address: seo.format_description?.address,
    // },
    // viewport: {
    //   width: seo.viewport?.width,
    //   initialScale: seo.viewport?.initial_scale,
    // },
    // robots: {
    //   index: seo.robots?.index,
    //   follow: seo.robots?.follow,
    //   nocache: seo.robots?.nocache,
    // },
  };
}

export default async function Home() {
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
