import { dropzonesPageQuery } from '@/api/queries/dropzone';
import { dropzoneLandingPageSeoQuery } from '@/api/queries/seo';
import { BecomePartner } from '@/components/become-partner';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { client } from '@/lib/graphql/apollo-server';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Dropzone',
  description: 'Dropzone Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: {
      dropzoneLanding: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await client.query({ query: dropzoneLandingPageSeoQuery });

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

const DropzonePage = async () => {
  const {
    data: {
      dropzonesPage: {
        data: {
          attributes: { hero, become_partner },
        },
      },
    },
  } = await client.query({ query: dropzonesPageQuery });
  return (
    <Page>
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <BecomePartner data={become_partner} />
    </Page>
  );
};

export default DropzonePage;
