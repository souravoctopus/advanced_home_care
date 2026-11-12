import { ArrowRight, ClipboardList, FileText, HeartHandshake } from 'lucide-react'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import Reveal from '../components/common/Reveal'
import ProcessSteps from '../components/home/ProcessSteps'
import CareOptions from '../components/home/CareOptions'
import FaqSection from '../components/home/FaqSection'
import CtaBanner from '../components/home/CtaBanner'

const prepare = [
  {
    icon: ClipboardList,
    title: 'Patient details',
    text: 'Age, current condition, mobility level and any recent hospital stay or surgery.',
  },
  {
    icon: FileText,
    title: 'Medical instructions',
    text: 'Prescriptions, dietary advice or care instructions from the treating doctor, if available.',
  },
  {
    icon: HeartHandshake,
    title: 'Care preferences',
    text: 'Preferred start date, duration, shift timings and anything that matters to the patient.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How It Works"
        description="See how Advanced Home Care works, from sharing your requirements to caregiver assignment and ongoing home care."
      />
      <PageHero
        eyebrow="How It Works"
        title="From First Enquiry to Care at Home"
        text="A clear, family-friendly process designed to understand your needs before any care begins."
        breadcrumbs={[{ label: 'How It Works' }]}
      />

      <ProcessSteps showCta={false} />

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Before You Enquire</span>
            <h2 className="section-heading__title">Helpful Details to Keep Ready</h2>
            <p className="section-heading__text">
              Having these handy helps our team understand the patient’s needs faster. Don’t worry if you don’t have
              everything; we’ll guide you.
            </p>
          </div>
          <div className="prepare-grid">
            {prepare.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} className="feature-card" delay={i * 80}>
                <span className="feature-card__icon">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <div className="section-actions">
            <Button to="/book-care" icon={ArrowRight}>
              Start Your Enquiry
            </Button>
          </div>
        </div>
      </section>

      <CareOptions />
      <FaqSection limit={5} />
      <CtaBanner />
    </>
  )
}
