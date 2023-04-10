"use client";

import { useRef } from "react";
import Image from "next/image";

export type Props = {
  video: string;
  width: number ;
  height: number;
  containerClassName?: string;
  thumbnailClassName?: string;
  thumbnailQuality: "default" | "hqdefault" | "mqdefault" | "sddefault";
};

export default function YouTubeFrame({
  video,
  width,
  height,
  thumbnailQuality,
  thumbnailClassName = "",
  containerClassName = "",
}: Props): JSX.Element {
  const divRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    );
    iframe.style.width = width.toString();
    iframe.style.height = height.toString();
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`,
    );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div
      ref={divRef}
      className={`youtube-frame position-relative flex ${containerClassName}`}
    >
      <span
        onClick={onClick}
        className="ti-control-play position-absolute display-1 text-white"
      />
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
