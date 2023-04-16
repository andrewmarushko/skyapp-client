import LargeHeading from "@/components/ui/large-heading"
import Page from "@/components/ui/page"
import Paragraph from "@/components/ui/paragraph"

const ContactsPage = async () => {

    return(
        <Page>
            <LargeHeading size='title'>Contact Page</LargeHeading>
            <Paragraph paragraphStyles='subtitle'>Here is a contact page for collaborations.</Paragraph>
        </Page>
    )
}

export default ContactsPage;