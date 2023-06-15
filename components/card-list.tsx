"use client"
/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { NavigationCard } from '@/components/navigation-card';

import InfiniteScroll from 'react-infinite-scroll-component';
import { allTubesQuery } from '@/query/indoor';
import { allDropzonesQuery } from '@/api/queries/dropzone';
import { NoDataPage } from '@/components/no-data-page';

import { useApolloClient, useReactiveVar } from '@apollo/client';
import { indoorsSearchVar, dropzonesSearchVar } from '@/components/search';
import { indoorsCompaniesVar, indoorsRegionsVar } from '@/components/filters/indoors-filter';
import { dropzonesRegionsVar } from '@/components/filters/dropzones-filter';

// TODO: next step make this component more reusable
export const dynamic = "dynamic";

export const CardList = async ({
  locationParam,
}: {
  locationParam: string;
}) => {
  const client = useApolloClient();
  // TODO: Refactor when search will implement just for working results. This component should be dummy
  let data = [];

  //Here is a mock data that is used in the filters until the data management is arranged
  const title : string = '';
  const company_name : string[] = [];
  const regions : string[] = [];

  //Here is the function that returns the object that can be sent to the variables object. It is required for the filter to work properly when no option is chosen
  const getRequestData = (title: string, regions: string[], companies?: string[] ) => {
    let requestData = {
      title,
    } as { title: any; [key: string]: string[] | undefined }; 
  
    if (companies && companies.length > 0) {
      requestData.company_name = companies;
    }

    if (regions && regions.length > 0) {
      requestData.regions = regions;
    }
  
    return requestData;
  }

  const indoorSearchValue = useReactiveVar(indoorsSearchVar);
  const dropzonesSearchValue = useReactiveVar(dropzonesSearchVar);
  console.log(indoorSearchValue,  'countValue');
  const selectedIndoorCompanies = useReactiveVar(indoorsCompaniesVar);
  console.log(selectedIndoorCompanies,  'selectedIndoorCompanies');
  const selectedIndoorRegions = useReactiveVar(indoorsRegionsVar);
  console.log(selectedIndoorRegions,  'selectedIndoorRegions');
  const selectedDropzonesRegions = useReactiveVar(dropzonesRegionsVar);
  console.log(selectedDropzonesRegions,  'selectedropzonesRegions');

  const indoorsFilterVariables = getRequestData(indoorSearchValue, selectedIndoorRegions, selectedIndoorCompanies);
  const dropzonesFilterVariables = getRequestData(dropzonesSearchValue, selectedDropzonesRegions);
  
  if (locationParam === 'dropzone') {
    const {
      data: {
        dropzones: { data: dropzoneData },
      },
    } = await client.query({ 
      query: allDropzonesQuery,
      variables: dropzonesFilterVariables, 
    });
    data = dropzoneData;
  } else {
    const {
      data: {
        indoors: { data: indoorData },
      },
    } = await client.query({ 
        query: allTubesQuery,
        variables: indoorsFilterVariables
      });
    data = indoorData;
  }

  return (
    <div className=''>
      {data.length > 0 ?       
        <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {data.map(({ attributes, id }: any, index: number) => (
            <NavigationCard
              link_location={locationParam}
              key={`indoor-${id}-${index}`}
              data={attributes}
            />
          ))}
        </div>
      :
        <NoDataPage />
      }
    </div>
  );
};
