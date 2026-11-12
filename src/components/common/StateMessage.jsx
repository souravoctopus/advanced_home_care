import { CircleAlert, Inbox, LoaderCircle } from 'lucide-react'

/** Shared loading / empty / error presentation. */
export function LoadingState({ label = 'Loading…' }) {
  return (
    <div className="state-message" role="status">
      <LoaderCircle className="spin" size={28} aria-hidden="true" />
      <p>{label}</p>
    </div>
  )
}

export function EmptyState({ title = 'Nothing to show yet', text, action }) {
  return (
    <div className="state-message">
      <span className="state-message__icon">
        <Inbox size={26} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {action}
    </div>
  )
}

export function ErrorState({ text = 'We could not load this content.', onRetry }) {
  return (
    <div className="state-message state-message--error" role="alert">
      <span className="state-message__icon">
        <CircleAlert size={26} aria-hidden="true" />
      </span>
      <p>{text}</p>
      {onRetry && (
        <button type="button" className="btn btn--outline btn--sm" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  )
}
