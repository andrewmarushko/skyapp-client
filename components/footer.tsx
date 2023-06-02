'use client';
import React from 'react';
import dynamic from 'next/dynamic';
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
import { SocialLink } from './social-link';

const ModeToggle = dynamic(
  () => import('@/components/mode-toggle').then((mod) => mod.ModeToggle),
  { ssr: false },
);

interface FooterProps {
  footerData: FooterInterface;
  logoData: LogoInterface;
}

// TODO: add typization here
export function Footer({ footerData, logoData }: any) {
  const { href, companyName } = logoData;
  const { navigation, social, subscribe, copyright } = footerData;

  return (
    <footer className="mt-auto w-full border-t border-t-accent-700 bg-accent-800 py-10 dark:border-t-accent-200 dark:bg-accent-100">
      <div className="container flex flex-col gap-10 lg:gap-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-4">
          <div className="flex items-start justify-center md:justify-start">
            <Logo href={href} companyName={companyName} />
          </div>
          <div className="flex flex-col gap-2 lg:col-span-3 lg:flex-row lg:justify-around">
            {navigation.map(({ id, label, links }: any) => (
              <div key={id}>
                <div className="hidden lg:block">
                  <div className="pb-3">
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                  <nav className="flex flex-col">
                    {links
                      .filter((item: any) => !item.hide)
                      .map(({ id, label, target, href }: any) => (
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
                    className="border-b dark:border-b-accent-200"
                    value="item-1"
                  >
                    <AccordionTrigger>
                      <span className="text-sm font-medium">{label}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <nav className="mb-3 flex flex-col">
                        {links
                          .filter((item: any) => !item.hide)
                          .map(({ id, label, target, href }: any) => (
                            <NavigationLink
                              key={id}
                              target={target}
                              variant={'footer'}
                              size={'md'}
                              href={href}
                            >
                              {label}
                            </NavigationLink>
                          ))
                        }
                      </nav>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
          <div className="col-span-full lg:col-span-1">
            <div className="pb-3">
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
          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
            <nav className="flex h-full">
              {social.map((data: any) => (
                <SocialLink key={data.id} data={data} />
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
