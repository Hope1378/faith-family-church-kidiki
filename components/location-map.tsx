"use client"

import { MapPin } from "lucide-react"

interface LocationMapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  height?: string
}

export function LocationMap({ latitude = 1.1167, longitude = 33.1833, zoom = 15, height = "400px" }: LocationMapProps) {
  // Create the OpenStreetMap embed URL
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Location Map"
        width="100%"
        height={height}
        style={{ border: 0, display: "block" }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-slate-100 opacity-0">
        <div className="animate-pulse flex flex-col items-center">
          <MapPin className="h-8 w-8 text-rose-600 mb-2" />
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bg-white/80 px-2 py-1 text-xs">
        <a
          href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=${zoom}//${latitude}/${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-600 hover:underline"
        >
          View larger map
        </a>
      </div>
    </div>
  )
}
