import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Phone, Calendar, Clock, Star, Shield, Heart, Zap } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "General Dentistry Services in Vellore | Comprehensive Dental Care | Indira Dental Clinic",
  description:
    "Complete general dentistry services in Vellore by Dr. Rockson Samuel. Dental checkups, cleanings, fillings, extractions, and preventive care. Book your appointment today.",
  keywords: [
    "general dentistry vellore",
    "dental checkup vellore",
    "teeth cleaning vellore",
    "dental fillings vellore",
    "preventive dentistry",
    "family dentist vellore",
    "oral health checkup",
    "dental examination",
  ],
  openGraph: {
    title: "General Dentistry Services in Vellore | Indira Dental Clinic",
    description: "Comprehensive general dentistry services including checkups, cleanings, and preventive care.",
    images: [
      {
        url: "/dental-checkup.png",
        width: 1200,
        height: 630,
        alt: "General Dentistry Services at Indira Dental Clinic",
      },
    ],
  },
}

const services = [
  {
    title: "Dental Checkups & Examinations",
    description: "Comprehensive oral health examinations to detect problems early and maintain optimal dental health.",
    image: "/dental-checkup.png",
    price: "₹500 - ₹800",
    duration: "30-45 minutes",
    href: "/services/general-dentistry/check-ups",
    features: ["Digital X-rays", "Oral Cancer Screening", "Gum Health Assessment", "Treatment Planning"],
  },
  {
    title: "Professional Teeth Cleaning",
    description: "Deep cleaning to remove plaque, tartar, and stains for healthier teeth and fresher breath.",
    image: "/teeth-cleaning.jpg",
    price: "₹800 - ₹1,200",
    duration: "45-60 minutes",
    href: "/services/general-dentistry/teeth-cleaning",
    features: ["Plaque Removal", "Tartar Scaling", "Polishing", "Fluoride Treatment"],
  },
  {
    title: "Dental Fillings",
    description: "Tooth-colored composite fillings to restore cavities and maintain natural tooth appearance.",
    image: "/dental-fillings.jpg",
    price: "₹1,000 - ₹2,500",
    duration: "30-60 minutes",
    href: "/services/general-dentistry/fillings",
    features: ["Composite Fillings", "Amalgam Fillings", "Glass Ionomer", "Cavity Prevention"],
  },
  {
    title: "Tooth Extractions",
    description: "Safe and comfortable tooth removal procedures when restoration is not possible.",
    image: "/tooth-extraction.jpg",
    price: "₹800 - ₹2,000",
    duration: "20-45 minutes",
    href: "/services/general-dentistry/extractions",
    features: ["Simple Extractions", "Surgical Extractions", "Wisdom Teeth", "Pain Management"],
  },
  {
    title: "Emergency Dental Care",
    description: "Immediate dental care for urgent situations including severe pain, trauma, and infections.",
    image: "/emergency-dental.jpg",
    price: "₹1,000 - ₹3,000",
    duration: "30-90 minutes",
    href: "/services/general-dentistry/emergency-care",
    features: ["24/7 Availability", "Pain Relief", "Trauma Care", "Infection Treatment"],
  },
  {
    title: "Preventive Treatments",
    description: "Fluoride treatments and dental sealants to prevent tooth decay and maintain oral health.",
    image: "/fluoride-treatment.jpg",
    price: "₹300 - ₹800",
    duration: "15-30 minutes",
    href: "/services/general-dentistry/preventive-care",
    features: ["Fluoride Application", "Dental Sealants", "Oral Hygiene Education", "Diet Counseling"],
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Early detection and prevention of dental problems saves time, money, and discomfort.",
  },
  {
    icon: Heart,
    title: "Overall Health",
    description: "Good oral health is linked to better cardiovascular health and overall well-being.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "State-of-the-art equipment for accurate diagnosis and comfortable treatment.",
  },
]

const faqs = [
  {
    question: "How often should I visit the dentist for a checkup?",
    answer:
      "We recommend visiting every 6 months for routine checkups and cleanings. However, some patients may need more frequent visits based on their oral health condition.",
  },
  {
    question: "Are dental X-rays safe?",
    answer:
      "Yes, dental X-rays are very safe. We use digital X-rays which emit 90% less radiation than traditional film X-rays, and we only take X-rays when necessary for diagnosis.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive examination, medical history review, digital X-rays if needed, and a discussion of your treatment options and oral health goals.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "We work with most dental insurance plans. Our team will help verify your benefits and maximize your insurance coverage for treatments.",
  },
]

export default function GeneralDentistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'General Dentistry', href: '/services/general-dentistry' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-[#54CAD3] text-white mb-4">General Dentistry</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#005f73] to-[#54CAD3] bg-clip-text text-transparent">
              Comprehensive General Dentistry in Vellore
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete dental care for the whole family. From routine checkups to emergency treatments, Dr. Rockson
              Samuel provides gentle, professional dental services using the latest technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-gradient">
                <Link href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 7010650063
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <GlassCard className="p-8">
              <Image
                src="/dental-checkup.png"
                alt="General Dentistry Services at Indira Dental Clinic"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Our General Dentistry Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive dental care services to maintain and improve your oral health with personalized
            treatment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#005f73] mb-2 group-hover:text-[#54CAD3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#54CAD3]" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-[#005f73]">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#54CAD3] hover:text-[#005f73] font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Why Choose Our General Dentistry Services?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience the difference of comprehensive dental care with advanced technology and personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#005f73] mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our general dentistry services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-lg font-semibold text-[#005f73] mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="pb-16">
        <GlassCard className="text-center p-8 md:p-12 bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Ready for Your Dental Checkup?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't wait for dental problems to develop. Schedule your routine checkup with Dr. Rockson Samuel today and
            maintain optimal oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-gradient">
              <Link href="tel:7010650063">Call Now: 7010650063</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
            >
              <Link href="/contact">Book Online</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <span>•</span>
            <span>Same Day Appointments</span>
            <span>•</span>
            <span>Insurance Accepted</span>
          </div>
        </GlassCard>
      </SectionContainer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Indira Dental Clinic - General Dentistry",
            description:
              "Comprehensive general dentistry services in Vellore including dental checkups, cleanings, fillings, and preventive care by Dr. Rockson Samuel.",
            url: "https://www.dentalclinicinvellore.in/services/general-dentistry",
            telephone: "+91 70106 50063",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
              addressLocality: "Vellore",
              addressRegion: "Tamil Nadu",
              postalCode: "632006",
              addressCountry: "IN",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "10:00",
                closes: "13:30",
              },
            ],
            medicalSpecialty: "General Dentistry",
            availableService: services.map((service) => ({
              "@type": "MedicalProcedure",
              name: service.title,
              description: service.description,
            })),
          }),
        }}
      />
    </div>
  )
}
