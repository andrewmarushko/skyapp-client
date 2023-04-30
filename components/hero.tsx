import LargeHeading from './ui/large-heading';
import Paragraph from './ui/paragraph';
import { FunctionComponent } from 'react';

interface HeroPropsInterface {
  title?: string;
  subtitle?: string;
}

export const Hero: FunctionComponent<HeroPropsInterface> = ({
  title = '',
  subtitle = '',
}) => {
  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <LargeHeading size={'title'} headingStyles={'title'}>
        {title}
      </LargeHeading>
      <Paragraph size={'lg'} paragraphStyles={'subtitle'}>
        {subtitle}
      </Paragraph>
    </div>
  );
};
