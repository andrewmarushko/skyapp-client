import { getAllIndoors, getIndoorPageData } from '@/api-service/indoor-api';
import { Button } from '@/components/ui/button';
import LargeHeading from '@/components/ui/large-heading';

import Page from '@/components/ui/page';
import { Metadata } from 'next';

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
      <h1>{pageIndoorData.hero.title}</h1>
      <p>{pageIndoorData.hero.subtitle}</p>
      <div className="grid gap-10">
        {windTunnels &&
          windTunnels.map((windTunnel: any) => (
            <div key={`indoor-${windTunnels.id}`}>
              <h2>{windTunnels.companyName}</h2>
              <p>{windTunnel.title}</p>
            </div>
          ))}
      </div>
      <div className="mt-4 flex w-full justify-center">
        <Button onClick={() => console.log('some data')}>Load More</Button>
      </div>
    </Page>
  );
};

export default IndoorPage;
