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
import { CompanyFilter } from '@/components/filters/filter-types/company-filter';
import { ReactiveVar, makeVar, useQuery } from '@apollo/client';
import { getIndoorsFilters } from '@/api/queries/indoor';

interface FilterDataInterface {
  companyName: string[],
  region: string[]
}

export const indoorsCompaniesVar: ReactiveVar<any> = makeVar([]);
export const indoorsRegionsVar: ReactiveVar<any> = makeVar([]);

export const IndoorFilters: FunctionComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterDataInterface>({
    companyName: [],
    region: []
  });
  
  //Getting the list of unique companies and regions
  const [indoorsFilterData, setIndoorsFilterData] = useState<FilterDataInterface>({
    companyName: [],
    region: []
  });

  //The corresponding indoors filter data is received here
  const { data } = useQuery(getIndoorsFilters);
  
  //this one creates the unique arrays of data
  useEffect(() => {
    if (data && data.indoors && data.indoors.data) {
      const regionsSet = new Set<string>();
      const companiesSet = new Set<string>();
      data.indoors.data.forEach((indoor: any) => {
        const region = indoor.attributes.location.continent;
        const company = indoor.attributes.company_name;
        regionsSet.add(region);
        companiesSet.add(company);
      });
      const regions = Array.from(regionsSet);
      const companies = Array.from(companiesSet);
      setIndoorsFilterData({
        companyName: companies,
        region: regions
      });
    }
  }, [data]);
  
  //updates the reactive variables with the current value
  useEffect(() => {
    indoorsCompaniesVar(selectedFilters.companyName)
    indoorsRegionsVar(selectedFilters.region)
  }, [selectedFilters]);

  const handleFiltersReset = () => {
    setSelectedFilters({
      companyName: [],
      region: []
    });
  }

  //this one is used for the disabled state of reset button
  const isResetDisabled = selectedFilters.companyName.length === 0 && selectedFilters.region.length === 0;

  return (
    <>
      <div className='hidden lg:flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <span className='leading-5 font-bold uppercase'>Filter by</span>
          <Button onClick={handleFiltersReset} variant={'reset'} size={'sm'} disabled={isResetDisabled}>Reset</Button>
        </div>
        <div className='flex flex-col'>
          {indoorsFilterData.companyName.length>0 &&
            <CompanyFilter 
              selectedFilters={selectedFilters} 
              setSelectedFilters={setSelectedFilters} 
              companyNames={indoorsFilterData.companyName} 
            />
          }
          {indoorsFilterData.region.length>0 && 
            <RegionFilter 
              selectedFilters={selectedFilters} 
              setSelectedFilters={setSelectedFilters} 
              regionsList={indoorsFilterData.region} 
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
                  {indoorsFilterData.companyName.length>0 &&
                    <CompanyFilter 
                      selectedFilters={selectedFilters} 
                      setSelectedFilters={setSelectedFilters} 
                      companyNames={indoorsFilterData.companyName} 
                    />
                  }
                  {indoorsFilterData.region.length>0 && 
                    <RegionFilter 
                      selectedFilters={selectedFilters} 
                      setSelectedFilters={setSelectedFilters} 
                      regionsList={indoorsFilterData.region} 
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
