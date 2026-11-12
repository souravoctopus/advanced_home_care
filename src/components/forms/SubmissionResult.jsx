import { useEffect, useRef } from 'react'
import { CircleCheck, Info } from 'lucide-react'
import Button from '../common/Button'

/**
 * Success panel shown after an enquiry is submitted.
 * Wording is deliberately an enquiry acknowledgement, never a booking
 * confirmation or caregiver assignment.
 */
export default function SubmissionResult({ result, onReset, resetLabel = 'Submit another enquiry' }) {
  const ref = useRef(null)
  const name = result?.payload?.contact?.fullName?.split(' ')[0]

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <div className="submission-result" ref={ref} tabIndex={-1} role="status" aria-live="polite">
      <span className="submission-result__icon">
        <CircleCheck size={36} aria-hidden="true" />
      </span>
      <h3>Thank you{name ? `, ${name}` : ''}! Your enquiry has been submitted.</h3>
      <p>
        Our care team will review your requirements and get in touch to discuss suitable care options. This is an
        enquiry, not a confirmed booking. Services and caregiver assignment are confirmed only after our team
        speaks with you.
      </p>

      {result && !result.delivered && (
        <p className="notice notice--info">
          <Info size={16} aria-hidden="true" />
          <span>
            <strong>Preview mode:</strong> online submissions are not connected to our team yet. Please also reach
            us directly using the details on our Contact page.
          </span>
        </p>
      )}

      <div className="submission-result__actions">
        <Button to="/services" variant="outline">
          Explore Services
        </Button>
        <Button onClick={onReset} variant="ghost">
          {resetLabel}
        </Button>
      </div>
    </div>
  )
}
