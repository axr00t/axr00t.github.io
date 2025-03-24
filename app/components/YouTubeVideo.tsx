"use client"

import { Play } from "lucide-react"

interface YouTubeVideoProps {
  title: string
  thumbnail: string
  url: string
  date: string
}

export function YouTubeVideo({ title, thumbnail, url, date }: YouTubeVideoProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg border border-white/30 hover:bg-white/5 transition-colors"
    >
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-white/70">{date}</p>
      </div>
    </a>
  )
} 