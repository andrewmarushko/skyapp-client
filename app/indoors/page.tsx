import { Metadata } from 'next';

import { getIndoorPageData } from '@/api-service/indoor';
import Page from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import LargeHeading from '@/components/ui/large-heading';
import { getPageSeo } from '@/api-service/seo';
import { IndoorContentLayout } from '@/app/indoors/components/content-layout';

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
  const { hero } = await getIndoorPageData();

  return (
    <Page>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          {hero.title}
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>{hero.subtitle}</Paragraph>
      </div>
      <div className="container mt-10">
        <IndoorContentLayout />
      </div>
    </Page>
  );
};

export default IndoorPage;
