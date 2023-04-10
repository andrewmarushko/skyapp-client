import LargeHeading from "@/components/ui/large-heading";
import Page from "@/components/ui/page";
import Paragraph from "@/components/ui/paragraph";

export default function Home() {
  return (
    <Page>
      <LargeHeading size="title">
        Beautifully designed components with Radix UI and Tailwind CSS.
      </LargeHeading>
      <Paragraph paragraphStyles="subtitle">
        Accessible and customizable components that you can copy and paste into
        your apps. Free. Open Source.{" "}
        <span className="font-semibold">
          Use this to build your own component library
        </span>
        .
      </Paragraph>
    </Page>
  );
}
