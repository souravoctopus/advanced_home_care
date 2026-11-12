import { api, endpoints, isApiConfigured } from './api'

/**
 * Normalises raw form values into the payload shape the future backend
 * will receive. Keep this the single source of truth for enquiry payloads.
 */
export function buildEnquiryPayload(values, source = 'contact-form') {
  return {
    source,
    contact: {
      fullName: values.fullName?.trim() || '',
      mobile: values.mobile?.replace(/\s+/g, '') || '',
      email: values.email?.trim() || '',
    },
    patient: {
      name: values.patientName?.trim() || '',
      age: values.patientAge ? Number(values.patientAge) : null,
      condition: values.patientCondition?.trim() || '',
    },
    care: {
      serviceSlug: values.service || '',
      duration: values.careDuration || '',
      preferredStartDate: values.startDate || '',
    },
    location: {
      city: values.city?.trim() || '',
      address: values.address?.trim() || '',
    },
    notes: values.requirements?.trim() || '',
    submittedAt: new Date().toISOString(),
  }
}

/**
 * Temporary frontend handler used until the backend exists.
 * It does NOT send data anywhere and does not pretend a booking was made;
 * it only reports that the enquiry was captured in this browser session.
 */
async function handleLocally(payload) {
  if (import.meta.env.DEV) {
    console.info('[enquiryService] API not configured — enquiry captured locally only:', payload)
  }
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { delivered: false, payload }
}

/** General enquiry (Contact page / homepage form). */
export async function submitEnquiry(values) {
  const payload = buildEnquiryPayload(values, 'contact-form')
  if (!isApiConfigured) return handleLocally(payload)
  const data = await api.post(endpoints.enquiries, payload)
  return { delivered: true, payload, data }
}

/** Booking enquiry (Book Home Care page). An enquiry, not a confirmed booking. */
export async function submitBookingEnquiry(values) {
  const payload = buildEnquiryPayload(values, 'booking-form')
  if (!isApiConfigured) return handleLocally(payload)
  const data = await api.post(endpoints.bookings, payload)
  return { delivered: true, payload, data }
}
