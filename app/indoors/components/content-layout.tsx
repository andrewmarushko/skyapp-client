'use client'
/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { Button } from '@/components/ui/button'
import { useFetchSWR } from '@/hooks/useFetchSWR';
import { fetchAllTubes } from '@/api-service/indoor';
import { handleFetchError } from '@/lib/handleFetchError';
import { Search } from '@/components/search';
import { IndoorCard } from '@/components/indoor-card';

export const IndoorContentLayout = () => {
  // TODO: Add typization
  const { data, error, isLoading, handleError } = useFetchSWR<any, Error>(
    `indoors`,
    () => fetchAllTubes(),
    undefined,
    handleFetchError
  );

  // TODO: Create skeleton for card component
  if (isLoading) return <p>...LOADING...</p>

  // TODO: Create error message component
  if (error) {
    handleError(error);
    // Отобразить сообщение об ошибке или выполнить другую логику
    return <div>Cant load indoors</div>;
  }

  // TODO: Create no found component
  if (!data) return <p>No records found</p>

  return (
    <div className='container grid gap-5'>
      <div>
        <Search />
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* TODO: Add typization */}
          {data.map(({ attributes, id }: any) => (
            <IndoorCard key={id} data={attributes}/>
          ))}
        </div>
        <div className="mt-4 flex w-full justify-center">
          <Button>Load More</Button>
        </div>
      </div>
    </div>
  )
}
