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
import { useIndoorState } from '@/store/indoors';
import { NavigationCard } from '@/components/navigation-card';
import { fetchAllTubes } from '@/api-service/indoor';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SetStateAction, useState } from 'react';

// TODO: next step make this component more reusable

export const CardList = ({ locationParam }: { locationParam: string }) => {
  const { data, search, currentPage, setCurrentPage, setData } =
    useIndoorState();

  const { error, isLoading, handleError, handleSuccess } = useFetchSWR<
    any,
    Error
  >(
    `indoors`,
    () =>
      locationParam === 'indoor'
        ? fetchAllTubes(search, currentPage)
        : fetchAllDropzones(search),
    [search, currentPage],
    undefined,
    {
      onSuccess: (responce) => {
        if (search) return setData([...responce]);

        return setData([...data, ...responce]);
      },
      onError: (error) => {
        handleError(error);
      },
    },
  );

  function fetchMoreData(): void {
    setCurrentPage(data.length);
  }

  return (
    <div className="grid justify-center gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more item</p>}
      >
        {data.map(({ attributes, id }: any, index) => (
          <NavigationCard
            link_location={locationParam}
            key={`indoor-${id}-${index}`}
            data={attributes}
          />
        ))}
      </InfiniteScroll>
      {data.length === 0 && <p>No Results</p>}
    </div>
  );
};
