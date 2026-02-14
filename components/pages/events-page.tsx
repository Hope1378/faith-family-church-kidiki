"use client"

import * as React from "react"
import Image from "next/image"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type EventItem = {
  title: string
  dateLine: string
  timeLine: string
  locationLine: string
  imageSrc?: string
  imageAlt?: string
  theme: "purple" | "gold"
  status: "upcoming" | "past"
}

const events: EventItem[] = [
  {
    status: "past",
    title: "Community Outreach",
    dateLine: "November 2025",
    timeLine: "9:00 AM - 4:00 PM EAT",
    locationLine: "Kidiki Village, Kamuli District",
    theme: "purple",
  },
  {
    status: "upcoming",
    title: "Community Outreach",
    dateLine: "July 25, 2026",
    timeLine: "9:00 AM - 4:00 PM EAT",
    locationLine: "Kidiki Village, Kamuli District",
    theme: "gold",
  },
]

function svgDataUri(theme: "purple" | "gold") {
  const isPurple = theme === "purple"
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        ${
          isPurple
            ? `<stop offset="0%" stop-color="#2e1065"/>
               <stop offset="55%" stop-color="#6d28d9"/>
               <stop offset="100%" stop-color="#0ea5e9"/>`
            : `<stop offset="0%" stop-color="#111827"/>
               <stop offset="55%" stop-color="#9a3412"/>
               <stop offset="100%" stop-color="#f59e0b"/>`
        }
      </linearGradient>
    </defs>
    <rect width="1200" height="700" fill="url(#bg)"/>
  </svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

function EventCard({ e }: { e: EventItem }) {
  const src = e.imageSrc ?? svgDataUri(e.theme)
  const isUpcoming = e.status === "upcoming"

  return (
    <div style={{ width: 420 }} className="max-w-full">
      <div className="mb-3">
        <span
          className={[
            "inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wide shadow-sm text-white rounded-full",
            isUpcoming
              ? "bg-gradient-to-r from-[#4B1D95] to-[#6D28D9]"
              : "bg-black",
          ].join(" ")}
        >
          {isUpcoming ? "Upcoming Event" : "Past Event"}
        </span>
      </div>

      <div className="relative h-[200px] w-full rounded-t-[25px] overflow-hidden shadow-sm">
        <Image
          src={src}
          alt={e.imageAlt ?? e.title}
          fill
          sizes="420px"
          className="object-cover"
        />
      </div>

      <Card className="rounded-b-[25px] border border-gray-200 bg-gray-50 shadow-md">
        <CardContent className="p-6 space-y-3 text-sm text-gray-700">
          <h3 className="text-lg font-semibold text-gray-900">
            {e.title}
          </h3>

          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gray-500" />
            <span>{e.dateLine}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{e.timeLine}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{e.locationLine}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function EventsPage() {
  const pastEvent = events.find((e) => e.status === "past")
  const upcomingEvent = events.find((e) => e.status === "upcoming")

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl ml-16 md:ml-28 px-4 md:px-6 pt-20 pb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Events
        </h2>

        {/* Slightly more separation */}
        <div className="mt-6 inline-grid w-fit grid-cols-1 md:grid-cols-2 gap-5">
          {pastEvent && <EventCard e={pastEvent} />}
          {upcomingEvent && <EventCard e={upcomingEvent} />}
        </div>
      </div>
    </main>
  )
}
