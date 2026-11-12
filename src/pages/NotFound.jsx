import { ArrowRight, House } from 'lucide-react'
import Seo from '../components/common/Seo'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <section className="not-found">
      <Seo title="Page not found" />
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>This page couldn’t be found</h1>
        <p>The page you’re looking for may have moved. Let’s get you back to the right place.</p>
        <div className="not-found__actions">
          <Button to="/" icon={House} iconPosition="start">
            Back to Home
          </Button>
          <Button to="/services" variant="outline" icon={ArrowRight}>
            View Services
          </Button>
        </div>
      </div>
    </section>
  )
}
