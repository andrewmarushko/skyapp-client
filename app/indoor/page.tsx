import { getAllIndoors, getIndoorPageData } from '@/api-service/indoor-api';
import { Button } from '@/components/ui/button';

import Page from '@/components/ui/page';
import { Metadata } from 'next';
import Paragraph from "@/components/ui/paragraph";
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
  const [windTunnels, pageIndoorData] = await Promise.all([
    getAllIndoors(),
    getIndoorPageData(),
  ]);

  return (
    <Page>
      <div className='flex flex-col items-center w-full'>
        <LargeHeading size={'title'} headingStyles={'title'}>Find you wind tunel</LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>Here you can find perfect spot for you indoor skydiving and grow your flying skills.</Paragraph>
      </div>
        <ContentLayout />
    </Page>
  );
};

export default IndoorPage;
