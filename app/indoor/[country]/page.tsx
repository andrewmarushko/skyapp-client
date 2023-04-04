import { getAllIndoors, getIndoorsByCountry } from '@/api-service/indoor-api';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import { IndoorDataItemInterface } from '@/types/nav';

interface IndoorCountryPageProps {
  params: {
    country: string,
  };
}

const IndoorCountryPage = async ({
  params: { country },
}: IndoorCountryPageProps) => {
  const data = await getIndoorsByCountry(country);
  return (
    <Page>
      <LargeHeading size="lg">{country} page</LargeHeading>
      <div>
        {data &&
          data.map((item: IndoorDataItemInterface) => (
            <p key={item.id}>{item.name}</p>
          ))}
      </div>
    </Page>
  );
};

export default IndoorCountryPage;
