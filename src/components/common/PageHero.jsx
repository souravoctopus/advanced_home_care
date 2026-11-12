import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/** Banner used at the top of inner pages, with breadcrumbs. */
export default function PageHero({ eyebrow, title, text, breadcrumbs = [], children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label}>
                <ChevronRight size={14} aria-hidden="true" />
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
        {children}
      </div>
    </section>
  )
}
