"use client"

import LargeHeading from '@/components/ui/large-heading';
  
const IndoorPage = ({data}) => {
  return (
    <div className=''>
      <LargeHeading size="lg">Indoor main page</LargeHeading>
      <div className='flex justify-center items-center h-full'>
        {data?.map((data) => (
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
