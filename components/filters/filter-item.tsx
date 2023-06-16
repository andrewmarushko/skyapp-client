"use client"

import { FunctionComponent } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterItemPropsInterface {
  id: string,
  label: string,
  selected: boolean,
  onSelect: (id: string) => void
}

export const FilterItem: FunctionComponent<FilterItemPropsInterface> = ({id, label, selected, onSelect}) => {
  const handleCheckboxChange = () => {
    onSelect(id); // Виклик функції onSelect з вибраним id
  };
  
  return (
    <label 
      className='flex items-center gap-2 p-3 rounded transition-all bg-accent-800 hover:bg-accent-700 hover:cursor-pointer dark:bg-accent-100 dark:hover:bg-accent-200'
      htmlFor={id}
    >
      <Checkbox 
        id={id}
        value={id}
        checked={selected}
        onClick={handleCheckboxChange}
      />
      <span
        className='text-accent dark:text-accent-900'
      >
        {label}
      </span>
    </label>
  );
};
