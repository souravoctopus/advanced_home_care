import { ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import aboutImage from '../../assets/images/scenes/about-care.jpg'
import { aboutPillars } from '../../data/content'
import DynamicIcon from '../common/DynamicIcon'

export default function AboutSection({ showCta = true }) {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <img
            src={aboutImage}
            alt="Caregiver holding hands with elderly women in a warm, friendly moment"
            loading="lazy"
            width="1200"
            height="800"
          />
          <div className="about__quote">
            <p>“Every individual deserves compassionate, respectful and personalised care.”</p>
          </div>
        </Reveal>

        <div className="about__content">
          <span className="eyebrow">About Advanced Home Care</span>
          <h2 className="section-title">Care That Feels Like Home.</h2>
          <p className="lead">
            At Advanced Home Care, we believe every individual deserves compassionate, respectful, and personalized
            care. Our mission is to make professional healthcare and everyday assistance accessible in the comfort of
            your home.
          </p>

          <div className="pillars">
            {aboutPillars.map((pillar, i) => {
              return (
                <Reveal key={pillar.title} className="pillar" delay={i * 70}>
                  <span className="pillar__icon">
                    <DynamicIcon name={pillar.icon} size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {showCta && (
            <Button to="/about" variant="secondary" icon={ArrowRight}>
              Learn More About Us
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
