import { Question } from '@/lib/types/ask-dentist'

interface FAQSchemaProps {
  question: Question
}

export function FAQSchema({ question }: FAQSchemaProps) {
  // Create FAQ schema for the main question and its replies
  const faqItems = [
    {
      "@type": "Question",
      "name": question.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.answer,
        "author": {
          "@type": "Person",
          "name": question.author
        },
        "dateCreated": question.createdAt,
        "upvoteCount": question.helpfulVotes
      }
    }
  ]

  // Add replies as additional FAQ items
  if (question.replies && Array.isArray(question.replies)) {
    question.replies.forEach((reply) => {
      if (reply.authorType === 'dentist') {
        faqItems.push({
          "@type": "Question",
          "name": `Follow-up: ${reply.content.substring(0, 100)}...`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": reply.content,
            "author": {
              "@type": "Person",
              "name": reply.author
            },
            "dateCreated": reply.createdAt,
            "upvoteCount": reply.helpfulVotes
          }
        })
      }
    })
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems,
    "author": {
      "@type": "Person",
      "name": "Dr. Rockson Samuel",
      "jobTitle": "Dentist",
      "worksFor": {
        "@type": "Organization",
        "name": "Indira Dental Clinic"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Indira Dental Clinic",
      "url": "https://www.dentalclinicinvellore.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dentalclinicinvellore.in/logo.png"
      }
    },
    "datePublished": question.createdAt,
    "dateModified": question.lastActivity,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/ReadAction",
      "userInteractionCount": question.views
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
