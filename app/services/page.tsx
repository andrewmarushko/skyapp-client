import { getPageSeo } from '@/api/seo';
import LargeHeading from '@/components/ui/large-heading';
import Paragraph from '@/components/ui/paragraph';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageSeo('services-page');

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

const ServicePage = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          Want learn how to?
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>
          Here you can find services where you can make your dreams come true.
        </Paragraph>
      </div>
    </div>
  );
};

export default ServicePage;
