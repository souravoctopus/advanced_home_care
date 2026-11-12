import { Link } from 'react-router-dom'
// Replace this file with the official AHC logo (SVG or PNG — update the
// import extension if needed). Set SHOW_WORDMARK to false if the official
// logo already contains the "ADVANCED HOME CARE" text.
import logoMark from '../../assets/logo/ahc-logo.svg'

const SHOW_WORDMARK = true

export default function Logo({ inverse = false, onClick }) {
  return (
    <Link
      to="/"
      className={`logo${inverse ? ' logo--inverse' : ''}`}
      aria-label="Advanced Home Care, home"
      onClick={onClick}
    >
      <img src={"/logocare.jpeg"} alt="" className="logo__mark" height="100" />
      {/* {SHOW_WORDMARK && (
        <span className="logo__text">
          <span className="logo__name">
            Advanced <span>Home Care</span>
          </span>
          <span className="logo__tag">Care that feels like home</span>
        </span>
      )} */}
    </Link>
  )
}
