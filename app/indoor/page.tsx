"use client"

import LargeHeading from '@/components/ui/large-heading';
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());

const IndoorPage = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:1337/api/indoors",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  console.log(data, 'data')
  return (
    <div className=''>
      <LargeHeading size="lg">Indoor main page</LargeHeading>
      <div className='flex justify-center items-center h-full'>
        {data.map((data) => (
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
