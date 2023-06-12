"use client"

import { FunctionComponent, useEffect, useState } from 'react';
import { Search } from '@/components/search';
import { Filter } from '@/components/filters/filter';

interface FiltersInterface {
  data: any[],
  locationParam: string
}

export const Filters: FunctionComponent<FiltersInterface> = ({data, locationParam}) => {
  const [uniqueCompanyNames, setUniqueCompanyNames] = useState<string[]>([]);
  
  //it is used here to have all the company names, without depending on the filtered items in the data array. It is updated only when you move from Dropzones to Indoors page and back.
  useEffect(() => {
    const updatedUniqueCompanyNames = [
      ...new Set(data.map((item: any) => item.attributes.company_name).filter(Boolean)),
    ];
    setUniqueCompanyNames(updatedUniqueCompanyNames);
  }, [locationParam]);
  
  return (
    <div className='flex flex-col gap-6'>
      <Search />
      {uniqueCompanyNames.length>0 && <Filter companyNames={uniqueCompanyNames} />}
    </div>
  );
};
