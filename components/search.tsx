'use client';

import { FunctionComponent } from 'react';
import { Icons } from '@/components/icons';
import { Input } from '@/ui/input';
import { useIndoorState } from '@/store/indoors';
import { useDebounce } from '@/hooks/useDebounce';
import { gql, useApolloClient } from '@apollo/client';

interface SearchInterface {
}

export const Search: FunctionComponent<SearchInterface> = () => {
  const { search, setSearch, setCurrentPage, setData } = useIndoorState();
  const client = useApolloClient();

  const debouncedSetSearch = useDebounce(setSearch, 500, [search]);
  
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // debouncedSetSearch(e.target.value);
    // if (!!e.target.value) setCurrentPage(0);
    const searchValue = e.target.value;

    client.writeQuery({
      query: gql`
        query {
          searchValue
        }
      `,
      data: {
        searchValue: searchValue,
      },
    });
  };

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
      <span>{search}</span>
    </div>
  );
};
