import YouTubeFrame from '@/ui/youtube-framer';

export type YouTubeSectionProps = {
  videos: any;
};

export default function YouTubeSection({
  videos
}: YouTubeSectionProps) {
  
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos &&
        videos.map((youTubeDataItem: any) => (
          <YouTubeFrame
            key={`video-${youTubeDataItem.id.videoId}`}
            video={youTubeDataItem.id.videoId}
            width={300}
            height={300}
            thumbnailQuality="hqdefault"
            thumbnailClassName="w-full rounded"
            containerClassName=''
          />
        ))}
    </section>
  );
}
