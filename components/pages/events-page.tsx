"use client"

import { Calendar } from "lucide-react"

export function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center px-4 py-20">
        <div className="mb-6">
          <Calendar className="h-16 w-16 text-purple-600 mx-auto" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Events Coming Soon
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          We are preparing exciting events for our community. Check back soon for updates on upcoming gatherings and outreach programs.
        </p>
      </div>
    </div>
  )
}

/* 
  ORIGINAL EVENTS PAGE CODE - PRESERVED FOR FUTURE ACTIVATION
  
  To restore the full events page:
  1. Replace this file with the original content below
  2. Uncomment and remove this comment block

  Original imports:
  import { useState } from "react"
  import { Calendar, MapPin, Clock, Users, Gift, CheckCircle, ArrowRight, X } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
  import Image from "next/image"
  import { YouformEmbed } from "@/components/youform-embed"

  Original component had:
  - Hero Section with gradient background
  - Upcoming Event Section with event details card
  - Past Events Section showing December 2025 outreach
  - Scripture Section with 4 giving-related verses
  - Call to Action section
  - Join Event Modal with YouformEmbed
  - Support Event Modal with YouformEmbed

  Contact the developer to restore full functionality.
*/
