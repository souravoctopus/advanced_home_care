import { MapPin } from 'lucide-react'
import ContactInfoList from '../common/ContactInfoList'
import SectionHeading from '../common/SectionHeading'
import EnquiryForm from '../forms/EnquiryForm'
import { siteConfig } from '../../config/site'

export function MapEmbed() {
  const { mapEmbedUrl } = siteConfig.contact
  if (mapEmbedUrl) {
    return (
      <div className="map-embed">
        <iframe
          src={mapEmbedUrl}
          title="Advanced Home Care location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <div className="map-embed map-embed--placeholder">
      <MapPin size={28} aria-hidden="true" />
      <p>Our location map will appear here once the business address is confirmed.</p>
    </div>
  )
}

export default function ContactSection({ headingAs = 'h2', showDetails = true }) {
  return (
    <section className="section contact" id="enquiry">
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHeading
            align="left"
            eyebrow="Contact & Enquiry"
            title="Let’s Talk About the Care You Need"
            text="Share a few details and our team will get in touch to understand your requirements and suggest suitable care options."
            as={headingAs}
          />
          {showDetails && (
            <div className="contact__card">
              <ContactInfoList />
            </div>
          )}
          <MapEmbed />
        </div>
        <EnquiryForm
          title="Home Care Enquiry"
          intro="Tell us about the patient and the care required. This is an enquiry, not a confirmed booking."
        />
      </div>
    </section>
  )
}
