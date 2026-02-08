"use client"

import Image from "next/image"
import { useState } from "react"
import { Calendar, Heart, MapPin, Church, GraduationCap, Hospital } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MissionsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const missions = [
    {
      title: "Community Food Distribution",
      location: "Kidiki Village, Uganda",
      date: "Ongoing",
      category: "outreach",
      description:
        "Providing essential food supplies to families in need across Kidiki and surrounding communities. Our team distributes rice, beans, maize flour, and other staples on a regular basis.",
      image: "/images/outreach34.jpg",
      impact: "50+ families served monthly",
    },
    {
      title: "Children's Education Support",
      location: "Kidiki, Uganda",
      date: "Ongoing",
      category: "education",
      description:
        "Supporting children with school supplies, uniforms, and tuition assistance to ensure every child has access to quality education.",
      image: "/images/outreach6.jpg",
      impact: "30+ children enrolled",
    },
    {
      title: "Sunday Worship & Discipleship",
      location: "Faith Family Church, Kidiki",
      date: "Every Sunday",
      category: "worship",
      description:
        "Weekly Sunday services bringing the community together for worship, prayer, and biblical teaching. Building strong disciples of Christ.",
      image: "/images/sundayservice.jpg",
      impact: "Growing congregation",
    },
    {
      title: "Medical Outreach",
      location: "Kidiki & Surrounding Areas",
      date: "Quarterly",
      category: "outreach",
      description:
        "Partnering with healthcare professionals to provide free medical check-ups, basic treatments, and health education to underserved communities.",
      image: "/images/outreach8.jpg",
      impact: "100+ people treated per event",
    },
    {
      title: "Youth Empowerment Program",
      location: "Kidiki, Uganda",
      date: "Bi-weekly",
      category: "education",
      description:
        "Equipping young people with life skills, vocational training, and spiritual mentorship to help them build a brighter future.",
      image: "/images/congregation.jpg",
      impact: "20+ youth participants",
    },
  ]

  const filters = [
    { key: "all", label: "All Missions" },
    { key: "outreach", label: "Outreach" },
    { key: "education", label: "Education" },
    { key: "worship", label: "Worship" },
  ]

  const filteredMissions =
    activeFilter === "all" ? missions : missions.filter((m) => m.category === activeFilter)

  return (
    <div className="space-y-0">
      {/* FIRST SECTION (matches your screenshot layout, words, and card styling) */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Our mission is to share the love of Christ and win souls to God&apos;s Kingdom through building churches,
              schools, and hospitals in remote and underserved areas. We are called to serve communities like Kidiki
              Village, Kamuli District, where access to spiritual guidance, education, and healthcare is limited.
            </p>

            {/* Purple callout card */}
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

            {/* 3 colored cards */}
            <div className="mt-10 md:mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-blue-200 bg-blue-50 shadow-sm px-6 py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Church className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Building Churches</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Establishing places of worship and spiritual growth in remote communities.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm px-6 py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Building Schools</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Providing quality education to children in underserved areas.
                </p>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 shadow-sm px-6 py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                  <Hospital className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Building Hospitals</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bringing healthcare services to communities without access to medical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Listing */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Our Active Missions</h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Each mission is designed to address specific needs within our community while sharing the love of Christ.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-purple-700 text-white shadow-lg"
                    : "bg-white text-purple-700 border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Mission Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {filteredMissions.map((mission, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image src={mission.image} alt={mission.title} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full capitalize">
                    {mission.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{mission.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-purple-600 mb-1">
                    <MapPin className="h-4 w-4" />
                    {mission.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    {mission.date}
                  </div>
                  <p className="text-purple-800 text-sm leading-relaxed mb-4">{mission.description}</p>
                  <span className="text-sm font-semibold text-purple-600 flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {mission.impact}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
