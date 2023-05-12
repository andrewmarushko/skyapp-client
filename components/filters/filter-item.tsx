import { FunctionComponent } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterItemPropsInterface {
}

export const FilterItem: FunctionComponent<FilterItemPropsInterface> = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='filter_1' />
      <label
        htmlFor="filter_1"
        className='text-accent dark:text-accent-900'
      >
        Aerodium
      </label>
    </div>
  );
};
