import type React from "react"
import type { Metadata } from "next"
import { Inter, Exo_2 } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ConnectWithDentist } from "@/components/sections/connect-with-dentist"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const exo2 = Exo_2({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-exo-2"
})

export const metadata: Metadata = {
  title: "Indira Dental Clinic | Best Dentist in Vellore - Dr. Rockson Samuel",
  description:
    "Leading dental care in Vellore, Tamil Nadu. Expert treatments including RCT, braces, implants, cosmetic dentistry by Dr. Rockson Samuel. 15+ years experience. Book appointment: 7010650063",
  keywords: [
    "dentist in Vellore",
    "dental clinic Vellore",
    "Dr Rockson Samuel",
    "Indira Dental Clinic",
    "root canal treatment Vellore",
    "dental implants Vellore",
    "orthodontist Vellore",
    "teeth whitening Vellore",
    "cosmetic dentistry Vellore",
    "emergency dental care Vellore",
    "best dentist Vellore",
    "Gandhi Nagar dental clinic",
    "Katpadi dentist",
  ],
  authors: [{ name: "Indira Dental Clinic" }],
  creator: "Indira Dental Clinic",
  publisher: "Indira Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dentalclinicinvellore.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indira Dental Clinic | Best Dentist in Vellore - Dr. Rockson Samuel",
    description:
      "Leading dental care in Vellore. Expert treatments including RCT, braces, implants, cosmetic dentistry. 15+ years experience. Book: 7010650063",
    url: "https://www.dentalclinicinvellore.in",
    siteName: "Indira Dental Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indira Dental Clinic - Best Dentist in Vellore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indira Dental Clinic | Best Dentist in Vellore",
    description: "Expert dental care in Vellore. RCT, Implants, Braces, Cosmetic Dentistry. Book: 7010650063",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://www.dentalclinicinvellore.in/",
              "@type": "LocalBusiness",
              name: "Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings",
              description: "Indira Dental Clinic, led by the top dentist Dr. Rockson Samuel in Vellore, Tamil Nadu, offers comprehensive dental care tailored to meet all your oral health needs. Specializing in Root Canal Treatment (RCT), braces for teeth alignment, high-quality dental implants, and precise dental fillings, our clinic is dedicated to providing exceptional dentistry services. We use state-of-the-art technology and advanced techniques in a comfortable and welcoming environment. Whether you seek preventive care or cosmetic enhancements, Indira Dental Clinic ensures personalized attention and effective, high-standard treatments. Visit us for all your dental care needs in Vellore today and smile with confidence!",
              url: "https://www.dentalclinicinvellore.in/",
              telephone: "+91 70106 50063",
              email: "rockson68@hotmail.com",
              image: "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
              hasMap: "https://maps.google.com/maps?cid=14385819900995297414",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
                addressLocality: "Vellore",
                addressRegion: "IN",
                postalCode: "632006",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                ratingCount: "126",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "SUNDAY",
                  opens: "10:00:00",
                  closes: "13:30:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "MONDAY",
                  opens: "10:00:00",
                  closes: "20:00:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "TUESDAY",
                  opens: "10:00:00",
                  closes: "20:00:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "WEDNESDAY",
                  opens: "10:00:00",
                  closes: "20:00:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "THURSDAY",
                  opens: "10:00:00",
                  closes: "20:00:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "FRIDAY",
                  opens: "10:00:00",
                  closes: "20:00:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "SATURDAY",
                  opens: "10:00:00",
                  closes: "20:00:00",
                },
              ],
              makesOffer: [
                { "@type": "Offer", name: "Dental clinic" },
                { "@type": "Offer", name: "Dentist" },
                { "@type": "Offer", name: "Endodontist" },
                { "@type": "Offer", name: "Cosmetic dentist" },
                { "@type": "Offer", name: "Dental hygienist" },
                { "@type": "Offer", name: "Dental radiology" },
                { "@type": "Offer", name: "Paediatric Dentist" },
                { "@type": "Offer", name: "Dental implants provider" },
                { "@type": "Offer", name: "Emergency dental service" },
                { "@type": "Offer", name: "Dental implants periodontist" },
              ],
              sameAs: [
                "https://velloredental.com/",
                "https://www.dentalclinicinvellore.in/",
                "https://www.instagram.com/indiradentalvellore/",
                "https://www.facebook.com/indiradentalclinicvellore/",
                "https://in.pinterest.com/indradentalclinic/",
                "https://www.justdial.com/Vellore/Indira-Dental-Clinic-Dr-Rockson-Samuel-Rct-Braces-Implants-Dental-Fillings-Near-Shell-Petrol-Pump-Katpadi-Vellore/9999PX416-X416-240129151733-B2V8_BZDET",
                "https://dentalreach.today/the-top-10-influencers-of-dentistry/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${exo2.variable} font-sans antialiased`}>
        <Header />
        {children}
        <ConnectWithDentist />
        <Footer />
      </body>
    </html>
  )
}
