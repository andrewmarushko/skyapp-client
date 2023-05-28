// import { getPageSeo } from '@/api/seo';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { siteConfig } from '@/constants/config';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Indoor',
  description: 'Indoor Page',
};

export async function generateMetadata(): Promise<Metadata> {
  // const { seo } = await getPageSeo('services-page');

  // if (!seo) return defaultSeo;

  return {
    // metadataBase: new URL(`${siteConfig.siteDomen}/service`),
    // title: seo.metaTitle,
    // description: seo.metaDescription,
    // applicationName: seo.applicationName,
    // formatDetection: {
    //   email: seo.format_description.email,
    //   telephone: seo.format_description.telephone,
    //   address: seo.format_description.address,
    // },
    // viewport: {
    //   width: seo.viewport.width,
    //   initialScale: seo.viewport.initial_scale,
    // },
    // robots: {
    //   index: seo.robots.index,
    //   follow: seo.robots.follow,
    //   nocache: seo.robots.nocache,
    // },
  };
}

const ServicePage = () => {
  return (
    <Page>
      <Hero title="Services landing page" subtitle="Landing subtitle" />
    </Page>
  );
};

export default ServicePage;
