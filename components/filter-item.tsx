import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';

const filterItemVariants = cva(
  "my-6 md:my-8",
  {
    variants: {
      variant: {
        default: 
          "container",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface FilterItemPropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof filterItemVariants> {}

export const FilterItem: FunctionComponent<FilterItemPropsInterface> = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        className="border-t dark:border-t-accent-200"
        value="item-1"
      >
        <AccordionTrigger className='hover:text-accent dark:text-accent-500 dark:hover:text-accent-800'>
          <span className="text-sm font-medium">{'Company name'}</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col ml-4 gap-3 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox id='filter_1' />
              <label
                htmlFor="filter_1"
                className='text-accent dark:text-accent-900'
              >
                Aerodium
              </label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
