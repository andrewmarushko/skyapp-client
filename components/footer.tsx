'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Icons } from '@/icons';
import { NavigationLink } from '@/ui/link';
import { Logo } from '@/components/logo';
import { FooterInterface } from '@/types/footer';
import { LogoInterface } from '@/types/logo';
import { SubscriptionForm } from '@/components/forms/subscribe-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';

const ModeToggle = dynamic(
  () => import('@/components/mode-toggle').then((mod) => mod.ModeToggle),
  { ssr: false },
);

interface FooterProps {
  footerData: FooterInterface;
  logoData: LogoInterface;
}

export function Footer({ footerData, logoData }: FooterProps) {
  const { logo } = logoData;
  const { navigation, social, subscribe, copyright } = footerData.footer;

  return (
    <footer className="w-full bg-accent-800 dark:bg-accent-100 border-t border-t-accent-700 py-16 dark:border-t-accent-200">
      <div className="container flex flex-col gap-10 lg:gap-6">
        <div className="grid gap-10 lg:gap-4 lg:grid-cols-5">
          <div className="flex items-start justify-center md:justify-start">
            <Logo href={logo.href} companyName={logo.companyName} />
          </div>
          <div className='flex flex-col lg:flex-row gap-2 lg:justify-around lg:col-span-3'>
            {navigation.map(({ id, label, links }) => (
              <div key={id}>
                <div className="hidden lg:block">
                  <div className='pb-3'>
                    <span className="text-sm font-medium">{label}</span>
                  </div>  
                  <nav className="flex flex-col">
                    {links.map(({ id, label, target, href }) => (
                      <NavigationLink
                        key={id} 
                        target={target}
                        variant={'footer'}
                        size={'md'}
                        href={href}
                      >
                        {label}
                      </NavigationLink>
                    ))}
                  </nav>
                </div>
                <Accordion className="lg:hidden" type="single" collapsible>
                  <AccordionItem
                    className="dark:border-b-accent-200"
                    value="item-1"
                  >
                    <AccordionTrigger>
                      <span className="text-sm font-medium">{label}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <nav className="flex flex-col mb-3">
                        {links.map(({ id, label, target, href }) => (
                          <NavigationLink
                            key={id} 
                            target={target}
                            variant={'footer'}
                            size={'md'}
                            href={href}
                          >
                            {label}
                          </NavigationLink>
                        ))}
                      </nav>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
          <div className="col-span-full lg:col-span-1">
            <div className='pb-3'>
              <span className="text-sm font-medium">{subscribe.title}</span>
            </div>
            <p className="pb-4 pt-2 text-sm text-accent-400">
              {subscribe.subtitle}
            </p>
            <SubscriptionForm buttonLabel={subscribe.submitButton.label} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 lg:items-start lg:gap-1">
          <span className="text-sm text-accent-400 dark:text-accent-500">
            {copyright.companyName} {copyright.reserved} {copyright.copyright}
          </span>
          <div className='flex flex-col md:flex-row w-full gap-4 md:gap-0 md:justify-between items-center'>
            <nav className="flex h-full">
              {social.map(({ id, type, link }) => (
                <NavigationLink
                  className="mr-4 border-r border-r-accent-700 pr-4 leading-0 last:mr-0 last:border-r-0 last:pr-0 dark:border-r-accent-200"
                  key={id}
                  variant={'socialNetwork'}
                  size={'noPadding'}
                  href={link.href}
                  target={link.target}
                >
                  {type === 'instagram' && (
                    <Icons.instagram className="h-5 w-5" />
                  )}
                  {type === 'facebook' && (
                    <Icons.facebook className="h-5 w-5" />
                  )}
                  {type === 'twitter' && (
                    <Icons.twitter className="h-5 w-5" />
                  )}
                  {type === 'youtube' && (
                    <Icons.youtube className="h-5 w-5" />
                  )}
                </NavigationLink>
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
