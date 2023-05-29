'use client';
import useSWR from 'swr';
import Image from 'next/image';
import GooglePhoto from './google-place-photo';
import { Card } from '@/ui/card';
import Paragraph from '@/ui/paragraph';
import Rating from '@/components/rating';

export type GooglePlacesSectionProps = {
  googlePlaceId: string;
};

export default function GooglePlacesSection({
  googlePlaceId = '',
}: GooglePlacesSectionProps) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/api/places/${googlePlaceId}`, fetcher, {
    revalidateOnMount: true,
  });
  if (!data) return <h1>LOADING.....</h1>;

  if (error) return <span> Problem to load videos</span>;

  console.log(data, 'data')

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.photos.map((item: any, index: number) => (
          <GooglePhoto
            key={index}
            photo_reference={item.photo_reference}
            width={200}
            height={200}
          />
        ))}
      </div>
      <section className="grid lg:grid-cols-3 gap-4">
        {data &&
          data.reviews?.map((review: any) => (
            <Card
              key={`review-${review.time}`}
              variant={'googlePlacesFeedbacks'}
              className='p-5 gap-4'
            >
              <div className='flex items-center gap-4'>
                <div>
                  <Image
                    src={review.profile_photo_url}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className='flex flex-col'>
                  <Paragraph>{review.author_name}</Paragraph>
                  <Paragraph paragraphStyles={'description'}>{review.relative_time_description}</Paragraph>
                </div>
              </div>
              <Rating rating = {review.rating} />
              {/* <Paragraph>Rating - {review.rating}</Paragraph> */}
              <Paragraph>{review.text}</Paragraph>
            </Card>
          ))}
      </section>
    </>
  );
}
