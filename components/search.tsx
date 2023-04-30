'use client';

import { FunctionComponent } from 'react';
import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';

interface SearchInterface {
  onChange: (e: any) => void;
}

export const Search = ({ onChange }: SearchInterface) => {
  return (
    <div className="flex h-10 w-full max-w-full items-center rounded border border-accent-800 bg-sk-light text-sm transition-colors focus-within:border-accent-400 dark:border-accent-500 dark:bg-sk-dark dark:focus-within:border-accent-800">
      <span className="relative flex h-full items-center pl-3 text-accent-500">
        <Icons.search className="h-5 w-5" />
      </span>
      {/* TODO: Add Reset input value button from Vercel */}
      <Input
        placeholder="Search..."
        variant={'search'}
        fullWidth
        type="search"
        onChange={onChange}
      />
    </div>
  );
};
