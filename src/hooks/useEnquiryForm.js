import { useCallback, useState } from 'react'
import { enquiryFields, initialEnquiryValues } from '../data/enquiryFields'
import { validateField, validateFields } from '../utils/validation'

/**
 * Form state + validation for enquiry forms. Business logic (submission)
 * is injected via `onSubmit`, keeping UI and data handling separate.
 *
 * status: 'idle' | 'submitting' | 'success' | 'error'
 */
export function useEnquiryForm({ initialValues = {}, onSubmit }) {
  const [values, setValues] = useState({ ...initialEnquiryValues, ...initialValues })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')
  const [result, setResult] = useState(null)
  const [submitError, setSubmitError] = useState('')

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target
      setValues((prev) => ({ ...prev, [name]: value }))
      if (touched[name]) {
        setErrors((prev) => ({ ...prev, [name]: validateField(enquiryFields[name], value) }))
      }
    },
    [touched],
  )

  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }, [])

  const handleBlur = useCallback((event) => {
    const { name, value } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(enquiryFields[name], value) }))
  }, [])

  /** Validates the given field names; returns true when all are valid. */
  const validate = useCallback(
    (names) => {
      const found = validateFields(
        names.map((n) => enquiryFields[n]),
        values,
      )
      setTouched((prev) => ({ ...prev, ...Object.fromEntries(names.map((n) => [n, true])) }))
      setErrors((prev) => {
        const next = { ...prev }
        names.forEach((n) => {
          next[n] = found[n] || ''
        })
        return next
      })
      const firstInvalid = names.find((n) => found[n])
      if (firstInvalid) {
        document.getElementById(`field-${firstInvalid}`)?.focus()
      }
      return !firstInvalid
    },
    [values],
  )

  const submit = useCallback(
    async (names) => {
      if (!validate(names)) return false
      setStatus('submitting')
      setSubmitError('')
      try {
        const res = await onSubmit(values)
        setResult(res)
        setStatus('success')
        return true
      } catch (error) {
        setSubmitError(error?.message || 'Something went wrong. Please try again.')
        setStatus('error')
        return false
      }
    },
    [onSubmit, validate, values],
  )

  const reset = useCallback(() => {
    setValues({ ...initialEnquiryValues, ...initialValues })
    setErrors({})
    setTouched({})
    setStatus('idle')
    setResult(null)
    setSubmitError('')
  }, [initialValues])

  return {
    values,
    errors,
    status,
    result,
    submitError,
    handleChange,
    handleBlur,
    setFieldValue,
    validate,
    submit,
    reset,
  }
}
