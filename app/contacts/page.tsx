import { getPageSeo } from '@/api-service/seo';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import { Metadata } from 'next';

const defaultSeo = {
  title: 'Contacts',
  description: 'Contacts Page',
};

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageSeo('contacts-page');

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

const ContactsPage = async () => {
  return (
    <Page>
      <LargeHeading size="title">Contact Page</LargeHeading>
      <Paragraph paragraphStyles="subtitle">
        Here is a contact page for collaborations.
      </Paragraph>
    </Page>
  );
};

export default ContactsPage;
