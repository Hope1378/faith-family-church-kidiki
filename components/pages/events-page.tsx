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
  status: "upcoming" | "past"
}

const events: EventItem[] = [
  {
    status: "past",
    title: "Community Outreach",
    dateLine: "November 15, 2025",
    timeLine: "9:00 AM - 4:00 PM EAT",
    locationLine: "Kidiki Village, Kamuli District",
  },
  {
    status: "upcoming",
    title: "Community Outreach",
    dateLine: "July 25, 2026",
    timeLine: "9:00 AM - 4:00 PM EAT",
    locationLine: "Kidiki Village, Kamuli District",
  },
]

function EventCard({ e }: { e: EventItem }) {
  const isUpcoming = e.status === "upcoming"
  const imageSrc = isUpcoming ? "/images/banner.png" : "/images/m11.jpg"

  return (
    <div className="w-[520px] max-w-full">

      {/* STATUS BADGE */}
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

      {/* IMAGE BOX — More Left */}
      <div className="relative h-[160px] w-[460px] -ml-12 rounded-t-[25px] overflow-hidden bg-[#2F2C92] shadow-sm">
        <Image
          src={imageSrc}
          alt={isUpcoming ? "Upcoming Event Image" : "Past Event Image"}
          fill
          sizes="460px"
          className="object-contain object-top"
          priority={isUpcoming}
        />
      </div>

      {/* CARD — Same Width + Same Shift */}
      <Card className="w-[460px] -ml-12 rounded-b-[25px] border border-gray-200 bg-gray-50 shadow-md">
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

        {/* Reduced Middle Space */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
          {pastEvent && <EventCard e={pastEvent} />}
          {upcomingEvent && <EventCard e={upcomingEvent} />}
        </div>
      </div>
    </main>
  )
}
