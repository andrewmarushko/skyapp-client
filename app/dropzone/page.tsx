import { getPageSeo } from '@/api-service/seo';
import LargeHeading from '@/components/ui/large-heading';
import Paragraph from '@/components/ui/paragraph';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Dropzone',
  description: "Dropzone Page"
}

export async function generateMetadata(): Promise<Metadata> {
  const {seo} = await getPageSeo('dropzone-page')

  if (!seo) return defaultSeo

  return {
    metadataBase: new URL(`${seo.metadataBase}`),
    title: seo.metaTitle,
    description: seo.metaDescription,
    applicationName: seo.applicationName,
    keywords: seo.keywords,
    formatDetection: {
      email: seo.format_description.email,
      telephone: seo.format_description.telephone,
      address: seo.format_description.address
    },
    viewport: {
      width: seo.viewport.width,
      initialScale: seo.viewport.initial_scale,
    },
    robots: {
      index: seo.robots.index,
      follow: seo.robots.follow,
      nocache: seo.robots.nocache,
    }
  }
}

const DropzonePage = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          Find you dropzone
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>
          Here you can find perfect spot for you skydiving and place to have
          fun.
        </Paragraph>
      </div>
    </div>
  );
};

export default DropzonePage;
