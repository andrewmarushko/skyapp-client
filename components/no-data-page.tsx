import { Icons } from '@/components/icons';
import Paragraph from '@/components/ui/paragraph';

export const NoDataPage = () => {
  return (
    <div className='flex flex-col justify-center items-center col-span-3 gap-4'>
      <Icons.frownIcon className="h-5 w-5" />
      <Paragraph>No search results found. Try adjusting your filters.</Paragraph>
    </div>
  );
};
