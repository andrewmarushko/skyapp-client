import React from 'react'

interface YoutubeProps {
  videoId: string
  width?: number
  height?: number
}

const YouTubeFrame: React.FC<YoutubeProps> = ({ videoId, width = 560, height = 315 }) => {
  const src = `https://www.youtube.com/embed/${videoId}`

  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title="YouTube video player"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
  )
}

export default YouTubeFrame
