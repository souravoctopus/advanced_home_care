import { Phone } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { whyChooseUs } from '../../data/content'
import { siteConfig, telLink } from '../../config/site'
import DynamicIcon from '../common/DynamicIcon'

function FeaturedCard({ item }) {
  const tel = telLink()
  return (
    <Reveal className="feature-card feature-card--featured">
      <span className="feature-card__icon">
        <DynamicIcon name={item.icon} size={30} aria-hidden="true" />
      </span>
      <div className="feature-card__body">
        {item.badge && <span className="feature-card__badge">{item.badge}</span>}
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
      <Button
        {...(tel ? { href: tel } : { to: '/contact' })}
        variant="light"
        icon={Phone}
        iconPosition="start"
        className="feature-card__cta"
      >
        {tel ? `Call ${siteConfig.contact.phoneDisplay}` : 'Contact Our Team'}
      </Button>
    </Reveal>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="section why" id="why-choose-us">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Advanced Home Care?"
          title="Your Family Deserves the Best Care."
          text="We combine professional skill with genuine warmth, so your loved one is supported and your family has peace of mind."
        />
        <div className="why__grid">
          {whyChooseUs.map((item, i) =>
            item.featured ? (
              <FeaturedCard key={item.title} item={item} />
            ) : (
              <Reveal key={item.title} className="feature-card" delay={(i % 3) * 80}>
                <span className="feature-card__icon">
                  <DynamicIcon name={item.icon} size={26} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="feature-card__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
