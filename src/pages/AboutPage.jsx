import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Icon from '../components/Icons'

export default function AboutPage() {
  return (
    <div className="inner-page about-page">
      <PageHero
        eyebrow="Houston hand-detail specialists"
        title="Local care."
        accent="Professional standards."
        description="Keep It Clean has served Houston drivers with hands-on vehicle care and an eye for the details since 2010."
        image="/images/detail-team.png"
      />

      <section className="page-section about-story">
        <div className="container story-grid">
          <div className="story-image" data-aos="fade-right"><img src="/images/hero-detailing.png" alt="Hand washing a black vehicle at Keep It Clean" /></div>
          <div className="story-copy" data-aos="fade-left" data-aos-delay="65">
            <div className="kicker">Our approach</div>
            <h2>Good work shows in the <em>reflection.</em></h2>
            <p>We built Keep It Clean around a simple belief: vehicle care should feel personal. That means taking time to understand the surface, choosing the right method, and checking the work before the keys come back to you.</p>
            <p>From the weekly wash to a full showroom detail, our standards stay the same—careful technique, professional products, and respect for every vehicle.</p>
            <a className="text-link text-link-dark" href="tel:+17134263877">Meet us at the wash <Icon name="arrow" /></a>
          </div>
        </div>
      </section>

      <section className="about-stat-band">
        <div className="container">
          {[
            ['2010', 'Serving Houston since'],
            ['7 days', 'Open every week'],
            ['100%', 'Hand-finished care'],
            ['1 goal', 'A cleaner, sharper vehicle'],
          ].map(([value, label], index) => (
            <div data-aos="fade-up" data-aos-delay={index * 50} key={value}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="page-section values-section">
        <div className="container">
          <div className="section-heading split-heading compact-heading" data-aos="fade-up">
            <div><div className="kicker">What guides the work</div><h2>Standards that stay <em>consistent.</em></h2></div>
            <p>The result is important, but so is how we get there. These principles shape every recommendation and every service.</p>
          </div>
          <div className="values-grid">
            {[
              ['01', 'Care before speed', 'We work efficiently without rushing the surfaces and details that need patience.'],
              ['02', 'Useful recommendations', 'We explain what will improve the vehicle and avoid selling treatments it does not need.'],
              ['03', 'Professional technique', 'Dedicated tools, clean microfiber, and surface-appropriate products protect the finish.'],
              ['04', 'Local accountability', 'We serve neighbors and repeat customers, so consistency and trust matter every day.'],
            ].map(([number, title, text], index) => (
              <article data-aos="fade-up" data-aos-delay={(index % 2) * 60} key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section local-section">
        <div className="container local-grid">
          <div data-aos="fade-right"><div className="kicker kicker-light">Washington at Heights</div><h2>Proudly rooted in <em>Houston.</em></h2><p>Our Washington Avenue location is built for convenient, professional care close to the center of the city. Cars, work trucks, family SUVs, vans, and specialty vehicles are all welcome.</p></div>
          <div className="local-image" data-aos="fade-left"><img src="/images/services-hand-wash.png" alt="Professional hand wash service in Houston" /></div>
        </div>
      </section>

      <CtaBand title="Experience the hand-finished difference." />
    </div>
  )
}
