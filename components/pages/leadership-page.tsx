"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function LeadershipPage() {
  const [open, setOpen] = useState(false)

  const leaders = [
    { name: "Apostle Denis Kasirye", title: "Spiritual Overseer" },
    { name: "Mr Suubi Anthony", title: "Branch Leader" },
    { name: "Mrs Suubi Nabasumba", title: "Leader" },
    { name: "Sharon Matovu", title: "Leader" },
  ]

  return (
    <main className="w-full bg-white text-slate-700 antialiased [font-family:var(--font-sans)]">
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">

          {/* Centered Header Card */}
          <Card className="max-w-5xl mx-auto rounded-3xl border border-purple-200 overflow-hidden text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-white to-purple-50" />
              <CardContent className="relative p-8 md:p-12 flex flex-col items-center">
                <p className="text-xs md:text-sm tracking-wide uppercase text-purple-700/80">
                  Leadership
                </p>
                <h1 className="mt-3 text-2xl md:text-4xl font-semibold text-slate-900">
                  Our Leadership Team
                </h1>
                <p className="mt-4 text-sm md:text-lg leading-relaxed text-slate-700 max-w-2xl">
                  Faith Family Church Kidiki is served by devoted leaders who guide with integrity and vision.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Leaders List */}
          <div className="max-w-5xl mx-auto mt-10 grid gap-4">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="
                  rounded-2xl
                  border-y border-slate-200
                  border-l-4 border-r-4
                  border-l-[#6D28D9]
                  border-r-[#6D28D9]
                  hover:border-l-[#4B1D95]
                  hover:border-r-[#4B1D95]
                  transition-all
                  duration-300
                "
              >
                <CardContent className="p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">
                      {leader.name}
                    </h3>
                    <span className="text-sm md:text-base text-[#6D28D9] font-medium">
                      {leader.title}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card (Opens Modal) */}
          <div className="max-w-5xl mx-auto mt-12">
            <Card
              onClick={() => setOpen(true)}
              className="rounded-3xl border border-purple-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4B1D95] via-[#6D28D9] to-[#2F2C92] group-hover:brightness-110 transition-all" />
                <CardContent className="relative p-8 md:p-12 text-white text-center">
                  <h2 className="text-lg md:text-2xl font-semibold">
                    Join us in prayer and service
                  </h2>
                  <p className="mt-3 text-sm md:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto">
                    We welcome you to worship with us and partner in building a community rooted in faith and love.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* Modal Popup */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-[95%] md:w-[80%] lg:w-[60%] h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full px-3 py-1 text-sm font-medium shadow"
            >
              Close
            </button>

            {/* Embedded YouForm */}
            <iframe
              src="https://app.youform.com/forms/zyclclgy"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </main>
  )
}
