export default function SectionHeading({ eyebrow, title, text, align = 'center', inverse = false, as: Tag = 'h2' }) {
  return (
    <div className={`section-heading section-heading--${align}${inverse ? ' section-heading--inverse' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="section-heading__title">{title}</Tag>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  )
}
