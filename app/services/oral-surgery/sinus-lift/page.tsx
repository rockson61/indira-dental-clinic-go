import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { 
  Calendar, 
  Clock, 
  Users, 
  Shield, 
  Star, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Phone,
  MapPin,
  MessageCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sinus Lift | Oral Surgery | Indira Dental Clinic',
  description: 'Sinus lift is a surgical procedure to add bone to the upper jaw in the area of the molars and premolars. Learn about the procedure, benefits, and recovery.',
  keywords: 'sinus lift, sinus augmentation, upper jaw surgery, dental implants, bone grafting, Vellore dentist',
  openGraph: {
    title: 'Sinus Lift | Oral Surgery | Indira Dental Clinic',
    description: 'Sinus lift is a surgical procedure to add bone to the upper jaw in the area of the molars and premolars.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/oral-surgery/sinus-lift',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Oral Surgery', href: '/services/oral-surgery' },
  { title: 'Sinus Lift', href: '/services/oral-surgery/sinus-lift' },
]

export default function SinusLiftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={breadcrumbItems} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">
              Oral Surgery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sinus Lift Surgery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Add bone to your upper jaw with sinus lift surgery to enable dental implant placement in the molar and premolar areas.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                What is Sinus Lift Surgery?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sinus lift surgery, also known as sinus augmentation, is a procedure that adds bone to the upper jaw in the area of the molars and premolars. This is necessary when the sinus cavity is too close to the jawbone, making it impossible to place dental implants without entering the sinus cavity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">When Sinus Lift is Needed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Insufficient bone height in upper jaw</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Sinus too close to jawbone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Previous tooth loss with bone loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Planning dental implants in upper jaw</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Benefits of Sinus Lift</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Enables upper jaw implants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Restores chewing function</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Prevents sinus complications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Improves facial structure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Types of Sinus Lift */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                Types of Sinus Lift Procedures
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Lateral Window Technique</h3>
                    <p className="text-gray-600 text-sm mb-4">Most common method involving a window in the side of the sinus.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Most predictable results</li>
                      <li>• Suitable for large defects</li>
                      <li>• Higher success rate</li>
                      <li>• Cost: ₹12,000 - ₹20,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Crestal Approach</h3>
                    <p className="text-gray-600 text-sm mb-4">Less invasive method through the implant site.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Less invasive</li>
                      <li>• Faster healing</li>
                      <li>• Suitable for small lifts</li>
                      <li>• Cost: ₹8,000 - ₹15,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Osteotome Technique</h3>
                    <p className="text-gray-600 text-sm mb-4">Uses special instruments to lift sinus membrane.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Minimally invasive</li>
                      <li>• Quick procedure</li>
                      <li>• Good for small lifts</li>
                      <li>• Cost: ₹6,000 - ₹12,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Balloon Sinus Lift</h3>
                    <p className="text-gray-600 text-sm mb-4">Uses balloon to create space for bone graft.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Very minimally invasive</li>
                      <li>• Reduced discomfort</li>
                      <li>• Faster recovery</li>
                      <li>• Cost: ₹10,000 - ₹18,000</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Choosing the Right Technique</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Lateral Window - Best For:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Large bone defects</li>
                        <li>• Multiple implants needed</li>
                        <li>• Complex cases</li>
                        <li>• Maximum bone gain</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Crestal/Osteotome - Best For:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Small bone defects</li>
                        <li>• Single implant sites</li>
                        <li>• Patients wanting minimal surgery</li>
                        <li>• Faster recovery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Procedure Steps */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-teal-600" />
                Sinus Lift Procedure
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Anesthesia</h3>
                    <p className="text-xs text-gray-600">Local or IV sedation</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Access</h3>
                    <p className="text-xs text-gray-600">Create access to sinus</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Lift</h3>
                    <p className="text-xs text-gray-600">Elevate sinus membrane</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Graft</h3>
                    <p className="text-xs text-gray-600">Place bone graft material</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Detailed Procedure Steps (Lateral Window)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Anesthesia and Incision</h4>
                        <p className="text-sm text-gray-600">Local anesthesia is administered, and an incision is made in the gum tissue to expose the bone.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Window Creation</h4>
                        <p className="text-sm text-gray-600">A small window is created in the bone to access the sinus membrane.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Membrane Elevation</h4>
                        <p className="text-sm text-gray-600">The sinus membrane is carefully lifted to create space for the bone graft.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Graft Placement and Closure</h4>
                        <p className="text-sm text-gray-600">Bone graft material is placed in the space, and the site is closed with sutures.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Recovery */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-teal-600" />
                Recovery and Aftercare
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Immediate Recovery</h3>
                    <p className="text-sm text-gray-600 mb-3">First 24-48 hours</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Swelling and discomfort</li>
                      <li>• Soft diet only</li>
                      <li>• Avoid blowing nose</li>
                      <li>• Take prescribed medications</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Short-term Recovery</h3>
                    <p className="text-sm text-gray-600 mb-3">1-2 weeks</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Gradual return to normal diet</li>
                      <li>• Gentle oral hygiene</li>
                      <li>• Suture removal</li>
                      <li>• Follow-up appointments</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Long-term Healing</h3>
                    <p className="text-sm text-gray-600 mb-3">4-6 months</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Complete bone integration</li>
                      <li>• Ready for implants</li>
                      <li>• Final assessment</li>
                      <li>• Long-term maintenance</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-3">Important Post-Surgical Instructions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-amber-800 mb-2">Do's</h4>
                      <ul className="space-y-1 text-amber-700">
                        <li>• Take prescribed antibiotics</li>
                        <li>• Use ice packs for swelling</li>
                        <li>• Maintain soft diet initially</li>
                        <li>• Keep follow-up appointments</li>
                        <li>• Practice gentle oral hygiene</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-800 mb-2">Don'ts</h4>
                      <ul className="space-y-1 text-amber-700">
                        <li>• Avoid blowing your nose</li>
                        <li>• Don't smoke or use tobacco</li>
                        <li>• Avoid hard or crunchy foods</li>
                        <li>• Don't skip medications</li>
                        <li>• Avoid strenuous activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* FAQ Section */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle>Frequently Asked Questions</ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pain">
                  <AccordionTrigger>Is sinus lift surgery painful?</AccordionTrigger>
                  <AccordionContent>
                    The procedure is performed under local anesthesia or IV sedation, so you won't feel pain during surgery. Some discomfort and swelling are normal after the procedure, but this is manageable with prescribed pain medication and typically resolves within a few days.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="duration">
                  <AccordionTrigger>How long does sinus lift surgery take?</AccordionTrigger>
                  <AccordionContent>
                    The procedure typically takes 1-2 hours, depending on the technique used and complexity of the case. The lateral window technique may take longer than the crestal approach.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="success">
                  <AccordionTrigger>What is the success rate of sinus lift surgery?</AccordionTrigger>
                  <AccordionContent>
                    Sinus lift surgery has a high success rate of 85-95% when performed by experienced oral surgeons. Success depends on proper post-surgical care, avoiding activities that could damage the graft, and regular follow-up appointments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="timing">
                  <AccordionTrigger>How long before I can get dental implants?</AccordionTrigger>
                  <AccordionContent>
                    Typically, you need to wait 4-6 months for the bone graft to fully integrate before placing dental implants. This timeline may vary depending on the type of graft and individual healing response.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost">
                  <AccordionTrigger>What is the cost of sinus lift surgery?</AccordionTrigger>
                  <AccordionContent>
                    The cost varies based on the technique used and complexity of the case, typically ranging from ₹6,000 to ₹20,000. We offer flexible payment plans to make treatment affordable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ModernCardContent>
          </ModernCard>

          {/* Related Questions */}
          <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200 mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-teal-600" />
                Related Dental Questions
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <Link href="/ask-the-dentist/tooth-extraction-recovery-care" className="block hover:text-teal-600">
                    <h4 className="font-semibold text-sm mb-1">What Should I Expect After Tooth Extraction?</h4>
                    <p className="text-xs text-gray-600">Learn about recovery and care instructions.</p>
                  </Link>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <Link href="/ask-the-dentist/dental-implants-longevity-benefits" className="block hover:text-teal-600">
                    <h4 className="font-semibold text-sm mb-1">How Long Do Dental Implants Last?</h4>
                    <p className="text-xs text-gray-600">Discover implant longevity and benefits.</p>
                  </Link>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <Link href="/ask-the-dentist/all-on-4-dental-implants-candidacy" className="block hover:text-teal-600">
                    <h4 className="font-semibold text-sm mb-1">What is All-on-4 Dental Implants?</h4>
                    <p className="text-xs text-gray-600">Learn about All-on-4 implants and candidacy.</p>
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/ask-the-dentist" className="text-sm font-semibold text-teal-600 hover:text-teal-700">
                  View All Questions →
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>

          <CompactServiceWidget 
            title="Related Oral Surgery Services"
            description="Other oral surgery procedures we offer"
            services={[
              {
                name: "Tooth Extraction",
                slug: "oral-surgery/tooth-extraction",
                duration: "30-60 min",
                price: "₹2,000 - ₹5,000"
              },
              {
                name: "Bone Grafting",
                slug: "oral-surgery/bone-grafting",
                duration: "1-2 hours",
                price: "₹5,000 - ₹25,000"
              },
              {
                name: "Dental Implants",
                slug: "dental-implants",
                duration: "2-3 hours",
                price: "₹25,000 - ₹45,000"
              }
            ]}
          />

          {/* CTA Section */}
          <CTAWidget 
            title="Need Sinus Lift for Upper Jaw Implants?"
            description="Don't let insufficient bone height prevent you from getting upper jaw dental implants. Schedule a consultation with Dr. Rockson Samuel to discuss sinus lift options."
            primaryAction={{
              text: "Schedule Consultation",
              href: "/contact",
              icon: Calendar
            }}
            secondaryAction={{
              text: "Ask a Question",
              href: "/ask-the-dentist/submit",
              icon: MessageCircle
            }}
            benefits={[
              "Advanced sinus lift techniques",
              "Multiple procedure options",
              "Comprehensive follow-up",
              "High success rates"
            ]}
          />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                "name": "Sinus Lift Surgery",
                "description": "Surgical procedure to add bone to the upper jaw in the area of the molars and premolars for dental implant placement.",
                "provider": {
                  "@type": "DentalClinic",
                  "name": "Indira Dental Clinic",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar",
                    "addressLocality": "Gandhi Nagar, Vellore",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "632006",
                    "addressCountry": "IN"
                  },
                  "telephone": "+917010650063"
                },
                "procedureType": "Oral Surgery",
                "bodyLocation": "Upper Jaw and Sinus",
                "preparation": "Comprehensive evaluation and treatment planning",
                "followup": "Regular follow-up appointments every 4-6 weeks",
                "risks": "Swelling, discomfort, sinus complications, graft failure"
              })
            }}
          />
        </div>
      </SectionContainer>
    </div>
  )
}
