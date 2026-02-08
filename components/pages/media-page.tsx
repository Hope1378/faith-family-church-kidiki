"use client"

import { useState } from "react"
import { Radio, Youtube, Play, Clock, Headphones, Video, Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { YouformEmbed } from "@/components/youform-embed"

export function MediaPage() {
  const [showNotifyForm, setShowNotifyForm] = useState(false)

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 py-12 md:py-16 lg:py-20 rounded-b-[20px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-b-[20px]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-600/20 rounded-full">
              <Play className="h-10 w-10 md:h-12 md:w-12 text-purple-700" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-3 drop-shadow-lg">
            Media Centre
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-purple-900 max-w-2xl mx-auto">
            Stay connected with Faith Family Church Kidiki through our media platforms
          </p>
        </div>
      </section>

      {/* Main Media Platforms */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Media Platforms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our growing media presence and stay updated with the latest content from our ministry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LGM Radio App Card */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 p-6 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Radio className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">LGM Radio App</h3>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-white" />
                  <span className="text-white font-semibold text-sm">Coming Soon</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-center">
                  Listen to inspiring sermons, worship music, and teachings from Latter Glory Ministries anywhere,
                  anytime. Our radio app will bring the Word of God directly to your device.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Headphones className="h-5 w-5 text-orange-500" />
                    <span className="text-sm">24/7 Gospel Broadcasting</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Play className="h-5 w-5 text-orange-500" />
                    <span className="text-sm">Live Sermons and Teachings</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Radio className="h-5 w-5 text-orange-500" />
                    <span className="text-sm">Worship Music and Praise</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* YouTube Channel Card */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-6 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Youtube className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">YouTube Channel</h3>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-white" />
                  <span className="text-white font-semibold text-sm">Coming Soon</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-center">
                  Subscribe to our YouTube channel for video sermons, worship sessions, community outreach highlights,
                  and testimonials from our Faith Family Church Kidiki ministry.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Video className="h-5 w-5 text-red-600" />
                    <span className="text-sm">Video Sermons and Teachings</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Play className="h-5 w-5 text-red-600" />
                    <span className="text-sm">Live Stream Services</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Youtube className="h-5 w-5 text-red-600" />
                    <span className="text-sm">Outreach Documentaries</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Latest Episodes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Catch up on our most recent content and never miss an inspiring message
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Placeholder Episode 1 */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <Play className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-600 font-medium text-sm">Episode Coming Soon</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">Sunday Service Sermon</h4>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </CardContent>
            </Card>

            {/* Placeholder Episode 2 */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <Headphones className="h-12 w-12 text-orange-400 mx-auto mb-2" />
                  <p className="text-orange-600 font-medium text-sm">Episode Coming Soon</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">Worship and Praise</h4>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </CardContent>
            </Card>

            {/* Placeholder Episode 3 */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <Video className="h-12 w-12 text-green-400 mx-auto mb-2" />
                  <p className="text-green-600 font-medium text-sm">Episode Coming Soon</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">Community Outreach Highlights</h4>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notification Sign Up */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Notified When We Launch</h2>
            <p className="text-blue-100 mb-8">
              Be the first to know when our LGM Radio App and YouTube Channel go live. Sign up below to receive
              updates.
            </p>
            <Button
              onClick={() => setShowNotifyForm(true)}
              className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 hover:from-blue-500 hover:via-cyan-600 hover:to-teal-600 text-white font-semibold px-8 py-6 text-lg"
            >
              <Bell className="h-5 w-5 mr-2" />
              Notify Me
            </Button>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">The Power of the Gospel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-l-4 border-blue-500 shadow-md">
                <blockquote className="text-gray-700 italic mb-3">
                  "Go into all the world and preach the gospel to all creation."
                </blockquote>
                <p className="text-blue-600 font-semibold text-sm">— Mark 16:15</p>
              </Card>

              <Card className="p-6 bg-white border-l-4 border-orange-500 shadow-md">
                <blockquote className="text-gray-700 italic mb-3">
                  "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone
                  who believes."
                </blockquote>
                <p className="text-orange-600 font-semibold text-sm">— Romans 1:16</p>
              </Card>

              <Card className="p-6 bg-white border-l-4 border-green-500 shadow-md">
                <blockquote className="text-gray-700 italic mb-3">
                  "How beautiful are the feet of those who bring good news!"
                </blockquote>
                <p className="text-green-600 font-semibold text-sm">— Romans 10:15</p>
              </Card>

              <Card className="p-6 bg-white border-l-4 border-red-500 shadow-md">
                <blockquote className="text-gray-700 italic mb-3">
                  "So faith comes from hearing, and hearing through the word of Christ."
                </blockquote>
                <p className="text-red-600 font-semibold text-sm">— Romans 10:17</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Notify Me Modal */}
      {showNotifyForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg relative">
              <button
                onClick={() => setShowNotifyForm(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <CardTitle>Get Notified</CardTitle>
              <CardDescription className="text-blue-100">
                Be the first to know when our media platforms launch
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <YouformEmbed height={600} />
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  )
}
