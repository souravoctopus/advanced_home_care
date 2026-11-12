import { useMemo, useState } from 'react'
import { ArrowRight, Search, X } from 'lucide-react'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'
import Accordion from '../components/common/Accordion'
import Button from '../components/common/Button'
import { EmptyState } from '../components/common/StateMessage'
import CtaBanner from '../components/home/CtaBanner'
import { faqs } from '../data/faqs'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'services', label: 'Services' },
  { id: 'booking', label: 'Booking & Duration' },
  { id: 'support', label: 'Support' },
]

export default function FAQ() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs.filter(
      (f) =>
        (category === 'all' || f.category === category) &&
        (!q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)),
    )
  }, [query, category])

  return (
    <>
      <Seo title="FAQs" description="Answers to frequently asked questions about Advanced Home Care services and booking." />
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        text="Find quick answers about our services, booking process and support."
        breadcrumbs={[{ label: 'FAQs' }]}
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="filter-bar filter-bar--stack">
            <label className="search-input search-input--lg">
              <Search size={18} aria-hidden="true" />
              <span className="visually-hidden">Search questions</span>
              <input
                type="search"
                placeholder="Search questions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                  <X size={16} />
                </button>
              )}
            </label>
            <div className="filter-bar__chips" role="group" aria-label="Filter questions">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`chip${category === c.id ? ' is-active' : ''}`}
                  aria-pressed={category === c.id}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length ? (
            <Accordion key={`${category}-${query}`} items={filtered} defaultOpenId={filtered[0].id} />
          ) : (
            <EmptyState
              title="No matching questions"
              text="Try another keyword, or ask our team directly."
              action={
                <Button to="/contact" variant="outline" size="sm" icon={ArrowRight}>
                  Ask a Question
                </Button>
              }
            />
          )}
        </div>
      </section>

      <CtaBanner title="Still Have Questions?" text="Our team is happy to talk through your loved one’s care needs." />
    </>
  )
}
