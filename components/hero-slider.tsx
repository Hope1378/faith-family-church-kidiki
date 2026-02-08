"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SlideProps {
  image: string
  title: string
  description: string
  altText: string
}

export function HeroSlider() {
  const slides: SlideProps[] = [
    {
      image: "/images/congregation.jpg",
      title: "Welcome to Faith Family Church Kidiki",
      description: "A place where love dwells",
      altText: "Church congregation gathered for Sunday service",
    },
    {
      image: "/images/outreach34.jpg",
      title: "Community Outreach",
      description: "Making a difference in the lives of those around us.",
      altText: "Community outreach with church team and members",
    },
    {
      image: "/images/outreach6.jpg",
      title: "Faith in Action",
      description: "Sharing Christ's love through compassionate service.",
      altText: "Team displaying supplies for community distribution",
    },
    {
      image: "/images/sundayservice.jpg",
      title: "Transforming Lives",
      description: "Building strong faith through worship and fellowship.",
      altText: "Pastor and church members leading worship service",
    },
    {
      image: "/images/outreach8.jpg",
      title: "Serving Communities",
      description: "Bringing hope and healing to families in need.",
      altText: "Community gathering in prayer circle with church members",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToWorship = () => {
    const worshipSection = document.getElementById("worship-section")
    if (worshipSection) {
      worshipSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full overflow-hidden h-[55vh] md:h-[70vh] max-h-[720px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top]"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            aria-label={slide.altText}
          />
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-6 max-w-[700px] mx-auto">
            <h1 className="text-[38px] md:text-[52px] font-semibold tracking-[-0.2px] leading-[1.1] mb-3 md:mb-4 drop-shadow-2xl">
              {slide.title}
            </h1>
            {index === 0 && (
              <span className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white/95 text-[13px] md:text-[14px] font-medium px-4 py-1.5 rounded-full mb-4 border border-white/20">
                Sunday Service · 9:00 AM – 12:00 PM
              </span>
            )}
            <p className="max-w-[550px] text-white/90 text-[18px] font-medium leading-[1.6] mb-5 md:mb-6 drop-shadow-lg">
              {slide.description}
            </p>
            <Button
              onClick={scrollToWorship}
              className="bg-purple-600 hover:bg-purple-700 text-white text-[16px] font-semibold px-7 py-3.5 shadow-lg rounded-xl"
            >
              {index === 0 ? "Join Us This Sunday" : "Learn More"}
            </Button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 sm:p-2 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 sm:p-2 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>

      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors backdrop-blur-sm",
              currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
