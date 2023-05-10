// import {
//   fetchDropzonePageData,
//   fetchPromotedDropzone,
// } from '@/api/dropzone';
// import { getPageSeo } from '@/api/seo';
import { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { BecomePartner } from '@/components/become-partner';
import { Page } from '@/ui/page';
import { Content } from '@/components/content';
import { ContentLayout } from '../../../components/content-layout';
import { Promoted } from '@/components/promoted';
import { apiClient } from '@/lib/graphql/apollo';
import { dropzonesPageQuery, promotedDropzonesQuery } from '@/query/dropzone';
import { dropzonesPageSeoQuery } from '@/query/seo';

const defaultSeo = {
  title: 'Dropzone',
  description: 'Dropzone Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: {
      dropzonesPage: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await apiClient.query({ query: dropzonesPageSeoQuery });

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
  } = await apiClient.query({ query: dropzonesPageQuery });

  const {
    data: {
      dropzones: { data },
    },
  } = await apiClient.query({ query: promotedDropzonesQuery });

  return (
    <Page>
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <Promoted location="dropzone" data={data} />
      <Content>
        <ContentLayout locationParam={'dropzone'} />
      </Content>
      <BecomePartner data={become_partner} />
    </Page>
  );
};

export default DropzonePage;
