"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, GraduationCap, Utensils, Home, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react"

export function SponsorshipPage() {
  const sponsorshipOptions = [
    {
      icon: GraduationCap,
      title: "Sponsor a Child's Education",
      description:
        "Cover school fees, uniforms, and supplies for a child in Kidiki Village. Your sponsorship opens doors to a brighter future.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Utensils,
      title: "Meal Sponsorship",
      description:
        "Provide daily meals for orphans and vulnerable children through our feeding programs. Every meal is a gift of love.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Home,
      title: "Family Support",
      description:
        "Help widows and families with essential needs like shelter, clothing, and medical care.",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: BookOpen,
      title: "Bible & Ministry Resources",
      description:
        "Sponsor Bibles, discipleship materials, and ministry tools in local languages for our growing church.",
      color: "from-sky-500 to-blue-600",
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
              <span className="font-semibold">Change a Life Today</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-wide text-white mb-6">
              Sponsorship Opportunities
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Partner with Faith Family Church Kidiki to transform the lives of children, families,
              and communities through faithful sponsorship.
            </p>
            <p className="text-white/80 italic text-base">
              {'"Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done."'}
              <span className="block mt-2 font-semibold text-white/90">- Proverbs 19:17</span>
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4 tracking-wide">
              Ways to Sponsor
            </h2>
            <p className="text-lg text-gray-600">
              Choose an area of sponsorship that resonates with your heart.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {sponsorshipOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${option.color} mb-5 shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 tracking-wide">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{option.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 md:py-20 bg-slate-50">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4 tracking-wide">
              How Sponsorship Works
            </h2>
            <p className="text-lg text-gray-600">
              A simple process to make a lasting impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-5 shadow-lg text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 tracking-wide">Choose</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Select a sponsorship area that aligns with your heart and capacity.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-5 shadow-lg text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 tracking-wide">Connect</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reach out to us via email or phone so we can match you with a specific need.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 mx-auto mb-5 shadow-lg text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 tracking-wide">Impact</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive updates on how your sponsorship is changing lives in Kidiki Village.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-4 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-900 mb-1">30+</div>
                <p className="text-sm text-purple-700 font-medium">Children Supported</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
                <p className="text-sm text-blue-700 font-medium">School Fees Covered</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 mx-auto">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-900 mb-1">500+</div>
                <p className="text-sm text-cyan-700 font-medium">Meals Provided</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-500 mx-auto">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-sky-900 mb-1">50+</div>
                <p className="text-sm text-sky-700 font-medium">Families Blessed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-gradient-to-r from-[#412286] via-[#362990] to-[#2F2C92]">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 tracking-wide">
              Become a Sponsor Today
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Your partnership makes an eternal difference. Reach out to begin your sponsorship journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-white/90 shadow-lg px-8 py-5 font-semibold text-base rounded-full"
                asChild
              >
                <a href="mailto:faithfamilychurchkidiki@gmail.com">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
