import { NextRequest, NextResponse } from 'next/server';

const YOUTUBE_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: { channelId: string } },
) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${params.channelId}&fields=reviews&key=${YOUTUBE_KEY}`,
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
