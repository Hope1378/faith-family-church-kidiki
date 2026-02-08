"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Heart,
  MapPin,
  Calendar,
  Quote,
  HeartHandshake,
  Sparkles,
  Shield,
  Flame,
  Church,
  GraduationCap,
  Hospital,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MissionsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  // UPDATED: Ongoing Missions gallery items + new images + new descriptions
  const missions = [
    {
      title: "Church Expansion Project",
      location: "Kidiki Village, Uganda",
      date: "Ongoing",
      category: "church",
      description:
        "Expanding the church facilities to create more space for worship, discipleship, children’s ministry, and community gatherings—so more souls can be reached and served.",
      image: "/images/const1.jpg",
      impact: "Building for growth",
    },
    {
      title: "Land Acquired for School Project",
      location: "Kidiki, Uganda",
      date: "Ongoing",
      category: "education",
      description:
        "Land has been secured for the upcoming school project to provide access to quality education, reduce long travel distances, and support children in the community.",
      image: "/images/land1.jpg",
      impact: "Education foundation set",
    },
    {
      title: "Land Acquired for Hospital Project",
      location: "Kidiki & Surrounding Areas",
      date: "Ongoing",
      category: "hospital",
      description:
        "Land has been acquired to support the future hospital project, bringing basic healthcare services closer to families in remote and underserved communities.",
      image: "/images/land2.jpg",
      impact: "Healthcare access vision",
    },
    {
      title: "Land View 3",
      location: "Kidiki, Uganda",
      date: "Ongoing",
      category: "land",
      description:
        "A third view of the acquired land showing the wider space and potential layout areas for development (school and hospital support infrastructure).",
      image: "/images/land3.jpg",
      impact: "Site planning underway",
    },
    {
      title: "Community Outreach Mission",
      location: "Kidiki & Nearby Communities",
      date: "Ongoing",
      category: "outreach",
      description:
        "Ongoing community outreach through prayer, visits, encouragement, and support for vulnerable families—sharing the love of Christ in practical ways.",
      image: "/images/out1.jpg",
      impact: "Serving families regularly",
    },
  ]

  // UPDATED: Category filters to match the new missions
  const filters = [
    { key: "all", label: "All" },
    { key: "church", label: "Church" },
    { key: "education", label: "School" },
    { key: "hospital", label: "Hospital" },
    { key: "land", label: "Land" },
    { key: "outreach", label: "Outreach" },
  ]

  const filteredMissions =
    activeFilter === "all" ? missions : missions.filter((m) => m.category === activeFilter)

  const scriptureCards = [
    {
      icon: HeartHandshake,
      title: "Love in Action",
      verse: "1 John 3:18",
      text: "Let us not love with words or speech but with actions and in truth.",
    },
    {
      icon: Sparkles,
      title: "Doing Good",
      verse: "Galatians 6:9",
      text: "Let us not become weary in doing good, for at the proper time we will reap a harvest.",
    },
    {
      icon: Shield,
      title: "Serving Christ",
      verse: "Matthew 25:40",
      text: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
    },
    {
      icon: Flame,
      title: "Justice & Mercy",
      verse: "Micah 6:8",
      text: "Act justly, love mercy, and walk humbly with your God.",
    },
  ]

  return (
    <div className="space-y-0">
      {/* Mission Intro Section (UNCHANGED) */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Our mission is to share the love of Christ and win souls to God&apos;s Kingdom through building churches,
              schools, and hospitals in remote and underserved areas. We are called to serve communities like Kidiki
              Village, Kamuli District, where access to spiritual guidance, education, and healthcare is limited.
            </p>

            <div className="relative mt-8 md:mt-10">
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-purple-600" />
              <div className="rounded-xl border border-slate-200 bg-white shadow-md px-6 py-8 md:px-10 md:py-10">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Faith Family Church Kidiki stands as the only church in the entire village of Kidiki, serving as a
                  beacon of hope and spiritual refuge for the community. This unique position places upon us a profound
                  responsibility to shepherd, guide, and minister to every soul in the village, ensuring that the Gospel
                  of Jesus Christ reaches all who seek His love and salvation.
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed mt-8 md:mt-10">
              This mission can only be accomplished through your kind and loving support—whether through physical
              participation in our outreach programs or through generous donations of any amount. Together, we can make
              a lasting difference in the lives of those who need it most.
            </p>

            <div className="mt-10 md:mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-blue-200 bg-blue-50 shadow-sm px-6 py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Church className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Building Churches</h3>
                <p className="text-sm text-slate-600">
                  Establishing places of worship and spiritual growth in remote communities.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm px-6 py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Building Schools</h3>
                <p className="text-sm text-slate-600">
                  Providing quality education to children in underserved areas.
                </p>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 shadow-sm px-6 py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                  <Hospital className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Building Hospitals</h3>
                <p className="text-sm text-slate-600">
                  Bringing healthcare services to communities without access to medical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Listing (UPDATED: title/subtitle removed + full-width gallery) */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900">Ongoing Missions</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter.key
                    ? "bg-purple-700 text-white shadow-lg"
                    : "bg-white text-purple-700 border-2 border-purple-200 hover:bg-purple-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* UPDATED: stretches full width (removed max-w-6xl and mx-auto), height unchanged (h-48 kept) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredMissions.map((mission, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-purple-100 shadow-lg hover:-translate-y-1 transition"
              >
                <div className="relative h-48 w-full">
                  <Image src={mission.image} alt={mission.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{mission.title}</h3>
                  <p className="text-sm text-purple-700 mb-1 flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {mission.location}
                  </p>
                  <p className="text-sm text-purple-700 mb-3 flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {mission.date}
                  </p>
                  <p className="text-sm text-purple-800 mb-3">{mission.description}</p>
                  <p className="text-sm font-semibold text-purple-600 flex items-center gap-1">
                    <Heart className="h-4 w-4" /> {mission.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Cards (KEEP) */}
      <section className="w-full bg-gradient-to-b from-white to-purple-50 border-t border-purple-100 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scriptureCards.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.verse} className="rounded-2xl border border-purple-200 bg-white px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100">
                      <Icon className="h-5 w-5 text-purple-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-purple-900">{item.title}</p>
                      <p className="text-xs text-purple-700">
                        <Quote className="inline h-3 w-3 mr-1" />
                        {item.text}
                      </p>
                      <p className="text-[11px] font-semibold text-purple-600">{item.verse}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
