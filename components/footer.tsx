"use client"

import Image from "next/image"
import { useState } from "react"
import { YouformEmbed } from "@/components/youform-embed"
import { Mail, Phone, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false)

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-950">
      <div className="w-full px-6 md:px-8 lg:px-12 py-12 md:py-16 relative z-10">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Column - Logo and Info */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden">
                <Image src="/images/logo-badge.jpeg" alt="Faith Family Church Kidiki Logo" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">Faith Family Church Kidiki</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">
              Since January 2024, FFC Kidiki has been preparing believers for Christ&apos;s return through discipleship and community outreaches.
            </p>
            <Button
              onClick={() => setShowNewsletterForm(true)}
              className="bg-white text-purple-900 hover:bg-white/90 font-medium px-6"
            >
              Join Our Mailing List
            </Button>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Faith Family Church, Kidiki, Uganda Kaliro Road
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/70 flex-shrink-0" />
                <span className="text-white/80 text-sm">faithfamilychurchkidiki@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/70 flex-shrink-0" />
                <span className="text-white/80 text-sm">+13412406219 / +256744914802</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6 text-left">
          <p className="text-white/70 text-sm">
            © 2024 Faith Family Church Kidiki. All rights reserved.
          </p>
        </div>
      </div>

      {/* Newsletter Form Modal */}
      {showNewsletterForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowNewsletterForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">Join Our Mailing List</h3>
            <p className="text-gray-600 mb-4">Stay updated with our ministry news and events.</p>
            <YouformEmbed height={600} />
          </div>
        </div>
      )}
    </footer>
  )
}
