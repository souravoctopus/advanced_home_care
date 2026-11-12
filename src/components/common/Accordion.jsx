import { useId, useState } from 'react'
import { Plus } from 'lucide-react'

/** Accessible accordion. items: [{ id, question, answer }] */
export default function Accordion({ items, defaultOpenId = null }) {
  const [openId, setOpenId] = useState(defaultOpenId)
  const baseId = useId()

  return (
    <div className="accordion">
      {items.map((item) => {
        const open = openId === item.id
        const buttonId = `${baseId}-${item.id}-btn`
        const panelId = `${baseId}-${item.id}-panel`
        return (
          <div key={item.id} className={`accordion__item${open ? ' is-open' : ''}`}>
            <h3 className="accordion__heading">
              <button
                type="button"
                id={buttonId}
                className="accordion__trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <span className="accordion__icon" aria-hidden="true">
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion__panel">
              <div className="accordion__panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
