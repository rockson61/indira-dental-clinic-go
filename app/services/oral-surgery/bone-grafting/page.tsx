import { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
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
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bone Grafting | Oral Surgery | Indira Dental Clinic',
  description: 'Bone grafting is a surgical procedure to rebuild lost bone structure in the jaw. Learn about the procedure, benefits, and recovery for dental implants.',
  keywords: 'bone grafting, oral surgery, jaw bone loss, dental implants, bone regeneration, Vellore dentist',
  openGraph: {
    title: 'Bone Grafting | Oral Surgery | Indira Dental Clinic',
    description: 'Bone grafting is a surgical procedure to rebuild lost bone structure in the jaw.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://indiradentalclinic.com/services/oral-surgery/bone-grafting',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Oral Surgery', href: '/services/oral-surgery' },
  { title: 'Bone Grafting', href: '/services/oral-surgery/bone-grafting' },
]

export default function BoneGraftingPage() {
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
              Bone Grafting
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Restore lost bone structure in your jaw with advanced bone grafting procedures to support dental implants and improve oral health.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                What is Bone Grafting?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Bone grafting is a surgical procedure that replaces missing bone in the jaw with graft material to restore bone volume and density. This procedure is often necessary when preparing for dental implants or when bone loss has occurred due to periodontal disease, tooth extraction, or trauma.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">When Bone Grafting is Needed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Insufficient bone for dental implants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Bone loss from periodontal disease</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Tooth extraction with bone loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Trauma or injury to the jaw</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Benefits of Bone Grafting</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Enables dental implant placement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Restores facial structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Prevents further bone loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Improves chewing function</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Types of Bone Grafts */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                Types of Bone Grafts
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Autograft (Your Own Bone)</h3>
                    <p className="text-gray-600 text-sm mb-4">Bone taken from another part of your body, typically the chin, hip, or tibia.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Highest success rate</li>
                      <li>• No risk of rejection</li>
                      <li>• Contains living cells</li>
                      <li>• Cost: ₹15,000 - ₹25,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Allograft (Donor Bone)</h3>
                    <p className="text-gray-600 text-sm mb-4">Processed bone from human donors, thoroughly sterilized and safe.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• No second surgical site</li>
                      <li>• Good success rate</li>
                      <li>• Readily available</li>
                      <li>• Cost: ₹8,000 - ₹15,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Xenograft (Animal Bone)</h3>
                    <p className="text-gray-600 text-sm mb-4">Bone from animals, usually bovine, processed to be biocompatible.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• No donor site needed</li>
                      <li>• Good structural support</li>
                      <li>• Cost-effective</li>
                      <li>• Cost: ₹6,000 - ₹12,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Alloplast (Synthetic)</h3>
                    <p className="text-gray-600 text-sm mb-4">Synthetic materials like hydroxyapatite or calcium phosphate.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• No disease transmission risk</li>
                      <li>• Predictable results</li>
                      <li>• Easy to handle</li>
                      <li>• Cost: ₹5,000 - ₹10,000</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Choosing the Right Graft Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Autograft - Best For:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Large bone defects</li>
                        <li>• Complex reconstructions</li>
                        <li>• Patients wanting best results</li>
                        <li>• Multiple implant sites</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Allograft/Xenograft - Best For:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Smaller defects</li>
                        <li>• Single implant sites</li>
                        <li>• Patients wanting convenience</li>
                        <li>• Cost-conscious patients</li>
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
                Bone Grafting Procedure
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Preparation</h3>
                    <p className="text-xs text-gray-600">Anesthesia and site preparation</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Graft Placement</h3>
                    <p className="text-xs text-gray-600">Bone graft material positioned</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Membrane</h3>
                    <p className="text-xs text-gray-600">Protective membrane placed</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Closure</h3>
                    <p className="text-xs text-gray-600">Surgical site closed</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Detailed Procedure Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Anesthesia and Incision</h4>
                        <p className="text-sm text-gray-600">Local anesthesia is administered, and a small incision is made in the gum tissue to access the bone.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Site Preparation</h4>
                        <p className="text-sm text-gray-600">The bone site is prepared by cleaning and creating space for the graft material.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Graft Placement</h4>
                        <p className="text-sm text-gray-600">The selected bone graft material is placed in the prepared site and shaped as needed.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Membrane and Closure</h4>
                        <p className="text-sm text-gray-600">A protective membrane is placed over the graft, and the gum tissue is sutured closed.</p>
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
                Recovery and Healing
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Initial Healing</h3>
                    <p className="text-sm text-gray-600 mb-3">First 1-2 weeks</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Swelling and discomfort</li>
                      <li>• Soft diet recommended</li>
                      <li>• Avoid smoking</li>
                      <li>• Take prescribed medications</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Bone Integration</h3>
                    <p className="text-sm text-gray-600 mb-3">3-6 months</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Gradual bone formation</li>
                      <li>• Regular follow-up visits</li>
                      <li>• X-rays to monitor progress</li>
                      <li>• Return to normal diet</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Complete Healing</h3>
                    <p className="text-sm text-gray-600 mb-3">6-12 months</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Full bone integration</li>
                      <li>• Ready for implants</li>
                      <li>• Final assessment</li>
                      <li>• Long-term maintenance</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Post-Surgical Care Instructions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Do's</h4>
                      <ul className="space-y-1 text-green-700">
                        <li>• Take prescribed antibiotics</li>
                        <li>• Use ice packs for swelling</li>
                        <li>• Maintain soft diet initially</li>
                        <li>• Keep follow-up appointments</li>
                        <li>• Practice gentle oral hygiene</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Don'ts</h4>
                      <ul className="space-y-1 text-green-700">
                        <li>• Avoid smoking or tobacco</li>
                        <li>• Don't rinse vigorously</li>
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
                  <AccordionTrigger>Is bone grafting painful?</AccordionTrigger>
                  <AccordionContent>
                    The procedure is performed under local anesthesia, so you won't feel pain during surgery. Some discomfort and swelling are normal after the procedure, but this is manageable with prescribed pain medication and typically resolves within a few days.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="duration">
                  <AccordionTrigger>How long does bone grafting take?</AccordionTrigger>
                  <AccordionContent>
                    The procedure typically takes 1-2 hours, depending on the size of the graft and complexity of the case. More extensive grafts may require longer surgery time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="success">
                  <AccordionTrigger>What is the success rate of bone grafting?</AccordionTrigger>
                  <AccordionContent>
                    Bone grafting has a high success rate of 85-95% when performed by experienced oral surgeons. Success depends on proper post-surgical care, good oral hygiene, and regular follow-up appointments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="timing">
                  <AccordionTrigger>How long before I can get dental implants?</AccordionTrigger>
                  <AccordionContent>
                    Typically, you need to wait 3-6 months for the bone graft to fully integrate before placing dental implants. This timeline may vary depending on the type of graft and individual healing response.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost">
                  <AccordionTrigger>What is the cost of bone grafting?</AccordionTrigger>
                  <AccordionContent>
                    The cost varies based on the type of graft and size of the defect, typically ranging from ₹5,000 to ₹25,000. We offer flexible payment plans to make treatment affordable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ModernCardContent>
          </ModernCard>

          {/* Internal Linking Widgets */}
          <RelevantQAWidget 
            questions={[
              {
                title: "What Should I Expect After Tooth Extraction?",
                url: "/ask-the-dentist/tooth-extraction-recovery-care",
                helpfulVotes: 63
              },
              {
                title: "What are Dental Implants and How Long Do They Last?",
                url: "/ask-the-dentist/dental-implants-longevity-benefits", 
                helpfulVotes: 67
              },
              {
                title: "What is All-on-4 Dental Implants and Who is a Candidate?",
                url: "/ask-the-dentist/all-on-4-dental-implants-candidacy",
                helpfulVotes: 49
              }
            ]}
          />

          <CompactServiceWidget 
            services={[
              {
                name: "Tooth Extraction",
                url: "/services/oral-surgery/tooth-extraction",
                duration: "30-60 min",
                price: "₹2,000 - ₹5,000"
              },
              {
                name: "Sinus Lift",
                url: "/services/oral-surgery/sinus-lift", 
                duration: "1-2 hours",
                price: "₹12,000 - ₹20,000"
              },
              {
                name: "Dental Implants",
                url: "/services/dental-implants",
                duration: "2-3 hours",
                price: "₹25,000 - ₹45,000"
              }
            ]}
          />

          {/* CTA Section */}
          <CTAWidget 
            title="Need Bone Grafting for Dental Implants?"
            description="Don't let insufficient bone prevent you from getting dental implants. Schedule a consultation with Dr. Rockson Samuel to discuss bone grafting options."
            primaryAction={{
              text: "Schedule Consultation",
              url: "/contact"
            }}
            secondaryAction={{
              text: "Ask a Question",
              url: "/ask-the-dentist/submit"
            }}
            features={[
              "Advanced grafting techniques",
              "Multiple graft options",
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
                "name": "Bone Grafting",
                "description": "Surgical procedure to rebuild lost bone structure in the jaw to support dental implants.",
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
                "bodyLocation": "Jaw Bone",
                "preparation": "Comprehensive evaluation and treatment planning",
                "followup": "Regular follow-up appointments every 4-6 weeks",
                "risks": "Swelling, discomfort, infection, graft failure"
              })
            }}
          />
        </div>
      </SectionContainer>
    </div>
  )
}
