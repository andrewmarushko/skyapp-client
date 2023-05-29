import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: { placeId: string } },
) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${params.placeId}&fields=reviews,photos&key=${GOOGLE_KEY}`,
  );
  const data = await res.json();

  return NextResponse.json({
    reviews: data.result.reviews,
    photos: data.result.photos,
  });
}
