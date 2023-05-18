/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { useIndoorState } from '@/store/indoors';
import { NavigationCard } from '@/components/navigation-card';

import InfiniteScroll from 'react-infinite-scroll-component';
import { apiClient } from '@/lib/graphql/apollo';
import { allTubesQuery } from '@/query/indoor';
import { allDropzonesQuery } from '@/api/queries/dropzone';

// TODO: next step make this component more reusable

export const CardList = async ({
  locationParam,
}: {
  locationParam: string;
}) => {
  // TODO: Refactor when search will implement just for working results. This component should be dummy
  let data = [];
  if (locationParam === 'dropzone') {
    const {
      data: {
        dropzones: { data: dropzoneData },
      },
    } = await apiClient.query({ query: allDropzonesQuery });
    data = dropzoneData;
  } else {
    const {
      data: {
        indoors: { data: indoorData },
      },
    } = await apiClient.query({ query: allTubesQuery });
    data = indoorData;
  }

  return (
    <div className="grid justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {data.map(({ attributes, id }: any, index: number) => (
        <NavigationCard
          link_location={locationParam}
          key={`indoor-${id}-${index}`}
          data={attributes}
        />
      ))}
    </div>
  );
};
