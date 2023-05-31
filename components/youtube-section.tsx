import YouTubeFrame from '@/ui/youtube-framer';

export type YouTubeSectionProps = {
  videos: any;
};

export default function YouTubeSection({
  videos
}: YouTubeSectionProps) {
  
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {videos &&
        videos.map((youTubeDataItem: any) => (
          <YouTubeFrame
            key={`video-${youTubeDataItem.id.videoId}`}
            video={youTubeDataItem.id.videoId}
            width={300}
            height={300}
            thumbnailQuality="hqdefault"
          />
        ))}
    </section>
  );
}
