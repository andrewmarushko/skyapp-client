import { FunctionComponent } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Card } from '@/components/ui/card';
import { VariantProps, cva } from 'class-variance-authority';

const indoorCardVariants = cva('relative', {
  variants: {
    variant: {
      default: '',
      promoted: 'w-96 flex-shrink-0 snap-start mx-3',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface IndoorCardPropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indoorCardVariants> {
  // TODO: Add typization
  data: any;
  link_location?: string;
}

export const NavigationCard: FunctionComponent<IndoorCardPropsInterface> = ({
  className,
  data,
  variant,
  link_location
}) => {
  const { slug, title, cover, diameter, logo, location } = data;
  return (
    <Link
      className={cn(indoorCardVariants({ variant, className }))}
      href={`${link_location}/${slug}`}
    >
      <Card>
        <div className="h-44">
          <Image
            loading="lazy"
            src={cover.data.attributes.formats.thumbnail.url}
            alt={cover.data.attributes.alternativeText}
            width={cover.data.attributes.formats.thumbnail.width}
            height={cover.data.attributes.formats.thumbnail.height}
            className="h-full w-full object-cover"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-3 px-2 py-3 sm:px-4 sm:py-6">
          <h3 className="text-2xl font-bold leading-7 tracking-tighter text-accent dark:text-accent-900">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Icons.mapPin className="h-5 w-5" />
              <span className="text-xs text-accent-400 dark:text-accent-500">
                {location.city} / {location.country}
              </span>
            </div>
            {diameter && <div className="flex items-center gap-1">
              <Icons.circleSlash className="h-5 w-5" />
              <span className="text-xs text-accent-400 dark:text-accent-500">
                {diameter} ft.
              </span>
            </div>           
            }
          </div>
        </div>
        <div className="absolute left-2 top-28 z-1 flex h-14 w-14 items-center justify-center rounded-full bg-sk-light p-1 dark:bg-sk-dark">
          <Image
            loading="lazy"
            src={logo.data.attributes.formats.thumbnail.url}
            alt={logo.data.attributes.alternativeText}
            width={logo.data.attributes.formats.thumbnail.width}
            height={logo.data.attributes.formats.thumbnail.height}
            className="h-full w-full rounded-full object-cover"
            quality={100}
          />
        </div>
      </Card>
    </Link>
  );
};

NavigationCard.displayName = 'NavigationCard';
