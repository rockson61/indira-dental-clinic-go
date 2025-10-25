import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Calendar,
  ArrowRight,
  Youtube,
  Heart,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Stay Healthy
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Get Dental Care Tips & Special Offers</h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for expert dental advice and exclusive appointment discounts
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg">
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
                <div>
                  <div className="text-xl font-bold text-white">Indira Dental</div>
                  <div className="text-xs text-gray-500">Excellence in Care</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Leading dental care provider in Vellore, Tamil Nadu. Expert treatments with state-of-the-art technology
                and compassionate care since 2010.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call Us</div>
                  <a href="tel:7010650063" className="text-sm text-white hover:text-teal-400 transition-colors">
                    7010650063
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email Us</div>
                  <a
                    href="mailto:rockson68@hotmail.com"
                    className="text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    rockson68@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-teal-500/10 flex items-center justify-center transition-all duration-200 group"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-teal-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-500/10 flex items-center justify-center transition-all duration-200 group"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-pink-500/10 flex items-center justify-center transition-all duration-200 group"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-pink-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-red-500/10 flex items-center justify-center transition-all duration-200 group"
              >
                <Youtube className="h-5 w-5 text-gray-400 group-hover:text-red-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-500 to-blue-600 rounded-full"></div>
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/about-us"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Our Services
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Pricing & Packages
              </Link>
              <Link
                href="/testimonials"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Patient Reviews
              </Link>
              <Link
                href="/blog"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Dental Blog
              </Link>
              <Link
                href="/faq"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                FAQs
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-500 to-blue-600 rounded-full"></div>
              Our Services
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/services/general-dentistry"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                General Dentistry
              </Link>
              <Link
                href="/services/cosmetic-dentistry"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Cosmetic Dentistry
              </Link>
              <Link
                href="/services/orthodontics"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Orthodontics & Braces
              </Link>
              <Link
                href="/services/root-canal-treatment"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Root Canal Treatment
              </Link>
              <Link
                href="/services/dental-implants"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Dental Implants
              </Link>
              <Link
                href="/services/periodontics"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Periodontics
              </Link>
              <Link
                href="/services/pediatric-dentistry"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                Pediatric Dentistry
              </Link>
            </nav>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-500 to-blue-600 rounded-full"></div>
              Visit Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mt-0.5">
                  <MapPin className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white mb-1">Main Clinic</div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
                  </p>
                  <a
                    href="https://maps.google.com/?q=Indira+Dental+Clinic+Vellore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 mt-2"
                  >
                    Get Directions
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">Clinic Hours</div>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between text-gray-400">
                    <span>Monday - Saturday</span>
                    <span className="text-white">10 AM - 8 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sunday</span>
                    <span className="text-white">10 AM - 1:30 PM</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Indira Dental Clinic. All rights reserved. | Crafted with{" "}
              <Heart className="inline h-3.5 w-3.5 text-red-500 fill-red-500" /> for better smiles
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
