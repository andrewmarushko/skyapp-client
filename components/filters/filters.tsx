import { FunctionComponent } from 'react';
import { Search } from '@/components/search';
import { IndoorFilters } from '@/components/filters/indoors-filter';
import { DropzoneFilters } from '@/components/filters/dropzones-filter';

interface FiltersInterface {
  locationParam: string,
}

export const Filters: FunctionComponent<FiltersInterface> = ({locationParam=''}) => {
  return (
    <div className='flex flex-col gap-6'>
      <Search locationParam={locationParam} />
      {locationParam === 'indoor' && <IndoorFilters />}
      {locationParam === 'dropzone' && <DropzoneFilters />}
    </div>
  );
};
