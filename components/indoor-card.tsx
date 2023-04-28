import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Card } from '@/components/ui/card';

interface IndoorCardPropsInterface {
  // TODO: Add typization
  data: any;
}

export const IndoorCard: FunctionComponent<IndoorCardPropsInterface> = ({
  data
}) => {
  const { slug, title, cover, location, diameter, tube_logo } = data;
  return (
    <Link className='relative' href={`indoor/${slug}`}>
      <Card >
        <div className='h-44'>
          <Image 
            loading='lazy' 
            src={cover.data.attributes.formats.thumbnail.url} 
            alt={cover.data.attributes.alternativeText} 
            width={cover.data.attributes.formats.thumbnail.width} 
            height={cover.data.attributes.formats.thumbnail.height}
            className='h-full w-full object-cover'
            quality={100}
          />
        </div>
        <div className='flex flex-col gap-3 px-4 py-6'>
          <h3 className='text-2xl leading-7 tracking-tighter text-accent dark:text-accent-900 font-bold'>{title}</h3>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
              <Icons.mapPin className='h-5 w-5' />
              <span className='text-xs text-accent-400 dark:text-accent-500'>{location.city} / {location.country}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Icons.circleSlash className='h-5 w-5' />
              <span className='text-xs text-accent-400 dark:text-accent-500'>{diameter} ft.</span>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-center items-center z-1 top-28 left-2 rounded-full w-14 h-14 bg-sk-light dark:bg-sk-dark p-1'>
          <Image 
            loading='lazy' 
            src={tube_logo.data.attributes.formats.thumbnail.url} 
            alt={tube_logo.data.attributes.alternativeText} 
            width={tube_logo.data.attributes.formats.thumbnail.width} 
            height={tube_logo.data.attributes.formats.thumbnail.height}
            className='h-full w-full object-cover rounded-full'
            quality={100}
          />
        </div>
      </Card>
    </Link>
  );
};