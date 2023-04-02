'use client';

import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface DropzoneDzPageProps {
  params: {
    dropzoneId: string,
  };
}

const DropzoneDZPage = ({ params }: DropzoneDzPageProps) => {
  return (
    <Page>
      <LargeHeading size="lg">{params.dropzoneId} page</LargeHeading>
    </Page>
  );
};

export default DropzoneDZPage;
