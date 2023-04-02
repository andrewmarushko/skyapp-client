'use client';

import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface DropzoneCityPageProps {
  params: {
    city: string,
  };
}

const DropzoneCityPage = ({ params }: DropzoneCityPageProps) => {
  return (
    <Page>
      <LargeHeading size="lg">{params.city} page</LargeHeading>
    </Page>
  );
};

export default DropzoneCityPage;
