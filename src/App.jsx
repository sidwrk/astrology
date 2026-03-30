import { Suspense, lazy } from 'react'
import { Navbar } from './components/Navbar'
import { CosmicBackground } from './components/CosmicBackground'
import { Footer } from './components/Footer'

const HeroSection = lazy(() =>
  import('./components/HeroSection').then((module) => ({ default: module.HeroSection })),
)
const ZodiacGridSection = lazy(() =>
  import('./components/ZodiacGridSection').then((module) => ({ default: module.ZodiacGridSection })),
)
const HoroscopeSection = lazy(() =>
  import('./components/HoroscopeSection').then((module) => ({ default: module.HoroscopeSection })),
)
const KundliFormSection = lazy(() =>
  import('./components/KundliFormSection').then((module) => ({ default: module.KundliFormSection })),
)
const ServicesSection = lazy(() =>
  import('./components/ServicesSection').then((module) => ({ default: module.ServicesSection })),
)
const TestimonialsSection = lazy(() =>
  import('./components/TestimonialsSection').then((module) => ({ default: module.TestimonialsSection })),
)
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((module) => ({ default: module.ContactSection })),
)

function SectionFallback() {
  return <div className="section-shell h-24 animate-pulse rounded-3xl bg-white/5" />
}

function HeroFallback() {
  return (
    <section className="section-shell pt-8 sm:pt-12">
      <div className="glass-panel h-[420px] animate-pulse rounded-[2rem] sm:h-[520px] lg:h-[620px]" />
    </section>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CosmicBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Suspense fallback={<HeroFallback />}>
            <HeroSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ZodiacGridSection />
            <HoroscopeSection />
            <KundliFormSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
