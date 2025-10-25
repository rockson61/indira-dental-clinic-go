import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Smile, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Invisalign | Clear Aligners | Indira Dental Clinic Vellore',
  description: 'Invisalign clear aligners in Vellore. Invisible teeth straightening by Dr. Rockson Samuel. No metal braces. Removable, comfortable. Price: ₹1,50,000-₹3,50,000. Call: 7010650063',
  keywords: 'invisalign vellore, clear aligners, invisible braces, teeth straightening, orthodontics, Dr Rockson Samuel, clear braces',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/invisalign' },
}

export default function InvisalignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Invisalign', href: '/services/orthodontics/invisalign' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700"><Eye className="w-4 h-4 inline mr-1" />Nearly Invisible</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Invisalign Clear Aligners</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Straighten teeth invisibly without metal braces. Removable, comfortable, and effective orthodontic treatment.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Why Choose Invisalign?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Virtually Invisible', desc: 'Clear plastic aligners are nearly invisible when worn' },
                  { title: 'Removable', desc: 'Take out for eating, brushing, and special occasions' },
                  { title: 'Comfortable', desc: 'No metal wires or brackets to irritate mouth' },
                  { title: 'Predictable Results', desc: '3D digital treatment plan shows final outcome' },
                  { title: 'Easy Hygiene', desc: 'Brush and floss normally, no food restrictions' },
                  { title: 'Fewer Visits', desc: 'Check-ups every 6-8 weeks vs 3-4 weeks for braces' }
                ].map((benefit, idx) => (
                  <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" />{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div><div className="font-bold text-2xl text-blue-700 mb-1">₹1,50,000 - ₹3,50,000</div><div className="text-sm text-gray-600">Complete treatment</div></div>
                  <div><div className="font-bold text-2xl text-blue-700 mb-1">12-24 months</div><div className="text-sm text-gray-600">Average duration</div></div>
                  <div><div className="font-bold text-2xl text-blue-700 mb-1">18-30 sets</div><div className="text-sm text-gray-600">Aligner trays</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <ModernCardContent className="p-8 text-center">
              <Smile className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Invisalign Journey</h2>
              <p className="text-gray-700 mb-6">Get straighter teeth without anyone noticing. Free 3D digital smile preview consultation with Dr. Rockson Samuel.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free 3D Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
                  <Link href="https://wa.me/917010650063?text=I%20want%20Invisalign" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
                </Button>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </SectionContainer>
    </div>
  )
}
