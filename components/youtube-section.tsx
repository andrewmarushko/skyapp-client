'use client';
import useSWR from 'swr';

import YouTubeFrame from './ui/youtube-framer';

export type YouTubeSectionProps = {
  youtubeChannelId: string,
};

export default function YouTubeSection({
  youtubeChannelId,
}: YouTubeSectionProps) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/api/youtube/${youtubeChannelId}`, fetcher, {
    revalidateOnMount: true,
  });

  if (!data) return <h1>LOADING.....</h1>;

  if (error) return <span> Problem to load videos</span>;

  console.log(data, 'data')

  return (
    <section className="grid grid-cols-3 gap-4">
      {data &&
        data.items?.map((youTubeDataItem: any) => (
          <YouTubeFrame
            key={`video-${youTubeDataItem.id.videoId}`}
            videoId={youTubeDataItem.id.videoId}
            width={100}
            height={100}
          />
        ))}
    </section>
  );
}
