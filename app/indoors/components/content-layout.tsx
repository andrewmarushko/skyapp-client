'use client'
/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { Button } from '@/components/ui/button'
import { useFetchSWR } from '@/hooks/useFetchSWR';
import { fetchAllTubes } from '@/api-service/indoor';
import { handleFetchError } from '@/lib/handleFetchError';
import { Search } from '@/components/search';
import { useIndoorState } from '@/store/indoors';
import { useDebounce } from '@/hooks/useDebounce';

import { IndoorCard } from '@/components/indoor-card';

export const IndoorContentLayout = () => {
    const { search, setSearch } = useIndoorState()
    const debouncedSearch = useDebounce(search, 500); 
    const { data, error, isLoading, handleError } = useFetchSWR<any, Error>(
        `indoors`,
        () => fetchAllTubes(debouncedSearch),
        [debouncedSearch],
        undefined,
        handleFetchError
    );

    // TODO: Create error message component
    if (error) {
        handleError(error);
        // Отобразить сообщение об ошибке или выполнить другую логику
        return <div>Cant load indoors</div>;
    }

    console.log(data)

    return (
        <div className='container grid grid-cols-2 gap-5'>
            <div>
                <Search onChange={(e: any) => setSearch(e.target.value)}/>
            </div>

            <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
                {isLoading && <p>Loading</p>}
                {!data && <p>No records found</p>}
                {data && data.map(({ attributes, id }: any) => (
                    <IndoorCard key={id} data={attributes}/>
                ))}
                {data && data.length === 0 && <p>No Results</p>}
                </div>
                <div className="mt-4 flex w-full justify-center">
                    <Button>Load More</Button>
                </div>
            </div>
        </div>
    )
}
