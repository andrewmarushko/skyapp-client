import { Metadata } from "next"
import { getPageSeo } from "@/api-service/seo"
import { Hero } from "@/components/hero"
import { Page } from "@/components/ui/page"

const defaultSeo = {
  title: 'Contacts',
  description: "Contacts Page"
}

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageSeo('contacts-page')

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

const ContactsPage = async () => {
  return (
    <Page>
      <Hero title={'Contact Page'} subtitle={'Here is a contact page for collaborations.'} />
    </Page>
  )
}

export default ContactsPage;