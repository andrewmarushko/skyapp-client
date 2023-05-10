import { Metadata } from 'next';

// import { fetchPromotedIndoors, getIndoorPageData } from '@/api/indoor';
import { Page } from '@/components/ui/page';
// import { getPageSeo } from '@/api/seo';
import { Hero } from '@/components/hero';
import { Content } from '@/components/content';
import { BecomePartner } from '@/components/become-partner';
import { Promoted } from '@/components/promoted';
import { ContentLayout } from '@/components/content-layout';
import { apiClient } from '@/lib/graphql/apollo';
import { indoorsPageQuery, promotedIndoorsQuery } from '@/query/indoor';
import { indoorsPageSeoQuery } from '@/query/seo';

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
  } = await apiClient.query({ query: indoorsPageSeoQuery });

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
      indoorsPage: {
        data: {
          attributes: { hero, become_partner },
        },
      },
    },
  } = await apiClient.query({ query: indoorsPageQuery });

  const {
    data: {
      indoors: { data },
    },
  } = await apiClient.query({ query: promotedIndoorsQuery });

  return (
    <Page variant={'fluid'}>
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <Promoted data={data} location="indoor" />
      <Content>
        <ContentLayout locationParam={'indoor'} />
      </Content>
      <div className="container">
        <BecomePartner data={become_partner} />
      </div>
    </Page>
  );
};

export default IndoorPage;
