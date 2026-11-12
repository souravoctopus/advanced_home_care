# Advanced Home Care (AHC) — Website Frontend

Customer-facing website for Advanced Home Care, built with React 19, Vite,
React Router and Lucide icons. Frontend only: there is no backend yet, but
the code is structured so one can be connected without touching the UI.

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Before launch: replace placeholders

| What | Where |
| --- | --- |
| Official AHC logo | `src/assets/logo/ahc-logo.svg` (placeholder mark). If the official logo includes the wordmark, set `SHOW_WORDMARK = false` in `src/components/common/Logo.jsx`. Update `public/favicon.svg` too. |
| Phone, WhatsApp, email, address, hours, map, social links | `src/config/site.js`. Empty values show "to be updated" text, and Call/WhatsApp buttons fall back to the Contact page. |
| Trust statistic numbers | `trustStats[].value` in `src/data/content.js` (currently `null`, so no number is shown). |
| Testimonials | `src/data/testimonials.js`. These are **sample placeholders**, clearly labelled on the site. |
| Team section | `teamRoles` in `src/data/content.js`. These are representative stock photos of roles, not staff profiles. |
| Privacy Policy / Terms | `src/data/legal.js`. These are general drafts; get legal review. |
| Photos | `src/assets/images/`. Free Unsplash placeholders; see `CREDITS.md`. |

## Structure

```
src/
  config/site.js         business details (single source)
  data/                  services, faqs, testimonials, navigation, content, enquiry form schema, legal
  services/              api.js (configurable client), enquiryService.js, contentService.js
  hooks/                 useEnquiryForm, useAsyncData, useReveal, useScrollPosition
  utils/                 icon map, validation
  components/
    common/              Button, Logo, Accordion, PageHero, SectionHeading, StateMessage, ...
    layout/              Header, Footer, FloatingActions, ScrollManager, Layout
    home/                homepage sections (reused on inner pages)
    services/            ServiceCard
    forms/               FormField, EnquiryForm, BookingWizard, SubmissionResult
  pages/                 Home, About, Services, ServiceDetails, HowItWorks, Contact, BookCare, FAQ, PrivacyPolicy, Terms, NotFound
  styles/                tokens, base, components, layout, sections, forms, pages
```

## Connecting a backend

1. Copy `.env.example` to `.env` and set `VITE_API_BASE_URL`.
2. Enquiries then `POST` to `/enquiries` (contact form) and `/booking-enquiries`
   (booking flow). The payload shape is defined in `buildEnquiryPayload()` in
   `src/services/enquiryService.js`.
3. Team and testimonials load through `src/services/contentService.js`
   (`GET /team`, `GET /testimonials`, …), with loading, empty and error states
   already in the UI.

While `VITE_API_BASE_URL` is empty, **no network requests are made**. Form
submissions are captured in the browser only, and the success screen shows a
"preview mode" notice instead of claiming the enquiry reached the team.

## Deployment note

This is a single-page app using `BrowserRouter`. Configure the host to serve
`index.html` for unknown paths (e.g. Netlify `_redirects`, Vercel rewrites).
