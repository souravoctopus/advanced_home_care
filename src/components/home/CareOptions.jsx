import { ArrowRight, Check } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import careImage from '../../assets/images/scenes/personalized-care.jpg'
import { careDurations } from '../../data/content'
import DynamicIcon from '../common/DynamicIcon'

export default function CareOptions() {
  return (
    <section className="section care-options" id="care-options">
      <div className="container care-options__grid">
        <div className="care-options__intro">
          <span className="eyebrow">Personalized Home Care</span>
          <h2 className="section-title">Care Plans Shaped Around Every Patient</h2>
          <p className="lead">
            No two patients are the same. Some need a few hours of help after surgery; others need a familiar
            caregiver by their side day and night. We listen first, then recommend a plan that fits the patient’s
            condition and your family’s routine.
          </p>
          <ul className="check-list">
            <li>
              <Check size={18} aria-hidden="true" /> Plans based on the patient’s condition and routine
            </li>
            <li>
              <Check size={18} aria-hidden="true" /> Duration and shifts adjusted as needs change
            </li>
            <li>
              <Check size={18} aria-hidden="true" /> Clear communication with the family throughout
            </li>
          </ul>
          <div className="care-options__image">
            <img src={careImage} alt="A caregiver sharing a joyful moment with an elderly woman" loading="lazy" width="1200" height="800" />
          </div>
        </div>

        <div className="care-options__panel">
          <div className="duration-grid">
            {careDurations.map((option, i) => {
              return (
                <Reveal key={option.value} className="duration-card" delay={(i % 2) * 80}>
                  <span className="duration-card__icon">
                    <DynamicIcon name={option.icon} size={22} aria-hidden="true" />
                  </span>
                  <h3>{option.label}</h3>
                  <p>{option.text}</p>
                </Reveal>
              )
            })}
          </div>
          <div className="care-options__cta">
            <p>Not sure which option is right? We’ll help you decide.</p>
            <Button to="/contact#enquiry" icon={ArrowRight}>
              Discuss Your Care Requirements
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
