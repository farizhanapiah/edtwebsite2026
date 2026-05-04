type YouTubeEmbedProps = {
  videoId: string
  title?: string
  className?: string
}

export default function YouTubeEmbed({
  videoId,
  title = 'YouTube video player',
  className = '',
}: YouTubeEmbedProps) {
  return (
    <div className={`aspect-video w-full overflow-hidden border border-white/10 ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="w-full h-full border-0"
      />
    </div>
  )
}
