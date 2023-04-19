import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { CustomLink } from './ui/link';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

interface FooterProps {
  footerData: any;
}

export function Footer({ footerData }: FooterProps) {
  return (
    <footer className="container">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-t-stone-200 py-10 dark:border-t-stone-700 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-stone-600 dark:text-stone-400 md:text-left">
            Built by{' '}
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Skydiving Center
            </a>
            .
            <CustomLink variant={'footer'} size={"sm"} href={'/dropzone'}>I am a Footer Link</CustomLink>
          </p>
          <div className="flex w-max items-center space-x-2 sm:space-x-4 md:justify-end">
            <nav className="m-right flex items-center space-x-1">
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className: 'text-stone-700 dark:text-stone-400',
                  })}
                >
                  <Icons.instagram className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
