import { ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { processSteps } from '../../data/content'
import DynamicIcon from '../common/DynamicIcon'

export default function ProcessSteps({ showCta = true, headingAs = 'h2' }) {
  return (
    <section className="section process" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="How Our Service Works"
          title="Getting Care Started Is Simple"
          text="Four clear steps from your first enquiry to dependable care at home."
          inverse
          as={headingAs}
        />
        <ol className="process__list">
          {processSteps.map((step, i) => {
            return (
              <Reveal as="li" key={step.step} className="process-step" delay={i * 100}>
                <div className="process-step__marker">
                  <span className="process-step__number">{String(step.step).padStart(2, '0')}</span>
                </div>
                <span className="process-step__icon">
                  <DynamicIcon name={step.icon} size={24} aria-hidden="true" />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            )
          })}
        </ol>
        {showCta && (
          <div className="section-actions">
            <Button to="/book-care" variant="light" icon={ArrowRight}>
              Start With Step 1
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
