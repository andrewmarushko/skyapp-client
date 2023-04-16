import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

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
          </p>
        </div>
      </div>
    </footer>
  );
}
