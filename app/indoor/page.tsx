import {
  getAllIndoors,
  getIndoorPageData,
  getIndoorsData,
} from "@/api-service/indoor-api";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import LargeHeading from "@/components/ui/large-heading";

import Page from "@/components/ui/page";
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

  console.log("windtunnels", windTunnels, pageIndoorData);
  return (
    <Page>
      <div className="grid gap-10">
        {windTunnels &&
          windTunnels.map((windTunnel: any) => (
          <div>
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
