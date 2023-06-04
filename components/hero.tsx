import { FunctionComponent } from 'react';
import LargeHeading from '@/ui/large-heading';
import Paragraph from '@/ui/paragraph';

interface HeroPropsInterface {
  title: string
  subtitle: string
}

export const Hero: FunctionComponent<HeroPropsInterface> = ({
  title = '',
  subtitle = '',
}) => {
  return (
    <div className='flex flex-col gap-4 w-full items-center justify-center px-4 sm:px-6 my-12 md:my-16'>
      <LargeHeading size={"title"} headingStyles={"title"}>{title}</LargeHeading>
      <Paragraph size={"lg"} paragraphStyles={"subtitle"}>{subtitle}</Paragraph>
    </div>
  );
};
