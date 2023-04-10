import { NextRequest, NextResponse } from "next/server";

const YOUTUBE_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: { channelId: string } },
) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_KEY}&channelId=${params.channelId}&part=snippet&order=viewCount&maxResults=9`,
    { next: { revalidate: 7200 } },
  );
  const data = await res.json();

  return NextResponse.json({ items: data.items });
}
