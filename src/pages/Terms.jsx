import LegalDocument from '../components/common/LegalDocument'
import { termsAndConditions } from '../data/legal'

export default function Terms() {
  return <LegalDocument document={termsAndConditions} />
}
