'use client';

/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { useFetchSWR } from '@/hooks/useFetchSWR';
import { handleFetchError } from '@/lib/handleFetchError';
import { fetchAllDropzones } from '@/api-service/dropzone';
import { Search } from '@/components/search';
import { useIndoorState } from '@/store/indoors';
import { useDebounce } from '@/hooks/useDebounce';
import { NavigationCard } from '@/components/navigation-card';
import { fetchAllTubes } from '@/api-service/indoor';

// TODO: next step make this component more reusable

export const ContentLayout = ({ locationParam }: { locationParam: string }) => {
  const { search, setSearch } = useIndoorState();
  const debouncedSearch = useDebounce(search, 500);
  const { data, error, isLoading, handleError } = useFetchSWR<any, Error>(
    locationParam,
    () =>
      locationParam === 'dropzone'
        ? fetchAllDropzones(debouncedSearch)
        : fetchAllTubes(debouncedSearch),
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
    <div className="container flex flex-col gap-7 lg:grid lg:grid-cols-4">
      <div className="col-span-1">
        <Search onChange={(e: any) => setSearch(e.target.value)} />
      </div>
      <div className="col-span-3">
        <div className="grid justify-center gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {isLoading && <p>Loading</p>}
          {!data && <p>No records found</p>}
          {data
            ? data.map(({ attributes, id }: any) => (
                <NavigationCard
                  link_location={locationParam}
                  key={id}
                  data={attributes}
                />
              ))
            : null}
          {data && data.length === 0 && <p>No Results</p>}
        </div>
      </div>
    </div>
  );
};
