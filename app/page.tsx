import { Button } from "@/components/ui/button";
import Page from "@/components/ui/page";

export default function Home() {
  return (
    <Page>
      <div className="mt-4 flex gap-4 justify-center">
        <Button variant={'ghost'} size={'lg'}>Ghost</Button>
        <Button size={'lg'}>Action</Button>
        <Button variant={'form'}>Submit</Button>
        <Button variant={'form'} loading></Button>
      </div>
    </Page>
  );
}
