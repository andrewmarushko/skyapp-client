import LargeHeading from '@/components/ui/large-heading';
import Paragraph from '@/components/ui/paragraph';

const DropzonePage = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <LargeHeading size={'title'} headingStyles={'title'}>
          Find you dropzone
        </LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>
          Here you can find perfect spot for you skydiving and place to have
          fun.
        </Paragraph>
      </div>
    </div>
  );
};

export default DropzonePage;
