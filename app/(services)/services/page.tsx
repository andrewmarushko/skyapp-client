import { getPageSeo } from '@/api/seo';
import { Hero } from '@/components/hero';
import { Page } from "@/ui/page"
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
    <Page>
      <Hero title={'Want learn how to?'} subtitle={'Here you can find services where you can make your dreams come true..'} />
    </Page>
  );
};

export default ServicePage;
