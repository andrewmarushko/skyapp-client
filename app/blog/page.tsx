import { blogPageQuery } from '@/api/queries/blog';
import { blogPageSeoQuery } from '@/api/queries/seo';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { siteConfig } from '@/constants/config';
import { client } from '@/lib/graphql/apollo-server';

import { Metadata } from 'next';
const defaultSeo = {
  title: 'Blog',
  description: 'Blog page',
};

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: {
      blogPage: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await client.query({ query: blogPageSeoQuery });

  if (!seo) return defaultSeo;

  return {
    metadataBase: new URL(`${siteConfig.siteDomen}/blog`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    applicationName: seo.applicationName,
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

export default async function BlogPage() {
  const {
    data: {
      blogPage: {
        data: {
          attributes: { hero },
        },
      },
    },
  } = await client.query({ query: blogPageQuery });

  return (
    <Page>
      <Hero title={hero.title} subtitle={hero.subtitle} />
    </Page>
  );
}
