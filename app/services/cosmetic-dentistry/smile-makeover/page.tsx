import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smile Makeover in Vellore | Transform Your Smile | Dental Clinic",
  description:
    "Get a complete smile makeover in Vellore with our customized cosmetic dentistry treatments. Transform your smile and boost your confidence today!",
  openGraph: {
    title: "Smile Makeover in Vellore | Transform Your Smile | Dental Clinic",
    description:
      "Get a complete smile makeover in Vellore with our customized cosmetic dentistry treatments. Transform your smile and boost your confidence today!",
    url: "https://www.dentalclinicinvellore.in/services/cosmetic-dentistry/smile-makeover",
    siteName: "Dental Clinic in Vellore",
    locale: "en_US",
    type: "website",
  },
}

export default function SmileMakeover() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Smile Makeover in Vellore</h1>
          <p className="text-xl text-gray-600">
            Transform your smile and boost your confidence with our customized smile makeover treatments
          </p>
        </div>

        <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Smile makeover before and after"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>What is a Smile Makeover?</h2>
          <p>
            A smile makeover is a comprehensive cosmetic dental treatment plan that combines multiple procedures to
            enhance the appearance of your smile. It's a personalized approach that addresses various aesthetic concerns
            such as discoloration, misalignment, gaps, chips, cracks, and missing teeth.
          </p>
          <p>
            Each smile makeover is uniquely designed based on your facial features, skin tone, hair color, teeth shape,
            and your specific goals. The result is a harmonious, natural-looking smile that complements your overall
            appearance and boosts your confidence.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-primary font-bold text-xl mb-3">Common Procedures in a Smile Makeover</h3>
            <ul className="space-y-2">
              <li>
                <strong>Teeth Whitening:</strong> Professional whitening to remove stains and brighten your smile
              </li>
              <li>
                <strong>Dental Veneers:</strong> Thin porcelain shells to cover imperfections and create a uniform
                appearance
              </li>
              <li>
                <strong>Dental Bonding:</strong> Composite resin to repair chips, cracks, and small gaps
              </li>
              <li>
                <strong>Dental Crowns:</strong> Custom-made caps to restore damaged or weakened teeth
              </li>
              <li>
                <strong>Dental Implants:</strong> Permanent replacements for missing teeth
              </li>
              <li>
                <strong>Orthodontic Treatment:</strong> Braces or clear aligners to straighten misaligned teeth
              </li>
              <li>
                <strong>Gum Contouring:</strong> Reshaping the gumline to create a balanced smile
              </li>
            </ul>
          </div>

          <h2>The Smile Makeover Process</h2>
          <ol>
            <li>
              <strong>Initial Consultation:</strong> We discuss your goals, examine your oral health, and take
              photographs and digital impressions of your teeth.
            </li>
            <li>
              <strong>Smile Analysis:</strong> We analyze your facial proportions, tooth dimensions, and smile line to
              design the perfect smile for your face.
            </li>
            <li>
              <strong>Treatment Planning:</strong> Based on the analysis, we create a customized treatment plan that
              outlines the procedures, timeline, and cost.
            </li>
            <li>
              <strong>Digital Smile Design:</strong> We use advanced software to create a digital preview of your new
              smile, allowing you to see the expected results before treatment begins.
            </li>
            <li>
              <strong>Treatment Phase:</strong> We perform the planned procedures in a sequence that optimizes results
              and minimizes the number of visits.
            </li>
            <li>
              <strong>Final Refinements:</strong> We make any necessary adjustments to ensure your smile looks natural
              and meets your expectations.
            </li>
            <li>
              <strong>Maintenance Plan:</strong> We provide instructions and a maintenance plan to help you preserve
              your new smile for years to come.
            </li>
          </ol>

          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-primary font-bold text-xl mb-3">Ideal Candidates</h3>
              <p>A smile makeover may be right for you if you have:</p>
              <ul className="space-y-1">
                <li>Discolored or stained teeth</li>
                <li>Chipped, cracked, or worn teeth</li>
                <li>Gaps between teeth</li>
                <li>Misaligned or crooked teeth</li>
                <li>Missing teeth</li>
                <li>Uneven gumline</li>
                <li>Good overall oral health</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-primary font-bold text-xl mb-3">Benefits of a Smile Makeover</h3>
              <ul className="space-y-1">
                <li>Enhanced appearance and confidence</li>
                <li>Improved oral function</li>
                <li>Correction of multiple issues simultaneously</li>
                <li>Customized to your unique features</li>
                <li>Long-lasting results</li>
                <li>Potential improvement in oral health</li>
              </ul>
            </div>
          </div>

          <h2>Popular Smile Makeover Combinations</h2>
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border p-3 text-left">Concern</th>
                  <th className="border p-3 text-left">Recommended Procedures</th>
                  <th className="border p-3 text-left">Expected Results</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Discolored & Misaligned Teeth</td>
                  <td className="border p-3">Teeth Whitening + Clear Aligners</td>
                  <td className="border p-3">Brighter, straighter smile</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Chipped & Stained Teeth</td>
                  <td className="border p-3">Porcelain Veneers</td>
                  <td className="border p-3">Uniform, white, perfectly shaped teeth</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Missing & Discolored Teeth</td>
                  <td className="border p-3">Dental Implants + Teeth Whitening</td>
                  <td className="border p-3">Complete, bright smile with natural-looking replacements</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Gummy Smile & Worn Teeth</td>
                  <td className="border p-3">Gum Contouring + Dental Crowns</td>
                  <td className="border p-3">Balanced gumline with restored tooth structure</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Multiple Small Imperfections</td>
                  <td className="border p-3">Dental Bonding + Teeth Whitening</td>
                  <td className="border p-3">Quick, affordable improvement in overall appearance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Maintaining Your New Smile</h2>
          <p>
            A smile makeover is an investment in your appearance and confidence. To protect this investment and ensure
            long-lasting results, follow these maintenance tips:
          </p>
          <ul>
            <li>
              <strong>Practice Excellent Oral Hygiene:</strong> Brush twice daily, floss daily, and use an antimicrobial
              mouthwash
            </li>
            <li>
              <strong>Attend Regular Dental Check-ups:</strong> Visit your dentist every six months for professional
              cleanings and examinations
            </li>
            <li>
              <strong>Avoid Staining Foods and Beverages:</strong> Limit consumption of coffee, tea, red wine, and
              highly pigmented foods
            </li>
            <li>
              <strong>Don't Smoke:</strong> Smoking stains teeth and compromises oral health
            </li>
            <li>
              <strong>Wear a Nightguard:</strong> If you grind your teeth, wear a custom nightguard to protect your
              dental work
            </li>
            <li>
              <strong>Follow Specific Care Instructions:</strong> Different procedures may require specific maintenance,
              so follow your dentist's recommendations
            </li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6 my-8">
            <div>
              <h3 className="font-bold text-lg">How long does a smile makeover take?</h3>
              <p>
                The duration of a smile makeover varies depending on the procedures involved and your specific needs.
                Simple makeovers involving teeth whitening and bonding may be completed in 1-2 visits. More
                comprehensive makeovers involving veneers, crowns, or implants may take several weeks to months. During
                your consultation, we'll provide a detailed timeline for your specific treatment plan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">How much does a smile makeover cost in Vellore?</h3>
              <p>
                The cost of a smile makeover in Vellore varies widely based on the procedures included in your treatment
                plan. Simple makeovers may start from ₹30,000, while comprehensive makeovers involving multiple
                procedures can range from ₹1,00,000 to ₹3,00,000 or more. We offer flexible payment plans to make your
                smile makeover more affordable.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Is a smile makeover painful?</h3>
              <p>
                Most smile makeover procedures involve minimal discomfort. We use local anesthesia for procedures that
                might cause discomfort, and offer sedation options for anxious patients. Any post-procedure discomfort
                is typically mild and can be managed with over-the-counter pain relievers.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">How long do smile makeover results last?</h3>
              <p>
                With proper care and maintenance, the results of a smile makeover can last for many years. Some
                procedures, like dental implants, can last a lifetime with proper care. Others, like teeth whitening,
                may require periodic touch-ups. During your consultation, we'll discuss the expected longevity of each
                procedure in your treatment plan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Can I see how I'll look before committing to treatment?</h3>
              <p>
                Yes! We use digital smile design technology to create a virtual preview of your new smile. This allows
                you to see the expected results and make any desired adjustments before treatment begins. For some
                procedures, we can also create a physical mock-up that you can try on to experience how your new smile
                will look and feel.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h2 className="text-primary font-bold text-2xl mb-4">Why Choose Us for Your Smile Makeover in Vellore</h2>
            <ul className="space-y-2">
              <li>
                <strong>Experienced Cosmetic Dentists:</strong> Our team specializes in aesthetic dentistry with years
                of experience
              </li>
              <li>
                <strong>Customized Approach:</strong> We design each smile makeover to complement your unique features
              </li>
              <li>
                <strong>Advanced Technology:</strong> We use digital smile design and the latest dental techniques
              </li>
              <li>
                <strong>Comprehensive Care:</strong> All procedures are performed under one roof for your convenience
              </li>
              <li>
                <strong>Natural-Looking Results:</strong> We prioritize creating smiles that look natural and enhance
                your appearance
              </li>
              <li>
                <strong>Flexible Payment Options:</strong> We offer various payment plans to make your dream smile
                affordable
              </li>
            </ul>
          </div>

          <div className="text-center my-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Smile?</h2>
            <p className="mb-6">
              Schedule a consultation to discuss your smile makeover options and start your journey to a more confident
              you.
            </p>
            <Link
              href="/appointment"
              className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition duration-300"
            >
              Book Your Smile Consultation
            </Link>
          </div>

          <div className="border-t pt-8 mt-12">
            <h3 className="font-bold text-xl mb-4">Related Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cosmetic-dentistry/bonding" className="text-primary hover:underline">
                  Dental Bonding
                </Link>
              </li>
              <li>
                <Link href="/services/teeth-whitening" className="text-primary hover:underline">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/services/dental-implants/single-tooth-implants" className="text-primary hover:underline">
                  Single Tooth Implants
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
