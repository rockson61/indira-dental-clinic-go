import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { CheckCircle, Clock, Shield, Star, Users, Award, ArrowRight, Phone, Calendar, Smile } from 'lucide-react'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Invisalign Treatment in Vellore | Clear Aligners | Dr. Rockson Samuel',
  description: 'Get Invisalign clear aligners in Vellore at 50% lower cost. Invisible braces treatment by Dr. Rockson Samuel with 15+ years experience. Pain-free teeth straightening.',
  keywords: 'Invisalign Vellore, clear aligners Vellore, invisible braces Vellore, teeth straightening Vellore, orthodontic treatment Vellore, Dr. Rockson Samuel',
  openGraph: {
    title: 'Invisalign Treatment in Vellore | Clear Aligners',
    description: 'Get Invisalign clear aligners in Vellore at 50% lower cost. Invisible braces treatment by Dr. Rockson Samuel.',
    type: 'website',
    url: 'https://www.dentalclinicinvellore.in/services/orthodontics/invisalign',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/invisalign',
  },
}

export default function InvisalignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8 pb-4">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Orthodontics', href: '/services/orthodontics' },
            { title: 'Invisalign', href: '/services/orthodontics/invisalign' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-200">
                <Smile className="w-4 h-4 mr-2" />
                Invisible Treatment
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Invisalign Treatment in Vellore
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Straighten your teeth invisibly with Invisalign clear aligners. Get professional orthodontic treatment in Vellore at 50% lower cost with Dr. Rockson Samuel.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-teal-600" />
                <span>6-18 months treatment</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-teal-600" />
                <span>Removable aligners</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 mr-2 text-teal-600" />
                <span>15+ years experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/ask-the-dentist/submit">
                <Button variant="outline" size="lg" className="border-teal-300 text-teal-700 hover:bg-teal-50 px-8 py-3">
                  Ask Dr. Samuel
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Treatment Cost</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">₹80,000 - ₹1,50,000</div>
                  <p className="text-gray-600">Complete Invisalign treatment</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Initial Consultation</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Treatment Planning</span>
                    <span className="font-semibold">₹5,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Aligners (Set of 20)</span>
                    <span className="font-semibold">₹60,000 - ₹1,20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Retainers</span>
                    <span className="font-semibold">₹15,000 - ₹25,000</span>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Save 50% compared to other cities</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* What is Invisalign */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Invisalign?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Invisalign is a revolutionary orthodontic treatment that uses clear, removable aligners to straighten teeth without traditional metal braces. These custom-made aligners gradually move your teeth into the desired position.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Nearly Invisible</h3>
                  <p className="text-gray-600">Clear aligners are barely noticeable, allowing you to smile confidently during treatment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Removable</h3>
                  <p className="text-gray-600">Take out aligners for eating, drinking, brushing, and special occasions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Comfortable</h3>
                  <p className="text-gray-600">Smooth plastic aligners are more comfortable than traditional braces.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/invisalign-aligners.jpg"
              alt="Invisalign clear aligners"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Invisalign Treatment Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our step-by-step process ensures optimal results with your Invisalign treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Planning</h3>
            <p className="text-gray-600">Comprehensive examination, 3D scans, and treatment planning using advanced technology.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Aligners</h3>
            <p className="text-gray-600">Your custom aligners are created based on your unique treatment plan.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wear & Progress</h3>
            <p className="text-gray-600">Wear aligners 20-22 hours daily, changing every 1-2 weeks as directed.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Retainers</h3>
            <p className="text-gray-600">Wear retainers to maintain your new smile and prevent teeth from shifting back.</p>
          </ModernCard>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Invisalign</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Smile className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aesthetic Appeal</h3>
                  <p className="text-gray-600">Clear aligners are virtually invisible, allowing you to maintain your confidence throughout treatment.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifestyle Friendly</h3>
                  <p className="text-gray-600">Remove aligners for eating, drinking, brushing, and special occasions without restrictions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Maintenance</h3>
                  <p className="text-gray-600">Simple cleaning routine and no dietary restrictions compared to traditional braces.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Duration</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">6-18 Months</div>
              <p className="text-gray-600">Average treatment time depending on the complexity of your case.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Rate</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">96%</div>
              <p className="text-gray-600">High success rate for properly selected cases with good compliance.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comfort Level</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">High</div>
              <p className="text-gray-600">Smooth plastic aligners are more comfortable than traditional metal braces.</p>
            </ModernCard>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common questions about Invisalign answered by Dr. Rockson Samuel</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How long does Invisalign treatment take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Invisalign treatment typically takes 6-18 months, depending on the complexity of your case. Simple cases may be completed in 6 months, while more complex cases may take up to 18 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How much does Invisalign cost in Vellore?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Invisalign treatment in Vellore costs ₹80,000 - ₹1,50,000, which is 50% less than in major cities like Mumbai or Delhi. This includes consultation, treatment planning, aligners, and retainers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Can I eat and drink with Invisalign?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You should remove your aligners before eating or drinking anything except water. This prevents staining and damage to the aligners while allowing you to enjoy all your favorite foods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Is Invisalign suitable for all orthodontic cases?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Invisalign is suitable for most orthodontic cases, including crowding, spacing, and mild to moderate bite issues. However, complex cases may require traditional braces. We'll assess your case during consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How often do I need to change aligners?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Most patients change their aligners every 1-2 weeks as directed by Dr. Samuel. The exact schedule depends on your treatment plan and how well your teeth are moving.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionContainer>

      {/* Internal Linking Widgets */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RelevantQAWidget
            title="Invisalign Questions"
            questions={[
              {
                id: '1',
                title: 'How long does Invisalign treatment take?',
                slug: 'invisalign-treatment-duration',
                excerpt: 'Invisalign treatment typically takes 6-18 months depending on case complexity.',
                helpfulVotes: 65,
                views: 1800,
                createdAt: '2023-12-25T14:30:00Z'
              },
              {
                id: '2',
                title: 'Can I eat with Invisalign aligners?',
                slug: 'invisalign-eating-guidelines',
                excerpt: 'You should remove aligners before eating to prevent damage and staining.',
                helpfulVotes: 58,
                views: 1600,
                createdAt: '2023-12-22T11:20:00Z'
              },
              {
                id: '3',
                title: 'What is the cost of Invisalign in Vellore?',
                slug: 'invisalign-cost-vellore',
                excerpt: 'Invisalign costs ₹80,000-1,50,000 in Vellore, 50% less than other cities.',
                helpfulVotes: 72,
                views: 2000,
                createdAt: '2023-12-20T09:15:00Z'
              }
            ]}
            serviceName="Invisalign"
          />

          <CompactServiceWidget
            title="Related Orthodontic Services"
            description="Complementary orthodontic treatments available at our clinic."
            services={[
              { name: "Traditional Braces", slug: "orthodontics/traditional-braces", price: "₹40,000 - ₹80,000", duration: "18-24 months" },
              { name: "Serial Extraction", slug: "orthodontics/serial-extraction", price: "₹5,000 - ₹15,000", duration: "6-12 months" },
              { name: "Space Maintainer", slug: "orthodontics/space-maintainer", price: "₹3,000 - ₹8,000", duration: "6-18 months" },
              { name: "Retainers", slug: "orthodontics/retainers", price: "₹5,000 - ₹15,000", duration: "Lifetime" }
            ]}
            ctaText="View All Orthodontic Services"
            ctaLink="/services/orthodontics"
          />
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTAWidget
        title="Ready for Your Perfect Smile?"
        description="Transform your smile with Invisalign clear aligners. Get expert orthodontic treatment from Dr. Rockson Samuel at 50% lower costs."
        primaryAction={{
          text: "Book Free Consultation",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Ask About Invisalign",
          href: "/ask-the-dentist/submit"
        }}
        benefits={[
          "Free consultation and 3D scans",
          "Flexible payment plans available",
          "15+ years orthodontic experience",
          "Nearly invisible treatment"
        ]}
        showRating={true}
        showAvailability={true}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Invisalign Treatment",
            "description": "Clear aligner orthodontic treatment for teeth straightening",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Indira Dental Clinic",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vellore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India"
              }
            },
            "procedureType": "Orthodontic Treatment",
            "bodyLocation": "Teeth",
            "preparation": "Consultation, 3D scans, treatment planning",
            "followup": "Regular checkups and retainer wear",
            "cost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "80000-150000"
            }
          })
        }}
      />
    </div>
  )
}