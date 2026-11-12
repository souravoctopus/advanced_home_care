import { CircleAlert } from 'lucide-react'
import { todayISO } from '../../utils/validation'

/** Renders any field from the enquiry schema (data/enquiryFields.js). */
export default function FormField({ field, value, error, onChange, onBlur, className = '' }) {
  const id = `field-${field.name}`
  const errorId = `${id}-error`
  const required = Boolean(field.rules?.required)

  const common = {
    id,
    name: field.name,
    value,
    onChange,
    onBlur,
    required,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: 'form-control',
  }

  let control
  if (field.type === 'select') {
    control = (
      <select {...common}>
        <option value="">{field.placeholder}</option>
        {field.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  } else if (field.type === 'textarea') {
    control = (
      <textarea
        {...common}
        rows={field.rows || 3}
        placeholder={field.placeholder}
        maxLength={field.rules?.maxLength}
        autoComplete={field.autoComplete}
      />
    )
  } else {
    control = (
      <input
        {...common}
        type={field.type}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        inputMode={field.inputMode}
        min={field.type === 'date' ? todayISO() : field.rules?.min}
        max={field.rules?.max}
        maxLength={field.rules?.maxLength}
      />
    )
  }

  return (
    <div className={`form-field${error ? ' has-error' : ''} ${className}`.trim()}>
      <label htmlFor={id} className="form-label">
        {field.label}
        {required && (
          <span className="form-required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {control}
      {error && (
        <p id={errorId} className="form-error">
          <CircleAlert size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
