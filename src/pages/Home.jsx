import Seo from '../components/common/Seo'
import Hero from '../components/home/Hero'
import TrustStats from '../components/home/TrustStats'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProcessSteps from '../components/home/ProcessSteps'
import CareOptions from '../components/home/CareOptions'
import TeamSection from '../components/home/TeamSection'
import Testimonials from '../components/home/Testimonials'
import FaqSection from '../components/home/FaqSection'
import CtaBanner from '../components/home/CtaBanner'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <TrustStats />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSteps />
      <CareOptions />
      <TeamSection />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
      <ContactSection />
    </>
  )
}
