'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { Icons } from '@/components/icons';
import { NavigationLink } from '@/components/ui/link';
import { Logo } from '@/components/logo';
import { FooterInterface } from '@/types/footer';
import { LogoInterface } from '@/types/logo';
import { SubscriptionForm } from '@/components/forms/subscribe-form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ModeToggle = dynamic(() =>
  import('@/components/mode-toggle').then((mod) => mod.ModeToggle), {ssr: false }
)

interface FooterProps {
  footerData: FooterInterface;
  logoData: LogoInterface;
}

export function Footer({ footerData, logoData }: FooterProps) {
  const { logo } = logoData;
  const { navigation, social, subscribe, copyright } = footerData.footer;

  return (
    <footer className="w-full border-t border-t-stone-200 dark:border-t-stone-700 py-9">
      <div className="container flex flex-col gap-4">
        <div className='grid md:grid-cols-3 lg:grid-cols-4 max-w-full gap-6'>
          <div className='flex items-start justify-center md:justify-between gap-0'>
            <Logo href={logo.href} companyName={logo.companyName} />
          </div>
          {navigation.map(({id, label, links}) => (
            <div key={id}>
              <div className='hidden md:block' >
                <span className='text-sm mb-3 font-medium'>{label}</span>
                <ul className='flex flex-col list-none'>
                  {links.map(({id, label, target, href}) => (
                    <li key={id} className='text-accent-400 py-2'>
                      <NavigationLink target={target} variant={'footer'} size={'sm'} href={href}>{label}</NavigationLink>
                    </li>
                  ))}
                </ul>
              </div>
              <Accordion className='md:hidden' type="single" collapsible>
                <AccordionItem className='dark:border-b-accent-200' value="item-1">
                  <AccordionTrigger className='font-normal'>
                  <span className='text-sm mb-3 font-medium'>{label}</span>               
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className={`max-h-60vh text-base overflow-y-auto`}>
                      <div className='overflow-y-hidden'>
                        <ul className='mb-3'>
                        {links.map(({id, label, target, href}) => (
                          <li key={id} className='text-accent-400 py-2'>
                            <NavigationLink target={target} variant={'footer'} size={'sm'} href={href}>{label}</NavigationLink>
                          </li>
                        ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
          <div className='col-span-full lg:col-span-1'>
            <span className='text-sm mb-3 font-medium'>{subscribe.title}</span>
            <p className='text-sm text-accent-400 pt-2 pb-4'>{subscribe.subtitle}</p>
            <SubscriptionForm buttonLabel={subscribe.submitButton.label} />
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start justify-between mt-6 gap-4 md:gap-1'>
          <span className='text-accent-400 dark:text-accent-500 text-sm'>{copyright.companyName} {copyright.reserved} {copyright.copyright}</span>
          <div className='flex w-full flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
            <ul className='flex'>
              {social.map(({id, type, link}) => (
                <li className='pr-4 mr-4 border-r border-r-accent-800 dark:border-r-accent-200 leading-0 last:pr-0 last:mr-0 last:border-r-0' key={id}>
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
      </div>
    </footer>
  );
}
