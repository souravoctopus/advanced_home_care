import { createElement } from 'react'
import { getIcon } from '../../utils/icons'

/** Renders a lucide icon from a serialisable key used in data files / API. */
export default function DynamicIcon({ name, ...props }) {
  return createElement(getIcon(name), props)
}
