import { getPageSeo } from '@/api-service/seo';
import LargeHeading from '@/components/ui/large-heading';
import Paragraph from '@/components/ui/paragraph';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const {seo} = await getPageSeo('services-page')

  console.log(seo)

  // TODO: need to create initial mocks if seo doesn't exist
  if (!seo) {
    return {
      title: "DEFAULT"
    }
  }
  return {
    title: seo.metaTitle,
    description: seo.metaDescription
  }
}

const ServicePage = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          Want learn how to?
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>
          Here you can find services where you can make your dreams come true.
        </Paragraph>
      </div>
    </div>
  );
};

export default ServicePage
