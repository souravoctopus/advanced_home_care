import Reveal from '../common/Reveal'
import { trustStats } from '../../data/content'
import DynamicIcon from '../common/DynamicIcon'

/** Stat cards. Numbers render only when a verified `value` is configured. */
export default function TrustStats() {
  return (
    <section className="trust-stats" aria-label="Why families trust us">
      <div className="container">
        <div className="trust-stats__grid">
          {trustStats.map((stat, i) => {
            return (
              <Reveal key={stat.id} className="stat-card" delay={i * 80}>
                <span className="stat-card__icon">
                  <DynamicIcon name={stat.icon} size={24} aria-hidden="true" />
                </span>
                <div>
                  {stat.value && <p className="stat-card__value">{stat.value}</p>}
                  <h3 className="stat-card__title">{stat.title}</h3>
                  <p className="stat-card__text">{stat.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
