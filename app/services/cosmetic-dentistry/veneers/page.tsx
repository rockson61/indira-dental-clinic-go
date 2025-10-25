import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dental Veneers | Porcelain & Composite | Indira Dental Clinic Vellore",
  description:
    "Transform your smile with custom dental veneers at Indira Dental Clinic. Our expert dentists provide porcelain and composite veneers for a perfect smile in Vellore.",
}

export default function VeneersPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Dental Veneers</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          <strong>Dental veneers</strong> are thin, custom-made shells designed to cover the front surface of teeth,
          improving their appearance by changing their color, shape, size, or length. At Indira Dental Clinic in
          Vellore, we offer both porcelain and composite veneers to help you achieve the smile of your dreams.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What are Dental Veneers?</h2>
            <p>
              Veneers are wafer-thin, custom-made shells crafted from tooth-colored materials designed to cover the
              front surface of teeth. They're bonded to the front of the teeth, changing their color, shape, size, or
              length and creating an improved smile instantly.
            </p>
            <p className="mt-4">At Indira Dental Clinic, we offer two types of veneers:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Porcelain Veneers:</strong> Highly stain-resistant and mimic the light-reflecting properties of
                natural teeth
              </li>
              <li>
                <strong>Composite Resin Veneers:</strong> Applied directly to teeth, requiring less enamel removal but
                less durable than porcelain
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Dental Veneers Before and After"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">When are Dental Veneers Recommended?</h2>
        <p>Our dentists may recommend veneers to correct:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Teeth that are discolored due to root canal treatment, stains from tetracycline or other drugs, excessive
            fluoride, or large resin fillings
          </li>
          <li>Teeth that are worn down, chipped, or broken</li>
          <li>Teeth that are misaligned, uneven, or irregularly shaped</li>
          <li>Teeth with gaps between them</li>
          <li>Teeth that haven't responded well to professional whitening</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">The Veneer Procedure</h3>
          <p className="mb-4">Getting veneers usually requires three trips to the dentist:</p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Consultation and Planning:</strong>
              <p>
                During this initial visit, you'll discuss your goals with our dentist. We'll examine your teeth to
                ensure veneers are appropriate for you and discuss the procedure in detail.
              </p>
            </li>
            <li>
              <strong>Preparation:</strong>
              <p>
                To prepare a tooth for a veneer, we'll remove about 0.5mm of enamel from the tooth surface. Next, we'll
                make an impression of your tooth to create your custom veneer. For porcelain veneers, we'll place
                temporary veneers while your permanent ones are being made.
              </p>
            </li>
            <li>
              <strong>Bonding:</strong>
              <p>
                Before permanently cementing the veneer to your tooth, we'll temporarily place it to examine its fit and
                color. We'll repeatedly remove and trim the veneer until it fits perfectly. Once satisfied, we'll clean,
                polish, and etch your tooth to create a strong bonding surface. Special cement is applied to the veneer,
                which is then placed on your tooth. Once properly positioned, a special light is used to activate
                chemicals in the cement, causing it to harden quickly. Finally, we'll remove any excess cement, evaluate
                your bite, and make any necessary adjustments.
              </p>
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Porcelain vs. Composite Veneers</h2>
        <table className="w-full border-collapse my-6">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Feature</th>
              <th className="border p-2 text-left">Porcelain Veneers</th>
              <th className="border p-2 text-left">Composite Veneers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Durability</td>
              <td className="border p-2">10-15 years with proper care</td>
              <td className="border p-2">5-7 years with proper care</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Appearance</td>
              <td className="border p-2">Most natural-looking, translucent</td>
              <td className="border p-2">Good, but less translucent</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Stain Resistance</td>
              <td className="border p-2">Excellent</td>
              <td className="border p-2">Good, but may stain over time</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Procedure Time</td>
              <td className="border p-2">2-3 visits</td>
              <td className="border p-2">Usually 1 visit</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Tooth Preparation</td>
              <td className="border p-2">Requires more enamel removal</td>
              <td className="border p-2">Minimal enamel removal</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Cost</td>
              <td className="border p-2">Higher</td>
              <td className="border p-2">Lower</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Repairability</td>
              <td className="border p-2">Usually need replacement if damaged</td>
              <td className="border p-2">Can often be repaired</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits of Dental Veneers</h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Natural Appearance</h3>
            <p>Provide a natural tooth appearance with excellent color matching</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Stain Resistant</h3>
            <p>Porcelain veneers resist stains better than natural teeth</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Conservative Approach</h3>
            <p>Less invasive than crowns but provide similar aesthetic benefits</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Gum Tolerance</h3>
            <p>Gum tissue tolerates porcelain well, reducing irritation</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Versatile Solution</h3>
            <p>Address multiple cosmetic issues with a single treatment</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Immediate Results</h3>
            <p>Transform your smile in just a few appointments</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Caring for Your Veneers</h2>
        <p>To ensure the longevity of your veneers:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Maintain good oral hygiene with regular brushing and flossing</li>
          <li>Avoid biting on hard objects like ice, pens, or fingernails</li>
          <li>Don't use your teeth as tools to open packages</li>
          <li>Wear a mouthguard if you grind your teeth at night</li>
          <li>Visit your dentist regularly for check-ups and cleanings</li>
          <li>Consider limiting staining foods and beverages (coffee, tea, red wine)</li>
        </ul>

        <blockquote className="bg-blue-50 p-4 border-l-4 border-blue-500 my-6">
          <p className="italic">
            "According to the{" "}
            <a
              href="https://www.ada.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              American Dental Association
            </a>
            , veneers are a popular choice for those looking to improve their smile with minimal invasiveness. With
            proper care, they can provide a beautiful, natural-looking smile for many years."
          </p>
        </blockquote>

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Patient Testimonial</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="italic mb-2">
              "I was always self-conscious about my discolored and slightly crooked front teeth. After getting porcelain
              veneers at Indira Dental Clinic, I can't stop smiling! Dr. Rockson and his team were professional, gentle,
              and delivered results that exceeded my expectations. My new smile has boosted my confidence tremendously!"
            </p>
            <p className="font-medium">- Ramesh P., Vellore</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Cosmetic Dentistry Services</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <Link href="/services/cosmetic-dentistry/bonding" className="text-blue-600 hover:underline">
              Dental Bonding
            </Link>
          </li>
          <li>
            <Link href="/services/cosmetic-dentistry/smile-makeover" className="text-blue-600 hover:underline">
              Smile Makeover
            </Link>
          </li>
          <li>
            <Link href="/services/cosmetic-dentistry/teeth-whitening" className="text-blue-600 hover:underline">
              Teeth Whitening
            </Link>
          </li>
        </ul>

        <div className="bg-primary/10 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Transform Your Smile with Dental Veneers</h3>
          <p className="mb-4">
            Ready to achieve the smile you've always wanted? Contact Indira Dental Clinic in Vellore to schedule a
            consultation and learn if veneers are right for you.
          </p>
          <p className="mb-4">
            <strong>Location:</strong>{" "}
            <a
              href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Indira Dental Clinic, Vellore
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">📅 Book Your Consultation</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/services/cosmetic-dentistry">View All Cosmetic Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
