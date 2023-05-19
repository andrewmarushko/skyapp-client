import { servicesPageSeoQuery } from '@/api/queries/seo';
import { servicesPageQuery } from '@/api/queries/services';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { client } from '@/lib/graphql/apollo-server';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: {
      servicesPage: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await client.query({ query: servicesPageSeoQuery });

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

const ServicePage = async () => {
  const {
    data: {
      servicesPage: {
        data: {
          attributes: { hero },
        },
      },
    },
  } = await client.query({ query: servicesPageQuery });
  return (
    <Page>
      <Hero title={hero.title} subtitle={hero.subtitle} />
    </Page>
  );
};

export default ServicePage;
