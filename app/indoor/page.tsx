import { getAllIndoors } from '@/api-service/indoor-api';
import LargeHeading from '@/components/ui/large-heading';
import { IndoorDataListInterface } from '@/types/nav';
  
const IndoorPage = async() => {
  const data = await getAllIndoors()
  return (
    <div className=''>
      <LargeHeading size="lg">Indoor main page</LargeHeading>
      <div className='flex justify-center items-center h-full'>
        {data?.map((data : IndoorDataListInterface) => (
          <div key={data.country}>
            <h3 className='font-extrabold text-2xl'>{data.country}</h3>
            <div>
              {data.data.map(({id, name}) => (
                <p key={id}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndoorPage;
