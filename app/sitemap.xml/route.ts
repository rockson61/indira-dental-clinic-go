import { NextResponse } from 'next/server'
import type { MetadataRoute } from 'next'

export async function GET(): Promise<NextResponse> {
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const currentDate = new Date()

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dentist-near-me`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ask-the-dentist`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ask-the-dentist/submit`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Service categories
  const serviceCategories = [
    "general-dentistry",
    "cosmetic-dentistry",
    "orthodontics",
    "root-canal-treatment",
    "dental-implants",
    "periodontics",
    "pediatric-dentistry",
    "oral-surgery",
    "emergency-dentistry",
    "restorative-dentistry",
    "prosthodontics",
    "endodontics",
    "maxillofacial-surgery",
  ]

  const serviceCategoryPages: MetadataRoute.Sitemap = serviceCategories.map((category) => ({
    url: `${baseUrl}/services/${category}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Specific service pages
  const specificServices = [
    "/services/general-dentistry/check-ups",
    "/services/general-dentistry/teeth-cleaning",
    "/services/general-dentistry/fillings",
    "/services/general-dentistry/emergency-care",
    "/services/general-dentistry/dental-check-ups",
    "/services/cosmetic-dentistry/teeth-whitening",
    "/services/cosmetic-dentistry/veneers",
    "/services/cosmetic-dentistry/bonding",
    "/services/cosmetic-dentistry/smile-makeover",
    "/services/orthodontics/traditional-braces",
    "/services/orthodontics/invisalign",
    "/services/orthodontics/invisible-aligners",
    "/services/orthodontics/serial-extraction",
    "/services/orthodontics/space-maintainer",
    "/services/root-canal-treatment/single-sitting-rct",
    "/services/root-canal-treatment/multi-visit-rct",
    "/services/dental-implants/single-tooth",
    "/services/dental-implants/multiple-tooth",
    "/services/dental-implants/single-tooth-implants",
    "/services/periodontics/scaling-root-planing",
    "/services/periodontics/pocket-reduction-surgery",
    "/services/periodontics/gingival-grafting",
    "/services/oral-surgery/tooth-extraction",
    "/services/oral-surgery/bone-grafting",
    "/services/oral-surgery/sinus-lift",
    "/services/restorative-dentistry/crowns",
    "/services/pediatric-dentistry/childrens-dentistry",
  ]

  const specificServicePages: MetadataRoute.Sitemap = specificServices.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Tamil Nadu cities
  const tamilNaduCities = [
    "vellore",
    "chennai",
    "coimbatore",
    "madurai",
    "tiruchirappalli",
    "salem",
    "tirunelveli",
    "tiruppur",
    "erode",
    "thoothukudi",
    "kanchipuram",
    "hosur",
    "tirupattur",
    "arcot",
    "tiruvannamalai",
    "ranipet",
    "mahabalipuram",
  ]

  const cityPages: MetadataRoute.Sitemap = tamilNaduCities.map((city) => ({
    url: `${baseUrl}/in/tamil-nadu/${city}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Vellore sub-locations
  const velloreLocations = [
    "gandhi-nagar",
    "katpadi",
    "sathuvachari",
    "bagayam",
    "kosapet",
    "saidapet",
    "thottapalayam",
    "thorapadi",
    "konavattam",
    "shenbakkam",
    "gandhinagar",
    "dharapadavedu",
    "ambur",
    "kosapettai",
    "perumugai",
    "toll-gate",
    "r-n-palayam",
    "kaspa",
    "kagithapattrai",
    "perumal-nagar",
    "viruthampet",
    "otteri",
    "melvisharam",
    "abdullapuram",
    "anaicut",
    "gudiyatham",
    "pallikonda",
    "arcot",
    "walajah",
    "sholinghur",
    "arakkonam",
    "jolarpet",
    "natrampalli",
    "allapuram",
    "timari",
    "vaigunda-mangalam",
    "arani",
    "polur",
    "kalavai",
    "chengam",
    "vaniyambadi",
    "pernambut",
    "tirupattur",
    "shenbaakkam",
    "kamaraj-nagar",
    "velpadi",
  ]

  const velloreLocationPages: MetadataRoute.Sitemap = velloreLocations.map((location) => ({
    url: `${baseUrl}/in/tamil-nadu/vellore/${location}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Other state/city combinations
  const otherLocations = [
    "/in/andhra-pradesh/tirupati",
    "/in/karnataka/bangalore",
    "/in/karnataka/mysore",
    "/in/puducherry/pondicherry",
    "/in/tamil-nadu/chennai/services/general-dentistry",
    "/in/tamil-nadu/coimbatore/rs-puram",
    "/in/tamil-nadu/coimbatore/peelamedu",
    "/in/tamil-nadu/coimbatore/gandhipuram",
    "/in/tamil-nadu/coimbatore/saibaba-colony",
    "/in/tamil-nadu/madurai/anna-nagar",
    "/in/tamil-nadu/madurai/palanganatham",
    "/in/tamil-nadu/tiruchirappalli/thillai-nagar",
    "/in/tamil-nadu/salem/suramangalam",
    "/in/tamil-nadu/tirunelveli/palayamkottai",
    "/in/tamil-nadu/tiruppur/avinashi",
    "/in/tamil-nadu/erode/solar",
    "/in/tamil-nadu/thoothukudi/bryant-nagar",
    "/in/tamil-nadu/kanchipuram/pillaiyarpalayam",
    "/in/tamil-nadu/kanchipuram/gandhi-nagar",
    "/in/tamil-nadu/kanchipuram/varadarajapuram",
    "/in/tamil-nadu/kanchipuram/nehru-nagar",
    "/in/tamil-nadu/kanchipuram/vishnu-kanchi",
    "/in/tamil-nadu/hosur/sipcot",
    "/in/tamil-nadu/hosur/bagalur",
    "/in/tamil-nadu/hosur/mathigiri",
    "/in/tamil-nadu/hosur/titan-nagar",
    "/in/tamil-nadu/hosur/zuzuvadi",
    "/in/tamil-nadu/jolarpet",
    "/in/tamil-nadu/natrampalli",
    "/in/tamil-nadu/allapuram",
    "/in/tamil-nadu/timari",
  ]

  const otherLocationPages: MetadataRoute.Sitemap = otherLocations.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

         // Blog posts
         const blogPosts = [
           "dental-implants-complete-guide",
           "complete-guide-root-canal-treatment",
           "benefits-professional-teeth-whitening",
           "oral-health-tips",
           "dental-implants-vellore",
         ]

         const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
           url: `${baseUrl}/blog/${slug}`,
           lastModified: currentDate,
           changeFrequency: "monthly" as const,
           priority: 0.7,
         }))

         // Ask the Dentist questions
         const questionSlugs = [
           "abscessed-tooth-treatment",
           "dental-implants-longevity",
           "root-canal-treatment-pain",
           "gum-disease-prevention",
           "wisdom-teeth-removal-timing",
           "teeth-whitening-strips-effectiveness",
           "tooth-sensitivity-causes-treatment",
           "dental-veneers-candidacy",
           "toothbrush-replacement-frequency",
           "regular-dental-checkups-benefits",
           "dental-abutment-explanation",
           "severe-toothache-home-treatment",
           "acid-erosion-prevention-treatment",
           "ameloblastoma-diagnosis-treatment",
           "anterior-teeth-problems-treatment",
           "bruxism-teeth-grinding-treatment",
           "buccal-mucosa-problems-treatment",
           "broken-tooth-causes-treatment",
           "dental-caries-prevention-treatment",
           "crown-lengthening-procedure-indications",
           "tooth-sensitivity-causes-treatment",
           "pericoronitis-symptoms-treatment",
           "root-resorption-treatment",
           "trismus-lockjaw-treatment",
           "torus-palatinus-treatment",
           "teeth-crowding-causes-treatment",
           "malocclusion-types-treatment",
           "braces-oral-hygiene-care",
           "periodontal-disease-treatment",
           "receding-gums-causes-treatment",
           "tooth-decay-prevention-treatment",
           "dental-implants-longevity-benefits",
           "all-on-4-dental-implants-candidacy",
           "dental-crowns-types-comparison",
           "tooth-extraction-recovery-care",
         ]

         const questionPages: MetadataRoute.Sitemap = questionSlugs.map((slug) => ({
           url: `${baseUrl}/ask-the-dentist/${slug}`,
           lastModified: currentDate,
           changeFrequency: "monthly" as const,
           priority: 0.7,
         }))

  // Conditions pages
  const conditions = ["bad-breath", "gum-disease", "tooth-decay", "tooth-sensitivity", "dry-mouth"]

  const conditionPages: MetadataRoute.Sitemap = conditions.map((condition) => ({
    url: `${baseUrl}/conditions/${condition}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const conditionsIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/conditions`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Additional pages
  const additionalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/insurance`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/new-patients`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dental-tourism`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations/medical-tourism`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations/medical-tourism/dental-implants`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations/medical-tourism/root-canal-treatment`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations/medical-tourism/cosmetic-dentistry`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations/medical-tourism/orthodontic-treatment`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/in`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/in/tamil-nadu`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations/in/tamil-nadu`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dentist-near-me/locations/in/vellore`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]

         // Combine all pages
         const allPages = [
           ...mainPages,
           ...serviceCategoryPages,
           ...specificServicePages,
           ...cityPages,
           ...velloreLocationPages,
           ...otherLocationPages,
           ...blogPages,
           ...questionPages,
           ...conditionPages,
           ...conditionsIndexPage,
           ...additionalPages,
         ]

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
