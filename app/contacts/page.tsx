import { getPageSeo } from "@/api-service/seo"
import LargeHeading from "@/components/ui/large-heading"
import Page from "@/components/ui/page"
import Paragraph from "@/components/ui/paragraph"
import { Metadata } from "next"


export async function generateMetadata(): Promise<Metadata> {
    const {seo} = await getPageSeo('contacts-page')
  
    console.log(seo)
    if (!seo) {
        return {
          title: "CONTACTS"
        }
      }
    return {
      title: seo.metaTitle,
      description: seo.metaDescription
    }
  }
  
const ContactsPage = async () => {

    return(
        <Page>
            <LargeHeading size='title'>Contact Page</LargeHeading>
            <Paragraph paragraphStyles='subtitle'>Here is a contact page for collaborations.</Paragraph>
        </Page>
    )
}

export default ContactsPage;