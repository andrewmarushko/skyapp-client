import { FunctionComponent } from 'react';
import LargeHeading from '@/components/ui/large-heading';
import Paragraph from '@/components/ui/paragraph';

interface HeroPropsInterface {
  title: string
  subtitle: string
}

export const Hero: FunctionComponent<HeroPropsInterface> = ({title = '', subtitle = ''}) => {
  return (
    <div className='flex flex-col gap-4 w-full items-center px-0 sm:px-6 mt-12 md:mt-16'>
      <LargeHeading size={"title"} headingStyles={"title"}>{title}</LargeHeading>
      <Paragraph size={"lg"} paragraphStyles={"subtitle"}>{subtitle}</Paragraph>
    </div>
  );
}
