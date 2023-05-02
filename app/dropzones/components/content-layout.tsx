'use client';
/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { Button } from '@/components/ui/button';
import { useFetchSWR } from '@/hooks/useFetchSWR';
import { handleFetchError } from '@/lib/handleFetchError';
import { fetchAllDropzones } from '@/api-service/dropzone';
import { Search } from '@/components/search';
import { useIndoorState } from '@/store/indoors';
import { useDebounce } from '@/hooks/useDebounce';
import { NavigationCard } from '@/components/navigation-card';

// TODO: next step make this component more reusable


export const DropzonesContentLayout = () => {
  const { search, setSearch } = useIndoorState()
  const debouncedSearch = useDebounce(search, 500); 
  const { data, error, isLoading, handleError } = useFetchSWR<any, Error>(
    `indoors`,
    () => fetchAllDropzones(debouncedSearch),
    [debouncedSearch],
    undefined,
    handleFetchError,
  );

  // TODO: Create error message component
  if (error) {
    handleError(error);
    // Отобразить сообщение об ошибке или выполнить другую логику
    return <div>Cant load indoors</div>;
  }

    return (
      <div className='container flex flex-col lg:grid lg:grid-cols-4 gap-7'>
      <div className='col-span-1'>
        <Search onChange={(e: any) => setSearch(e.target.value)}/>
      </div>
      <div className='col-span-3'>
        <div className='grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4'> 
          {isLoading && <p>Loading</p>}
          {!data && <p>No records found</p>}
          {data && data.map(({ attributes, id }: any) => (
            <NavigationCard link_location='dropzone' key={id} data={attributes}/>
          ))}
          {data && data.length === 0 && <p>No Results</p>}
        </div>
        <div className="mt-7 flex w-full justify-center">
          <Button>Load More</Button>
        </div>
      </div>
    </div>
  );
};
