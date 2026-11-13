import { ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react'
import Button from '../common/Button'
import heroImage from '../../assets/images/scenes/hero-caregiver.jpg'
import { heroTrustPoints } from '../../data/content'
import DynamicIcon from '../common/DynamicIcon'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <HeartHandshake size={16} aria-hidden="true" />
            Trusted home healthcare for your family
          </span>
          <h1 className="hero__title">
            Professional Healthcare, <span className="text-gradient">Right at Your Home.</span>
          </h1>
          <p className="hero__text">
            Compassionate and reliable home care services for your loved ones. From professional nursing to everyday
            personal assistance, we bring quality care and comfort directly to your doorstep.
          </p>
          <div className="hero__actions">
            <Button to="/book-care" size="lg" icon={ArrowRight}>
              Book a Caregiver
            </Button>
            <Button to="/services" size="lg" variant="outline">
              Explore Our Services
            </Button>
          </div>
          <ul className="hero__trust">
            {heroTrustPoints.map((point) => {
              return (
                <li key={point.label}>
                  <span className="hero__trust-icon">
                    <DynamicIcon name={point.icon} size={18} aria-hidden="true" />
                  </span>
                  {point.label}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              src={heroImage}
              alt="A health professional examining an elderly man with a stethoscope"
              width="1200"
              height="800"
              fetchPriority="high"
            />
          </div>
          <div className="hero__float hero__float--top">
            <span className="hero__float-icon hero__float-icon--green">
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>Care at home</strong>
              <small>Comfort of familiar surroundings</small>
            </span>
          </div>
          <div className="hero__float hero__float--bottom">
            <span className="hero__float-icon">
              <HeartHandshake size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>Personalised plans</strong>
              <small>Built around each patient</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
