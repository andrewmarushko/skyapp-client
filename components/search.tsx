'use client';

import { FunctionComponent, useEffect } from 'react';
import { Icons } from '@/components/icons';
import { Input } from '@/ui/input';
import { useDebounce } from '@/hooks/useDebounce';

import { makeVar } from '@apollo/client';

interface SearchInterface {
  locationParam: string;
}

export const indoorsSearchVar = makeVar('');
export const dropzonesSearchVar = makeVar('');

export const Search: FunctionComponent<SearchInterface> = ({locationParam}) => {
  // const debouncedSetSearch = useDebounce(setSearch, 1000, [search]);
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    // debouncedSetSearch(e.target.value);
    // if (!!searchValue) setCurrentPage(0);

    locationParam === 'dropzone' && dropzonesSearchVar(searchValue)
    locationParam === 'indoor' && indoorsSearchVar(searchValue)
  };

  useEffect(() => {
    indoorsSearchVar('')
    dropzonesSearchVar('')
  }, [locationParam]);

  return (
    <div className="flex h-10 w-full max-w-full items-center rounded border border-accent-700 bg-sk-light text-sm transition-colors focus-within:border-accent-400 dark:border-accent-200 dark:bg-sk-dark dark:focus-within:border-accent-600">
      <span className="relative flex h-full items-center pl-3 text-accent-500">
        <Icons.search className="h-5 w-5" />
      </span>
      <Input
        placeholder="Search..."
        variant={'search'}
        fullWidth
        type="search"
        onChange={handleSearchInput}
      />
    </div>
  );
};
