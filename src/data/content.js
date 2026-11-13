import nursingImg from '../assets/images/team/nursing-professional.jpg'
import assistantImg from '../assets/images/team/patient-care-assistant.jpg'
import elderlyImg from '../assets/images/team/elderly-caregiver.jpg'
import attendantImg from '../assets/images/team/home-care-attendant.jpg'

/** Short trust points shown under the hero CTA. */
export const heroTrustPoints = [
  { icon: 'userCheck', label: 'Professional Caregivers' },
  { icon: 'sliders', label: 'Personalized Care' },
  { icon: 'calendarRange', label: 'Flexible Care Plans' },
  { icon: 'heartHandshake', label: 'Compassionate Support' },
]

/**
 * Trust statistic cards.
 * `value` is intentionally `null` — set real numbers (e.g. '500+') only once
 * they are verified business data. When null, the card shows the icon,
 * title and description without a number.
 */
export const trustStats = [
  {
    id: 'stat-1',
    icon: 'house',
    value: null,
    title: 'Professional Home Care',
    description: 'Skilled care delivered in the comfort of home.',
  },
  {
    id: 'stat-2',
    icon: 'userRound',
    value: null,
    title: 'Personalized Patient Support',
    description: 'Care shaped around each patient’s needs.',
  },
  {
    id: 'stat-3',
    icon: 'calendarClock',
    value: null,
    title: 'Flexible Care Services',
    description: 'Short-term, long-term, day or night.',
  },
  {
    id: 'stat-4',
    icon: 'users',
    value: null,
    title: 'Dedicated Care Team',
    description: 'Coordinated support for patient and family.',
  },
]

export const aboutPillars = [
  {
    icon: 'target',
    title: 'Our Mission',
    text: 'To make professional healthcare and everyday assistance accessible in the comfort of every home.',
  },
  {
    icon: 'eye',
    title: 'Our Vision',
    text: 'A future where every family can rely on compassionate, dependable care without leaving home.',
  },
  {
    icon: 'handshake',
    title: 'Our Commitment',
    text: 'To treat every patient with respect, patience and dignity, and keep families informed throughout.',
  },
  {
    icon: 'clipboardCheck',
    title: 'Professional Care Approach',
    text: 'Care planned around the patient’s condition and delivered as agreed, guided by medical instructions.',
  },
]

export const whyChooseUs = [
  {
    icon: 'stethoscope',
    title: 'Trained Care Professionals',
    text: 'Caregivers and nurses who understand patient comfort, hygiene and safe assistance at home.',
  },
  {
    icon: 'sliders',
    title: 'Personalized Care Plans',
    text: 'Every plan begins with the patient’s condition, routine and family preferences.',
  },
  {
    icon: 'heartHandshake',
    title: 'Compassionate Assistance',
    text: 'Patient, respectful support that treats your loved one the way family would.',
  },
  {
    icon: 'calendarRange',
    title: 'Flexible Care Options',
    text: 'Part-time visits, full-time caregivers, day or night shifts and short or long durations.',
  },
  {
    icon: 'house',
    title: 'Reliable Home Support',
    text: 'Consistent, coordinated assistance so your family can plan with confidence.',
  },
  {
    icon: 'headset',
    title: 'Dedicated Customer Assistance',
    text: 'A responsive team to answer questions, discuss changes and coordinate ongoing care.',
  },
  {
    // `featured` renders as a full-width highlighted card in the grid.
    featured: true,
    badge: '24×7',
    icon: 'video',
    title: '24×7 Emergency Teleconsultation with a Doctor',
    text: 'Speak to a doctor any time, day or night, when an urgent health concern comes up at home. Get timely medical guidance without waiting, wherever you are.',
  },
]

export const processSteps = [
  {
    step: 1,
    icon: 'clipboardList',
    title: 'Tell Us Your Requirements',
    text: 'Share the patient’s condition and the kind of care you are looking for through our enquiry form or by contacting us.',
  },
  {
    step: 2,
    icon: 'messageSquare',
    title: 'Personalized Consultation',
    text: 'Our team understands your requirements in detail and discusses the services best suited to the patient.',
  },
  {
    step: 3,
    icon: 'userCheck',
    title: 'Caregiver Assignment',
    text: 'A suitable care professional is assigned after the service details are confirmed and availability is checked.',
  },
  {
    step: 4,
    icon: 'repeat',
    title: 'Ongoing Home Care',
    text: 'The assigned professional provides the agreed services at home, with ongoing coordination and support from our team.',
  },
]

/**
 * Care duration options. `value` is the stable key sent in enquiry payloads,
 * so these can be managed from an admin panel later.
 */
export const careDurations = [
  {
    value: 'short-term',
    icon: 'hourglass',
    label: 'Short-Term Care',
    text: 'Support for a few days or weeks, ideal after surgery or illness.',
  },
  {
    value: 'long-term',
    icon: 'calendarDays',
    label: 'Long-Term Care',
    text: 'Ongoing assistance for chronic conditions and elderly family members.',
  },
  {
    value: 'daytime',
    icon: 'sun',
    label: 'Daytime Assistance',
    text: 'Help through the day while family members are at work.',
  },
  {
    value: 'nighttime',
    icon: 'moon',
    label: 'Nighttime Assistance',
    text: 'Overnight presence for safety, comfort and peace of mind.',
  },
  {
    value: '12-hour',
    icon: 'clock12',
    label: '12-Hour Care',
    text: 'A dedicated half-day shift, day or night, as you prefer.',
  },
  {
    value: '24-hour',
    icon: 'sunMoon',
    label: '24-Hour Care',
    text: 'Round-the-clock care for patients who need continuous support.',
  },
]

/**
 * Representative care-professional categories.
 * Images are stock photography; these are NOT real employee profiles.
 * Replace with `GET /team` data when actual profiles are available.
 */
export const teamRoles = [
  {
    id: 'role-nursing',
    isSample: true,
    role: 'Nursing Professionals',
    image: nursingImg,
    imageAlt: 'Representative image of a female doctor',
    text: 'Qualified nurses for clinical tasks such as dressings, injections and health monitoring.',
    skills: ['Wound care', 'Injections', 'Vitals monitoring'],
  },
  {
    id: 'role-assistant',
    isSample: true,
    role: 'Patient Care Assistants',
    image: assistantImg,
    imageAlt: 'Representative image of a healthcare worker in scrubs',
    text: 'Hands-on assistance for bedridden and recovering patients through the day.',
    skills: ['Mobility help', 'Feeding', 'Hygiene'],
  },
  {
    id: 'role-elderly',
    isSample: true,
    role: 'Elderly Caregivers',
    image: elderlyImg,
    imageAlt: 'Representative image of a smiling caregiver',
    text: 'Warm companionship and daily routine support for senior family members.',
    skills: ['Companionship', 'Daily routines', 'Safe walking'],
  },
  {
    id: 'role-attendant',
    isSample: true,
    role: 'Home Care Attendants',
    image: attendantImg,
    imageAlt: 'Representative image of a medical professional',
    text: 'Attentive bedside and household support focused on patient comfort.',
    skills: ['Bedside care', 'Meal help', 'Comfort care'],
  },
]
