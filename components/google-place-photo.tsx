'use client';

import Image from 'next/image';

const GooglePhoto = ({ photo_reference, width, height }: any) => (
  <div className='flex min-w-3/4 md:min-w-1/4'>
    <Image
      className="pointer-events-none h-full w-full object-cover rounded"
      src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${photo_reference}&sensor=false&maxheight=${height}&maxwidth=${width}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      width={width}
      height={height}
      loading="lazy"
      alt={'Google Photo'}
      quality={100}
    />
  </div>
);

export default GooglePhoto;
