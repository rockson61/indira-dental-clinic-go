import { PageTemplate } from "@/components/PageTemplate"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <PageTemplate
      title="Privacy Policy | Indira Dental Clinic Vellore"
      description="Read our privacy policy to understand how Indira Dental Clinic collects, uses, and protects your personal information."
      canonicalUrl="https://www.dentalclinicinvellore.in/privacy-policy"
      breadcrumbItems={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ]}
      pageHeading="Privacy Policy"
      pageSubheading="Last updated: May 1, 2024"
    >
      <Card className="mt-8">
        <CardContent className="prose max-w-none p-6">
          <h2>Introduction</h2>
          <p>
            Indira Dental Clinic ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our website or use our
            services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect personal information that you provide to us, including but not limited to:</p>
          <ul>
            <li>Name, email address, phone number, and other contact details</li>
            <li>Medical and dental history</li>
            <li>Insurance information</li>
            <li>Payment information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing and improving our dental services</li>
            <li>Communicating with you about appointments and treatments</li>
            <li>Processing payments</li>
            <li>Sending promotional emails about new services or special offers</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Healthcare providers involved in your treatment</li>
            <li>Insurance companies for billing purposes</li>
            <li>Third-party service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal information</li>
            <li>Rectify inaccurate personal information</li>
            <li>Request erasure of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request restriction of processing your personal information</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <Link href="mailto:privacy@indiradental.com" className="text-primary hover:underline">
              privacy@indiradental.com
            </Link>
          </p>
        </CardContent>
      </Card>
    </PageTemplate>
  )
}
