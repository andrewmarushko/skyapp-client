"use client"

import { FunctionComponent } from 'react';
import { Search } from '@/components/search';
import { IndoorFilters } from '@/components/filters/indoors-filter';
import { DropzoneFilters } from '@/components/filters/dropzones-filter';

interface FiltersInterface {
  locationParam: string,
  regions: string[],
  companies?: string[]
}

export const Filters: FunctionComponent<FiltersInterface> = ({locationParam='', regions=[], companies=[]}) => {
  // const [uniqueCompanyNames, setUniqueCompanyNames] = useState<string[]>([]);
  // const [regions, setRegions] = useState<string[]>([]);
  
  // //it is used here to have all the company names, without depending on the filtered items in the data array. It is updated only when you move from Dropzones to Indoors page and back.
  // useEffect(() => {
  //   const updatedUniqueCompanyNames = [
  //     ...new Set(data.map((item: any) => item.attributes.company_name).filter(Boolean)),
  //   ];
  //   const updatedRegions = [
  //     ...new Set(data.map((item: any) => item.attributes.location.continent).filter(Boolean)),
  //   ];

  //   setUniqueCompanyNames(updatedUniqueCompanyNames);
  //   setRegions(updatedRegions);
  // }, [locationParam]);
  
  return (
    <div className='flex flex-col gap-6'>
      <Search locationParam={locationParam} />
      {locationParam === 'indoor' && <IndoorFilters companyNames={companies} regionsList={regions} />}
      {locationParam === 'dropzone' && <DropzoneFilters regionsList={regions} />}
    </div>
  );
};
