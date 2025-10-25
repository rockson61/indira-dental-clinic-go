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
  title: 'Serial Extraction Treatment | Orthodontics | Indira Dental Clinic',
  description: 'Serial extraction is a strategic orthodontic treatment involving the removal of specific teeth to create space for proper alignment. Learn about the procedure, benefits, and when it\'s recommended.',
  keywords: 'serial extraction, orthodontics, tooth extraction, space creation, malocclusion treatment, orthodontic treatment, Vellore dentist',
  openGraph: {
    title: 'Serial Extraction Treatment | Orthodontics | Indira Dental Clinic',
    description: 'Serial extraction is a strategic orthodontic treatment involving the removal of specific teeth to create space for proper alignment.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://indiradentalclinic.com/services/orthodontics/serial-extraction',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Orthodontics', href: '/services/orthodontics' },
  { title: 'Serial Extraction', href: '/services/orthodontics/serial-extraction' },
]

export default function SerialExtractionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={breadcrumbItems} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">
              Orthodontic Treatment
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serial Extraction Treatment
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Strategic tooth removal to create optimal space for proper dental alignment and prevent future orthodontic complications.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                What is Serial Extraction?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Serial extraction is a carefully planned orthodontic treatment that involves the strategic removal of specific teeth at predetermined times to create space for proper dental alignment. This approach is particularly effective for children with severe crowding or space deficiency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">Primary Goals</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Create adequate space for permanent teeth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Prevent severe crowding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Reduce treatment complexity later</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Improve facial aesthetics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Best Candidates</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Children aged 8-12 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Severe crowding cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Small jaw size</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Protruding front teeth</span>
                      </li>
                    </ul>
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
                Serial Extraction Procedure
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                    <p className="text-sm text-gray-600">Comprehensive evaluation including X-rays, dental impressions, and growth analysis to determine extraction sequence.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Planning</h3>
                    <p className="text-sm text-gray-600">Development of extraction timeline based on tooth eruption patterns and space requirements.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Timed Extractions</h3>
                    <p className="text-sm text-gray-600">Sequential removal of specific teeth at optimal times to guide natural tooth movement.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Typical Extraction Sequence</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Phase 1 (Age 8-9)</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Removal of primary canines</li>
                        <li>• Allows incisors to align</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Phase 2 (Age 10-11)</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Removal of primary first molars</li>
                        <li>• Guides permanent premolars</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Phase 3 (Age 11-12)</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Removal of permanent premolars</li>
                        <li>• Creates space for canines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Phase 4 (Age 12-13)</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Final adjustments</li>
                        <li>• Monitoring tooth alignment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Benefits */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Star className="w-6 h-6 text-teal-600" />
                Benefits of Serial Extraction
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Prevents Severe Crowding</h3>
                      <p className="text-gray-600 text-sm">Eliminates the need for complex orthodontic treatment later by addressing space issues early.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Natural Tooth Movement</h3>
                      <p className="text-gray-600 text-sm">Utilizes natural growth patterns to guide teeth into proper positions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Reduced Treatment Time</h3>
                      <p className="text-gray-600 text-sm">Shortens overall orthodontic treatment duration when braces are needed.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Improved Facial Profile</h3>
                      <p className="text-gray-600 text-sm">Helps achieve better facial aesthetics and lip positioning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Cost-Effective</h3>
                      <p className="text-gray-600 text-sm">Reduces the complexity and cost of future orthodontic treatment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Better Oral Health</h3>
                      <p className="text-gray-600 text-sm">Prevents periodontal problems associated with crowded teeth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Considerations */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                Important Considerations
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-3">Timing is Critical</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Serial extraction must be timed precisely with tooth development. Too early or too late can compromise results. Regular monitoring is essential throughout the process.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Potential Risks</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Possible over-correction if not monitored</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Risk of impacted teeth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Need for additional treatment</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Success Factors</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Regular follow-up appointments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Good oral hygiene maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Patient cooperation</span>
                      </li>
                    </ul>
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
                <AccordionItem value="age">
                  <AccordionTrigger>At what age is serial extraction recommended?</AccordionTrigger>
                  <AccordionContent>
                    Serial extraction is typically recommended between ages 8-12, when children have a mix of primary and permanent teeth. The exact timing depends on individual tooth development and crowding severity.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pain">
                  <AccordionTrigger>Is serial extraction painful?</AccordionTrigger>
                  <AccordionContent>
                    The extraction procedure itself is performed under local anesthesia, so patients feel minimal discomfort. Some soreness may occur after the procedure, but this is manageable with over-the-counter pain medication.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="duration">
                  <AccordionTrigger>How long does the serial extraction process take?</AccordionTrigger>
                  <AccordionContent>
                    The entire process typically spans 2-4 years, with extractions performed at specific intervals. The exact timeline depends on individual tooth development and space requirements.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="braces">
                  <AccordionTrigger>Will my child still need braces after serial extraction?</AccordionTrigger>
                  <AccordionContent>
                    Serial extraction often reduces the complexity of future orthodontic treatment, but braces may still be needed for final alignment. The treatment duration is typically shorter and less complex.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost">
                  <AccordionTrigger>What is the cost of serial extraction treatment?</AccordionTrigger>
                  <AccordionContent>
                    The cost varies based on the number of extractions needed and follow-up visits required. Generally, serial extraction is more cost-effective than complex orthodontic treatment later. We offer flexible payment plans.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ModernCardContent>
          </ModernCard>

          {/* Internal Linking Widgets */}
          <RelevantQAWidget 
            questions={[
              {
                title: "What Causes Teeth Crowding and How is it Treated?",
                url: "/ask-the-dentist/teeth-crowding-causes-treatment",
                helpfulVotes: 38
              },
              {
                title: "What is Malocclusion and What are the Different Types?",
                url: "/ask-the-dentist/malocclusion-types-treatment", 
                helpfulVotes: 42
              },
              {
                title: "How Do I Care for My Teeth While Wearing Braces?",
                url: "/ask-the-dentist/braces-oral-hygiene-care",
                helpfulVotes: 55
              }
            ]}
          />

          <CompactServiceWidget 
            services={[
              {
                name: "Traditional Braces",
                url: "/services/orthodontics/traditional-braces",
                duration: "18-24 months",
                price: "₹25,000 - ₹45,000"
              },
              {
                name: "Invisalign",
                url: "/services/orthodontics/invisalign", 
                duration: "12-18 months",
                price: "₹35,000 - ₹55,000"
              },
              {
                name: "Space Maintainers",
                url: "/services/orthodontics/space-maintainer",
                duration: "6-12 months",
                price: "₹3,000 - ₹8,000"
              }
            ]}
          />

          {/* CTA Section */}
          <CTAWidget 
            title="Ready to Discuss Serial Extraction for Your Child?"
            description="Early intervention can prevent complex orthodontic problems. Schedule a consultation with Dr. Rockson Samuel to determine if serial extraction is right for your child."
            primaryAction={{
              text: "Schedule Consultation",
              url: "/contact"
            }}
            secondaryAction={{
              text: "Ask a Question",
              url: "/ask-the-dentist/submit"
            }}
            features={[
              "Comprehensive evaluation",
              "Personalized treatment plan",
              "Flexible payment options",
              "15+ years experience"
            ]}
          />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                "name": "Serial Extraction Treatment",
                "description": "Strategic orthodontic treatment involving the removal of specific teeth to create space for proper dental alignment.",
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
                "procedureType": "Orthodontic Treatment",
                "bodyLocation": "Mouth and Teeth",
                "preparation": "Comprehensive dental evaluation, X-rays, and treatment planning",
                "followup": "Regular monitoring appointments every 3-6 months",
                "risks": "Possible over-correction, impacted teeth, need for additional treatment"
              })
            }}
          />
        </div>
      </SectionContainer>
    </div>
  )
}
