'use client';
import { FunctionComponent } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/icons';
import { Card } from '@/ui/card';
import { VariantProps, cva } from 'class-variance-authority';

const navigationCardVariants = cva('relative', {
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

interface NavigationCardPropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navigationCardVariants> {
  // TODO: Add typization
  data: any;
  link_location?: string;
}

export const NavigationCard: FunctionComponent<
  NavigationCardPropsInterface
> = ({ className, data, variant, link_location }) => {
  const { slug, title, cover, diameter, logo, location } = data;
  return (
    <Link
      className={cn(navigationCardVariants({ variant, className }))}
      href={`${link_location}/${slug}`}
    >
      <Card>
        <div className="h-44">
          <Image
            loading="lazy"
            src={cover.data.attributes.url}
            alt={cover.data.attributes.alternativeText}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            quality={100}
            placeholder="blur"
            blurDataURL={cover.data.attributes.url}
          />
        </div>
        <div className="flex flex-col gap-3 px-4 py-6">
          <h3 className="text-2xl font-bold leading-7 tracking-tighter text-accent dark:text-accent-900">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-accent-400 dark:text-accent-600">
              <Icons.mapPin className="h-4 w-4" />
              <span className="text-sm">{location.city}</span>
            </div>
            {diameter && (
              <div className="flex items-center gap-1 text-accent-400 dark:text-accent-600">
                <Icons.circleSlash className="h-4 w-4" />
                <span className="text-sm">{diameter} ft.</span>
              </div>
            )}
          </div>
        </div>
        <div className="z-1 absolute left-2 top-28 flex h-12 w-12 items-center justify-center  rounded-full bg-sk-light p-0.5 dark:bg-sk-dark sm:h-14 sm:w-14">
          <Image
            loading="lazy"
            src={logo.data.attributes.url}
            alt={logo.data.attributes.alternativeText}
            width={300}
            height={300}
            className="h-full w-full rounded-full object-cover"
            quality={100}
            placeholder="blur"
            blurDataURL={logo.data.attributes.url}
          />
        </div>
      </Card>
    </Link>
  );
};

NavigationCard.displayName = 'NavigationCard';
