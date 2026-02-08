import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Award, Target } from "lucide-react"

export function LeadershipPage() {
  const leaders = [
    {
      name: "Apostle Denis Kasirye",
      title: "Spiritual Overseer",
      initials: "DK",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      name: "Mr Suubi Anthony",
      title: "Branch Leader",
      initials: "SA",
      color: "bg-gradient-to-br from-sky-600 to-sky-800",
    },
    {
      name: "Mrs Suubi Nabasumba",
      title: "Leader",
      initials: "SN",
      color: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      name: "Brother Michael Nkusi",
      title: "Leader",
      initials: "MN",
      color: "bg-gradient-to-br from-blue-700 to-blue-900",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Servant Leadership",
      description: "Leading with humility and compassion",
      color: "from-blue-500 to-sky-500",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Walking in truth and righteousness",
      color: "from-sky-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Vision",
      description: "Guiding with purpose and faith",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 relative overflow-hidden rounded-b-[20px]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-600/20 backdrop-blur-sm px-6 py-3 text-sm text-purple-900 border border-purple-400/40">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Our Leadership Team</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-900 via-purple-800 to-blue-800 bg-clip-text text-transparent leading-tight">
                Shepherding with Faith & Vision
              </h1>
              <p className="text-xl md:text-2xl text-purple-800 leading-relaxed max-w-3xl">
                Dedicated servants leading Faith Family Church Namwendwa with vision, integrity, and unwavering faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mb-4 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Leaders */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 via-sky-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Dedicated individuals who shepherd our community with passion, wisdom, and purpose.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-blue-200 hover:border-blue-400 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`${leader.color} rounded-full h-24 w-24 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-3xl">{leader.initials}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-blue-700 font-semibold text-lg">{leader.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Our Mission</h2>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Together we are building a community rooted in faith, strengthened by love, and guided by God's purpose.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
