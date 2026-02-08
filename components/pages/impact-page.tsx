import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Users,
  Target,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"

export function ImpactPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-impact-hero.jpg"
            alt="African impact hero with vibrant bird of paradise flowers and umbrella trees"
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/85 to-cyan-900/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30">
                <Target className="inline h-4 w-4 mr-2" />
                Our Impact
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white drop-shadow-2xl">
                Making a Difference Together
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 drop-shadow-lg max-w-3xl mx-auto">
                "Let your light shine before others, that they may see your good deeds and glorify your Father in
                heaven." - Matthew 5:16
              </p>
              <p className="text-lg text-white/90 drop-shadow-md max-w-2xl mx-auto">
                Through the generosity of our donors and the dedication of our volunteers, we've been able to create
                meaningful change in communities around the world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 shadow-xl px-8 py-3">
                <BarChart3 className="h-5 w-5 mr-2" />
                View Full Report
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm px-8 py-3"
              >
                <Heart className="h-5 w-5 mr-2" />
                Support Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Dashboard */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-impact-stats.jpg"
            alt="African impact statistics with colorful aloe flowers and thorn trees"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/95 via-pink-50/90 to-rose-50/95" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-purple-900 mb-4 drop-shadow-sm">
              Our Global Reach
            </h2>
            <p className="text-lg text-purple-800/80">
              See the measurable impact of our ministry work across communities worldwide.
            </p>
          </div>

          {/* Main Statistics Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-none shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mx-auto shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 drop-shadow-lg">10,000+</div>
                <p className="text-emerald-100 drop-shadow-md">Families Supported</p>
                <div className="mt-3 text-xs text-emerald-200">↑ 25% from last year</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-none shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mx-auto shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 drop-shadow-lg">25</div>
                <p className="text-blue-100 drop-shadow-md">Countries Reached</p>
                <div className="mt-3 text-xs text-blue-200">Active in 5 continents</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-none shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mx-auto shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 drop-shadow-lg">$2.5M</div>
                <p className="text-purple-100 drop-shadow-md">Funds Raised</p>
                <div className="mt-3 text-xs text-purple-200">87% to programs</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-none shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mx-auto shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 drop-shadow-lg">500+</div>
                <p className="text-orange-100 drop-shadow-md">Active Volunteers</p>
                <div className="mt-3 text-xs text-orange-200">Growing monthly</div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Highlights */}
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">2024 Impact Highlights</h3>
                  <p className="text-purple-800/80 max-w-2xl mx-auto">
                    Every number represents real people whose lives have been transformed by God's love working through
                    our community.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mx-auto shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-900 mb-1">2,500</div>
                    <p className="text-emerald-800/80 text-sm">Children in School</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto shadow-lg">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-900 mb-1">150</div>
                    <p className="text-blue-800/80 text-sm">Water Wells Built</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mx-auto shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-900 mb-1">75</div>
                    <p className="text-purple-800/80 text-sm">Community Centers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Impact Areas */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-impact-programs.jpg"
            alt="African impact programs with beautiful frangipani flowers and sausage trees"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-pink-900/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">
              Program Impact Areas
            </h2>
            <p className="text-lg text-gray-100 drop-shadow-lg">
              Discover how our focused programs are creating lasting change in communities worldwide.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Education Program */}
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mx-auto shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-lg">Education Programs</h3>
                <div className="space-y-4 text-gray-100 drop-shadow-md">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>2,500 children currently enrolled</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>95% graduation rate achieved</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>500 scholarships awarded</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>50 schools built or renovated</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare Program */}
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-lg">
                  Healthcare Initiatives
                </h3>
                <div className="space-y-4 text-gray-100 drop-shadow-md">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>15,000 medical treatments provided</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>25 mobile clinics operating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>80% reduction in preventable diseases</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>200 healthcare workers trained</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    See Impact
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Water & Sanitation Program */}
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mx-auto shadow-lg">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-lg">Water & Sanitation</h3>
                <div className="space-y-4 text-gray-100 drop-shadow-md">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>150 water wells constructed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>50,000 people with clean water access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>75% reduction in waterborne illness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>300 sanitation facilities built</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    View Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories with Data */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-impact-stories.jpg"
            alt="African impact stories with vibrant sunflowers and mopane trees"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 via-amber-50/90 to-yellow-50/95" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-orange-900 mb-4 drop-shadow-sm">
              Stories of Transformation
            </h2>
            <p className="text-lg text-orange-800/80">
              Real stories from the communities we serve, showing God's love in action around the world.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Story 1 - Kenya Water Project */}
            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full overflow-hidden h-16 w-16 flex-shrink-0 ring-4 ring-orange-200">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      width={64}
                      height={64}
                      alt="Kenya Water Project"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-900">Clean Water Initiative - Kenya</h3>
                    <p className="text-orange-700/70">Transforming Rural Communities</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-700">Project Completed</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-orange-800/80 mb-4">
                    Our clean water project in rural Kenya has provided access to safe drinking water for over 2,000
                    families, reducing waterborne diseases by 80% in the region.
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-900">2,000</div>
                      <div className="text-xs text-orange-700">Families Served</div>
                    </div>
                    <div className="bg-amber-100 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-900">80%</div>
                      <div className="text-xs text-amber-700">Disease Reduction</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Data
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-700 hover:bg-orange-50 bg-transparent"
                  >
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Story 2 - Philippines Education */}
            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full overflow-hidden h-16 w-16 flex-shrink-0 ring-4 ring-amber-200">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      width={64}
                      height={64}
                      alt="Philippines Education"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">Education Support - Philippines</h3>
                    <p className="text-amber-700/70">Breaking the Cycle of Poverty</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-blue-700">Ongoing Program</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-amber-800/80 mb-4">
                    Through our scholarship program, we've helped 500+ children continue their education, with 95% of
                    recipients graduating and finding meaningful employment.
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-amber-100 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-900">500+</div>
                      <div className="text-xs text-amber-700">Scholarships</div>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-900">95%</div>
                      <div className="text-xs text-yellow-700">Graduation Rate</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white">
                    <PieChart className="h-4 w-4 mr-2" />
                    See Results
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    More Impact
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-impact-transparency.jpg"
            alt="African impact transparency with beautiful desert roses and camel thorn trees"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-blue-900/85 to-indigo-900/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">
              Financial Transparency
            </h2>
            <p className="text-lg text-gray-100 drop-shadow-lg">
              We believe in complete transparency about how your donations are used to create maximum impact.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Fund Allocation */}
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <PieChart className="h-12 w-12 text-cyan-300 mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">How We Use Your Donations</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                      <span className="text-gray-100 drop-shadow-md">Programs & Services</span>
                    </div>
                    <span className="text-white font-bold drop-shadow-lg">87%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-gray-100 drop-shadow-md">Administrative</span>
                    </div>
                    <span className="text-white font-bold drop-shadow-lg">8%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span className="text-gray-100 drop-shadow-md">Fundraising</span>
                    </div>
                    <span className="text-white font-bold drop-shadow-lg">5%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards & Recognition */}
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Award className="h-12 w-12 text-yellow-300 mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Awards & Recognition</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white drop-shadow-lg">Charity Navigator</h4>
                      <p className="text-gray-100 text-sm drop-shadow-md">4-Star Rating for Excellence</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white drop-shadow-lg">GuideStar</h4>
                      <p className="text-gray-100 text-sm drop-shadow-md">Gold Seal of Transparency</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white drop-shadow-lg">Better Business Bureau</h4>
                      <p className="text-gray-100 text-sm drop-shadow-md">A+ Accredited Charity</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                    View All Certifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-impact-cta.jpg"
            alt="African impact call to action with vibrant marigolds and leadwood trees"
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/90 via-pink-900/85 to-purple-900/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30">
                <Heart className="inline h-4 w-4 mr-2" />
                Join Our Impact
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
                Be Part of the Change
              </h2>
              <p className="text-lg text-gray-100 drop-shadow-lg max-w-3xl mx-auto">
                Every donation, every volunteer hour, and every prayer contributes to the transformative work happening
                around the world. Join us in making a lasting difference.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-pink-300 mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Make a Donation</h3>
                  <p className="text-gray-100 text-sm mb-6 drop-shadow-md">
                    Your gift directly funds programs that transform lives and communities.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white">
                    Give Today
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-cyan-300 mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Volunteer</h3>
                  <p className="text-gray-100 text-sm mb-6 drop-shadow-md">
                    Use your skills and passion to serve communities in need around the world.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                    Get Involved
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-emerald-300 mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Spread the Word</h3>
                  <p className="text-gray-100 text-sm mb-6 drop-shadow-md">
                    Share our impact stories and help others discover how they can make a difference.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                    Share Impact
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
