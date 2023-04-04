import { getData } from '@/api-service/indoor-api';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';

interface IndoorCountryPageProps {
  params: {
    country: string,
  };
}

const IndoorCountryPage = async ({ params }: IndoorCountryPageProps) => {

  const data = await getData()
  console.log(data, 'data')

  return (
    <Page>
      <LargeHeading size="lg">{params.country} page</LargeHeading>
      <div>
        {data.map((item) => (
          <p key={item.country}>{item.country}</p>
        ))}
      </div>
    </Page>
  );
};

export default IndoorCountryPage;
