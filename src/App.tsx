import './App.css'
import { Benefits } from './components/Benefits'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { ForWho } from './components/ForWho'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { PosterQR } from './components/PosterQR'
import { Pricing } from './components/Pricing'
import { Training } from './components/Training'
import { CTASection } from './components/CTASection'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Training />
      <Pricing />
      <ForWho />
      <PosterQR />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
