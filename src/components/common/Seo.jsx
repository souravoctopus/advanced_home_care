import { siteConfig } from '../../config/site'

/** Per-page <title>/<meta>. React 19 hoists these into <head>. */
export default function Seo({ title, description = siteConfig.description }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </>
  )
}
