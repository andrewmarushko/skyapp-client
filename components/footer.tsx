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

export function Footer({ footerData, logoData }: any) {
  const { href, companyName } = logoData;
  const { navigation, social, subscribe, copyright } = footerData;

  return (
    <footer className="w-full border-t border-t-stone-200 py-9 dark:border-t-stone-700">
      <div className="container flex flex-col gap-4">
        <div className="grid max-w-full gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-start justify-center gap-0 md:justify-between">
            <Logo href={href} companyName={companyName} />
          </div>
          {navigation.map(({ id, label, links }: any) => (
            <div key={id}>
              <div className="hidden md:block">
                <span className="mb-3 text-sm font-medium">{label}</span>
                <nav className="flex list-none flex-col">
                  {links.map(({ id, label, target, href }: any) => (
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
              <Accordion className="md:hidden" type="single" collapsible>
                <AccordionItem
                  className="dark:border-b-accent-200"
                  value="item-1"
                >
                  <AccordionTrigger className="font-normal">
                    <span className="mb-3 text-sm font-medium">{label}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="max-h-60vh overflow-y-auto text-base">
                      <div className="overflow-y-hidden">
                        <nav className="mb-3">
                          {links.map(({ id, label, target, href }: any) => (
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
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
          <div className="col-span-full lg:col-span-1">
            <span className="mb-3 text-sm font-medium">{subscribe.title}</span>
            <p className="pb-4 pt-2 text-sm text-accent-400">
              {subscribe.subtitle}
            </p>
            <SubscriptionForm buttonLabel={subscribe.submitButton.label} />
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:items-start md:gap-1">
          <span className="text-sm text-accent-400 dark:text-accent-500">
            {copyright.companyName} {copyright.reserved} {copyright.copyright}
          </span>
          <nav className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
            {social.map(({ id, type, link }: any) => (
              <NavigationLink
                className="mr-4 border-r border-r-accent-800 pr-4 leading-0 last:mr-0 last:border-r-0 last:pr-0 dark:border-r-accent-200"
                key={id}
                variant={'socialNetwork'}
                size={'noPadding'}
                href={link.href}
                target={link.target}
              >
                {type === 'instagram' && (
                  <Icons.instagram className="h-5 w-5" />
                )}
                {type === 'facebook' && <Icons.facebook className="h-5 w-5" />}
                {type === 'twitter' && <Icons.twitter className="h-5 w-5" />}
                {type === 'youtube' && <Icons.youtube className="h-5 w-5" />}
              </NavigationLink>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
