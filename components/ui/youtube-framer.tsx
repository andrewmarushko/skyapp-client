'use client';

import { useRef } from 'react';
import Image from 'next/image';

export type Props = {
  video: string;
  width: number;
  height: number;
  containerClassName?: string;
  thumbnailClassName?: string;
  thumbnailQuality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault';
};

export default function YouTubeFrame({
  video,
  width,
  height,
  thumbnailQuality,
  thumbnailClassName = '',
  containerClassName = '',
}: Props): JSX.Element {
  const divRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    );
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.classList.add("rounded");
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`,
    );
    if (divRef.current) {
      divRef.current.innerHTML = '';
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div
      ref={divRef}
      className={`relative rounded dark:border dark:border-accent-200 aspect-4/3 flex ${containerClassName} ${!video && 'hidden'}`}
    >
      <Image
        onClick={onClick}
        loading="lazy"
        src={`https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`}
        alt="YouTube Video Thumbnail"
        width={width}
        height={height}
        className={thumbnailClassName}
      />
    </div>
  );
}
