import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, AlertTriangle, Activity, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oral & Maxillofacial Surgery | Jaw Surgery | Indira Dental Clinic Vellore',
  description: 'Advanced oral and maxillofacial surgery in Vellore. Jaw surgery, TMJ treatment, facial trauma, orthognathic surgery by Dr. Rockson Samuel. Expert surgical care. Call: 7010650063',
  keywords: 'maxillofacial surgery vellore, jaw surgery, TMJ treatment, facial surgery, orthognathic surgery, corrective jaw surgery, Dr Rockson Samuel',
  openGraph: {
    title: 'Oral & Maxillofacial Surgery | Indira Dental Clinic Vellore',
    description: 'Advanced surgical procedures for jaw, face, and TMJ disorders.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/maxillofacial-surgery',
  },
}

export default function MaxillofacialSurgeryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <SectionContainer className="py-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Maxillofacial Surgery', href: '/services/maxillofacial-surgery' },
          ]}
        />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">
              <Activity className="w-4 h-4 inline mr-1" />
              Advanced Surgical Care
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Oral & Maxillofacial Surgery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive surgical treatment for jaw, face, and oral conditions. Expert care for complex dental and facial procedures.
            </p>
          </div>

          {/* Services Grid */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-red-600" />
                Maxillofacial Surgery Services
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Corrective Jaw Surgery */}
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Orthognathic (Jaw) Surgery</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Corrective surgery to realign jaws for improved function and aesthetics
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Correct bite problems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Improve facial symmetry
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Fix breathing issues
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Enhance chewing function
                    </li>
                  </ul>
                  <div className="text-sm">
                    <strong>Price:</strong> ₹1,50,000 - ₹4,00,000
                  </div>
                  <div className="text-sm">
                    <strong>Duration:</strong> 2-4 hours surgery + 6-12 weeks recovery
                  </div>
                </div>

                {/* TMJ Treatment */}
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">TMJ Disorder Treatment</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Surgical and non-surgical treatment for temporomandibular joint disorders
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Pain relief
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Improved jaw movement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Reduced clicking/popping
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Better quality of life
                    </li>
                  </ul>
                  <div className="text-sm">
                    <strong>Price:</strong> ₹25,000 - ₹1,50,000
        </div>
                  <div className="text-sm">
                    <strong>Treatment:</strong> Conservative to surgical options
                </div>
              </div>

                {/* Facial Trauma */}
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Facial Trauma Reconstruction</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Emergency treatment for facial bone fractures and soft tissue injuries
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Jaw fracture repair
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Cheekbone reconstruction
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Orbital fracture treatment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Soft tissue repair
                    </li>
                  </ul>
                  <div className="text-sm">
                    <strong>Emergency Service:</strong> 24/7 Available
                  </div>
                  <div className="text-sm">
                    <strong>Price:</strong> Varies by complexity
        </div>
              </div>

                {/* Cleft Lip/Palate */}
                <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Cleft Lip & Palate Surgery</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Corrective surgery for congenital facial deformities
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Improved speech
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Better feeding
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Enhanced facial appearance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Multidisciplinary care
                    </li>
                  </ul>
                  <div className="text-sm">
                    <strong>Age:</strong> Staged surgeries from infancy
                  </div>
                  <div className="text-sm">
                    <strong>Consultation:</strong> Free assessment
        </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Common Conditions Treated */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-orange-600" />
                Common Conditions We Treat
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Underbite/Overbite',
                  'Open Bite',
                  'Crossbite',
                  'TMJ Pain & Clicking',
                  'Sleep Apnea',
                  'Facial Asymmetry',
                  'Jaw Misalignment',
                  'Facial Fractures',
                  'Cysts & Tumors',
                  'Congenital Deformities',
                  'Facial Infections',
                  'Jaw Joint Disorders',
                ].map((condition, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{condition}</span>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Why Choose Us */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-600" />
                Why Choose Our Maxillofacial Services?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Expert Surgical Team',
                    desc: 'Dr. Rockson Samuel with 15+ years of surgical experience',
                  },
                  {
                    title: 'Advanced Technology',
                    desc: '3D imaging, surgical planning software, modern equipment',
                  },
                  {
                    title: 'Comprehensive Care',
                    desc: 'From diagnosis to recovery, complete patient support',
                  },
                  {
                    title: 'Insurance Accepted',
                    desc: 'Work with major insurance providers for coverage',
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Emergency Contact */}
          <ModernCard className="bg-gradient-to-br from-red-50 to-orange-50 border-red-300 mb-8">
            <ModernCardContent className="p-8">
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Maxillofacial Emergency?</h2>
                <p className="text-gray-700 mb-6">
                  We provide emergency maxillofacial surgical care. For facial trauma, jaw fractures, or urgent
                  surgical needs, contact us immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="tel:7010650063">
                      <Phone className="w-5 h-5 mr-2" />
                      Emergency: 7010650063
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                    <Link href="https://wa.me/917010650063?text=Maxillofacial%20Emergency" target="_blank">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Emergency
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>24/7 Emergency Service Available</strong>
                </p>
        </div>
            </ModernCardContent>
          </ModernCard>

          {/* CTA */}
          <ModernCard className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Schedule Your Maxillofacial Consultation
              </h2>
              <p className="text-gray-700 mb-6">
                Get expert evaluation for jaw, facial, or TMJ conditions. Dr. Rockson Samuel provides comprehensive
                surgical solutions with personalized care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                </Link>
              </Button>

                <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                  <Link
                    href="https://wa.me/917010650063?text=I%20need%20maxillofacial%20surgery%20consultation"
                    target="_blank"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Consult
                </Link>
              </Button>
            </div>

              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  5.0/5 Rating
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-1" />
                  15+ Years Experience
              </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-blue-600 mr-1" />
                  7010650063
              </div>
              </div>
            </ModernCardContent>
          </ModernCard>
          </div>
      </SectionContainer>
    </div>
  )
}
