import { ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import ServiceCard from '../services/ServiceCard'
import { services } from '../../data/services'

export default function ServicesSection({ limit }) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <section className="section section--tint" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Our Home Care Services"
          title="Complete Care, Delivered With Compassion"
          text="From skilled nursing to everyday personal assistance, choose the support your loved one needs, in the comfort of home."
        />
        <div className="services-grid">
          {list.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        {limit && limit < services.length && (
          <div className="section-actions">
            <Button to="/services" variant="outline" icon={ArrowRight}>
              View All {services.length} Services
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
