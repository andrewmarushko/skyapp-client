import LargeHeading from "@/components/ui/large-heading";
import Page from "@/components/ui/page";
import Paragraph from "@/components/ui/paragraph";

export default function Home() {
  return (
    <Page>
      <div className='flex flex-col items-center w-full'>
        <LargeHeading size={'title'} headingStyles={'title'}>Home page</LargeHeading>
        <Paragraph paragraphStyles={'subtitle'}>Home Page</Paragraph>
      </div>
    </Page>
  );
}
