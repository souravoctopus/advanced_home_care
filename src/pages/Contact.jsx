import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'
import { WhatsAppIcon } from '../components/common/SocialIcons'
import ContactSection from '../components/home/ContactSection'
import { placeholderText, siteConfig, telLink, whatsAppLink } from '../config/site'

export default function Contact() {
  const { contact } = siteConfig
  const tel = telLink()
  const wa = whatsAppLink()

  const cards = [
    {
      icon: Phone,
      title: 'Call Us',
      value: contact.phoneDisplay || placeholderText.phone,
      href: tel,
      cta: 'Call now',
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: contact.phoneDisplay || 'WhatsApp number to be updated',
      href: wa,
      cta: 'Chat on WhatsApp',
      external: true,
    },
    {
      icon: Mail,
      title: 'Email',
      value: contact.email || placeholderText.email,
      href: contact.email ? `mailto:${contact.email}` : null,
      cta: 'Send email',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: contact.workingHours || placeholderText.workingHours,
    },
    {
      icon: MapPin,
      title: 'Address',
      value: [contact.address, contact.city].filter(Boolean).join(', ') || placeholderText.address,
    },
  ]

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Advanced Home Care to discuss home nursing, elderly care or caregiver requirements for your loved one."
      />
      <PageHero
        eyebrow="Contact Us"
        title="We’re Here to Help"
        text="Reach out with any questions about our services, or send an enquiry and our team will contact you."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section section--compact">
        <div className="container contact-cards">
          {cards.map(({ icon: Icon, title, value, href, cta, external }) => (
            <div key={title} className="contact-card">
              <span className="contact-card__icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h2>{title}</h2>
              <p className={href || !value.includes('to be updated') ? '' : 'is-placeholder'}>{value}</p>
              {href && (
                <a href={href} className="text-link" {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <ContactSection showDetails={false} />
    </>
  )
}
