import { getAllIndoors, getIndoorPageData } from '@/api-service/indoor-api';
import { Button } from '@/components/ui/button';

import Page from '@/components/ui/page';
import { Metadata } from 'next';
import { Card } from "@/components/ui/card";
import Paragraph from "@/components/ui/paragraph";

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

  console.log('windtunnels', windTunnels, pageIndoorData);
  return (
    <Page>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {windTunnels &&
          windTunnels.map((windTunnel: any) => (
            <Card key={`indoor-${windTunnels.id}`}>
              <Paragraph>
                {windTunnel.title}
              </Paragraph>
            </Card>
          ))
        }
      </div>
      <div className="mt-4 flex w-full justify-center">
        <Button>Load More</Button>
      </div>
    </Page>
  );
};

export default IndoorPage;
