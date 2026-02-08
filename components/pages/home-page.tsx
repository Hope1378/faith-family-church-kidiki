"use client"

import { useState } from "react"
import Image from "next/image"
import { HeroSlider } from "@/components/hero-slider"
import { Heart, Users, BookOpen, Play, Calendar, MapPin, ChevronRight, X, CalendarDays } from "lucide-react"
import { YouformEmbed } from "@/components/youform-embed"

export function HomePage() {
  const [showGetInvolvedForm, setShowGetInvolvedForm] = useState(false)
  const [showPrayerForm, setShowPrayerForm] = useState(false)

  return (
    <div className="space-y-0">
      {/* Hero Section with Slider */}
      <section className="w-full relative">
        <HeroSlider />
      </section>

      {/* Next Upcoming Event Bar */}
      <section className="w-full bg-purple-700">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-3">
            <div className="flex items-center gap-1.5 text-white">
              <CalendarDays className="h-4 w-4 flex-shrink-0" />
              <span className="font-semibold text-xs md:text-sm">Next Upcoming Event</span>
            </div>
            <div className="text-white/90 text-xs md:text-sm">
              <span className="font-medium">Faith in Action: Mission Day</span>
              <span className="mx-1.5">-</span>
              <span>Community Outreach — Faith Family Church Kidiki | July 25, 2025 | 7:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Cards and Vision/Mission/Mandate Section */}
      <section className="py-12 bg-white">
        <div className="w-full px-3 md:px-6 lg:px-8">
          {/* Scripture Cards */}
          <div className="grid gap-4 md:grid-cols-3 mb-12">
            <div className="relative bg-purple-50/70 rounded-xl border border-purple-200 px-8 py-6 shadow-md">
              <div className="absolute top-4 right-4">
                <BookOpen className="h-5 w-5 text-purple-400" />
              </div>
              <h4 className="text-purple-700 font-serif font-semibold mb-3 tracking-wide">Psalm 127:1</h4>
              <p className="text-gray-600 text-sm leading-7">
                {'"Unless the Lord builds the house, the builders labor in vain. Unless the Lord watches over the city, the guards stand watch in vain."'}
              </p>
            </div>

            <div className="relative bg-purple-50/70 rounded-xl border border-purple-200 px-8 py-6 shadow-md">
              <div className="absolute top-4 right-4">
                <BookOpen className="h-5 w-5 text-purple-400" />
              </div>
              <h4 className="text-purple-700 font-serif font-semibold mb-3 tracking-wide">Isaiah 52:7</h4>
              <p className="text-gray-600 text-sm leading-7">
                {'"How beautiful on the mountains are the feet of those who bring good news, who proclaim peace and bring good tidings."'}
              </p>
            </div>

            <div className="relative bg-purple-50/70 rounded-xl border border-purple-200 px-8 py-6 shadow-md">
              <div className="absolute top-4 right-4">
                <BookOpen className="h-5 w-5 text-purple-400" />
              </div>
              <h4 className="text-purple-700 font-serif font-semibold mb-3 tracking-wide">Acts 2:42</h4>
              <p className="text-gray-600 text-sm leading-7">
                {'"They devoted themselves to the apostles\' teaching and to fellowship, to the breaking of bread and to prayer."'}
              </p>
            </div>
          </div>

          {/* Vision / Mission / Mandate - 2 Column Layout */}
          <div className="grid gap-8 md:grid-cols-2 items-stretch max-w-5xl mx-auto">
            {/* Left - Image */}
            <div className="relative rounded-xl overflow-hidden h-[300px] md:h-auto">
              <Image
                src="/images/suubi-preaching.jpg"
                alt="Faith Family Church Kidiki preaching"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Stacked Cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                <div className="flex">
                  <div className="w-1 bg-purple-600 flex-shrink-0" />
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-base text-gray-900 mb-2 tracking-wide">Vision</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To be a Christ-centered community growing in faith, love, and obedience to God{"'"}s Word.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                <div className="flex">
                  <div className="w-1 bg-purple-600 flex-shrink-0" />
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-base text-gray-900 mb-2 tracking-wide">Mission</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To worship God, disciple believers, and reach our community through compassionate service and the gospel of Jesus Christ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                <div className="flex">
                  <div className="w-1 bg-purple-600 flex-shrink-0" />
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-base text-gray-900 mb-2 tracking-wide">Mandate</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To strengthen families, raise faithful disciples, and bring hope to Kidiki and beyond through the power of the Holy Spirit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pills Section - Light Lavender Background */}
      <section className="w-full py-16 md:py-20 bg-purple-50">
        <div className="w-full px-3 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-purple-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Heart className="h-5 w-5 text-purple-700" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Compassion</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-purple-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Users className="h-5 w-5 text-purple-700" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Community</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-purple-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <BookOpen className="h-5 w-5 text-purple-700" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Discipleship</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-purple-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Play className="h-5 w-5 text-purple-700" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Prayer</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-purple-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Calendar className="h-5 w-5 text-purple-700" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Fellowship</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-purple-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <MapPin className="h-5 w-5 text-purple-700" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Outreach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Cards Section - 3 Column Grid */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="w-full px-4 md:px-6">
          <div className="grid w-full md:grid-cols-3 gap-6">
            {/* Faith Family Church Kidiki Card */}
            <div className="group bg-white overflow-hidden rounded-[25px] shadow-md border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden rounded-t-[25px]">
                <Image
                  src="/images/congregation.jpg"
                  alt="Faith Family Church Kidiki"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 tracking-wide">Faith Family Church Kidiki</h3>
                <p className="text-gray-600 text-sm font-normal mb-4 leading-relaxed">
                  A Christ-centered community in Kidiki Village dedicated to worship, fellowship, and serving our neighbors with love.
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center text-purple-700 font-medium text-sm hover:text-purple-800"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Church Expansion Project Card */}
            <div className="group bg-white overflow-hidden rounded-[25px] shadow-md border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden rounded-t-[25px]">
                <Image
                  src="/images/church-20and-20office-20expansion-20in-20progress.jpg"
                  alt="Church Expansion Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 tracking-wide">Church Expansion Project</h3>
                <p className="text-gray-600 text-sm font-normal mb-4 leading-relaxed">
                  Help us expand our church building to accommodate our growing congregation and community programs.
                </p>
                <a
                  href="/missions"
                  className="inline-flex items-center text-purple-700 font-medium text-sm hover:text-purple-800"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Sponsorship Program Card */}
            <div className="group bg-white overflow-hidden rounded-[25px] shadow-md border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden rounded-t-[25px]">
                <Image
                  src="/images/outreach1.jpg"
                  alt="Sponsorship Program"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 tracking-wide">Sponsorship Program</h3>
                <p className="text-gray-600 text-sm font-normal mb-4 leading-relaxed">
                  Support a child{"'"}s education and future through our sponsorship program. Transform lives with your generosity.
                </p>
                <a
                  href="/sponsorship"
                  className="inline-flex items-center text-purple-700 font-medium text-sm hover:text-purple-800"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Form Modal */}
      {showGetInvolvedForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowGetInvolvedForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Get Involved</h3>
            <p className="text-gray-600 mb-4">Send us a message and let us know how you would like to serve.</p>
            <YouformEmbed height={600} />
          </div>
        </div>
      )}

      {/* Prayer Request Form Modal */}
      {showPrayerForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowPrayerForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Request Prayer</h3>
            <p className="text-gray-600 mb-4">Share your prayer request with us.</p>
            <YouformEmbed height={600} />
          </div>
        </div>
      )}
    </div>
  )
}
