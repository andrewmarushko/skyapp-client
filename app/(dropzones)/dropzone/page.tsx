import { getPageSeo } from '@/api/seo';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
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
    <Page>
      <Hero title='Dropzone Landing Page' subtitle='Landing subtitle' />
    </Page>
  );
};

export default DropzonePage;
