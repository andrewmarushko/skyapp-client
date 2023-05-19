import { FunctionComponent } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterItemPropsInterface {
}

export const FilterItem: FunctionComponent<FilterItemPropsInterface> = () => {
  return (
    <label 
      className='flex items-center gap-2 p-3 rounded transition-all bg-accent-800 hover:bg-accent-700 hover:cursor-pointer dark:bg-accent-100 dark:hover:bg-accent-200'
      htmlFor="filter_1"
    >
      <Checkbox id='filter_1' />
      <span
        className='text-accent dark:text-accent-900'
      >
        Aerodium
      </span>
    </label>
  );
};
