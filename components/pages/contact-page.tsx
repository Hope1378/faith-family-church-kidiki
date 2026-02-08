"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { YouformEmbed } from "@/components/youform-embed"

export function ContactPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Compact like Latter Glory */}
      <section className="w-full py-12 relative overflow-hidden bg-gradient-to-r from-[#412286] via-[#362990] to-[#2F2C92]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-wide text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're here to answer your questions, pray with you, and welcome you to Faith Family Church Kidiki.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-white/90 shadow-lg px-8 py-5 font-semibold text-base rounded-full"
                asChild
              >
                <a href="tel:+13412406219">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-5 font-semibold text-base bg-transparent rounded-full"
                asChild
              >
                <a href="mailto:faithfamilychurchkidiki@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Two Column Layout */}
      <section className="w-full py-12 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Left Column - Contact Info Cards */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6 tracking-wide">Contact Details</h2>
              
              {/* Location Card */}
              <Card className="bg-white rounded-2xl shadow-md border border-gray-100 w-full">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-gray-900 mb-1 tracking-wide">Our Location</h3>
                    <p className="text-gray-600 text-sm">Kidiki Village, Kamuli District, Uganda</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="bg-white rounded-2xl shadow-md border border-gray-100 w-full">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-gray-900 mb-1 tracking-wide">Email Us</h3>
                    <a 
                      href="mailto:faithfamilychurchkidiki@gmail.com" 
                      className="text-purple-700 text-sm hover:text-purple-800 hover:underline"
                    >
                      faithfamilychurchkidiki@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="bg-white rounded-2xl shadow-md border border-gray-100 w-full">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                    <Phone className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-gray-900 mb-1 tracking-wide">Call Us</h3>
                    <p className="text-gray-600 text-sm">+13412406219 / +256744914802</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Card */}
              <Card className="bg-white rounded-2xl shadow-md border border-gray-100 w-full">
                <CardContent className="p-5">
                  <h3 className="font-serif font-semibold text-gray-900 mb-4 tracking-wide">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-white hover:bg-purple-800 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-white hover:bg-purple-800 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-white hover:bg-purple-800 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-white hover:bg-purple-800 transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full">
              <Card className="bg-white rounded-2xl shadow-md border border-gray-100 h-full w-full">
                <CardContent className="p-5">
                  <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6 tracking-wide">Send Us a Message</h2>
                  <YouformEmbed height={450} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-3 tracking-wide">Visit Us</h2>
            <p className="text-gray-600">Join us at Faith Family Church Kidiki.</p>
          </div>

          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.7!2d33.26525!3d0.91875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNTUnNy41Ik4gMzPCsDE1JzU0LjkiRQ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Faith Family Church Kidiki Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-3 tracking-wide">Service Times</h2>
            <p className="text-gray-600">
              We'd love to welcome you to our services. Here are our weekly gathering times:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 w-full">
            {/* Sunday Service Card */}
            <Card className="bg-white rounded-2xl shadow-md border border-gray-100 w-full">
              <CardContent className="p-5">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3 tracking-wide">Faith Family Church Kidiki</h3>
                <p className="text-purple-700 font-normal mb-2">Sunday: 9:00 AM EAT</p>
                <p className="text-gray-600 text-sm">Main service with worship and teaching.</p>
              </CardContent>
            </Card>

            {/* Wednesday Fellowship Card */}
            <Card className="bg-white rounded-2xl shadow-md border border-gray-100 w-full">
              <CardContent className="p-5">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3 tracking-wide">Wednesday Fellowship</h3>
                <p className="text-purple-700 font-normal mb-1">Bible Teaching and Prayer</p>
                <p className="text-purple-700 font-normal mb-2">7:00 PM - 9:00 PM EAT</p>
                <p className="text-gray-600 text-sm">A family-friendly midweek gathering.</p>
              </CardContent>
            </Card>

            {/* Friday Fellowship Card */}
            <Card className="bg-white rounded-2xl shadow-md border border-gray-100 w-full">
              <CardContent className="p-5">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3 tracking-wide">Friday Fellowship</h3>
                <p className="text-purple-700 font-normal mb-1">Worship and Intercession</p>
                <p className="text-purple-700 font-normal mb-2">7:00 PM - 10:00 PM EAT</p>
                <p className="text-gray-600 text-sm">A family-friendly evening of worship and prayer.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
