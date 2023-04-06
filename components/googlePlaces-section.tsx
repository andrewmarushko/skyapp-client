"use client";
const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
import useSWR from 'swr';
import Image from 'next/image';

export type GooglePlacesSectionProps = {
  googlePlaceId: string;
};

export default function GooglePlacesSection({
  googlePlaceId
}: GooglePlacesSectionProps) {
  
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${googlePlaceId}&fields=reviews&key=${GOOGLE_KEY}`, 
  fetcher,
  {revalidateOnMount: true}
  );

  return (
    <section className='grid grid-cols-3 gap-4'>
    {data && data.result?.reviews?.map((review : any) => (
      <div 
        key={`review-${review.time}`}
        className='w-72 p-5 shadow-lg rounded-xl'
      >
        <Image
          src={review.profile_photo_url}
          alt="avatar"
          width={20}
          height={20}
          className="border-radius-50"
        />
        <p>{review.relative_time_description}</p>
        <p>{review.author_name}</p>
        <p>{review.text}</p>
        <p>Rating - {review.rating}</p>
      </div>
    ))}
  </section>
  );
}

