import { getAllIndoors, getIndoorPageData } from "@/api-service/indoor-api";
import { Button } from "@/components/ui/button";

import Page from "@/components/ui/page";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getIndoorPageData();

  return {
    metadataBase: new URL(
      `https://${seo.canonicalURL}/indoor` ||
        `https://${process.env.NEXT_PUBLIC_DEV_URL}/indoor`,
    ),
    title: seo.metaTitle,
    description: seo.metaDescription,
  };
}

const IndoorPage = async () => {
  const [windTunnels, pageIndoorData] = await Promise.all([
    getAllIndoors(),
    getIndoorPageData(),
  ]);

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
        <Button>Load More</Button>
      </div>
    </Page>
  );
};

export default IndoorPage;
