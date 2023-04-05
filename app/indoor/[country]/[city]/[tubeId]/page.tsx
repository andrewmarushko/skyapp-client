import { getIndoorsByID } from '@/api-service/indoor-api';
import { Icons } from '@/components/icons';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import { IndoorDataItemInterface } from '@/types/nav';
import Link from 'next/link';
import Image from 'next/image';

interface IndoorTubePageProps {
  params: {
    country: string,
    city: string,
    tubeId: number,
  };
}

const IndoorTubePage = async ({
  params: { country, city, tubeId },
}: IndoorTubePageProps) => {
  const data = await getIndoorsByID(country, city, tubeId);
  return (
    <Page>
      {data &&
        data.map((item: IndoorDataItemInterface) => (
          <div className='flex flex-col gap-14 w-full' key={item.id}>
          <section className='relative w-full flex flex-col gap-10' >
            <Image
              src={item.coverImage?.url}
              alt={item.coverImage?.alternativeText}
              width={item.coverImage?.width}
              height={item.coverImage?.height}
              className="w-full h-[600px] object-cover"
              priority
              quality={100}
            />
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-10 '>
                <div className='relative w-56 h-56 flex items-center shadow-lg border-radius-50'>
                  <Image
                    src={item.logo?.url}
                    alt={item.logo?.alternativeText}
                    width={item.logo?.width}
                    height={item.logo?.height}
                    className="w-full border-radius-50"
                    priority
                  />
                </div>
                <div className='flex flex-col gap-5'>
                  <LargeHeading size="lg">{item.name}</LargeHeading>
                  <div className='flex items-center gap-3'>
                    <Icons.mapPin className="h-5 w-5" />
                    <span>{item.indoorLocation.country}, {item.indoorLocation.city}, {item.indoorLocation.zipcode}, {item.indoorLocation.address}</span>
                  </div>
                </div>
              </div>

              <Link
                target="_blank"
                href={item.websiteUrl}
                className="h-20 w-24 bg-slate-800 text-white rounded-lg flex text-center items-center"
              >
                Go to website
              </Link>
            </div>
          </section>
          <section className='flex gap-20 mt-5'>
            <div className='flex basis-1/2 gap-10 flex-col '>
              <div className='flex justify-between gap-5'>
                <div className='flex gap-4'>
                  {item.socialMedia.map(({id, link, type}) => (
                    <Link href={link} key={id} target="_blank">
                      {type === 'Instagram' && <Icons.instagram className="h-9 w-9" />}
                      {type === 'Facebook' && <Icons.facebook className="h-9 w-9" />}
                      {type === 'YouTube' && <Icons.youtube className="h-9 w-9" />}
                      {type === 'Twitter' && <Icons.twitter className="h-9 w-9" />}
                    </Link>
                  ))}
                </div>
                <div>
                  {item.isStillBuilding ? 
                    <div className='flex items-center gap-2'>
                      <div className='w-10 h-10 bg-yellow-400 border-radius-50'></div>
                      <span>It is still building. The openning is soon!</span>
                    </div> :
                    <div className='flex items-center gap-2'>
                      <div className='w-10 h-10 bg-green-400 border-radius-50'></div>
                      <span>It is already opened!</span>
                    </div> 
                    
                  }
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <LargeHeading size="sm">About indoor</LargeHeading>
                <p>{item.description}</p>
              </div>
              <div className='flex flex-col gap-5'>
                <LargeHeading size="sm">Working hours</LargeHeading>
                <div>
                  {item.workingHours.map(({id, day, hours}) => (
                    <div className='flex justify-between' key={id}>
                      <span>{day?.map((item) => `${item}, `)}</span>
                      <span className='font-semibold'>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <LargeHeading size="sm">Available facilities</LargeHeading>
                <p>{item.facilities}</p>
              </div>

            </div>
            <div className='flex basis-1/2'>
              <div className='flex w-full flex-col gap-5'>
                <LargeHeading size="sm">Indoor technical characteristics</LargeHeading>
                <table className='border-2 border-black dark:border-white'>
                  <thead>
                    <tr>
                      <th>Characteristic name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Diameter</td>
                      <td>{item.diameter}</td>
                    </tr>
                    <tr>
                      <td>Speed</td>
                      <td>{item.speed}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>{item.height}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </section>
        </div>
        ))}
    </Page>
  );
};

export default IndoorTubePage;
