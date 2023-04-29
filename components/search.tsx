import { FunctionComponent } from 'react';
import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';

interface SearchInterface {
  onChange: (e: any) => void
}

export const Search: FunctionComponent<SearchInterface> = ({ onChange }: SearchInterface) => {

  return (
    <div className='bg-sk-light dark:bg-sk-dark w-full h-10 flex items-center max-w-full text-sm border rounded border-accent-800 dark:border-accent-500 focus-within:border-accent-400 dark:focus-within:border-accent-800 transition-colors'>
      <span className='relative h-full text-accent-500 flex items-center pl-3'>
        <Icons.search className='h-5 w-5' />
      </span>
      {/* TODO: Add Reset input value button from Vercel */}
      <Input placeholder='Search...' variant={'search'} fullWidth type="search" onChange={onChange}/>
    </div>
  );
};
