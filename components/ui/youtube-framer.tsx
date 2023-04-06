"use client";

import { useRef } from "react";

export type Props = {
  video: string;
  width: string;
  height: string;
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
}: Props) {
  const divRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div
      ref={divRef}
      className={`flex youtube-frame position-relative ${containerClassName}`}
    >
      <span
        onClick={onClick}
        className="ti-control-play position-absolute display-1 text-white"
      />
      <img
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
