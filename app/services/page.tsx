import LargeHeading from '@/components/ui/large-heading';
import Paragraph from '@/components/ui/paragraph';

const ServicePage = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          Want learn how to?
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>
          Here you can find services where you can make your dreams come true.
        </Paragraph>
      </div>
    </div>
  );
};

export default ServicePage;
