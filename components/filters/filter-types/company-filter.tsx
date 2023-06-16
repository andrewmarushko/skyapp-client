"use client"

import { FunctionComponent } from 'react';
import { FilterCategory } from '@/components/filters/filter-category';
import { FilterItem } from '@/components/filters/filter-item';

interface FilterInterface {
  selectedFilters: any,
  setSelectedFilters: any,
  companyNames: any
}

export const CompanyFilter: FunctionComponent<FilterInterface> = ({selectedFilters, setSelectedFilters, companyNames}) => {
  const handleCompanyFilter = (filterId: string) => {
    if (selectedFilters.companyName.includes(filterId)) {
      setSelectedFilters({
        ...selectedFilters,
        companyName: selectedFilters.companyName.filter((id: any) => id !== filterId)
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        companyName: [...selectedFilters.companyName, filterId]
      });
    }
  }

  return (
    <FilterCategory 
      label={'Company name'}
    >
      {companyNames.map((item: string) => (
        <FilterItem 
          key={`filter-item-${item}`} 
          label={item} 
          id={item}
          selected={selectedFilters.companyName.includes(item)}
          onSelect={handleCompanyFilter} 
        />
      ))}
    </FilterCategory>
  );
};
