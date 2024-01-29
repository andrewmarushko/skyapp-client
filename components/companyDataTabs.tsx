import { NavigationLink } from '@/ui/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MediumHeading from '@/components/ui/medium-heading';
import Paragraph from '@/components/ui/paragraph';
import SmallHeading from '@/components/ui/small-heading';
import { PriceInterface } from '@/types/general';
import { PricesTypes } from 'enums/enums';

const CompanyDataTabs = ({ price_title, price_subtitle, prices, opening_hours }: any) => {
  return (
    <Tabs defaultValue="price_list" className="w-full">
      <TabsList>
        <TabsTrigger value="price_list">
          <MediumHeading className='' size={'sm'}>{price_title}</MediumHeading>
        </TabsTrigger>
        <TabsTrigger value="schedule">
          <MediumHeading size={'sm'}>Schedule</MediumHeading>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="price_list">
        {prices ? (
          <div className="flex flex-col gap-3">
            <SmallHeading>{price_subtitle}</SmallHeading>
            <div>
              {prices.price.map((item: PriceInterface, index: any) => (
                <Paragraph key={index}>
                  {PricesTypes[item.type]} -
                  <span className="font-medium">
                    {item.price} {item.currency}
                  </span>
                </Paragraph>
              ))}
            </div>
            {prices.price_link &&
              <div className="flex">
                <NavigationLink
                  variant={'black'}
                  target={prices.price_link.target}
                  href={prices.price_link.href}
                  className='basis-1/3 justify-center'
                >
                  {prices.price_link.label || 'Price'} 
                </NavigationLink>
              </div>
            }
          </div>
        ) : <Paragraph>Unfortunately, there are no prices available</Paragraph>}
      </TabsContent>
      <TabsContent value="schedule">
        {opening_hours.weekday_text ? (
          <div className="flex flex-col gap-3">
            {opening_hours.weekday_text.map((item: any, index: any) => (
              <Paragraph key={index}>
                {item}
              </Paragraph>
            ))}
          </div>
        ) : <Paragraph>Unfortunately, there is no schedule available</Paragraph>}
      </TabsContent>
    </Tabs>
  )

};

export default CompanyDataTabs;