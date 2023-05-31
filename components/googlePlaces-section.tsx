'use client';
import useSWR from 'swr';
import GooglePhoto from './google-place-photo';
import { Card } from '@/ui/card';
import Paragraph from '@/ui/paragraph';
import Rating from '@/components/rating';
import MediumHeading from '@/components/ui/medium-heading';
import { Avatar, AvatarImage } from '@/ui/avatar';
import { Slider } from '@/ui/slider';

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

  return (
    <>
      {data.photos.length>0 &&
        <Slider variant={'googlePhotos'}>
          {data.photos.map((item: any, index: number) => (
            <GooglePhoto
              key={index}
              photo_reference={item.photo_reference}
              width={1000}
              height={1000}
            />
          ))}
        </Slider>
      }
      <section className="flex flex-col gap-6">
        <MediumHeading>Customer Feedback</MediumHeading>
        {data.reviews.length>0 ?
          <Slider variant={'feedbacks'}>
            {data.reviews.map((review: any) => (
              <Card
                key={`review-${review.time}`}
                variant={'googlePlacesFeedbacks'}
                className='p-5 gap-4 min-w-3/4 sm:min-w-0'
              >
                <div className='flex items-center gap-4'>
                  <Avatar>
                    <AvatarImage 
                      src={review.profile_photo_url}
                      alt="avatar"
                    />
                  </Avatar>
                  <div className='flex flex-col'>
                    <Paragraph>{review.author_name}</Paragraph>
                    <Paragraph paragraphStyles={'description'}>{review.relative_time_description}</Paragraph>
                  </div>
                </div>
                <Rating rating={review.rating} />
                <Paragraph>{review.text}</Paragraph>
              </Card>
            ))}
          </Slider>
          :
          <Paragraph>There are no feedbacks for now</Paragraph>
        }
      </section>
    </>
  );
}
