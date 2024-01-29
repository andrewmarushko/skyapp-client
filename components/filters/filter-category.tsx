"use client"

import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';

const filterCategoryVariants = cva(
  "",
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
    VariantProps<typeof filterCategoryVariants> {
      label: string
    }

export const FilterCategory: FunctionComponent<FilterItemPropsInterface> = ({children, label}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        className="border-t dark:border-t-accent-200"
        value="1"
      >
        <AccordionTrigger className='hover:cursor-pointer hover:text-accent dark:text-accent-500 dark:hover:text-accent-800'>
          <span className="text-sm font-medium">{label}</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col gap-2 mb-3'>
            {children}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
