import { FunctionComponent } from 'react';
import { Search } from '@/components/search';
import { Button } from '@/components/ui/button';
import { FilterCategory } from '@/components/filters/filter-category';
import { FilterItem } from '@/components/filters/filter-item';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';

interface FiltersInterface {
}

export const Filters: FunctionComponent<FiltersInterface> = ({}) => {
  return (
    <div className='flex flex-col gap-6'>
      <Search />
      <div className='hidden lg:flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <span className='leading-5 font-bold uppercase'>Filter by</span>
          <Button variant={'reset'} size={'sm'}>Reset</Button>
        </div>
        <div className='flex flex-col'>
          <FilterCategory>
            <FilterItem />
            <FilterItem />
            <FilterItem />
          </FilterCategory>
          <FilterCategory>
            <FilterItem />
            <FilterItem />
            <FilterItem />
          </FilterCategory>
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
                <Button fullWidth variant={'reset'} size={'sm'}>Reset</Button>
                <div className='flex flex-col'>
                  <FilterCategory>
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                  </FilterCategory>
                  <FilterCategory>
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                  </FilterCategory>
                  <FilterCategory>
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                  </FilterCategory>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
