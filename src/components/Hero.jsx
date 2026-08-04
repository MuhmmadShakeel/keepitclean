import Icon from './Icons'
import { Link } from './Router'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content" data-aos="fade-up">
        <div className="eyebrow"><span /> Houston’s hand-detail specialists</div>
        <h1>Care you can <em>see</em>.<br />Quality you can feel.</h1>
        <p>
          Meticulous hand washing and professional detailing in the heart of Houston —
          trusted by local drivers since 2010.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="tel:+17134263877">
            Call for service <Icon name="arrow" size={18} />
          </a>
          <Link className="button button-ghost" to="/services">Explore services</Link>
        </div>
        <div className="hero-meta">
          <div><Icon name="map" /><span><small>Visit us</small>3700 Washington Ave.</span></div>
          <div><Icon name="clock" /><span><small>Open today</small>See weekly hours</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#services" aria-label="Scroll to home services"><span /></a>
    </section>
  )
}
