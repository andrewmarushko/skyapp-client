import { FunctionComponent } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Card } from '@/components/ui/card';
import { VariantProps, cva } from 'class-variance-authority';

const dropzoneCardVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        default: "",
        promoted: "w-96 flex-shrink-0 snap-start mx-3", 
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface IndoorCardPropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropzoneCardVariants> {
      // TODO: Add typization
      data: any;
    }

export const DropzoneCard : FunctionComponent<IndoorCardPropsInterface> = (({ className, data, variant }) => {
  const { slug, title, cover, location, diameter, logo } = data;
  return (
    <Link 
      className={cn(dropzoneCardVariants({ variant, className }))}
      href={`dropzone/${slug}`}
    >
      <Card >
        <div className='h-44'>
          <Image 
            loading='lazy' 
            src={cover.data.attributes.url} 
            alt={cover.data.attributes.alternativeText} 
            width={cover.data.attributes.width} 
            height={cover.data.attributes.height}
            className='h-full w-full object-cover'
            quality={100}
          />
        </div>
        <div className='flex flex-col gap-3 px-2 sm:px-4 py-3 sm:py-6'>
          <h3 className='text-2xl leading-7 tracking-tighter text-accent dark:text-accent-900 font-bold'>{title}</h3>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
              <Icons.mapPin className='h-5 w-5' />
              <span className='text-xs text-accent-400 dark:text-accent-500'>{location.city} / {location.country}</span>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-center items-center z-1 top-28 left-2 rounded-full w-14 h-14 bg-sk-light dark:bg-sk-dark p-1'>
          <Image 
            loading='lazy' 
            src={logo.data.attributes.url} 
            alt={logo.data.attributes.alternativeText} 
            width={logo.data.attributes.width} 
            height={logo.data.attributes.height}
            className='h-full w-full object-cover rounded-full'
            quality={100}
          />
        </div>
      </Card>
    </Link>
  );
})

DropzoneCard.displayName = "DropzoneCard"