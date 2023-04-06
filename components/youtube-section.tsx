"use client";
const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
import useSWR from 'swr';

import YouTubeFrame from "./ui/youtube-framer";

export type YouTubeSectionProps = {
  youtubeChannelId: string;
};

export default function YouTubeSection({
  youtubeChannelId
}: YouTubeSectionProps) {
  
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_KEY}&channelId=${youtubeChannelId}&part=snippet&order=viewCount&maxResults=9`, 
  fetcher,
  {revalidateOnMount: true}
  );
  return (
    <section className='grid grid-cols-3 gap-4'>
      {data && data.items?.map((youTubeDataItem: any) => (
        <YouTubeFrame
          key={`video-${youTubeDataItem.id.videoId}`}
          video={youTubeDataItem.id.videoId}
          width={"100%"}
          height={"100%"}
          thumbnailQuality={"hqdefault"}
          thumbnailClassName="h-full"
        />
      ))}
    </section>
  );
}

