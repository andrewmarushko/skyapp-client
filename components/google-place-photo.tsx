'use client';

import Image from 'next/image';

const GooglePhoto = ({ photo_reference, width, height }: any) => (
  <div>
    <Image
      className="pointer-events-none h-full w-full object-cover"
      src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${photo_reference}&sensor=false&maxheight=${height}&maxwidth=${width}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      width={width}
      height={height}
      loading="lazy"
      alt={'Google Photo'}
      sizes="(max-width: 640px) 100vw,
        (max-width: 1280px) 50vw,
        (max-width: 1536px) 33vw,
        25vw"
    />
  </div>
);

export default GooglePhoto;
