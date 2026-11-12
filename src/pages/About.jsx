import { Check } from 'lucide-react'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'
import Reveal from '../components/common/Reveal'
import AboutSection from '../components/home/AboutSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TeamSection from '../components/home/TeamSection'
import CtaBanner from '../components/home/CtaBanner'
import consultationImage from '../assets/images/scenes/consultation.jpg'

const values = [
  { title: 'Dignity', text: 'We protect each patient’s privacy, choices and self-respect in every interaction.' },
  { title: 'Compassion', text: 'We care with patience and kindness, especially on the difficult days.' },
  { title: 'Reliability', text: 'We aim to do what we agree, on time, and keep families informed.' },
  { title: 'Partnership', text: 'We work with families and the treating medical team, not around them.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Advanced Home Care: our mission, vision and commitment to compassionate, personalised home healthcare."
      />
      <PageHero
        eyebrow="About Us"
        title="Compassionate Care, Rooted in Respect"
        text="We exist to help families care for the people they love at home, with professional support and genuine warmth."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <AboutSection showCta={false} />

      <section className="section section--tint">
        <div className="container story">
          <Reveal className="story__media">
            <img
              src={consultationImage}
              alt="Care professional checking a woman’s blood pressure"
              loading="lazy"
              width="1200"
              height="800"
            />
          </Reveal>
          <div className="story__content">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">Why We Do What We Do</h2>
            <p>
              When a family member needs care, the hospital is not always the best place to recover, and families
              cannot always provide round-the-clock support themselves. Advanced Home Care was created to bridge that
              gap by bringing professional nursing and caregiving into the home, where patients feel safest.
            </p>
            <p>
              We take the time to understand each patient’s condition, routine and preferences, and we coordinate
              closely with families so everyone knows what to expect.
            </p>
            <ul className="check-list">
              <li>
                <Check size={18} aria-hidden="true" /> Care delivered in familiar surroundings
              </li>
              <li>
                <Check size={18} aria-hidden="true" /> Services planned around medical instructions
              </li>
              <li>
                <Check size={18} aria-hidden="true" /> Ongoing coordination with the family
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-heading__title">The Principles Behind Our Care</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value-card" delay={i * 80}>
                <span className="value-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TeamSection />
      <CtaBanner />
    </>
  )
}
