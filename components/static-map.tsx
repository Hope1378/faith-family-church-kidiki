"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StaticMapProps {
  address: string
  height?: string
}

export function StaticMap({ address, height = "400px" }: StaticMapProps) {
  return (
    <div
      className="relative w-full rounded-lg overflow-hidden shadow-md bg-slate-100 flex flex-col items-center justify-center text-center p-6"
      style={{ height }}
    >
      <MapPin className="h-12 w-12 text-rose-600 mb-4" />
      <h3 className="text-xl font-bold mb-2">Our Location</h3>
      <p className="mb-6 max-w-md">{address}</p>
      <Button
        className="bg-rose-600 hover:bg-rose-700"
        onClick={() =>
          window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank")
        }
      >
        Get Directions
      </Button>
    </div>
  )
}
