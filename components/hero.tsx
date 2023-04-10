import { siteConfig } from '@/config/site';
import LargeHeading from './ui/large-heading';

export function Hero() {
  return (
    <div className='flex gap-4 flex-col justify-center items-center my-12'>
      <LargeHeading>All indoors</LargeHeading>
      <p className='text-2xl text tracking-tight text-accent-4'>Choose the one and fly like in the sky</p>
    </div>
  );
}
