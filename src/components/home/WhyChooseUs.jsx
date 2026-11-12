import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { whyChooseUs } from '../../data/content'
import DynamicIcon from '../common/DynamicIcon'

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
          {whyChooseUs.map((item, i) => {
            return (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
