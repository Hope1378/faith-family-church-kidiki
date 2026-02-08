"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function GalleryPage() {
  const [filterCategory, setFilterCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      src: "/images/signpost1.jpg",
      title: "Church Signpost",
      description: "Service times and contact information",
      category: "Sunday Service",
    },
    {
      src: "/images/sundayservice.jpg",
      title: "Sharing the Word",
      description: "Led by Pastor Suubi",
      category: "Sunday Service",
    },
    {
      src: "/images/sundayservice2.jpg",
      title: "Congregation",
      description: "Sunday Service",
      category: "Sunday Service",
    },
    {
      src: "/images/outreach33.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach36.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach35.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach32.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach34.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach25.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach27.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach1.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach26.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outeach1.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach29done.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach30.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach8.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach9.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach4.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach3.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/outreach24.jpg",
      title: "Community Outreach",
      description: "Sharing the love of Christ",
      category: "Community Outreach",
    },
    {
      src: "/images/childrenministry1.jpg",
      title: "Children's Ministry",
      description: "Children's Fellowship Service",
      category: "Children's Ministry",
    },
    {
      src: "/images/childrenministry2.jpg",
      title: "Children's Ministry",
      description: "Children's Fellowship Service",
      category: "Children's Ministry",
    },
    {
      src: "/images/youthfellowship2.jpg",
      title: "Youth Ministry",
      description: "Youth Fellowship Service",
      category: "Youth Ministry",
    },
    {
      src: "/images/youthmeeting1.jpg",
      title: "Youth Ministry",
      description: "Youth Fellowship Service",
      category: "Youth Ministry",
    },
    {
      src: "/images/y1.jpg",
      title: "Youth Ministry",
      description: "Youth Fellowship Service",
      category: "Youth Ministry",
    },
  ]

  const categories = ["All", ...new Set(galleryItems.map((item) => item.category))]
  const filteredItems =
    filterCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === filterCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-4 py-2 rounded-full">
              Our Stories
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-4 text-balance">
            Moments of Faith & Community
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto leading-relaxed">
            Capturing the heart of our ministry through worship, service, and fellowship
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filterCategory === category
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-purple-900 border-2 border-purple-200 hover:border-purple-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item.src)}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <div className="relative overflow-hidden h-72 bg-purple-100">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">Click to enlarge</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-bold text-purple-900 text-lg group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
                {item.description && <p className="text-sm text-purple-700 mb-3 leading-relaxed">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
