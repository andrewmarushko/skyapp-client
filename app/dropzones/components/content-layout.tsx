'use client'
/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useFetchSWR } from '@/hooks/useFetchSWR';
import Link from 'next/link';
import Image from 'next/image';
import { handleFetchError } from '@/lib/handleFetchError';
import { fetchAllDropzones } from '@/api-service/dropzone';
import { Search } from '@/components/search';


export const DropzonesContentLayout = () => {

    const { data, error, isLoading, handleError } = useFetchSWR<any, Error>(
        `indoors`,
        () => fetchAllDropzones(),
        [],
        undefined,
        handleFetchError
    );

    // TODO: Create skeleton for card component
    if (isLoading) return <p>...LOADING...</p>

    // TODO: Create error message component
    if (error) {
        handleError(error);
        // Отобразить сообщение об ошибке или выполнить другую логику
        return <div>Cant load indoors</div>;
    }

    // TODO: Create no found component
    if (!data) return <p>No records found</p>

    return (
        <div className='container grid grid-cols-2 gap-5'>
            <div>
                <Search onChange={function (e: any): void {
                    throw new Error('Function not implemented.');
                } } />
            </div>

            <div>
                <div className='grid grid-cols-3 gap-4'>
                    {data.map(({ attributes, id }: any) => {
                        return (
                            <Link key={id} href={`dropzone/${attributes.slug}`}>
                                <Card>
                                    <Image loading='lazy' src={attributes.cover.data.attributes.formats.thumbnail.url} alt={attributes.cover.data.attributes.alternativeText} width={attributes.cover.data.attributes.formats.thumbnail.width} height={attributes.cover.data.attributes.formats.thumbnail.height} />
                                    <h1>{attributes.title}</h1>
                                    <span>Location: {attributes.location.city}, {attributes.location.country}</span>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
                <div className="mt-4 flex w-full justify-center">
                    <Button>Load More</Button>
                </div>
            </div>
        </div>
    )
}
