import { getDropzoneSeoBySlug } from '@/api/queries/seo';
import { Page } from '@/components/ui/page';
import { client } from '@/lib/graphql/apollo-server';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface DropzoneDzPageProps {
  params: {
    slug: string;
  };
}

const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata({
  params: { slug },
}: DropzoneDzPageProps): Promise<Metadata> {
  const {
    data: {
      dropzones: { data },
    },
  } = await client.query({
    query: getDropzoneSeoBySlug,
    variables: { slug },
  });

  const { seo } = data[0].attributes;

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

const DropzonePage = async ({ params }: DropzoneDzPageProps) => {
  // const dropzone = await fetchDropzone(params.slug);

  return (
    <Page>
      {/* <LargeHeading size="title">{dropzone.attributes.title} page</LargeHeading> */}
    </Page>
  );
};

export default DropzonePage;
