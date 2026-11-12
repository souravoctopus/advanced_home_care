import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import SocialIcons from '../common/SocialIcons'
import ContactInfoList from '../common/ContactInfoList'
import { footerNav } from '../../data/navigation'
import { siteConfig } from '../../config/site'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const columns = [footerNav.company, footerNav.services, footerNav.support]

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo inverse />
          <p>
            Advanced Home Care brings compassionate nursing, caregiving and everyday assistance to your home, so the
            people you love can recover and live comfortably where they feel most at ease.
          </p>
          <SocialIcons />
        </div>

        {columns.map((col) => (
          <div key={col.title} className="site-footer__col">
            <h2 className="site-footer__title">{col.title}</h2>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="site-footer__col site-footer__contact">
          <h2 className="site-footer__title">Get in Touch</h2>
          <ContactInfoList variant="footer" />
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            © {YEAR} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
