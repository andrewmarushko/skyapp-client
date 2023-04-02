'use client';

import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface IndoorTubePageProps {
  params: {
    tubeId: string,
  };
}

const IndoorTubePage = ({ params }: IndoorTubePageProps) => {
  return (
    <Page>
      <LargeHeading size="lg">{params.tubeId} page</LargeHeading>
    </Page>
  );
};

export default IndoorTubePage;
