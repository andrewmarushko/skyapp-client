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
          <h4 className='leading-5 font-bold uppercase'>Filter by</h4>
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
      <div className='lg:hidden'>
        <Accordion type="single" collapsible>
          <AccordionItem
            className="border-b dark:border-b-accent-200"
            value="item-1"
          >
            <AccordionTrigger>
              <span className="text-sm font-medium uppercase">{'Filter by'}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col px-6 py-4 bg-sk-light dark:bg-accent gap-4'>
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
