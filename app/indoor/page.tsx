import { Metadata } from 'next';

import { getIndoorPageData } from '@/api-service/indoor';
import Page from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import LargeHeading from '@/components/ui/large-heading';
import { ContentLayout } from '@/components/content-layout';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getIndoorPageData();

  return {
    metadataBase: new URL(`${seo.canonicalURL}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
  };
}

const IndoorPage = async () => {
  const pageIndoorData = await getIndoorPageData();

  return (
    <Page>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          {pageIndoorData.hero.title}
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>
          {pageIndoorData.hero.subtitle}
        </Paragraph>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          {pageIndoorData.hero.title}
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>
          {pageIndoorData.hero.subtitle}
        </Paragraph>
      </div>
      <ContentLayout />
      </div>
    </Page>
  );
};

export default IndoorPage;
