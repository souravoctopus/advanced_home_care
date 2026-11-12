import { services } from './services'
import { careDurations } from './content'

export const serviceOptions = services.map((s) => ({ value: s.slug, label: s.title }))
export const durationOptions = careDurations.map((d) => ({ value: d.value, label: d.label }))

/**
 * Single schema for every enquiry field. Both the contact form and the
 * booking flow render from this, so labels, validation and payload keys stay
 * consistent and match `buildEnquiryPayload` in services/enquiryService.js.
 */
export const enquiryFields = {
  fullName: {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Your full name',
    rules: { required: true, minLength: 2, maxLength: 80 },
  },
  mobile: {
    name: 'mobile',
    label: 'Mobile Number',
    type: 'tel',
    autoComplete: 'tel',
    inputMode: 'tel',
    placeholder: '10-digit mobile number',
    rules: { required: true, phone: true },
  },
  email: {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'you@example.com',
    rules: { email: true },
  },
  patientName: {
    name: 'patientName',
    label: 'Patient Name',
    type: 'text',
    placeholder: 'Name of the patient',
    rules: { required: true, minLength: 2, maxLength: 80 },
  },
  patientAge: {
    name: 'patientAge',
    label: 'Patient Age',
    type: 'number',
    inputMode: 'numeric',
    placeholder: 'Age in years',
    rules: { required: true, min: 0, max: 120, integer: true },
  },
  patientCondition: {
    name: 'patientCondition',
    label: 'Patient Condition (optional)',
    type: 'textarea',
    rows: 3,
    placeholder: 'e.g. recovering from knee surgery, needs help walking',
    rules: { maxLength: 600 },
  },
  service: {
    name: 'service',
    label: 'Required Service',
    type: 'select',
    placeholder: 'Select a service',
    options: serviceOptions,
    rules: { required: true },
  },
  careDuration: {
    name: 'careDuration',
    label: 'Care Duration',
    type: 'select',
    placeholder: 'Select care duration',
    options: durationOptions,
    rules: { required: true },
  },
  startDate: {
    name: 'startDate',
    label: 'Preferred Start Date',
    type: 'date',
    rules: { required: true, notPast: true },
  },
  city: {
    name: 'city',
    label: 'City',
    type: 'text',
    autoComplete: 'address-level2',
    placeholder: 'Your city',
    rules: { required: true, minLength: 2, maxLength: 60 },
  },
  address: {
    name: 'address',
    label: 'Full Address',
    type: 'textarea',
    rows: 2,
    autoComplete: 'street-address',
    placeholder: 'House / flat, street, area, landmark',
    rules: { required: true, minLength: 8, maxLength: 300 },
  },
  requirements: {
    name: 'requirements',
    label: 'Additional Requirements',
    type: 'textarea',
    rows: 4,
    placeholder: 'Tell us anything that helps us understand the care needed',
    rules: { maxLength: 1000 },
  },
}

export const initialEnquiryValues = Object.fromEntries(
  Object.keys(enquiryFields).map((key) => [key, '']),
)

/** Order of fields in the single-page contact enquiry form. */
export const contactFormFields = [
  'fullName',
  'mobile',
  'email',
  'patientName',
  'patientAge',
  'service',
  'careDuration',
  'startDate',
  'city',
  'address',
  'requirements',
]

/** Steps of the Book Home Care flow. */
export const bookingSteps = [
  {
    id: 'service',
    title: 'Service',
    heading: 'What care do you need?',
    description: 'Choose the service and how long you would like care for.',
    fields: ['service', 'careDuration'],
  },
  {
    id: 'patient',
    title: 'Patient',
    heading: 'About the patient',
    description: 'A few details help us understand the care required.',
    fields: ['patientName', 'patientAge', 'patientCondition'],
  },
  {
    id: 'schedule',
    title: 'Location',
    heading: 'Where and when?',
    description: 'Tell us your preferred start date and the care address.',
    fields: ['startDate', 'city', 'address', 'requirements'],
  },
  {
    id: 'contact',
    title: 'Contact',
    heading: 'Your contact details',
    description: 'We will use these to get in touch about your enquiry.',
    fields: ['fullName', 'mobile', 'email'],
  },
]
