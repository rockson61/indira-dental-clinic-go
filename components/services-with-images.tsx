import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive dental care for all ages",
    image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
    href: "/services/general-dentistry",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with our expert treatments",
    image: "https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg",
    href: "/services/cosmetic-dentistry",
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth for a perfect smile",
    image: "https://images.pexels.com/photos/3779702/pexels-photo-3779702.jpeg",
    href: "/services/orthodontics",
  },
  {
    title: "Dental Implants",
    description: "Restore your smile with natural-looking implants",
    image: "https://images.pexels.com/photos/6627600/pexels-photo-6627600.jpeg",
    href: "/services/dental-implants",
  },
  {
    title: "Root Canal Treatment",
    description: "Relieve pain and save your natural teeth",
    image: "https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg",
    href: "/services/root-canal-treatment",
  },
]

export function ServicesWithImages() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Premier Dental Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Invisalign Featured Card */}
          <Link href="/services/invisalign" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg"
                  alt="Invisalign Clear Aligners in Vellore"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Invisalign Clear Aligners</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Transform your smile with virtually invisible aligners. Comfortable, removable, and custom-made for
                  your teeth.
                </p>
                <span className="text-primary text-sm font-medium flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Regular Service Cards */}
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="group">
              <Card className="overflow-hidden transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="aspect-video relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <span className="text-primary text-sm font-medium flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
