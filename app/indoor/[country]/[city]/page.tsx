import { getIndoorsByCity } from '@/api-service/indoor-api';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import { IndoorDataItemInterface } from '@/types/nav';

interface IndoorCityPageProps {
  params: {
    country: string,
    city: string,
  };
}

const IndoorCityPage = async ({
  params: { country, city },
}: IndoorCityPageProps) => {
  const data = await getIndoorsByCity(country, city);
  return (
    <Page>
      <LargeHeading size="lg">{city} page</LargeHeading>
      {data &&
        data.map((item: IndoorDataItemInterface) => (
          <p key={item.id}>{item.name}</p>
        ))}
    </Page>
  );
};

export default IndoorCityPage;
