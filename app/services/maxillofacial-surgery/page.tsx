import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Scissors,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  AlertTriangle,
  Heart,
  Award,
  Users,
  Star,
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Oral & Maxillofacial Surgery in Vellore | Dr. Rockson Samuel",
  description:
    "Expert oral and maxillofacial surgery in Vellore. Wisdom teeth removal, dental implants, jaw surgery, and facial trauma treatment by Dr. Rockson Samuel with advanced surgical techniques.",
  keywords: [
    "oral surgery vellore",
    "maxillofacial surgery",
    "wisdom teeth removal vellore",
    "dental implant surgery",
    "jaw surgery vellore",
    "facial trauma treatment",
    "Dr. Rockson Samuel",
    "oral surgeon vellore",
  ],
  openGraph: {
    title: "Oral & Maxillofacial Surgery in Vellore | Dr. Rockson Samuel",
    description: "Expert oral and maxillofacial surgery with advanced techniques and comprehensive care.",
    images: [{ url: "/oral-surgery-procedure.jpg", width: 1200, height: 630 }],
  },
}

const surgicalServices = [
  {
    name: "Wisdom Teeth Removal",
    description: "Safe extraction of impacted or problematic wisdom teeth using minimally invasive techniques",
    price: "₹5,000 - ₹15,000",
    duration: "30-60 minutes",
    complexity: "Simple to Complex",
    features: ["3D imaging", "Sedation options", "Minimal discomfort", "Same-day procedure"],
  },
  {
    name: "Dental Implant Surgery",
    description: "Precise placement of titanium implants for permanent tooth replacement",
    price: "₹25,000 - ₹50,000",
    duration: "60-90 minutes",
    complexity: "Moderate",
    features: ["Computer-guided surgery", "Immediate loading", "Bone grafting", "Lifetime warranty"],
  },
  {
    name: "Jaw Surgery (Orthognathic)",
    description: "Corrective surgery for jaw alignment, bite problems, and facial asymmetry",
    price: "₹1,50,000 - ₹3,00,000",
    duration: "2-4 hours",
    complexity: "Complex",
    features: ["3D surgical planning", "Hospital facility", "Orthodontic coordination", "Functional improvement"],
  },
  {
    name: "TMJ Surgery",
    description: "Treatment for temporomandibular joint disorders and jaw pain",
    price: "₹50,000 - ₹1,50,000",
    duration: "1-3 hours",
    complexity: "Moderate to Complex",
    features: ["Arthroscopic surgery", "Joint replacement", "Pain relief", "Improved function"],
  },
  {
    name: "Facial Trauma Repair",
    description: "Emergency treatment for facial injuries, fractures, and soft tissue damage",
    price: "₹25,000 - ₹1,00,000",
    duration: "1-4 hours",
    complexity: "Variable",
    features: ["24/7 emergency care", "Reconstructive surgery", "Scar minimization", "Functional restoration"],
  },
  {
    name: "Bone Grafting",
    description: "Bone augmentation procedures for implant placement and ridge preservation",
    price: "₹15,000 - ₹40,000",
    duration: "45-90 minutes",
    complexity: "Moderate",
    features: ["Autogenous grafts", "Synthetic materials", "Membrane placement", "Healing optimization"],
  },
  {
    name: "Cyst & Tumor Removal",
    description: "Surgical removal of oral cysts, benign tumors, and pathological lesions",
    price: "₹20,000 - ₹75,000",
    duration: "60-120 minutes",
    complexity: "Moderate to Complex",
    features: ["Histopathological analysis", "Minimal scarring", "Complete excision", "Reconstruction if needed"],
  },
  {
    name: "Sleep Apnea Surgery",
    description: "Surgical treatment for obstructive sleep apnea and breathing disorders",
    price: "₹75,000 - ₹2,00,000",
    duration: "2-3 hours",
    complexity: "Complex",
    features: ["Airway evaluation", "Multiple techniques", "Sleep study coordination", "Life-changing results"],
  },
]

const surgicalProcess = [
  {
    step: 1,
    title: "Comprehensive Consultation",
    description: "Detailed examination, medical history review, and treatment planning",
    duration: "45-60 minutes",
    includes: ["Clinical examination", "3D imaging", "Risk assessment", "Treatment options"],
  },
  {
    step: 2,
    title: "Pre-Surgical Preparation",
    description: "Medical clearance, pre-medication, and surgical site preparation",
    duration: "30-45 minutes",
    includes: ["Vital signs monitoring", "IV access", "Anesthesia preparation", "Surgical marking"],
  },
  {
    step: 3,
    title: "Anesthesia Administration",
    description: "Safe and comfortable anesthesia tailored to the procedure complexity",
    duration: "15-30 minutes",
    includes: ["Local anesthesia", "Sedation options", "General anesthesia", "Monitoring setup"],
  },
  {
    step: 4,
    title: "Surgical Procedure",
    description: "Precise surgical intervention using advanced techniques and equipment",
    duration: "Variable",
    includes: ["Minimally invasive approach", "Real-time monitoring", "Tissue preservation", "Hemostasis control"],
  },
  {
    step: 5,
    title: "Wound Closure",
    description: "Careful closure with appropriate suturing techniques for optimal healing",
    duration: "15-30 minutes",
    includes: ["Layer-by-layer closure", "Absorbable sutures", "Pressure dressing", "Hemostasis verification"],
  },
  {
    step: 6,
    title: "Recovery Monitoring",
    description: "Post-operative monitoring until patient is stable and comfortable",
    duration: "30-120 minutes",
    includes: ["Vital signs monitoring", "Pain assessment", "Bleeding check", "Discharge planning"],
  },
]

const anesthesiaOptions = [
  {
    type: "Local Anesthesia",
    description: "Numbing of the surgical area while remaining fully conscious",
    suitability: "Simple procedures",
    advantages: ["Quick recovery", "No fasting required", "Cost-effective", "Minimal side effects"],
  },
  {
    type: "Conscious Sedation",
    description: "Relaxation medication combined with local anesthesia",
    suitability: "Moderate procedures",
    advantages: ["Reduced anxiety", "Comfortable experience", "Partial memory loss", "Quick recovery"],
  },
  {
    type: "IV Sedation",
    description: "Deeper sedation through intravenous medication",
    suitability: "Complex procedures",
    advantages: ["Deep relaxation", "No memory of procedure", "Adjustable depth", "Professional monitoring"],
  },
  {
    type: "General Anesthesia",
    description: "Complete unconsciousness for major surgical procedures",
    suitability: "Major surgeries",
    advantages: ["Complete comfort", "No awareness", "Optimal surgical conditions", "Airway protection"],
  },
]

const recoveryPhases = [
  {
    phase: "Immediate (0-24 hours)",
    focus: "Pain control and bleeding prevention",
    instructions: [
      "Apply ice packs for 20 minutes every hour",
      "Take prescribed pain medication as directed",
      "Avoid spitting, rinsing, or using straws",
      "Eat soft, cold foods only",
      "Rest with head elevated",
    ],
    expectations: "Some swelling, discomfort, and minor bleeding is normal",
  },
  {
    phase: "Early Recovery (1-7 days)",
    focus: "Swelling management and wound healing",
    instructions: [
      "Continue ice therapy for first 48 hours",
      "Switch to warm compresses after 48 hours",
      "Gentle salt water rinses after 24 hours",
      "Gradually introduce soft foods",
      "Maintain oral hygiene carefully",
    ],
    expectations: "Peak swelling at 48-72 hours, then gradual improvement",
  },
  {
    phase: "Intermediate (1-2 weeks)",
    focus: "Tissue healing and function restoration",
    instructions: [
      "Resume normal oral hygiene",
      "Gradually return to regular diet",
      "Light physical activity only",
      "Attend follow-up appointments",
      "Watch for signs of complications",
    ],
    expectations: "Significant improvement in comfort and function",
  },
  {
    phase: "Complete Healing (2-8 weeks)",
    focus: "Full recovery and normal function",
    instructions: [
      "Return to normal activities",
      "Complete any prescribed medications",
      "Final follow-up appointment",
      "Resume all foods and activities",
      "Long-term care instructions",
    ],
    expectations: "Full healing and return to normal function",
  },
]

const complications = [
  {
    complication: "Dry Socket",
    probability: "2-5%",
    symptoms: "Severe pain 2-3 days after extraction",
    management: "Medicated dressing and pain control",
    prevention: "Follow post-op instructions carefully",
  },
  {
    complication: "Infection",
    probability: "1-3%",
    symptoms: "Increased pain, swelling, fever, bad taste",
    management: "Antibiotics and drainage if needed",
    prevention: "Good oral hygiene and prescribed antibiotics",
  },
  {
    complication: "Nerve Damage",
    probability: "<1%",
    symptoms: "Numbness or tingling in lip, tongue, or chin",
    management: "Usually temporary, may require specialist care",
    prevention: "Careful surgical technique and 3D imaging",
  },
  {
    complication: "Excessive Bleeding",
    probability: "1-2%",
    symptoms: "Continuous bleeding beyond 24 hours",
    management: "Pressure, sutures, or cauterization",
    prevention: "Avoid blood thinners and follow instructions",
  },
]

const faqData = [
  {
    question: "How painful is oral surgery?",
    answer:
      "Modern oral surgery is performed under appropriate anesthesia, so you won't feel pain during the procedure. Post-operative discomfort is manageable with prescribed medications and typically resolves within a few days to a week.",
  },
  {
    question: "How long does it take to recover from oral surgery?",
    answer:
      "Recovery time varies by procedure complexity. Simple extractions may heal in 3-7 days, while complex surgeries like jaw surgery may take 6-8 weeks for complete healing. We provide detailed recovery timelines for each procedure.",
  },
  {
    question: "What should I eat after oral surgery?",
    answer:
      "Start with soft, cold foods like ice cream, yogurt, and smoothies. Gradually progress to soft foods like pasta, eggs, and cooked vegetables. Avoid hard, crunchy, spicy, or very hot foods until healing is complete.",
  },
  {
    question: "When can I return to work after surgery?",
    answer:
      "This depends on the procedure and your job requirements. Simple procedures may allow return in 1-2 days, while complex surgeries may require 1-2 weeks off. We'll provide specific guidance based on your procedure and occupation.",
  },
  {
    question: "Are there risks associated with oral surgery?",
    answer:
      "All surgeries carry some risks, but serious complications are rare with proper technique and care. Common minor complications include swelling, bruising, and temporary numbness. We discuss all risks during your consultation.",
  },
  {
    question: "Do I need someone to drive me home after surgery?",
    answer:
      "Yes, if you receive sedation or general anesthesia, you must have someone drive you home and stay with you for at least 24 hours. Local anesthesia only may not require a driver, but we recommend it for safety.",
  },
  {
    question: "How much does oral surgery cost?",
    answer:
      "Costs vary significantly based on the procedure complexity, anesthesia type, and individual factors. We provide detailed cost estimates during consultation and offer payment plans and insurance assistance.",
  },
  {
    question: "What is the success rate of oral surgery procedures?",
    answer:
      "Success rates are generally very high, typically 95-99% for most procedures when performed by experienced surgeons. Specific success rates vary by procedure type and individual factors, which we discuss during consultation.",
  },
  {
    question: "Can I smoke after oral surgery?",
    answer:
      "Absolutely not. Smoking significantly increases the risk of complications, delays healing, and can cause dry socket. We strongly recommend quitting smoking at least 2 weeks before and after surgery for optimal healing.",
  },
  {
    question: "What if I have a medical condition or take medications?",
    answer:
      "We carefully review your medical history and medications during consultation. Some conditions or medications may require special precautions or modifications to your treatment plan. Always inform us of any health changes.",
  },
]

export default function MaxillofacialSurgeryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-indigo-100 text-indigo-800 mb-4">Oral & Maxillofacial Surgery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Advanced Oral Surgery in Vellore
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert oral and maxillofacial surgery by Dr. Rockson Samuel. From wisdom teeth removal to complex jaw
              surgery, we provide comprehensive surgical care with advanced techniques and compassionate service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Link href="tel:7010650063">
                  <Phone className="w-4 h-4 mr-2" />
                  Consultation: 7010650063
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 bg-transparent"
              >
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Surgery
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">2000+</div>
                <div className="text-sm text-gray-600">Surgeries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <GlassCard className="p-8 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
              <Image
                src="/oral-surgery-procedure.jpg"
                alt="Oral Surgery Procedure"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Surgical Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive oral and maxillofacial surgery services using state-of-the-art technology and proven
            techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {surgicalServices.map((service, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Scissors className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-indigo-700 mb-2 group-hover:text-purple-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price:</span>
                    <span className="font-semibold text-indigo-600">{service.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Complexity:</span>
                    <span className="font-semibold text-purple-600">{service.complexity}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Surgical Process */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Surgical Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures safe, effective surgery with optimal outcomes and patient comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surgicalProcess.map((step, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-indigo-700 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-3">
                  <Clock className="w-3 h-3" />
                  <span>{step.duration}</span>
                </div>
              </div>

              <div className="space-y-1">
                {step.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Anesthesia Options */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Anesthesia & Comfort Options</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer various anesthesia options to ensure your comfort and safety during surgical procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {anesthesiaOptions.map((option, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-indigo-700 mb-2">{option.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                <Badge className="bg-purple-100 text-purple-800 text-xs mb-4">{option.suitability}</Badge>
              </div>

              <div className="space-y-1">
                {option.advantages.map((advantage, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Recovery Guidelines */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Recovery Guidelines</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive recovery instructions to ensure optimal healing and minimize complications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recoveryPhases.map((phase, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-indigo-700 mb-2">{phase.phase}</h3>
                <p className="text-purple-600 text-sm font-medium mb-3">{phase.focus}</p>
              </div>

              <div className="space-y-2 mb-4">
                {phase.instructions.map((instruction, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{instruction}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-indigo-100">
                <p className="text-xs text-gray-500 italic">{phase.expectations}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Complications Management */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Potential Complications & Management</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            While complications are rare, we're prepared to manage any issues that may arise during your recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {complications.map((comp, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-indigo-700">{comp.complication}</h3>
                    <Badge variant="outline" className="border-orange-300 text-orange-600 text-xs">
                      {comp.probability}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Symptoms: </span>
                      <span className="text-gray-600">{comp.symptoms}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Management: </span>
                      <span className="text-gray-600">{comp.management}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Prevention: </span>
                      <span className="text-gray-600">{comp.prevention}</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about oral and maxillofacial surgery procedures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-semibold text-indigo-700 group-hover:text-purple-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center group-open:rotate-45 transition-transform">
                      <span className="text-indigo-600 font-bold">+</span>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-indigo-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="pb-16">
        <GlassCard className="text-center p-8 md:p-12 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Expert Surgical Care You Can Trust</h2>
            <p className="text-gray-600 mb-8">
              Dr. Rockson Samuel combines years of surgical expertise with advanced technology to provide safe,
              effective oral and maxillofacial surgery. Schedule your consultation to discuss your surgical needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Link href="tel:7010650063">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 7010650063
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 bg-transparent"
              >
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="text-sm text-gray-600">2000+ Successful Surgeries</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-indigo-600" />
                <span className="text-sm text-gray-600">99% Success Rate</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <span className="text-sm text-gray-600">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </SectionContainer>
    </div>
  )
}
