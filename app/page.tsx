import { getPageSeo } from '@/api-service/seo';
import { Search } from '@/components/search';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Home Page',
  description: 'Home page description'
}

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageSeo('home-page')

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

export default function Home() {
  return (
    <Page>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          Home page
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>Home Page</Paragraph>
        <Search />
      </div>
    </Page>
  );
}
