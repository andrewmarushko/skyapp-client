"use client"

import { FunctionComponent, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';
import { RegionFilter } from './filter-types/region-filter';
import { CompanyFilter } from './filter-types/company-filter';

interface FilterInterface {
  companyNames: any[];
  regionsList: any[];
}

// you can add any category. City is just an example
interface FilterDataInterface {
  companyName: string[],
  region: string[]
}

export const IndoorFilters: FunctionComponent<FilterInterface> = ({companyNames = [], regionsList = []}) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterDataInterface>({
    companyName: [],
    region: []
  });

  const handleFiltersReset = () => {
    setSelectedFilters({
      companyName: [],
      region: []
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
            <CompanyFilter 
              selectedFilters={selectedFilters} 
              setSelectedFilters={setSelectedFilters} 
              companyNames={companyNames} 
            />
          }
          {regionsList.length>0 && 
            <RegionFilter 
              selectedFilters={selectedFilters} 
              setSelectedFilters={setSelectedFilters} 
              regionsList={regionsList} 
            />
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
                    <CompanyFilter 
                      selectedFilters={selectedFilters} 
                      setSelectedFilters={setSelectedFilters} 
                      companyNames={companyNames} 
                    />
                  }
                  {regionsList.length>0 && 
                    <RegionFilter 
                      selectedFilters={selectedFilters} 
                      setSelectedFilters={setSelectedFilters} 
                      regionsList={regionsList} 
                    />
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
