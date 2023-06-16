"use client"

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { NavigationCard } from '@/components/navigation-card';
import { allTubesQuery } from '@/query/indoor';
import { allDropzonesQuery } from '@/api/queries/dropzone';
import { NoDataPage } from '@/components/no-data-page';
import { useReactiveVar } from '@apollo/client';
import { indoorsCompaniesVar, indoorsRegionsVar } from '@/components/filters/indoors-filter';
import { dropzonesRegionsVar } from '@/components/filters/dropzones-filter';
import { dropzonesSearchVar, indoorsSearchVar } from '@/components/search';

export const CardList = ({ locationParam }: any) => {
  const [data, setData] = useState([]);
  const indoorSearchValue = useReactiveVar(indoorsSearchVar);
  const dropzonesSearchValue = useReactiveVar(dropzonesSearchVar);
  const selectedIndoorCompanies = useReactiveVar(indoorsCompaniesVar);
  const selectedIndoorRegions = useReactiveVar(indoorsRegionsVar);
  const selectedDropzonesRegions = useReactiveVar(dropzonesRegionsVar);

  const getVariables = () => {
    let variables: {
      title: string;
      regions?: string[];
      company_name?: string[];
    } = {
      title: '',
    };

    if (locationParam === 'dropzone') {
      variables.title = dropzonesSearchValue;
      if (selectedDropzonesRegions.length > 0) {
        variables.regions = selectedDropzonesRegions;
      }
    } else {
      variables.title = indoorSearchValue;
      if (selectedIndoorRegions.length > 0) {
        variables.regions = selectedIndoorRegions;
      }
      if (selectedIndoorCompanies.length > 0) {
        variables.company_name = selectedIndoorCompanies;
      }
    }

    return variables;
  };
  
  const { loading, error } = useQuery(
    locationParam === 'dropzone' ? allDropzonesQuery : allTubesQuery,
    {
      variables: getVariables(),
      onCompleted: (data) => {
        data && locationParam === 'dropzone' ? setData(data.dropzones.data) : setData(data.indoors.data);
      },
    }
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <NoDataPage />;
  }

  return (
    <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {data.map(({ attributes, id }, index) => (
        <NavigationCard
          link_location={locationParam}
          key={`indoor-${id}-${index}`}
          data={attributes}
        />
      ))}
    </div>
  );
};