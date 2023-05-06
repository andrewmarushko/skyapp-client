'use client';

/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { useFetchSWR } from '@/hooks/useFetchSWR';
import { fetchAllDropzones } from '@/api/dropzone';
import { useIndoorState } from '@/store/indoors';
import { NavigationCard } from '@/components/navigation-card';
import { fetchAllTubes } from '@/api/indoor';
import InfiniteScroll from 'react-infinite-scroll-component';

// TODO: next step make this component more reusable

export const CardList = ({ locationParam }: { locationParam: string }) => {
  const { data, meta, search, currentPage, setCurrentPage, setData, setMeta } =
    useIndoorState();
  const isHasMore = meta.pagination?.total > meta.pagination?.start ? true : false

  const { error, isLoading, handleError } = useFetchSWR<
    any,
    Error
  >(
    locationParam,
    () =>
      locationParam === 'indoor'
        ? fetchAllTubes(search, currentPage)
        : fetchAllDropzones(search, currentPage),
    [search, currentPage],
    undefined,
    {
      onSuccess: (responce) => {
        if (search)  {
          setData(responce.data);
          setMeta(responce.meta)
          return
        } 

         setData([...data, ...responce.data]);
         setMeta(responce.meta)
         return 
      },
      onError: (error) => {
        handleError(error);
      },
    },
  );

  if (error) return <p>somethig goes wrong</p>

  function fetchMoreData(): void {
    setCurrentPage(data.length);
  }

  return (
    <div className="grid justify-center gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={isHasMore && meta.pagination?.limit !== 100}
        loader={<h4>...Loading...</h4>}
      >
        {data.map(({ attributes, id }: any, index) => (
          <NavigationCard
            link_location={locationParam}
            key={`indoor-${id}-${index}`}
            data={attributes}
          />
        ))}
      </InfiniteScroll>
      {data.length === 0 && !isLoading && <p>No Results</p>}
    </div>
  );
};
