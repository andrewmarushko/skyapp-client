"use client"

import { FunctionComponent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';
import { RegionFilter } from '@/components/filters/filter-types/region-filter';
import { ReactiveVar, makeVar, useQuery } from '@apollo/client';
import { getDropzonesFilters } from '@/api/queries/dropzone';

interface FilterDataInterface {
  region: string[]
}

export const dropzonesRegionsVar: ReactiveVar<any> = makeVar([]);

export const DropzoneFilters: FunctionComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterDataInterface>({
    region: []
  });

  const [dropzoneRegions, setDropzoneRegions] = useState<string[]>([]);

  const { data } = useQuery(getDropzonesFilters);

  useEffect(() => {
    if (data && data.dropzones && data.dropzones.data) {
      const regionsSet = new Set<string>();
      data.dropzones.data.forEach((dropzone: any) => {
        const region = dropzone.attributes.location.continent;
        regionsSet.add(region);
      });
      const regions = Array.from(regionsSet);
      setDropzoneRegions(regions);
    }
  }, [data]);


  useEffect(() => {
    dropzonesRegionsVar(selectedFilters.region)
  }, [selectedFilters]);

  const handleFiltersReset = () => {
    setSelectedFilters({
      region: []
    });
  }

  const isResetDisabled = selectedFilters.region.length === 0;
  
  return (
    <>
      <div className='hidden lg:flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <span className='leading-5 font-bold uppercase'>Filter by</span>
          <Button 
            onClick={handleFiltersReset} 
            variant={'reset'} size={'sm'} 
            disabled={isResetDisabled}
          >
            Reset
          </Button>
        </div>
        <div className='flex flex-col'>
          {dropzoneRegions.length>0 &&
            <RegionFilter 
              selectedFilters={selectedFilters} 
              setSelectedFilters={setSelectedFilters} 
              regionsList={dropzoneRegions} 
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
                  {dropzoneRegions.length>0 &&
                    <RegionFilter 
                    selectedFilters={selectedFilters} 
                    setSelectedFilters={setSelectedFilters} 
                    regionsList={dropzoneRegions} 
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
