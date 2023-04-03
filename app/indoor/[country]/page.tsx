'use client';

import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface IndoorCountryPageProps {
  params: {
    country: string,
  };
}

const IndoorCountryPage = ({ params }: IndoorCountryPageProps) => {
  return (
    <Page>
      <LargeHeading size="lg">{params.country} page</LargeHeading>
    </Page>
  );
};

export default IndoorCountryPage;
