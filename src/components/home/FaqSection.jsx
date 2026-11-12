import { ArrowRight, MessageCircle } from 'lucide-react'
import Accordion from '../common/Accordion'
import Button from '../common/Button'
import SectionHeading from '../common/SectionHeading'
import { faqs } from '../../data/faqs'

export default function FaqSection({ limit = 6 }) {
  return (
    <section className="section section--tint" id="faq">
      <div className="container faq-section">
        <div className="faq-section__intro">
          <SectionHeading
            align="left"
            eyebrow="Frequently Asked Questions"
            title="Answers to Common Questions"
            text="Everything you need to know about arranging home care with us."
          />
          <div className="help-card">
            <span className="help-card__icon">
              <MessageCircle size={22} aria-hidden="true" />
            </span>
            <h3>Still have questions?</h3>
            <p>Our team is happy to help you understand the right care for your loved one.</p>
            <Button to="/contact" variant="secondary" size="sm" icon={ArrowRight}>
              Contact Our Team
            </Button>
          </div>
        </div>
        <div>
          <Accordion items={faqs.slice(0, limit)} defaultOpenId={faqs[0].id} />
          {limit < faqs.length && (
            <div className="section-actions section-actions--left">
              <Button to="/faq" variant="ghost" icon={ArrowRight}>
                View all FAQs
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
