import { getPageSeo } from '@/api-service/seo';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import Paragraph from '@/components/ui/paragraph';
import { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {
  const {seo} = await getPageSeo('home-page')

  console.log(seo)
  if (!seo) {
    return {
      title: "HOME PAGE"
    }
  }
  return {
    title: seo.metaTitle,
    description: seo.metaDescription
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
      </div>
    </Page>
  );
}
