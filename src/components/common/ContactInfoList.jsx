import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { placeholderText, siteConfig, telLink } from '../../config/site'

/** Contact details from site config, with honest placeholders when unset. */
export default function ContactInfoList({ variant = 'default' }) {
  const { contact } = siteConfig
  const address = [contact.address, contact.city].filter(Boolean).join(', ')

  const items = [
    {
      icon: Phone,
      label: 'Call Us',
      value: contact.phoneDisplay,
      href: telLink(),
      placeholder: placeholderText.phone,
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: contact.email,
      href: contact.email ? `mailto:${contact.email}` : null,
      placeholder: placeholderText.email,
    },
    { icon: MapPin, label: 'Visit Us', value: address, placeholder: placeholderText.address },
    { icon: Clock, label: 'Working Hours', value: contact.workingHours, placeholder: placeholderText.workingHours },
  ]

  return (
    <ul className={`contact-list contact-list--${variant}`}>
      {items.map(({ icon: Icon, label, value, href, placeholder }) => (
        <li key={label}>
          <span className="contact-list__icon">
            <Icon size={18} aria-hidden="true" />
          </span>
          <span className="contact-list__body">
            <span className="contact-list__label">{label}</span>
            {value ? (
              href ? (
                <a href={href}>{value}</a>
              ) : (
                <span>{value}</span>
              )
            ) : (
              <span className="contact-list__placeholder">{placeholder}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}
