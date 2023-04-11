import {
  getAllIndoors,
  getIndoorPageData,
  getIndoorsData,
} from "@/api-service/indoor-api";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LargeHeading from "@/components/ui/large-heading";
import Page from "@/components/ui/page";
import Paragraph from "@/components/ui/paragraph";
import { IndoorDataItemInterface, IndoorDataListInterface } from "@/types/nav";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const {seo} = await getIndoorPageData()
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

export default IndoorPage
