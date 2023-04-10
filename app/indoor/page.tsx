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

// export async function generateMetadata(): Promise<Metadata> {
//   const pageData = await fetch(
//     `${process.env.NEXT_PUBLIC_DEV_URL}/indoor-page`,
//   );

//   console.log(pageData, 'pageData')
//   // const { seo } = await pageData.json();

//   return {
//     metadataBase: new URL(
//       `https://${seo.canonicalURL}/indoor` ||
//         `https://${process.env.NEXT_PUBLIC_DEV_URL}/indoor`,
//     ),
//     title: seo.metaTitle,
//     description: seo.metaDescription,
//   };
// }

const IndoorPage = async () => {
  const [windTunnels, pageIndoorData] = await Promise.all([
    getAllIndoors(),
    getIndoorPageData(),
  ]);

  console.log("pageIndoorData", pageIndoorData);
  console.log("windTunnels", windTunnels)

  return (
    <Page>
      <div>
        {/* <LargeHeading size="lg">{pageIndoorData.hero.title}</LargeHeading> */}
        {/* <h2>{pageIndoorData.hero.subtitle}</h2> */}
      </div>
      <div className="grid gap-10">
        {windTunnels &&
          windTunnels.map((countryData: IndoorDataListInterface) => (
            <div key={countryData.country} className="grid grid-cols-3 gap-8">
              {countryData &&
                countryData.data?.map(
                  ({
                    indoorLocation,
                    id,
                    title,
                    websiteUrl,
                    coverImage,
                  }: IndoorDataItemInterface) => (
                    <div key={id} className={`relative col-span-1 rounded-xl`}>
                      <Link
                        href={`/indoor/${indoorLocation.country}/${indoorLocation.city}/${id}`}
                      >
                        <Image
                          src={coverImage?.url}
                          alt={coverImage?.alternativeText}
                          width={200}
                          height={200}
                          className="h-[200px] w-full rounded-t-xl object-cover"
                          priority
                          quality={100}
                        />

                        <div className="rounded-b-xl border border-t-0 border-[#d2d2d2] p-3">
                          <div className="flex justify-between">
                            <p className="mb-3 font-semibold underline">
                              <Link
                                href={`/indoor/${indoorLocation.country}/${indoorLocation.city}/${id}`}
                              >
                                {title}
                              </Link>
                            </p>
                            {websiteUrl && (
                              <a target="_blank" href={websiteUrl}>
                                <div className="flex items-center gap-1">
                                  <p>Visit Site</p>
                                  <Icons.externalLink
                                    width="20px"
                                    height="20px"
                                  />
                                </div>
                              </a>
                            )}
                          </div>
                          <div>
                            <span>
                              <Link
                                className="underline"
                                href={`/indoor/${indoorLocation.country}`}
                              >
                                {indoorLocation.country + ", "}
                              </Link>
                            </span>
                            <span>
                              <Link
                                className="underline"
                                href={`/indoor/${indoorLocation.country}/${indoorLocation.city}`}
                              >
                                {indoorLocation.city}
                              </Link>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ),
                )}
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
