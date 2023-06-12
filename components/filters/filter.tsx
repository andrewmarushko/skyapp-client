"use client"

import { FunctionComponent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FilterCategory } from '@/components/filters/filter-category';
import { FilterItem } from '@/components/filters/filter-item';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';

interface FilterInterface {
  companyNames: any[]
}

// you can add any category. City is just an example
interface FilterDataInterface {
  companyName: string[],
  // city: string[]
}

export const Filter: FunctionComponent<FilterInterface> = ({companyNames = []}) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterDataInterface>({
    companyName: [],
    // city: []
  });

  const handleCompanyFilter = (filterId: string) => {
    if (selectedFilters.companyName.includes(filterId)) {
      setSelectedFilters({
        ...selectedFilters,
        companyName: selectedFilters.companyName.filter((id) => id !== filterId)
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        companyName: [...selectedFilters.companyName, filterId]
      });
    }
  }

  // const handleCityFilter = (filterId: string) => {
  //   if (selectedFilters.city.includes(filterId)) {
  //     setSelectedFilters({
  //       ...selectedFilters,
  //       city: selectedFilters.city.filter((id) => id !== filterId)
  //     });
  //   } else {
  //     setSelectedFilters({
  //       ...selectedFilters,
  //       city: [...selectedFilters.city, filterId]
  //     });
  //   }
  // }

  const handleFiltersReset = () => {
    setSelectedFilters({
      companyName: [],
      // city: []
    });
  }

  return (
    <>
      <div className='hidden lg:flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <span className='leading-5 font-bold uppercase'>Filter by</span>
          <Button onClick={handleFiltersReset} variant={'reset'} size={'sm'}>Reset</Button>
        </div>
        <div className='flex flex-col'>
          {companyNames.length>0 &&
            <FilterCategory 
              label={'Company name'}
            >
              {companyNames.map((item) => (
                <FilterItem 
                  key={`filter-item-${item}`} 
                  label={item} 
                  id={item}
                  selected={selectedFilters.companyName.includes(item)}
                  onSelect={handleCompanyFilter} 
                />
              ))}
            </FilterCategory>
          }
        </div>
      </div>
      <div className='lg:hidden -mx-6'>
        <Accordion type="single" collapsible>
          <AccordionItem
            className="border-b dark:border-b-accent-200"
            value="item-1"
          >
            <AccordionTrigger className='z-10 px-6 py-4 sticky top-16 bg-sk-light hover:bg-accent-800 data-[state=open]:bg-accent-800 dark:bg-sk-dark border-y border-transparent dark:hover:border-accent-500 dark:data-[state=open]:border-accent-500 transition-colors duration-200'>
              <span className="text-sm font-medium uppercase">{'Filter by'}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col px-4 md:px-10 py-4 bg-sk-light dark:bg-accent gap-4'>
                <Button onClick={handleFiltersReset} fullWidth variant={'reset'} size={'sm'}>Reset</Button>
                <div className='flex flex-col'>
                  {companyNames.length>0 &&
                    <FilterCategory 
                      label={'Company name'}
                    >
                      {companyNames.map((item) => (
                        <FilterItem 
                          key={`filter-item-${item}`} 
                          label={item} 
                          id={item}
                          selected={selectedFilters.companyName.includes(item)}
                          onSelect={handleCompanyFilter} 
                        />
                      ))}
                    </FilterCategory>
                  }
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
