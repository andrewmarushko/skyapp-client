import { Metadata } from 'next';
import { Page } from '@/components/ui/page';
import { Hero } from '@/components/hero';
import { Content } from '@/components/content';
import { BecomePartner } from '@/components/become-partner';
import Promoted from '@/components/promoted';
import { ContentLayout } from '@/components/content-layout';
import { indoorsPageQuery, promotedIndoorsQuery } from '@/query/indoor';
import { indoorsPageSeoQuery } from '@/query/seo';
import { client } from '@/lib/graphql/apollo-server';
import { siteConfig } from '@/constants/config';

export const dynamic = 'force-dynamic';

const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: {
      indoorsPage: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await client.query({ query: indoorsPageSeoQuery });

  if (!seo) return defaultSeo;

  return {
    metadataBase: new URL(`${siteConfig.siteDomen}/indoors`),
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

const IndoorPage = async () => {
  const {
    data: {
      indoorsPage: {
        data: {
          attributes: { hero, become_partner },
        },
      },
    },
  } = await client.query({ query: indoorsPageQuery });

  const {
    data: {
      indoors: { data },
    },
  } = await client.query({ query: promotedIndoorsQuery });

  return (
    <Page variant={'fluid'}>
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <Promoted data={data} location="indoor" />
      <Content>
        <ContentLayout locationParam={'indoor'} />
      </Content>
      <Content>
        <BecomePartner data={become_partner} />
      </Content>
    </Page>
  );
};

export default IndoorPage;
