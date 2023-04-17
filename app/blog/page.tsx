import { getPageSeo } from '@/api-service/seo';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {
  const {seo} = await getPageSeo('blog-page')

  console.log(seo)
  if (!seo) {
    return {
      title: "BLOG"
    }
  }
  return {
    title: seo.metaTitle,
    description: seo.metaDescription
  }
}


const BlogPage = () => {
  return (
    <Page>
      <LargeHeading size='title'>Blog Page</LargeHeading>
      <Paragraph paragraphStyles='subtitle'>Here is a contact page for collaborations.</Paragraph>
    </Page>
  );
};

export default BlogPage;
