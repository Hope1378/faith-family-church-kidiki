import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Quote, Users, BookOpen, Award, Sparkles, TrendingUp } from "lucide-react"

export function TestimonialsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section with Large Quote */}
      <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 rounded-b-[20px]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-600/20 backdrop-blur-sm px-6 py-2 text-sm text-purple-900 border border-purple-400/40 mb-6">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">Stories of Transformation</span>
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/20 backdrop-blur-sm mx-auto">
              <Quote className="h-8 w-8 text-purple-700" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
              Moments of Faith & Joy
            </h1>
            <p className="text-xl md:text-2xl text-purple-800 mb-4 font-light italic">
              "Give thanks to the Lord, for he is good; his love endures forever."
            </p>
            <p className="text-base text-purple-700 font-semibold">— Psalm 107:1</p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">50+</div>
                <p className="text-sm text-blue-700 font-medium">Lives Transformed</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 mx-auto">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">100%</div>
                <p className="text-sm text-blue-700 font-medium">God's Love</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-500 mx-auto">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">25+</div>
                <p className="text-sm text-blue-700 font-medium">Testimonies Shared</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 mx-auto">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">∞</div>
                <p className="text-sm text-blue-700 font-medium">Impact Continues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-blue-800">
              Powerful testimonies from those whose lives have been touched by God's love.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Featured Testimonial 1 */}
            <Card className="bg-white border-2 border-blue-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="rounded-full overflow-hidden h-20 w-20 ring-4 ring-blue-300 group-hover:ring-cyan-400 transition-all">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Kategere George"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Star className="h-4 w-4 fill-white text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Kategere George</h3>
                    <p className="text-blue-700 font-semibold mb-2">Community Member</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-cyan-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Quote className="h-7 w-7 text-white" />
                </div>
                <blockquote className="text-blue-900 text-lg leading-relaxed mb-6 relative">
                  <span className="text-5xl text-blue-300 absolute -top-4 -left-2">"</span>
                  <p className="relative z-10 italic">
                    Faith Family Church Namwendwa has been a blessing to me and my family. Their compassion and support
                    have transformed our lives. Through their ministry, I have experienced God's love in profound ways.
                  </p>
                </blockquote>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-md">
                  Read Full Story
                </Button>
              </CardContent>
            </Card>

            {/* Featured Testimonial 2 */}
            <Card className="bg-white border-2 border-blue-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="rounded-full overflow-hidden h-20 w-20 ring-4 ring-blue-300 group-hover:ring-cyan-400 transition-all">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Bakaki Henry"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center">
                      <Heart className="h-4 w-4 fill-white text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Bakaki Henry</h3>
                    <p className="text-blue-700 font-semibold mb-2">Receiving Shelter & Food</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-cyan-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 shadow-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <blockquote className="text-blue-900 text-lg leading-relaxed mb-6 relative">
                  <span className="text-5xl text-blue-300 absolute -top-4 -left-2">"</span>
                  <p className="relative z-10 italic">
                    I am grateful to Faith Family Church Namwendwa for supporting me with shelter and food. Their
                    kindness has given me hope and stability during difficult times. God bless this ministry for their
                    compassionate care.
                  </p>
                </blockquote>
                <Button className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white shadow-md">
                  Read Full Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Testimonials Grid */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">
              More Voices from Our Community
            </h2>
            <p className="text-lg text-blue-800">Every story is a testament to God's faithfulness and love.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full overflow-hidden h-14 w-14 flex-shrink-0 ring-2 ring-blue-200">
                    <Image
                      src="/placeholder.svg?height=56&width=56"
                      width={56}
                      height={56}
                      alt="Iduli Fred"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current text-cyan-500" />
                      ))}
                    </div>
                    <h4 className="font-bold text-blue-900">Iduli Fred</h4>
                    <p className="text-xs text-blue-700 font-medium">Receiving Care</p>
                  </div>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "The ministry has been taking care of me with love and compassion. I am thankful for their support and
                  the way they demonstrate God's love through their actions."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-gradient-to-br from-cyan-50 to-white border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full overflow-hidden h-14 w-14 flex-shrink-0 ring-2 ring-cyan-200">
                    <Image
                      src="/placeholder.svg?height=56&width=56"
                      width={56}
                      height={56}
                      alt="Nayiga Grace"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current text-cyan-500" />
                      ))}
                    </div>
                    <h4 className="font-bold text-blue-900">Nayiga Grace</h4>
                    <p className="text-xs text-blue-700 font-medium">Receiving Care</p>
                  </div>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "Faith Family Church Namwendwa has taken care of me and shown me what true Christian love looks like.
                  I am blessed by their kindness and generosity."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-gradient-to-br from-sky-50 to-white border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full overflow-hidden h-14 w-14 flex-shrink-0 ring-2 ring-sky-200">
                    <Image
                      src="/placeholder.svg?height=56&width=56"
                      width={56}
                      height={56}
                      alt="Mukisa Japheth"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current text-cyan-500" />
                      ))}
                    </div>
                    <h4 className="font-bold text-blue-900">Mukisa Japheth</h4>
                    <p className="text-xs text-blue-700 font-medium">School Fees Support</p>
                  </div>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "I am grateful that the ministry is paying my school fees. This support has given me the opportunity
                  to continue my education and build a better future. Thank you for believing in me."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full overflow-hidden h-14 w-14 flex-shrink-0 ring-2 ring-blue-200">
                    <Image
                      src="/placeholder.svg?height=56&width=56"
                      width={56}
                      height={56}
                      alt="Community Leader"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current text-cyan-500" />
                      ))}
                    </div>
                    <h4 className="font-bold text-blue-900">Community Leader</h4>
                    <p className="text-xs text-blue-700 font-medium">Namwendwa</p>
                  </div>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "This church is a pillar of hope and strength in our village. Their ministry changes lives every day."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="bg-gradient-to-br from-cyan-50 to-white border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full overflow-hidden h-14 w-14 flex-shrink-0 ring-2 ring-cyan-200">
                    <Image
                      src="/placeholder.svg?height=56&width=56"
                      width={56}
                      height={56}
                      alt="Outreach Participant"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current text-cyan-500" />
                      ))}
                    </div>
                    <h4 className="font-bold text-blue-900">Outreach Participant</h4>
                    <p className="text-xs text-blue-700 font-medium">Kidiki Village</p>
                  </div>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "The outreach programs have made a real difference. I see families thriving because of this church's
                  dedication."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="bg-gradient-to-br from-sky-50 to-white border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full overflow-hidden h-14 w-14 flex-shrink-0 ring-2 ring-sky-200">
                    <Image
                      src="/placeholder.svg?height=56&width=56"
                      width={56}
                      height={56}
                      alt="Family Supporter"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current text-cyan-500" />
                      ))}
                    </div>
                    <h4 className="font-bold text-blue-900">Family Supporter</h4>
                    <p className="text-xs text-blue-700 font-medium">Namwendwa Kidiki</p>
                  </div>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "Our family has been blessed by this church. Their ministry is truly making an eternal difference."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mx-auto">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Share Your Story</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Have you experienced God's love through Faith Family Church Namwendwa? We'd love to hear your testimony
              and celebrate how God is working in your life.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl text-lg px-8 py-6">
              Submit Your Testimony
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
