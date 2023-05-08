import { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { getClient } from '@/lib/graphql/apollo';
import { contactsPageSeoQuery } from '@/api/queries/seo';

import { contactsPageQuery } from '@/api/queries/contacts';

const defaultSeo = {
  title: 'Contacts',
  description: 'Contacts Page',
};

export const revalidate = 1;
export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const {
    data: {
      contactsPage: {
        data: {
          attributes: { seo },
        },
      },
    },
  } = await client.query({
    query: contactsPageSeoQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  if (!seo) return defaultSeo;

  return {
    metadataBase: new URL(`${seo.metadataBase}`),
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    applicationName: seo?.applicationName,
    keywords: seo?.keywords,
    formatDetection: {
      email: seo?.format_description?.email,
      telephone: seo?.format_description?.telephone,
      address: seo?.format_description?.address,
    },
    viewport: {
      width: seo?.viewport?.width,
      initialScale: seo?.viewport?.initial_scale,
    },
    robots: {
      index: seo?.robots?.index,
      follow: seo?.robots?.follow,
      nocache: seo?.robots?.nocache,
    },
  };
}

const ContactsPage = async () => {
  const client = getClient();
  const {
    data: {
      contactsPage: {
        data: {
          attributes: { hero },
        },
      },
    },
  } = await client.query({ query: contactsPageQuery });

  return (
    <Page>
      <Hero title={hero.title} subtitle={hero.subtitle} />
    </Page>
  );
};

export default ContactsPage;
