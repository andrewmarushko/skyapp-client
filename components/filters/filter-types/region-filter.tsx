"use client"

import { FunctionComponent } from 'react';
import { FilterCategory } from '@/components/filters/filter-category';
import { FilterItem } from '@/components/filters/filter-item';
import { RegionTypes } from 'enums/enums';

interface FilterInterface {
  selectedFilters: any,
  setSelectedFilters: any,
  regionsList: any
}

export const RegionFilter: FunctionComponent<FilterInterface> = ({selectedFilters, setSelectedFilters, regionsList}) => {
  const handleRegionFilter = (filterId: string) => {
    if (selectedFilters.region.includes(filterId)) {
      setSelectedFilters({
        ...selectedFilters,
        region: selectedFilters.region.filter((id: any) => id !== filterId)
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        region: [...selectedFilters.region, filterId]
      });
    }
  }

  return (
    <FilterCategory 
      label={'Region'}
    >
      {regionsList.map((item: keyof typeof RegionTypes) => (
        <FilterItem 
          key={`filter-item-${item}`} 
          label={RegionTypes[item]} 
          id={RegionTypes[item]}
          selected={selectedFilters.region.includes(RegionTypes[item])}
          onSelect={handleRegionFilter} 
        />
      ))}
    </FilterCategory>
  );
};
