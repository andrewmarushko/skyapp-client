'use client';

import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface DropzoneCountryPageProps {
  params: {
    country: string,
  };
}

const DropzoneCountryPage = ({ params }: DropzoneCountryPageProps) => {
  return (
    <Page>
      <LargeHeading size="lg">{params.country} page</LargeHeading>
    </Page>
  );
};

export default DropzoneCountryPage;
