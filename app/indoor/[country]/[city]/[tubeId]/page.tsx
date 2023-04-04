import { getIndoorsByID } from '@/api-service/indoor-api';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import { IndoorDataItemInterface } from '@/types/nav';

interface IndoorTubePageProps {
  params: {
    country: string,
    city: string,
    tubeId: number,
  };
}

const IndoorTubePage = async ({ params: {country, city, tubeId} }: IndoorTubePageProps) => {
  const data = await getIndoorsByID(country, city, tubeId)
  return (
    <Page>
      <LargeHeading size="lg">{tubeId} page</LargeHeading>
      {data.map((item : IndoorDataItemInterface) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </Page>
  );
};

export default IndoorTubePage;
