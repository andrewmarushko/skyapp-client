'use client';
const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
import useSWR from 'swr';
import Image from 'next/image';

export type GooglePlacesSectionProps = {
  googlePlaceId: string,
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
    <section className="grid grid-cols-3 gap-4">
      {data &&
        data.reviews.map((review: any) => (
          <div
            key={`review-${review.time}`}
            className="w-72 rounded-xl p-5 shadow-lg"
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
