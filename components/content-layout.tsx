'use client'
/*
    This component is just a wrapper for Inddor and Dropzones content where should be a filters and result items.
    The main reason why it's neede it's becouse nextjs cant render client component inside SSR
    
    So also for optimization we make this component SSG for performance and SEO stuff.
    
    Author: @andrewmarushko
*/

import { Card } from './ui/card'
import { Button } from './ui/button'
import { useFetchSWR } from '@/hooks/useFetchSWR';

// TODO: Add types for data

const fetchIndoorsData = async (): Promise<any> => {
    const response = await fetch(`http://localhost:1337/api/indoors`);
    if (!response.ok) {
      throw new Error("Не удалось загрузить данные пользователя");
    }

    const indoorData: {data: any} = await response.json()

    return indoorData.data;
  };

  const handleFetchError = (error: Error) => {

    // TODO: Hanlde error or make some stuff with analytics
    console.error("Error request:", error);
  };


export const ContentLayout = () => {

    const { data, error, isLoading, handleError } = useFetchSWR<any, Error>(
        `indoors`,
        () => fetchIndoorsData(),
        undefined,
        handleFetchError
      );
     
    // TODO: Create skeleton for card component
    if (isLoading) return <p>...LOADING...</p>

    // TODO: Create error message component
    if (error) {
        handleError(error);
        // Отобразить сообщение об ошибке или выполнить другую логику
        return <div>Can't load indoors</div>;
      }

    // TODO: Create no found component
    if (!data) return <p>No records found</p>


    return (
        <div className='container grid grid-cols-2 gap-5'>
            <div>Filter sidebar</div>

            <div className=''>
                <div className='grid grid-cols-3 gap-4'>
                {data.map((item: any) => {
                    return (
                        <Card key={item.id}>
                            <h1>{ item.attributes.title}</h1>
                        </Card>
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
