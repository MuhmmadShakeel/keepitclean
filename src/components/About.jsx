import Icon from './Icons'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-image" role="img" aria-label="Professional polishing a black vehicle" data-aos="fade-right" />
      <div className="about-content" data-aos="fade-left" data-aos-delay="60">
        <div className="kicker kicker-light">Why Keep It Clean</div>
        <h2>Houston-made.<br /><em>Hand-finished.</em></h2>
        <p className="about-lead">There’s no shortcut to a finish worth noticing. Our team combines hands-on technique, professional equipment, and real attention to every surface.</p>
        <div className="about-points">
          <div><span>01</span><p><strong>Proven local care</strong>Rated among Houston’s top car wash services since 2010.</p></div>
          <div><span>02</span><p><strong>Detail-first process</strong>Microfiber towels, careful products, and no rushed assembly line.</p></div>
          <div><span>03</span><p><strong>Service for every vehicle</strong>Cars, trucks, SUVs, vans, duallys, wreckers, and limousines.</p></div>
        </div>
        <a className="text-link" href="tel:+17134263877">Talk to our team <Icon name="arrow" /></a>
      </div>
    </section>
  )
}
