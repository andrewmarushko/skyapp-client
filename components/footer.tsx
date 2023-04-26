import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { NavigationLink } from '@/components/ui/link';
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { FooterInterface } from '@/types/footer';
import { LogoInterface } from '@/types/logo';
import React from 'react';

interface FooterProps {
  footerData: FooterInterface;
  logoData: LogoInterface;
}

export function Footer({ footerData, logoData }: FooterProps) {
  const { logo } = logoData;
  const { navigation, social, subscribe, copyright } = footerData.footer;
  console.log(logoData, 'logoData')
  return (
    <footer className="w-full border-t border-t-stone-200 dark:border-t-stone-700 py-9">
      <div className="container flex flex-col gap-4">
        <div className='grid grid-cols-4 max-w-full gap-6'>
          <div className='flex items-start justify-between gap-0'>
            <Logo href={logo.href} companyName={logo.companyName} />
          </div>
          {navigation.map(({id, label, links}) => (
            <div key={id}>
              <h2 className='text-sm my-3'>{label}</h2>
              <ul className='flex flex-col list-none'>
                {links.map(({id, label, target, href}) => (
                  <li key={id} className='text-accent-400 py-2'>
                    <NavigationLink target={target} variant={'footer'} size={'sm'} href={href}>{label}</NavigationLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>

          </div>
        </div>
        <div className='flex flex-col justify-between mt-6 gap-1'>
          <span className='text-accent-400 text-sm'>{copyright.companyName} {copyright.reserved} {copyright.copyright}</span>
          <div className='flex justify-between items-center'>
            <ul className='flex'>
              {social.map(({id, type, link}) => (
                <li className='pr-4 mr-4 border-r border-r-accent-800 leading-0 last:pr-0 last:mr-0 last:border-r-0' key={id}>
                  <NavigationLink variant={'socialNetwork'} size={'sm'} href={link.href} target={link.target}>
                    {type==='instagram' && <Icons.instagram className="h-5 w-5" />}
                    {type==='facebook' && <Icons.facebook className="h-5 w-5" />}
                    {type==='twitter' && <Icons.twitter className="h-5 w-5" />}
                    {type==='youtube' && <Icons.youtube className="h-5 w-5" />}
                  </NavigationLink>
                </li>
                )
              )}
            </ul>
            <ModeToggle />
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
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
            <NavigationLink variant={'footer'} size={"sm"} href={'/dropzone'}>I am a Footer Link</NavigationLink>
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
        </div> */}
      </div>
    </footer>
  );
}
