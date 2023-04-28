'use client';

import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface DropzoneDzPageProps {
  params: {
    slug: string,
  };
}


// TODO: add also seo for this generated page

const DropzoneDZPage = ({ params }: DropzoneDzPageProps) => {
  return (
    <Page>
      <LargeHeading size="lg">{params.slug} page</LargeHeading>
    </Page>
  );
};

export default DropzoneDZPage;
