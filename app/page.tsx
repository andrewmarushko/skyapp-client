import { getPageSeo } from '@/api/seo';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Home Page',
  description: 'Home page description',
};

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageSeo('home-page');

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

export default function Home() {
  return (
    <Page>
      <Hero
        title={'Home page landing'}
        subtitle={'Here is a place where you can fly'}
      />
    </Page>
  );
}
