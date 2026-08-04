import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Location from '../components/Location'

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Location />
    </div>
  )
}
