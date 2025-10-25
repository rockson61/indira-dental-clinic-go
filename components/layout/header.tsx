"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, Phone, Moon, Sun, X, MapPin, Calendar, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/")

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:7010650063" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-3.5 w-3.5" />
                <span>7010650063</span>
              </a>
              <a
                href="mailto:rockson68@hotmail.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>rockson68@hotmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>Gandhi Nagar, Vellore</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" />
                <span>Mon-Sat: 10am-8pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Indira Dental
                </div>
                <div className="text-xs text-muted-foreground">Excellence in Dental Care</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === "/"
                    ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                    : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600",
                )}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={cn(
                    "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive("/services")
                      ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600",
                  )}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden">
                    <div className="p-2 space-y-1">
                      <Link
                        href="/services/general-dentistry"
                        className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors group/item"
                      >
                        <div className="font-medium group-hover/item:text-teal-600">General Dentistry</div>
                        <div className="text-xs text-muted-foreground">Routine checkups & cleanings</div>
                      </Link>
                      <Link
                        href="/services/cosmetic-dentistry"
                        className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors group/item"
                      >
                        <div className="font-medium group-hover/item:text-teal-600">Cosmetic Dentistry</div>
                        <div className="text-xs text-muted-foreground">Whitening, veneers & more</div>
                      </Link>
                      <Link
                        href="/services/orthodontics"
                        className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors group/item"
                      >
                        <div className="font-medium group-hover/item:text-teal-600">Orthodontics</div>
                        <div className="text-xs text-muted-foreground">Braces & aligners</div>
                      </Link>
                      <Link
                        href="/services/root-canal-treatment"
                        className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors group/item"
                      >
                        <div className="font-medium group-hover/item:text-teal-600">Root Canal Treatment</div>
                        <div className="text-xs text-muted-foreground">Painless RCT procedures</div>
                      </Link>
                      <Link
                        href="/services/dental-implants"
                        className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors group/item"
                      >
                        <div className="font-medium group-hover/item:text-teal-600">Dental Implants</div>
                        <div className="text-xs text-muted-foreground">Permanent tooth replacement</div>
                      </Link>
                      <Link
                        href="/services/periodontics"
                        className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors group/item"
                      >
                        <div className="font-medium group-hover/item:text-teal-600">Periodontics</div>
                        <div className="text-xs text-muted-foreground">Gum disease treatment</div>
                      </Link>
                      <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-lg transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button
                  className={cn(
                    "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive("/in") || isActive("/dentist-near-me")
                      ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600",
                  )}
                >
                  Locations <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden">
                    <div className="p-2 space-y-1">
                      <Link
                        href="/in/tamil-nadu/vellore"
                        className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Vellore (Main Branch)
                      </Link>
                      <Link
                        href="/in/tamil-nadu/chennai"
                        className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Chennai
                      </Link>
                      <Link
                        href="/in/tamil-nadu/coimbatore"
                        className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 transition-colors"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Coimbatore
                      </Link>
                      <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                        <Link
                          href="/dentist-near-me/locations"
                          className="block px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-lg transition-colors"
                        >
                          View All Locations →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about-us"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === "/about-us"
                    ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                    : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600",
                )}
              >
                About
              </Link>

              <Link
                href="/blog"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive("/blog")
                    ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                    : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600",
                )}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === "/contact"
                    ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                    : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600",
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <Link
                href="tel:7010650063"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Call Now</span>
              </Link>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
              <nav className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === "/"
                      ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Services
                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen ? "rotate-180" : "")} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-500 pl-4">
                      <Link
                        href="/services/general-dentistry"
                        className="block py-2 text-sm text-muted-foreground hover:text-teal-600"
                        onClick={closeMenu}
                      >
                        General Dentistry
                      </Link>
                      <Link
                        href="/services/cosmetic-dentistry"
                        className="block py-2 text-sm text-muted-foreground hover:text-teal-600"
                        onClick={closeMenu}
                      >
                        Cosmetic Dentistry
                      </Link>
                      <Link
                        href="/services/orthodontics"
                        className="block py-2 text-sm text-muted-foreground hover:text-teal-600"
                        onClick={closeMenu}
                      >
                        Orthodontics
                      </Link>
                      <Link
                        href="/services/root-canal-treatment"
                        className="block py-2 text-sm text-muted-foreground hover:text-teal-600"
                        onClick={closeMenu}
                      >
                        Root Canal Treatment
                      </Link>
                      <Link
                        href="/services/dental-implants"
                        className="block py-2 text-sm text-muted-foreground hover:text-teal-600"
                        onClick={closeMenu}
                      >
                        Dental Implants
                      </Link>
                      <Link
                        href="/services"
                        className="block py-2 text-sm font-medium text-teal-600"
                        onClick={closeMenu}
                      >
                        View All →
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setLocationsOpen(!locationsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Locations
                    <ChevronDown className={cn("h-4 w-4 transition-transform", locationsOpen ? "rotate-180" : "")} />
                  </button>
                  {locationsOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-500 pl-4">
                      <Link
                        href="/in/tamil-nadu/vellore"
                        className="block py-2 text-sm text-muted-foreground hover:text-teal-600"
                        onClick={closeMenu}
                      >
                        Vellore
                      </Link>
                      <Link
                        href="/in/tamil-nadu/chennai"
                        className="block py-2 text-sm text-muted-foreground hover:text-teal-600"
                        onClick={closeMenu}
                      >
                        Chennai
                      </Link>
                      <Link
                        href="/dentist-near-me/locations"
                        className="block py-2 text-sm font-medium text-teal-600"
                        onClick={closeMenu}
                      >
                        View All →
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about-us"
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === "/about-us"
                      ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                  onClick={closeMenu}
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive("/blog")
                      ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                  onClick={closeMenu}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === "/contact"
                      ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <div className="pt-4 space-y-3">
                  <Link
                    href="tel:7010650063"
                    className="flex items-center gap-3 px-4 py-3 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded-lg font-medium"
                    onClick={closeMenu}
                  >
                    <Phone className="h-4 w-4" />
                    Call: 7010650063
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium"
                    onClick={closeMenu}
                  >
                    <Calendar className="h-4 w-4" />
                    Book Appointment
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
