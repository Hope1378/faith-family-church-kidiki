"use client"

import { useState } from "react"
import { Globe, Heart, Users, Baby, Music, UserCheck, Mail, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { YouformEmbed } from "@/components/youform-embed"

export function MinistriesPage() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedMinistry, setSelectedMinistry] = useState("")

  const ministries = [
    {
      title: "Overseas Ministry",
      description:
        "Extending the reach of Christ's love beyond borders through international missions, partnerships, and global evangelism efforts.",
      icon: Globe,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      comingSoon: true,
    },
    {
      title: "Women's Ministry",
      description:
        "Empowering women to grow in faith, fellowship, and service. Building a community of godly women who support and encourage one another in their spiritual journey.",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      comingSoon: false,
    },
    {
      title: "Men's Ministry",
      description:
        "Equipping men to be spiritual leaders in their homes, workplaces, and communities. Fostering brotherhood and accountability through Bible study and fellowship.",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      comingSoon: false,
    },
    {
      title: "Children's Ministry",
      description:
        "Nurturing young hearts with the love of Jesus through age-appropriate teaching, creative activities, and a safe environment for spiritual growth.",
      icon: Baby,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      comingSoon: false,
    },
    {
      title: "Youth Ministry",
      description:
        "Engaging young people in dynamic worship, relevant teaching, and meaningful relationships that help them develop a strong foundation of faith.",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      comingSoon: false,
    },
    {
      title: "Music Ministry",
      description:
        "Leading the congregation in heartfelt worship through music, song, and creative expression that glorifies God and inspires believers.",
      icon: Music,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      comingSoon: false,
    },
  ]

  const handleJoinMinistry = (ministryTitle: string) => {
    setSelectedMinistry(ministryTitle)
    setShowContactForm(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Ministries Banner */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>

            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-60 h-60 bg-yellow-300 rounded-full blur-3xl transform translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-cyan-300 rounded-full blur-3xl transform translate-y-1/2"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-3 h-3 bg-white/50 rounded-full"></div>
            <div className="absolute top-1/4 right-12 w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-white/40 rounded-full"></div>

            {/* Banner Content */}
            <div className="relative z-10 py-10 md:py-14 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Side - Icons */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Center - Text */}
              <div className="text-center flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-3">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-white/90 text-sm font-medium">Serving Together in Faith</span>
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
                  Our Ministries
                </h2>
                <p className="text-white/95 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Serving God and our community through various ministries that cater to every age group and calling.
                  Find your place to serve and grow in faith.
                </p>
              </div>

              {/* Right Side - Icons */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                    <Baby className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="white" fillOpacity="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden ${ministry.bgColor} ${ministry.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {ministry.comingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Coming Soon
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${ministry.color} shadow-lg mb-4`}
                    >
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{ministry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">{ministry.description}</CardDescription>
                    {!ministry.comingSoon && (
                      <Button
                        onClick={() => handleJoinMinistry(ministry.title)}
                        className={`w-full bg-gradient-to-r ${ministry.color} text-white hover:opacity-90 font-semibold`}
                      >
                        Join This Ministry
                      </Button>
                    )}
                    {ministry.comingSoon && (
                      <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed font-semibold">
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Called to Serve</h2>
            <p className="text-gray-600">Scripture reminds us of our calling to serve one another in love.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <p className="text-gray-700 italic mb-3">
                "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for
                us to do."
              </p>
              <p className="text-blue-600 font-semibold">Ephesians 2:10</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <p className="text-gray-700 italic mb-3">
                "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's
                grace in its various forms."
              </p>
              <p className="text-green-600 font-semibold">1 Peter 4:10</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <p className="text-gray-700 italic mb-3">
                "Serve one another humbly in love. For the entire law is fulfilled in keeping this one command: 'Love
                your neighbor as yourself.'"
              </p>
              <p className="text-purple-600 font-semibold">Galatians 5:13-14</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <p className="text-gray-700 italic mb-3">
                "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
              </p>
              <p className="text-orange-600 font-semibold">Colossians 3:23</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Find Your Calling</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              God has given each of us unique gifts and talents to serve His Kingdom. Whether you are passionate about
              music, teaching children, supporting women or men in their faith journey, or reaching the youth, there is
              a place for you at Faith Family Church Kidiki.
            </p>
            <Button
              onClick={() => {
                setSelectedMinistry("General Inquiry")
                setShowContactForm(true)
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Involved Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg relative">
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <CardTitle>Join {selectedMinistry}</CardTitle>
              <CardDescription className="text-blue-100">
                Express your interest in joining this ministry
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <YouformEmbed height={600} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
