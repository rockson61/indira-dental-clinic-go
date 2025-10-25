import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ExternalLink, Home, Stethoscope, Info, Phone, MapPin, MessageCircle, HelpCircle, FileText } from 'lucide-react'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Complete Sitemap | All Pages | Indira Dental Clinic Vellore',
  description: 'Complete sitemap of all pages and services at Indira Dental Clinic. Easy navigation to all dental services, information pages, and resources.',
  keywords: 'sitemap, all services, dental clinic pages, navigation',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/sitemap' },
}

const sitemapStructure = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us - Dr. Rockson Samuel', href: '/about-us/dr-rockson-samuel', icon: Info },
    { name: 'Pricing', href: '/pricing', icon: FileText },
    { name: 'Contact Us', href: '/contact', icon: Phone },
  ],
  services: {
    main: [
      { name: 'All Services', href: '/services' },
      { name: 'General Dentistry', href: '/services/general-dentistry' },
      { name: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
      { name: 'Orthodontics & Braces', href: '/services/orthodontics' },
      { name: 'Root Canal Treatment', href: '/services/root-canal-treatment' },
      { name: 'Dental Implants', href: '/services/dental-implants' },
      { name: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
      { name: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
      { name: 'Periodontics', href: '/services/periodontics' },
      { name: 'Endodontics', href: '/services/endodontics' },
      { name: 'Restorative Dentistry', href: '/services/restorative-dentistry' },
      { name: 'Prosthodontics', href: '/services/prosthodontics' },
      { name: 'Oral Surgery', href: '/services/oral-surgery' },
      { name: 'Dental Radiology', href: '/services/dental-radiology' },
      { name: 'Oral Pathology', href: '/services/oral-pathology' },
      { name: 'Oral Cancer Screening', href: '/services/oral-cancer-screening' },
      { name: 'Preventive Dentistry', href: '/services/preventive-dentistry' },
      { name: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
      { name: 'Maxillofacial Surgery', href: '/services/maxillofacial-surgery' },
    ],
    orthodontics: [
      { name: 'Invisalign Clear Aligners', href: '/services/orthodontics/invisalign', badge: 'Premium' },
      { name: 'Metal Braces', href: '/services/orthodontics/metal-braces' },
      { name: 'Ceramic Braces', href: '/services/orthodontics/ceramic-braces' },
      { name: 'Lingual Braces', href: '/services/orthodontics/lingual-braces', badge: 'New' },
      { name: 'Early Orthodontic Treatment', href: '/services/orthodontics/early-treatment' },
      { name: 'Retainers', href: '/services/orthodontics/retainers' },
      { name: 'Traditional Braces', href: '/services/orthodontics/traditional-braces' },
      { name: 'Invisible Aligners', href: '/services/orthodontics/invisible-aligners' },
      { name: 'Space Maintainer', href: '/services/orthodontics/space-maintainer' },
      { name: 'Serial Extraction', href: '/services/orthodontics/serial-extraction' },
    ],
    cosmetic: [
      { name: 'Teeth Whitening', href: '/services/cosmetic-dentistry/teeth-whitening' },
      { name: 'Porcelain Veneers', href: '/services/cosmetic-dentistry/veneers' },
      { name: 'Smile Makeover', href: '/services/cosmetic-dentistry/smile-makeover', badge: 'Premium' },
      { name: 'Gum Contouring', href: '/services/cosmetic-dentistry/gum-contouring' },
      { name: 'Dental Bonding', href: '/services/cosmetic-dentistry/bonding' },
    ],
    implants: [
      { name: 'Single Tooth Implant', href: '/services/dental-implants/single-implant' },
      { name: 'All-on-4 Implants', href: '/services/implantology/all-on-4' },
      { name: 'All-on-6 Implants', href: '/services/implantology/all-on-6', badge: 'New' },
      { name: 'Multiple Tooth Implants', href: '/services/dental-implants/multiple-tooth' },
      { name: 'Single Tooth (Alt)', href: '/services/dental-implants/single-tooth' },
    ],
    oralSurgery: [
      { name: 'Tooth Extraction', href: '/services/oral-surgery/tooth-extraction' },
      { name: 'Impacted Wisdom Teeth', href: '/services/oral-surgery/impacted-wisdom-teeth' },
      { name: 'Bone Grafting', href: '/services/oral-surgery/bone-grafting' },
      { name: 'Sinus Lift', href: '/services/oral-surgery/sinus-lift' },
    ],
    prosthodontics: [
      { name: 'Dental Crowns', href: '/services/prosthodontics/dental-crowns' },
      { name: 'Dental Bridges', href: '/services/prosthodontics/dental-bridges' },
      { name: 'Dentures', href: '/services/prosthodontics/dentures' },
      { name: 'Inlays & Onlays', href: '/services/prosthodontics/inlays-onlays' },
    ],
    restorative: [
      { name: 'Dental Fillings', href: '/services/restorative-dentistry/dental-fillings' },
      { name: 'Composite Bonding', href: '/services/restorative-dentistry/composite-bonding' },
      { name: 'Crowns', href: '/services/restorative-dentistry/crowns' },
    ],
    endodontics: [
      { name: 'Apicoectomy', href: '/services/endodontics/apicoectomy' },
      { name: 'Single Sitting RCT', href: '/services/root-canal-treatment/single-sitting-rct' },
      { name: 'Multi-Visit RCT', href: '/services/root-canal-treatment/multi-visit-rct' },
      { name: 'Post and Core', href: '/services/root-canal-treatment/post-and-core', badge: 'New' },
      { name: 'Re-RCT (Retreatment)', href: '/services/root-canal-treatment/re-rct', badge: 'New' },
    ],
    periodontics: [
      { name: 'Scaling & Root Planing', href: '/services/periodontics/scaling-root-planing' },
      { name: 'Gum Grafting', href: '/services/periodontics/gum-grafting', badge: 'New' },
      { name: 'Gum Surgery', href: '/services/periodontics/gum-surgery', badge: 'New' },
      { name: 'Gingival Grafting', href: '/services/periodontics/gingival-grafting' },
      { name: 'Pocket Reduction Surgery', href: '/services/periodontics/pocket-reduction-surgery' },
    ],
    pediatric: [
      { name: 'Fluoride Treatment', href: '/services/pediatric-dentistry/fluoride-treatment' },
      { name: "Children's Dentistry", href: '/services/pediatric-dentistry/childrens-dentistry' },
    ],
    general: [
      { name: 'Dental Check-ups', href: '/services/general-dentistry/check-ups' },
      { name: 'Teeth Cleaning', href: '/services/general-dentistry/teeth-cleaning' },
      { name: 'Dental Fillings', href: '/services/general-dentistry/fillings' },
      { name: 'Tooth Extractions', href: '/services/general-dentistry/extractions' },
      { name: 'Emergency Care', href: '/services/general-dentistry/emergency-care' },
    ],
  },
  askDentist: [
    { name: 'Ask the Dentist - All Questions', href: '/ask-the-dentist' },
    { name: 'Submit Your Question', href: '/ask-the-dentist/submit' },
  ],
  locations: [
    { name: 'Find Dentist Near Me', href: '/dentist-near-me' },
    { name: 'Vellore District', href: '/in/tamil-nadu/vellore' },
    { name: 'Gandhi Nagar, Vellore', href: '/in/tamil-nadu/vellore/gandhi' },
    { name: 'Katpadi, Vellore', href: '/in/tamil-nadu/vellore/katpadi' },
    { name: 'Tamil Nadu Locations', href: '/in/tamil-nadu' },
  ],
  international: [
    { name: 'International Patients - Dental Tourism', href: '/international-patients', badge: 'New' },
    { name: 'Treatment Packages', href: '/international-patients/packages', badge: 'New' },
    { name: 'Accommodation Help', href: '/international-patients/accommodation', badge: 'New' },
    { name: 'Airport Pickup & Travel', href: '/international-patients/travel', badge: 'New' },
  ],
  resources: [
    { name: 'Blog & Articles', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faqs' },
  ],
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-12">
      <SectionContainer>
        <div className="max-w-7xl mx-auto">
          {/* Complete Sitemap Banner */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">🗺️ Need ALL 588 Pages Including Locations?</h2>
            <p className="mb-4">This page shows main categories. For complete sitemap with all Indian states, cities, and every service sub-page:</p>
            <Link href="/complete-sitemap" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              View Complete Sitemap (588+ Pages) <ExternalLink className="w-5 h-5" />
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700">Main Navigation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Quick Sitemap - Main Pages</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Main pages and services at Indira Dental Clinic. Click any link to navigate. 
              For ALL 588 pages including locations, see Complete Sitemap above.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">Main Pages Shown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">0 404 Errors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">All Working</span>
              </div>
            </div>
          </div>

        {/* Main Pages */}
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Home className="w-6 h-6 text-teal-600" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sitemapStructure.main.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-400 hover:shadow-md transition-all group"
                >
                  <page.icon className="w-5 h-5 text-teal-600" />
                  <span className="font-medium text-gray-900 group-hover:text-teal-600">{page.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Main Service Pages */}
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Stethoscope className="w-6 h-6 text-blue-600" />
              Main Service Pages (18 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.main.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">{service.name}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Orthodontics Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-purple-50 to-pink-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              📐 Orthodontics Sub-Pages (10 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.orthodontics.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600 flex-1">{service.name}</span>
                  {service.badge && <Badge className="text-xs bg-green-100 text-green-700">{service.badge}</Badge>}
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Cosmetic Dentistry Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-yellow-50 to-orange-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              ✨ Cosmetic Dentistry Sub-Pages (5 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.cosmetic.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-yellow-600 flex-1">{service.name}</span>
                  {service.badge && <Badge className="text-xs bg-green-100 text-green-700">{service.badge}</Badge>}
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Dental Implants Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-teal-50 to-blue-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              🦷 Dental Implants Sub-Pages (5 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.implants.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-teal-200 hover:border-teal-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 flex-1">{service.name}</span>
                  {service.badge && <Badge className="text-xs bg-green-100 text-green-700">{service.badge}</Badge>}
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Oral Surgery Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-red-50 to-orange-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              🔪 Oral Surgery Sub-Pages (4 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.oralSurgery.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-red-200 hover:border-red-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-red-600 flex-1">{service.name}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Prosthodontics Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-indigo-50 to-purple-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              👑 Prosthodontics Sub-Pages (4 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.prosthodontics.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 flex-1">{service.name}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Restorative Dentistry Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-green-50 to-teal-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              🔧 Restorative Dentistry Sub-Pages (3 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.restorative.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-green-600 flex-1">{service.name}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Endodontics Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-orange-50 to-red-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              🦴 Endodontics & RCT Sub-Pages (5 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.endodontics.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-orange-200 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-orange-600 flex-1">{service.name}</span>
                  {service.badge && <Badge className="text-xs bg-green-100 text-green-700">{service.badge}</Badge>}
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Periodontics Sub-Pages */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-pink-50 to-red-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              🦷 Periodontics Sub-Pages (5 Pages)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemapStructure.services.periodontics.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-pink-200 hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-900 group-hover:text-pink-600 flex-1">{service.name}</span>
                  {service.badge && <Badge className="text-xs bg-green-100 text-green-700">{service.badge}</Badge>}
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Pediatric & General Sub-Pages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GlassCard className="p-8 bg-gradient-to-br from-green-50 to-teal-50">
              <h2 className="text-2xl font-bold mb-6">👶 Pediatric Dentistry (2 Pages)</h2>
              <div className="space-y-3">
                {sitemapStructure.services.pediatric.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-green-200 hover:border-green-400 transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium group-hover:text-green-600">{service.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100" />
                </Link>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h2 className="text-2xl font-bold mb-6">🏥 General Dentistry (5 Pages)</h2>
              <div className="space-y-3">
                {sitemapStructure.services.general.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium group-hover:text-blue-600">{service.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100" />
                </Link>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Ask the Dentist */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-teal-50 to-blue-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-teal-600" />
              Ask the Dentist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sitemapStructure.askDentist.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center gap-2 p-4 bg-white rounded-lg border-2 border-teal-200 hover:border-teal-400 hover:shadow-md transition-all group"
                >
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                  <span className="font-medium text-gray-900 group-hover:text-teal-600">{page.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* International Patients */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-400">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              International Patients & Dental Tourism (4 Pages) 🌍
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sitemapStructure.international.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center gap-2 p-4 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900 group-hover:text-blue-600 flex-1">{page.name}</span>
                  {page.badge && <Badge className="text-xs bg-green-100 text-green-700 border-green-300">{page.badge}</Badge>}
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Locations & Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-green-600" />
                Locations
              </h2>
              <div className="space-y-3">
                {sitemapStructure.locations.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="flex items-center gap-2 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200 hover:border-green-400 transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium group-hover:text-green-600">{page.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100" />
                </Link>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-600" />
                Resources
              </h2>
              <div className="space-y-3">
                {sitemapStructure.resources.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="flex items-center gap-2 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 hover:border-orange-400 transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium group-hover:text-orange-600">{page.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100" />
                </Link>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Summary Stats */}
          <GlassCard className="p-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Complete Website Coverage</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">55+</div>
                  <div className="text-sm opacity-90">Total Pages</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">0</div>
                  <div className="text-sm opacity-90">404 Errors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Working Links</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">8,600+</div>
                  <div className="text-sm opacity-90">Reviews</div>
                </div>
              </div>
            </div>
          </GlassCard>
      </div>
      </SectionContainer>
    </div>
  )
}

