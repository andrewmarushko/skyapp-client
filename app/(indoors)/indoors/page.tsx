import { Metadata } from 'next';

import {
  fetchPromotedIndoors,
  getIndoorPageData,
} from '@/api/indoor';
import { Page } from '@/components/ui/page';
import { getPageSeo } from '@/api/seo';
import { Hero } from '@/components/hero';
import { Content } from '@/components/content';
import { BecomePartner } from '@/components/become-partner';
import { Promoted } from '@/components/promoted';
import { ContentLayout } from '@/components/content-layout';


const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageSeo('indoor-page');

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
    hero: { title, subtitle },
    become_partner,
  } = await getIndoorPageData();
  const promoted = await fetchPromotedIndoors();

  return (
    <Page variant={'fluid'}>
      <Hero title={title} subtitle={subtitle} />
      <Promoted data={promoted} location="indoor" />
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
