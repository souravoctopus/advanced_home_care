import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import DynamicIcon from '../common/DynamicIcon'

/** Reusable service card. `compact` hides the feature list. */
export default function ServiceCard({ service, compact = false }) {
  const detailsUrl = `/services/${service.slug}`

  return (
    <article className="service-card">
      <Link to={detailsUrl} className="service-card__media" tabIndex={-1} aria-hidden="true">
        <img src={service.image} alt="" loading="lazy" width="600" height="400" />
      </Link>
      <div className="service-card__body">
        <span className="service-card__icon" aria-hidden="true">
          <DynamicIcon name={service.icon} size={24} />
        </span>
        <h3 className="service-card__title">
          <Link to={detailsUrl}>{service.title}</Link>
        </h3>
        <p className="service-card__text">{service.summary}</p>
        {!compact && (
          <ul className="service-card__features">
            {service.features.slice(0, 3).map((f) => (
              <li key={f}>
                <Check size={16} aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}
        <div className="service-card__actions">
          <Link to={detailsUrl} className="text-link" aria-label={`Learn more about ${service.title}`}>
            Learn More <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            to={`/book-care?service=${service.slug}`}
            className="btn btn--secondary btn--sm"
            aria-label={`Book ${service.title}`}
          >
            Book This Service
          </Link>
        </div>
      </div>
    </article>
  )
}
