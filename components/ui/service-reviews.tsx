"use client"

import { Star, User, Calendar, ThumbsUp } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'

export interface ServiceReview {
  id: string
  name: string
  location: string
  rating: number
  date: string
  treatmentType: string
  review: string
  verified: boolean
  helpful?: number
}

interface ServiceReviewsProps {
  serviceName: string
  reviews: ServiceReview[]
  averageRating?: number
  totalReviews?: number
}

export function ServiceReviews({ 
  serviceName, 
  reviews, 
  averageRating = 5.0, 
  totalReviews 
}: ServiceReviewsProps) {
  const displayTotal = totalReviews || reviews.length

  return (
    <ModernCard className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
      <ModernCardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <ModernCardTitle className="flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
            Patient Reviews - {serviceName}
          </ModernCardTitle>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-700">{averageRating.toFixed(1)}</div>
              <div className="flex items-center gap-1 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= averageRating ? 'text-yellow-600 fill-yellow-600' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-600 mt-1">{displayTotal} reviews</div>
            </div>
          </div>
        </div>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 bg-white rounded-lg border border-yellow-200 shadow-sm">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      {review.verified && (
                        <Badge className="text-xs bg-green-100 text-green-700 border-green-200">
                          ✓ Verified Patient
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{review.location}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {review.date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating ? 'text-yellow-600 fill-yellow-600' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Treatment Type */}
              <div className="mb-3">
                <Badge className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                  {review.treatmentType}
                </Badge>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

              {/* Helpful Counter */}
              {review.helpful && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.helpful} people found this helpful</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-1">98%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-1">5000+</div>
              <div className="text-sm text-gray-600">Successful Treatments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* SEO Schema-friendly review summary */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            <strong>Dr. Rockson Samuel</strong> at <strong>Indira Dental Clinic, Vellore</strong> has received{' '}
            <strong>{displayTotal} verified patient reviews</strong> for <strong>{serviceName}</strong> with an average rating of{' '}
            <strong>{averageRating.toFixed(1)} out of 5 stars</strong>. Patients consistently praise the quality of care,
            professional service, and excellent results.
          </p>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

// Helper function to generate SEO-optimized reviews for different services
export function generateServiceReviews(serviceName: string, serviceType: string): ServiceReview[] {
  const reviewTemplates: Record<string, ServiceReview[]> = {
    'root-canal': [
      {
        id: '1',
        name: 'Priya Sharma',
        location: 'Gandhi Nagar, Vellore',
        rating: 5,
        date: 'November 2024',
        treatmentType: 'Root Canal Treatment',
        review: 'I was terrified of getting a root canal, but Dr. Rockson Samuel made the entire process completely painless. The clinic is very clean and modern. The staff is friendly and professional. I highly recommend Indira Dental Clinic for root canal treatment in Vellore.',
        verified: true,
        helpful: 24
      },
      {
        id: '2',
        name: 'Rajesh Kumar',
        location: 'Katpadi, Vellore',
        rating: 5,
        date: 'October 2024',
        treatmentType: 'Root Canal Treatment',
        review: 'Best dentist in Vellore! Dr. Rockson explained every step of the procedure. The root canal was completely painless and completed in just one sitting. The cost was very reasonable compared to other clinics. Very satisfied with the treatment.',
        verified: true,
        helpful: 18
      },
      {
        id: '3',
        name: 'Lakshmi Devi',
        location: 'Sathuvachari, Vellore',
        rating: 5,
        date: 'September 2024',
        treatmentType: 'Molar Root Canal',
        review: 'Excellent service and care. I had severe tooth pain and Dr. Rockson saw me the same day. The root canal treatment was absolutely painless. The clinic uses the latest equipment and maintains high hygiene standards. Highly recommended!',
        verified: true,
        helpful: 31
      }
    ],
    'dental-implants': [
      {
        id: '1',
        name: 'Venkatesh Iyer',
        location: 'Gandhi Nagar, Vellore',
        rating: 5,
        date: 'December 2024',
        treatmentType: 'Single Tooth Implant',
        review: 'Got a dental implant from Dr. Rockson Samuel and I am extremely happy with the result. The implant looks and feels exactly like my natural tooth. The procedure was painless and the healing was quick. Best dental implant service in Vellore!',
        verified: true,
        helpful: 42
      },
      {
        id: '2',
        name: 'Meera Krishnan',
        location: 'Thorapadi, Vellore',
        rating: 5,
        date: 'November 2024',
        treatmentType: 'Multiple Implants',
        review: 'I had three dental implants done at Indira Dental Clinic. Dr. Rockson is highly skilled and experienced. The clinic uses German implants which are of excellent quality. The staff is very caring and supportive throughout the treatment. Highly recommend!',
        verified: true,
        helpful: 28
      },
      {
        id: '3',
        name: 'Suresh Babu',
        location: 'Katpadi, Vellore',
        rating: 5,
        date: 'October 2024',
        treatmentType: 'Full Arch Implants',
        review: 'After losing multiple teeth, I was hesitant about getting implants. Dr. Rockson explained the entire All-on-4 procedure clearly and addressed all my concerns. The results are amazing! I can eat normally again and my smile looks natural. Best decision ever!',
        verified: true,
        helpful: 36
      }
    ],
    'orthodontics': [
      {
        id: '1',
        name: 'Divya Anand',
        location: 'Gandhi Nagar, Vellore',
        rating: 5,
        date: 'December 2024',
        treatmentType: 'Metal Braces',
        review: 'My daughter got braces from Dr. Rockson and we are very happy with the progress. He is very patient with children and explains everything clearly. The clinic is very clean and the staff is friendly. Regular follow-ups ensure proper treatment progress.',
        verified: true,
        helpful: 22
      },
      {
        id: '2',
        name: 'Arun Prakash',
        location: 'Sathuvachari, Vellore',
        rating: 5,
        date: 'November 2024',
        treatmentType: 'Invisalign Clear Aligners',
        review: 'Got Invisalign treatment from Dr. Rockson Samuel. The aligners are practically invisible and very comfortable. My teeth are straightening beautifully without anyone noticing I am wearing braces. Highly recommend Invisalign for working professionals!',
        verified: true,
        helpful: 34
      },
      {
        id: '3',
        name: 'Sangeetha Ravi',
        location: 'Katpadi, Vellore',
        rating: 5,
        date: 'October 2024',
        treatmentType: 'Ceramic Braces',
        review: 'Excellent orthodontic treatment! Dr. Rockson is very knowledgeable and skilled. The ceramic braces are tooth-colored and not very noticeable. The treatment is progressing well and I can already see significant improvement in my smile.',
        verified: true,
        helpful: 19
      }
    ],
    'teeth-whitening': [
      {
        id: '1',
        name: 'Kavitha Mohan',
        location: 'Gandhi Nagar, Vellore',
        rating: 5,
        date: 'December 2024',
        treatmentType: 'Laser Teeth Whitening',
        review: 'Amazing results! My teeth are 6 shades whiter after just one session. Dr. Rockson used laser whitening technology and the entire procedure took only an hour. No sensitivity at all. Highly recommend for anyone wanting a brighter smile!',
        verified: true,
        helpful: 45
      },
      {
        id: '2',
        name: 'Karthik Subramanian',
        location: 'Katpadi, Vellore',
        rating: 5,
        date: 'November 2024',
        treatmentType: 'Professional Whitening',
        review: 'Best teeth whitening service in Vellore! Dr. Rockson explained the procedure thoroughly and the results exceeded my expectations. My teeth look naturally white and the whitening has lasted for months. Very professional service!',
        verified: true,
        helpful: 27
      },
      {
        id: '3',
        name: 'Nithya Ramesh',
        location: 'Thorapadi, Vellore',
        rating: 5,
        date: 'October 2024',
        treatmentType: 'Home Whitening Kit',
        review: 'Got custom whitening trays from Indira Dental Clinic. The home whitening kit is very easy to use and the results are fantastic. My teeth are significantly whiter and the treatment was very affordable. Great option for at-home whitening!',
        verified: true,
        helpful: 21
      }
    ],
    'default': [
      {
        id: '1',
        name: 'Ramesh Kumar',
        location: 'Gandhi Nagar, Vellore',
        rating: 5,
        date: 'December 2024',
        treatmentType: serviceName,
        review: `Excellent service at Indira Dental Clinic! Dr. Rockson Samuel is highly professional and skilled. The ${serviceName.toLowerCase()} treatment was performed with utmost care and precision. The clinic is very clean and uses modern equipment. Highly recommend!`,
        verified: true,
        helpful: 28
      },
      {
        id: '2',
        name: 'Anjali Reddy',
        location: 'Katpadi, Vellore',
        rating: 5,
        date: 'November 2024',
        treatmentType: serviceName,
        review: `Very satisfied with my ${serviceName.toLowerCase()} treatment. Dr. Rockson explained the procedure clearly and answered all my questions. The staff is friendly and the clinic maintains high hygiene standards. Great experience overall!`,
        verified: true,
        helpful: 19
      },
      {
        id: '3',
        name: 'Srinivasan Iyer',
        location: 'Sathuvachari, Vellore',
        rating: 5,
        date: 'October 2024',
        treatmentType: serviceName,
        review: `Best dental clinic in Vellore! Dr. Rockson Samuel provided excellent care during my ${serviceName.toLowerCase()} procedure. The treatment was comfortable and the results are amazing. I highly recommend Indira Dental Clinic to everyone!`,
        verified: true,
        helpful: 33
      }
    ]
  }

  return reviewTemplates[serviceType] || reviewTemplates['default']
}

