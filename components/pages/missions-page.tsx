"use client"

import Image from "next/image"
import {
  Heart,
  Users,
  Globe,
  MapPin,
  Calendar,
  ArrowRight,
  Church,
  GraduationCap,
  Hospital,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useMemo, useState } from "react"

export function MissionsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const missions = [
    {
      title: "Community Food Distribution",
      location: "Kidiki Village, Uganda",
      date: "Ongoing",
      category: "outreach",
      description:
        "Providing essential food supplies to families in need across Kidiki and surrounding communities.",
      image: "/images/outreach34.jpg",
      impact: "50+ families served monthly",
    },
    {
      title: "Children's Education Support",
      location: "Kidiki, Uganda",
      date: "Ongoing",
      category: "education",
      description:
        "Supporting children with school supplies, uniforms, and tuition assistance.",
      image: "/images/outreach6.jpg",
      impact: "30+ children enrolled",
    },
    {
      title: "Sunday Worship & Discipleship",
      location: "Faith Family Church, Kidiki",
      date: "Every Sunday",
      category: "worship",
      description:
        "Weekly Sunday services bringing the community together for worship and prayer.",
      image: "/images/sundayservice.jpg",
      impact: "Growing congregation",
    },
  ]

  const filters = [
    { key: "all", label: "All Missions" },
    { key: "outreach", label: "Outreach" },
    { key: "education", label: "Education" },
    { key: "worship", label: "Worship" },
  ]

  const filteredMissions = useMemo(() => {
    return activeFilter === "all"
      ? missions
      : missions.filter((m) => m.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="space-y-0">

      {/* ===== FIRST SECTION (Screenshot Section) ===== */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Our mission is to share the love of Christ and win souls to God's Kingdom through
              building churches, schools, and hospitals in remote and underserved areas. We are
              called to serve communities like Kidiki Village, Kamuli District, where access to
              spiritual guidance, education, and healthcare is limited.
            </p>

            {/* QUOTE CARD – FIXED */}
            <div className="mt-12">
              <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 px-6 md:px-12 py-10 md:py-12 max-w-4xl mx-auto">

                {/* Left purple line */}
                <span className="absolute left-0 top-6 bottom-6 w-1.5 rounded-full bg-purple-600" />

                {/* Right purple line */}
                <span className="absolute right-0 top-6 bottom-6 w-1.5 rounded-full bg-purple-600" />

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Faith Family Church Kidiki stands as the only church in the entire village of
                  Kidiki, serving as a beacon of hope and spiritual refuge for the community.
                  This unique position places upon us a profound responsibility to shepherd,
                  guide, and minister to every soul in the village, ensuring that the Gospel of
                  Jesus Christ reaches all who seek His love and salvation.
                </p>
              </div>
            </div>

            <p className="mt-12 text-sm md:text-base text-slate-600 leading-relaxed max-w-4xl mx-auto">
              This mission can only be accomplished through your kind and loving support—whether
              through physical participation in our outreach programs or through generous
              donations of any amount. Together, we can make a lasting difference.
            </p>

            {/* THREE CARDS */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-8 bg-blue-50 text-center">
                  <div className="mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-blue-600 text-white">
                    <Church className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Building Churches</h3>
                  <p className="text-sm text-slate-600">
                    Establishing places of worship and spiritual growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 bg-emerald-50 text-center">
                  <div className="mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-emerald-600 text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Building Schools</h3>
                  <p className="text-sm text-slate-600">
                    Providing quality education to children.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 bg-rose-50 text-center">
                  <div className="mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-rose-600 text-white">
                    <Hospital className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Building Hospitals</h3>
                  <p className="text-sm text-slate-600">
                    Bringing healthcare to underserved communities.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* ===== MISSIONS GRID ===== */}
      <section className="w-full py-20 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">

          <div className="flex justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold ${
                  activeFilter === filter.key
                    ? "bg-purple-700 text-white"
                    : "bg-white border border-purple-200 text-purple-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredMissions.map((mission, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={mission.image}
                    alt={mission.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{mission.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{mission.description}</p>
                  <span className="text-sm font-semibold text-purple-600 flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    {mission.impact}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="w-full py-20 bg-purple-900 text-center text-white">
        <Users className="mx-auto h-12 w-12 text-purple-300 mb-6" />
        <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="max-w-2xl mx-auto text-purple-200 mb-8">
          Volunteer, donate, or pray with us as we transform lives in Kidiki and beyond.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-purple-900">
            Volunteer With Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-white text-white">
            Support a Mission
          </Button>
        </div>
      </section>

    </div>
  )
}
