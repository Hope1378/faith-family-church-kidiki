"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Globe, Heart, UserCheck, Baby, Users, Music, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { YouformEmbed } from "@/components/youform-embed"

type Ministry = {
  title: string
  description: string
  icon: any
  image: string
  comingSoon?: boolean
}

export function MinistriesPage() {
  const [open, setOpen] = useState(false)
  const [selectedMinistry, setSelectedMinistry] = useState<string>("")

  const ministries: Ministry[] = useMemo(
    () => [
      {
        title: "Overseas Ministry",
        description:
          "Spreading God's love globally through missions, partnerships, and support for international communities.",
        icon: Globe,
        image: "/images/logo-badge.jpeg",
        comingSoon: true,
      },

      // ✅ Outreach Ministry now shows "Connect" (comingSoon removed)
      {
        title: "Outreach Ministry",
        description:
          "Extending God’s love beyond the church walls through evangelism, community service, missions, and practical support to those in need.",
        icon: Globe,
        image: "/images/community.jpg",
        comingSoon: false,
      },

      {
        title: "Women Ministry",
        description:
          "Fostering spiritual growth, leadership, and fellowship among women through impactful events and supportive communities.",
        icon: Heart,
        image: "/images/y1.jpg",
      },
      {
        title: "Men Ministry",
        description:
          "Building strong, godly men through brotherhood, mentorship, and service opportunities.",
        icon: UserCheck,
        image: "/images/youthfellowship3.jpg",
      },
      {
        title: "Children Ministry",
        description:
          "Nurturing children in faith through fun learning, biblical teaching, and a safe, loving community.",
        icon: Baby,
        image: "/images/childrenministry1.jpg",
      },
      {
        title: "Youth Ministry",
        description:
          "Equipping young people to grow in Christ through discipleship, worship, and meaningful friendships.",
        icon: Users,
        image: "/images/youthmeeting1.jpg",
      },
      {
        title: "Music Ministry",
        description:
          "Leading the church in worship through singing, instruments, excellence, and a heart for God’s presence.",
        icon: Music,
        image: "/images/photo15.jpeg",
      },
    ],
    []
  )

  const openForm = (title: string) => {
    setSelectedMinistry(title)
    setOpen(true)
  }

  return (
    <main className="w-full bg-white text-slate-700 antialiased [font-family:var(--font-sans)]">
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {ministries.map((m, idx) => {
              const Icon = m.icon
              const isComingSoon = m.comingSoon === true

              return (
                <Card
                  key={`${m.title}-${idx}`}
                  className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full aspect-[16/9] bg-slate-200">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute bottom-4 left-4">
                      <div className="h-11 w-11 rounded-full bg-purple-700 shadow-lg flex items-center justify-center ring-4 ring-white">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-[19px] font-semibold text-slate-900 leading-tight">
                      {m.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                      {m.description}
                    </p>

                    <div className="mt-6">
                      {isComingSoon ? (
                        <Button
                          type="button"
                          disabled
                          className="rounded-full px-7 bg-purple-600/60 text-white"
                        >
                          Coming Soon
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={() => openForm(m.title)}
                          className="rounded-full px-7 bg-purple-700 hover:bg-purple-800 text-white"
                        >
                          Connect
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-purple-200 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900" />
              <div className="relative p-9 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-[21px] font-semibold leading-tight">
                    Want to serve in a ministry?
                  </h2>
                  <p className="mt-3 text-[15px] text-white/90 max-w-2xl">
                    Share your interest and we’ll connect you to the right team.
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => openForm("General Inquiry")}
                  className="rounded-full px-8 bg-white text-purple-900 hover:bg-purple-50"
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full px-3 py-1 text-sm font-medium shadow"
              aria-label="Close"
            >
              <span className="inline-flex items-center gap-2">
                <X className="h-4 w-4" />
                Close
              </span>
            </button>

            <div className="h-full flex flex-col">
              <div className="px-6 pt-6 pb-4 border-b border-slate-200">
                <p className="text-sm font-medium text-purple-700/80 font-serif">
                  Ministries
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 font-serif">
                  {selectedMinistry}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the form below and we will follow up.
                </p>
              </div>

              <div className="flex-1">
                <YouformEmbed height={900} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
