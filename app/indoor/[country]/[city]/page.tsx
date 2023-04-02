'use client';

import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface IndoorCityPageProps {
  params: {
    city: string,
  };
}

const IndoorCityPage = ({ params }: IndoorCityPageProps) => {
  return (
    <Page>
      <LargeHeading size="lg">{params.city} page</LargeHeading>
    </Page>
  );
};

export default IndoorCityPage;
