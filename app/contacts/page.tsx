import { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Page } from '@/components/ui/page';
import { contactsPageSeoQuery } from '@/api/queries/seo';

import { contactsPageQuery } from '@/api/queries/contacts';
import { client } from '@/lib/graphql/apollo-server';
import { siteConfig } from '@/constants/config';

export const dynamic = 'force-dynamic';

const defaultSeo = {
  title: 'Contacts',
  description: 'Contacts Page',
};

export async function generateMetadata(): Promise<Metadata> {
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
  });

  if (!seo) return defaultSeo;

  return {
    metadataBase: new URL(`${siteConfig.siteDomen}/contacts`),
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    applicationName: seo?.applicationName,
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
