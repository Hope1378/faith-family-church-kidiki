"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, DollarSign, Users, BookOpen, Home, Utensils, GraduationCap, Sparkles } from "lucide-react"

export function GivePage() {
  const givingAreas = [
    {
      icon: Heart,
      title: "General Offering",
      description: "Support the day-to-day operations and ministry of Faith Family Church Kidiki.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Education Sponsorship",
      description: "Help children in our community access quality education by sponsoring school fees.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Utensils,
      title: "Feeding Programs",
      description: "Provide meals for orphans, widows, and vulnerable families in Kidiki Village.",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: Home,
      title: "Building Fund",
      description: "Contribute towards expanding our church facilities to serve more people.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Bibles & Materials",
      description: "Help us provide Bibles and teaching materials in local languages.",
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Fund outreach programs that bring hope and support to surrounding villages.",
      color: "from-purple-600 to-purple-500",
    },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-r from-[#412286] via-[#362990] to-[#2F2C92]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-sm text-white border border-white/20 mb-6">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">Partner With Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-wide text-white mb-6">
              Give Generously
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Your generous giving transforms lives, feeds the hungry, educates children, and
              spreads the Gospel across Kidiki Village and beyond.
            </p>
            <p className="text-white/80 italic text-base">
              {'"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."'}
              <span className="block mt-2 font-semibold text-white/90">- 2 Corinthians 9:7</span>
            </p>
          </div>
        </div>
      </section>

      {/* Giving Areas */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4 tracking-wide">
              Where Your Gift Goes
            </h2>
            <p className="text-lg text-gray-600">
              Every contribution makes a lasting difference in the lives of those we serve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {givingAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${area.color} mb-4 shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 tracking-wide">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Give */}
      <section className="w-full py-16 md:py-20 bg-slate-50">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4 tracking-wide">
              How to Give
            </h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <CardContent className="p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-6 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 tracking-wide">
                  Mobile Money
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Send your gift via Mobile Money to support the ministry directly.
                </p>
                <p className="text-purple-700 font-semibold">+256744914802</p>
                <p className="text-gray-500 text-sm mt-1">MTN Mobile Money</p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <CardContent className="p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 tracking-wide">
                  Contact Us
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Reach out to us directly for other ways to give or to discuss
                  sponsorship opportunities.
                </p>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md rounded-full px-8"
                  asChild
                >
                  <a href="mailto:faithfamilychurchkidiki@gmail.com">Email Us</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-16 bg-gradient-to-r from-[#412286] via-[#362990] to-[#2F2C92]">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 tracking-wide">
              Your Generosity Changes Lives
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Every gift, no matter the size, makes a profound impact on the lives of children,
              families, and the community of Kidiki Village. Thank you for your partnership in this
              mission.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
