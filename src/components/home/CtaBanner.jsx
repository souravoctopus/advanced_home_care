import { ArrowRight, Phone } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'

export default function CtaBanner({
  title = 'Your Loved Ones Deserve Care, Comfort & Attention.',
  text = 'Let Advanced Home Care support your family with compassionate home healthcare and everyday assistance.',
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-banner">
          <div className="cta-banner__content">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-banner__actions">
            <Button to="/book-care" variant="light" size="lg" icon={ArrowRight}>
              Book Home Care
            </Button>
            <Button to="/contact" variant="outline-light" size="lg" icon={Phone} iconPosition="start">
              Contact Our Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
