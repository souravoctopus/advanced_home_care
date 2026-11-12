import { useSearchParams } from 'react-router-dom'
import { Clock, HeartHandshake, ShieldCheck } from 'lucide-react'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'
import BookingWizard from '../components/forms/BookingWizard'
import { getServiceBySlug } from '../data/services'

const assurances = [
  { icon: ShieldCheck, text: 'Your details are used only to respond to your enquiry' },
  { icon: HeartHandshake, text: 'We discuss requirements with you before confirming anything' },
  { icon: Clock, text: 'Takes about 2 minutes to complete' },
]

export default function BookCare() {
  const [params] = useSearchParams()
  const requested = params.get('service')
  const initialService = requested && getServiceBySlug(requested) ? requested : ''

  return (
    <>
      <Seo
        title="Book Home Care"
        description="Send a home care enquiry to Advanced Home Care. Choose a service, share patient details and your preferred start date."
      />
      <PageHero
        eyebrow="Book Home Care"
        title="Request Home Care for Your Loved One"
        text="Tell us what you need in a few simple steps. Our team will contact you to discuss the right care plan."
        breadcrumbs={[{ label: 'Book Home Care' }]}
      >
        <ul className="page-hero__points">
          {assurances.map(({ icon: Icon, text }) => (
            <li key={text}>
              <Icon size={16} aria-hidden="true" /> {text}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section booking-section">
        <div className="container">
          {/* key resets the wizard if the user arrives with a different service */}
          <BookingWizard key={initialService} initialService={initialService} />
        </div>
      </section>
    </>
  )
}
