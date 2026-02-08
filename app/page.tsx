"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Bird, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HomePage } from "@/components/pages/home-page"
import { GalleryPage } from "@/components/pages/gallery-page"
import { TestimonialsPage } from "@/components/pages/testimonials-page"
import { GivePage } from "@/components/pages/give-page"
import { ContactPage } from "@/components/pages/contact-page"
import { LeadershipPage } from "@/components/pages/leadership-page"
import { AboutPage } from "@/components/pages/about-page"
import { MissionsPage } from "@/components/pages/missions-page"
import { EventsPage } from "@/components/pages/events-page"
import { MediaPage } from "@/components/pages/media-page"
import { MinistriesPage } from "@/components/pages/ministries-page"
import { SponsorshipPage } from "@/components/pages/sponsorship-page"
import { Footer } from "@/components/footer"
import Image from "next/image"

type PageType =
  | "home"
  | "about"
  | "missions"
  | "events"
  | "gallery"
  | "testimonials"
  | "give"
  | "contact"
  | "leadership"
  | "media"
  | "ministries"
  | "sponsorship"

const validPages: PageType[] = ["home", "about", "missions", "events", "gallery", "testimonials", "give", "contact", "leadership", "media", "ministries", "sponsorship"]

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false)
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false)
  const [mobileEventsDropdownOpen, setMobileEventsDropdownOpen] = useState(false)

  // Read page from URL hash on initial load and when hash changes
  useEffect(() => {
    const getPageFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && validPages.includes(hash as PageType)) {
        return hash as PageType
      }
      return "home"
    }

    // Set initial page from URL hash
    setCurrentPage(getPageFromHash())

    // Listen for hash changes (browser back/forward buttons)
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "missions":
        return <MissionsPage />
      case "events":
        return <EventsPage />
      case "gallery":
        return <GalleryPage />
      case "testimonials":
        return <TestimonialsPage />
      case "give":
        return <GivePage />
      case "contact":
        return <ContactPage />
      case "leadership":
        return <LeadershipPage />
      case "media":
        return <MediaPage />
      case "ministries":
        return <MinistriesPage />
      case "sponsorship":
        return <SponsorshipPage />
      default:
        return <HomePage />
    }
  }

  const handleNavigation = (page: PageType) => {
    // Update URL hash for persistence
    window.location.hash = page === "home" ? "" : page
    setCurrentPage(page)
    setMobileMenuOpen(false)
    setAboutDropdownOpen(false)
    setEventsDropdownOpen(false)
    setMobileAboutDropdownOpen(false)
    setMobileEventsDropdownOpen(false)
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-1.5 px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-2 ml-[100px] sm:ml-[120px] md:ml-[140px] lg:ml-[160px]">
            <Bird className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
            <p className="text-white text-[9px] sm:text-sm md:text-base font-medium leading-tight">
              <span className="sm:hidden">
                This house will be filled with
                <br />a greater magnificence than it once knew.
              </span>
              <span className="hidden sm:inline">
                This house will be filled with a greater magnificence than it once knew.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0 mr-[60px] sm:mr-[80px] md:mr-[100px] lg:mr-[140px]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-3 w-3 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-3 w-3 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-3 w-3 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="h-3 w-3 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 shadow-xl border-b border-purple-950">
        <div className="relative flex h-[80px] items-center px-6 md:px-10 lg:px-16">
          {/* Logo - Flush Left */}
          <button
            onClick={() => handleNavigation("home")}
            className="absolute left-6 md:left-10 lg:left-16 flex items-center hover:opacity-90 transition-all duration-300 flex-shrink-0 gap-2 lg:gap-3"
          >
            <div className="relative h-[38px] w-[38px] sm:h-[40px] sm:w-[40px] md:h-[44px] md:w-[44px] lg:h-[48px] lg:w-[48px] flex-shrink-0 rounded-full overflow-hidden ring-2 ring-white/30">
              <Image src="/images/logo-icon.jpeg" alt="Faith Family Church Kidiki Logo" fill className="object-cover" priority />
            </div>
            <div className="hidden sm:flex flex-col leading-none gap-0.5">
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-white tracking-wide uppercase">
                Faith Family
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-normal text-white/60 tracking-wider uppercase">
                Church Kidiki
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1 mx-auto">
            <button
              onClick={() => handleNavigation("home")}
              className={`text-[14px] font-normal tracking-[0.2px] transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg ${
                currentPage === "home"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`text-[14px] font-normal tracking-[0.2px] transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg flex items-center gap-1 ${
                  currentPage === "about" || currentPage === "leadership" || currentPage === "ministries"
                    ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                    : "text-white hover:text-purple-100 hover:bg-purple-600"
                }`}
              >
                About Us
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-48 bg-purple-800 rounded-lg shadow-xl border border-purple-700 overflow-hidden">
                    <button
                      onClick={() => handleNavigation("about")}
                      className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        currentPage === "about"
                          ? "text-white bg-purple-900"
                          : "text-white hover:text-purple-100 hover:bg-purple-700"
                      }`}
                    >
                      Who We Are
                    </button>
                    <button
                      onClick={() => handleNavigation("leadership")}
                      className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        currentPage === "leadership"
                          ? "text-white bg-purple-900"
                          : "text-white hover:text-purple-100 hover:bg-purple-700"
                      }`}
                    >
                      Our Leaders
                    </button>
                    <button
                      onClick={() => handleNavigation("ministries")}
                      className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        currentPage === "ministries"
                          ? "text-white bg-purple-900"
                          : "text-white hover:text-purple-100 hover:bg-purple-700"
                      }`}
                    >
                      Ministries
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("missions")}
              className={`text-[14px] font-normal tracking-[0.2px] transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg ${
                currentPage === "missions"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Missions
            </button>

            <div
              className="relative"
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
            >
              <button
                className={`text-[14px] font-normal tracking-[0.2px] transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg flex items-center gap-1 ${
                  currentPage === "events" || currentPage === "testimonials" || currentPage === "gallery"
                    ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                    : "text-white hover:text-purple-100 hover:bg-purple-600"
                }`}
              >
                Events
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${eventsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {eventsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-48 bg-purple-800 rounded-lg shadow-xl border border-purple-700 overflow-hidden">
                    <button
                      onClick={() => handleNavigation("events")}
                      className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        currentPage === "events"
                          ? "text-white bg-purple-900"
                          : "text-white hover:text-purple-100 hover:bg-purple-700"
                      }`}
                    >
                      Our Events
                    </button>
                    <button
                      onClick={() => handleNavigation("testimonials")}
                      className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        currentPage === "testimonials"
                          ? "text-white bg-purple-900"
                          : "text-white hover:text-purple-100 hover:bg-purple-700"
                      }`}
                    >
                      Testimonials
                    </button>
                    <button
                      onClick={() => handleNavigation("gallery")}
                      className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        currentPage === "gallery"
                          ? "text-white bg-purple-900"
                          : "text-white hover:text-purple-100 hover:bg-purple-700"
                      }`}
                    >
                      Gallery
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("media")}
              className={`text-[14px] font-normal tracking-[0.2px] transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg ${
                currentPage === "media"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Media
            </button>

            <button
              onClick={() => handleNavigation("sponsorship")}
              className={`text-[14px] font-normal tracking-[0.2px] transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg ${
                currentPage === "sponsorship"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Sponsorship
            </button>

            <button
              onClick={() => handleNavigation("contact")}
              className={`text-[14px] font-normal tracking-[0.2px] transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg ${
                currentPage === "contact"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Contact
            </button>

            {/* Give Now Button - Inside Nav */}
            <Button
              onClick={() => handleNavigation("give")}
              className="bg-white text-purple-800 hover:bg-purple-100 hover:text-purple-900 text-[14px] font-semibold px-5 py-2 ml-2 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-300 rounded-lg"
            >
              Give Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white border-purple-600/70 hover:bg-purple-600 p-2 h-8 w-8 sm:h-9 sm:w-9 bg-transparent"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-purple-600/30 py-3 sm:py-4 space-y-2 bg-gradient-to-b from-purple-800 via-purple-700 to-purple-800 animate-fadeIn">
            <button
              onClick={() => handleNavigation("home")}
              className={`block w-full text-left px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                currentPage === "home"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Home
            </button>

            <div className="h-px bg-purple-600/30 my-2" />

            <div>
              <button
                onClick={() => setMobileAboutDropdownOpen(!mobileAboutDropdownOpen)}
                className={`flex w-full items-center justify-between text-left px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                  currentPage === "about" || currentPage === "leadership" || currentPage === "ministries"
                    ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                    : "text-white hover:text-purple-100 hover:bg-purple-600"
                }`}
              >
                About Us
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileAboutDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileAboutDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-purple-500 pl-4">
                  <button
                    onClick={() => handleNavigation("about")}
                    className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      currentPage === "about"
                        ? "text-white bg-purple-900"
                        : "text-purple-100 hover:text-white hover:bg-purple-600"
                    }`}
                  >
                    Who We Are
                  </button>
                  <button
                    onClick={() => handleNavigation("leadership")}
                    className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      currentPage === "leadership"
                        ? "text-white bg-purple-900"
                        : "text-purple-100 hover:text-white hover:bg-purple-600"
                    }`}
                  >
                    Our Leaders
                  </button>
                  <button
                    onClick={() => handleNavigation("ministries")}
                    className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      currentPage === "ministries"
                        ? "text-white bg-purple-900"
                        : "text-purple-100 hover:text-white hover:bg-purple-600"
                    }`}
                  >
                    Ministries
                  </button>
                </div>
              )}
            </div>

            <div className="h-px bg-purple-600/30 my-2" />

            <button
              onClick={() => handleNavigation("missions")}
              className={`block w-full text-left px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                currentPage === "missions"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Missions
            </button>

            <div className="h-px bg-purple-600/30 my-2" />

            <div>
              <button
                onClick={() => setMobileEventsDropdownOpen(!mobileEventsDropdownOpen)}
                className={`flex w-full items-center justify-between text-left px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                  currentPage === "events" || currentPage === "testimonials" || currentPage === "gallery"
                    ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                    : "text-white hover:text-purple-100 hover:bg-purple-600"
                }`}
              >
                Events
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileEventsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileEventsDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-purple-500 pl-4">
                  <button
                    onClick={() => handleNavigation("events")}
                    className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      currentPage === "events"
                        ? "text-white bg-purple-900"
                        : "text-purple-100 hover:text-white hover:bg-purple-600"
                    }`}
                  >
                    Our Events
                  </button>
                  <button
                    onClick={() => handleNavigation("testimonials")}
                    className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      currentPage === "testimonials"
                        ? "text-white bg-purple-900"
                        : "text-purple-100 hover:text-white hover:bg-purple-600"
                    }`}
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => handleNavigation("gallery")}
                    className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      currentPage === "gallery"
                        ? "text-white bg-purple-900"
                        : "text-purple-100 hover:text-white hover:bg-purple-600"
                    }`}
                  >
                    Gallery
                  </button>
                </div>
              )}
            </div>

            <div className="h-px bg-purple-600/30 my-2" />

            <button
              onClick={() => handleNavigation("media")}
              className={`block w-full text-left px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                currentPage === "media"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Media
            </button>

            <div className="h-px bg-purple-600/30 my-2" />

            <button
              onClick={() => handleNavigation("sponsorship")}
              className={`block w-full text-left px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                currentPage === "sponsorship"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Sponsorship
            </button>

            <div className="h-px bg-purple-600/30 my-2" />

            <button
              onClick={() => handleNavigation("contact")}
              className={`block w-full text-left px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                currentPage === "contact"
                  ? "text-white bg-purple-900 backdrop-blur-sm shadow-md"
                  : "text-white hover:text-purple-100 hover:bg-purple-600"
              }`}
            >
              Contact
            </button>

            <div className="h-px bg-purple-600/30 my-2" />

            <Button
              onClick={() => handleNavigation("give")}
              className="w-full bg-white text-purple-800 hover:bg-purple-100 hover:text-purple-900 font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-300"
            >
              Give Now
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">{renderPage()}</main>

      <Footer />
    </div>
  )
}
