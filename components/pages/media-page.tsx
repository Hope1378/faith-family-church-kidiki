"use client"

import { Wrench, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MediaPage() {
  return (
    <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950 min-h-[80vh] px-4">

      <Card className="max-w-2xl w-full text-center shadow-2xl border-0 bg-white">
        <CardContent className="p-10">

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
              <Wrench className="h-10 w-10 text-purple-700" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Media Page Under Maintenance
          </h1>

          <p className="text-gray-600 mb-6 text-lg">
            We are currently working on our Media Centre to bring you
            powerful sermons, worship sessions, and ministry updates.
          </p>

          <div className="flex items-center justify-center gap-2 text-purple-700 font-semibold">
            <Clock className="h-5 w-5" />
            <span>Please check back soon.</span>
          </div>

        </CardContent>
      </Card>

    </main>
  )
}
