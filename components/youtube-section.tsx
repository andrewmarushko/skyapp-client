import YouTubeFrame from '@/ui/youtube-framer';
import MediumHeading from './ui/medium-heading';

export type YouTubeSectionProps = {
  videos: any;
};

export default function YouTubeSection({
  videos
}: YouTubeSectionProps) {
  
  return (
    <section>
      {videos &&
        <div className='flex flex-col gap-6'>
          <MediumHeading>Check the videos</MediumHeading>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {videos.map((youTubeDataItem: any) => (
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
          </div>
        </div>
      }
    </section>
  );
}
