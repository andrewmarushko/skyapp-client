import { Metadata } from 'next';

import { getIndoorPageData } from '@/api-service/indoor';
import Page from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import LargeHeading from '@/components/ui/large-heading';
import { ContentLayout } from '@/components/content-layout';
import { getPageSeo } from '@/api-service/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageSeo('indoor-page');

  if (!seo) {
    return {
      title: "INDOOR PAGE"
    }
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
  };
}

const IndoorPage = async () => {
  const pageIndoorData = await getIndoorPageData();

  return (
    <Page>
      {/* <div className="flex w-full flex-col items-center">
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
      </div> */}
    </Page>
  );
};

export default IndoorPage;
