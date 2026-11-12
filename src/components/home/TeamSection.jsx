import { Info } from 'lucide-react'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { EmptyState, ErrorState, LoadingState } from '../common/StateMessage'
import { useAsyncData } from '../../hooks/useAsyncData'
import { getTeam } from '../../services/contentService'

export default function TeamSection() {
  const { data, loading, error, isEmpty, retry } = useAsyncData(getTeam)

  return (
    <section className="section section--tint team" id="our-team">
      <div className="container">
        <SectionHeading
          eyebrow="Our Care Professionals"
          title="The People Behind the Care"
          text="Our team brings together different care roles, so each patient gets the right kind of support."
        />

        {loading && <LoadingState label="Loading care team…" />}
        {error && <ErrorState text="We couldn’t load our care team right now." onRetry={retry} />}
        {isEmpty && <EmptyState title="Team profiles coming soon" text="Our care team profiles will be added here." />}

        {data?.length > 0 && (
          <>
            <div className="team__grid">
              {data.map((member, i) => (
                <Reveal as="article" key={member.id} className="team-card" delay={i * 80}>
                  <div className="team-card__media">
                    <img src={member.image} alt={member.imageAlt} loading="lazy" width="600" height="700" />
                  </div>
                  <div className="team-card__body">
                    <h3>{member.role}</h3>
                    <p>{member.text}</p>
                    <ul className="tag-list">
                      {member.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            {data.some((m) => m.isSample) && (
              <p className="sample-note">
                <Info size={15} aria-hidden="true" />
                Images are representative stock photos of care roles, not profiles of individual staff members.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
