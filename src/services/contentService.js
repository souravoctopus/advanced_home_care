import { api, endpoints, isApiConfigured } from './api'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { faqs } from '../data/faqs'
import { teamRoles } from '../data/content'

/**
 * Content getters. Today they resolve local data files; once the backend is
 * configured they read from the API instead, with no component changes.
 */
const fromApiOr = (endpoint, fallback) => async () => {
  if (!isApiConfigured) return fallback
  return api.get(endpoint)
}

export const getServices = fromApiOr(endpoints.services, services)
export const getTestimonials = fromApiOr(endpoints.testimonials, testimonials)
export const getFaqs = fromApiOr(endpoints.faqs, faqs)
export const getTeam = fromApiOr(endpoints.team, teamRoles)
