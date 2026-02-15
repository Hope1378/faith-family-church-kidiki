"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type Testimony = {
  name: string
  text: string
  imageSrc?: string
}

const testimonies: Testimony[] = [
  {
    name: "Rebecca Muwanguzi",
    text: "Faith Family Church Kidiki stood with her in times of trial to treat her Mum and gave her an opportunity to serve God.",
  },
  {
    name: "Success Andinda",
    text: "Faith Family Church Kidiki gave me the opportunity to know God and to serve as a secretary—growing in faith and purpose.",
    imageSrc: "/images/success.png",
  },
  {
    name: "Sharon Matovu",
    text: "Faith Family Church Kidiki pays my school fees and also gave me an opportunity to serve God.",
  },
  {
    name: "Mulongo Wasswa",
    text: "I was given an opportunity to serve God and to know Him more—my faith has grown stronger.",
  },
  {
    name: "Grace Nabukeera",
    text: "Faith Family Church Kidiki pays my school fees and gave me the opportunity to know God.",
    imageSrc: "/images/grace.png",
  },
  {
    name: "Josephine Namugumya",
    text: "I was given an opportunity to know God and to serve Him—my life has been strengthened.",
  },
  {
    name: "Bakaki Henry",
    text: "Faith Family Church Kidiki gave me shelter and pays school fees for my daughter—God restored stability.",
  },
  {
    name: "Daphine Matovu",
    text: "Faith Family Church Kidiki pays my school fees and gave me an opportunity to serve God.",
  },
]

export function TestimonialsPage() {
  return (
    <main className="bg-[color:var(--footer-bg)] text-white">

      {/* TITLE CARD */}
      <section className="pt-16 pb-12">
        <div className="w-full px-6 md:px-12 flex justify-center">
          <div className="max-w-3xl w-full">
            <div className="bg-white text-purple-900 rounded-3xl shadow-2xl p-10 text-center border border-purple-200">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                Testimonies of Faith & Transformation
              </h1>
              <div className="mt-4 h-1 w-24 bg-purple-600 mx-auto rounded-full"></div>
              <p className="mt-5 text-gray-700 text-base leading-relaxed">
                Real lives changed through the love, support, and ministry of 
                Faith Family Church Kidiki.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL CARDS */}
      <section className="pb-16">
        <div className="w-full px-6 md:px-12">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {testimonies.map((t) => (
              <Card
                key={t.name}
                className="bg-white text-gray-900 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all"
              >
                <CardContent className="p-5">

                  {/* Avatar */}
                  <div className="flex justify-center">
                    <div className="relative h-24 w-24 rounded-full ring-4 ring-purple-500/30 bg-white overflow-hidden">
                      {t.imageSrc && (
                        <Image
                          src={t.imageSrc}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      )}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="mt-4 text-center font-bold text-lg text-purple-900">
                    {t.name}
                  </h3>

                  {/* Text */}
                  <p className="mt-3 text-center text-sm text-gray-700 leading-snug">
                    {t.text}
                  </p>

                </CardContent>
              </Card>
            ))}

          </div>

          <p className="mt-14 text-center text-sm text-white/90">
            “Let the redeemed of the Lord tell their story.” — Psalm 107:2
          </p>

        </div>
      </section>

    </main>
  )
}
