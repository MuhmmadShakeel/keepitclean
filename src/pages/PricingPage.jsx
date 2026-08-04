import CtaBand from '../components/CtaBand'
import Icon from '../components/Icons'
import { detailPackages, extras, washPricing } from '../data/services'

export default function PricingPage() {
  return (
    <div className="inner-page pricing-page pricing-page-no-hero">
      <section className="page-section pricing-page-packages">
        <div className="container">
          <div className="center-heading section-heading" data-aos="fade-up">
            <div className="kicker">Detail packages</div>
            <h2>Choose your level of <em>renewal.</em></h2>
            <p>Every package is adapted to the size and condition of your vehicle.</p>
          </div>
          <div className="package-grid">
            {detailPackages.map((item, index) => (
              <article className={`package-card ${item.featured ? 'is-featured' : ''}`} data-aos="fade-up" data-aos-delay={index * 65} key={item.title}>
                {item.featured && <span className="popular">Most popular</span>}
                <h3>{item.title}</h3><div className="package-price">{item.price}</div><p>{item.description}</p>
                <div className="package-note"><Icon name="check" size={17} />{item.note}</div>
                <a href="tel:+17134263877">Get a quote <Icon name="arrow" size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section price-menu-section">
        <div className="container pricing-details">
          <div className="price-list" data-aos="fade-right">
            <div className="price-list-head"><div><span>Essential service</span><h3>Basic Hand Wash</h3></div><strong>From $20</strong></div>
            <p className="includes">Vacuum, hand wash, microfiber hand dry, windows, light dash wipe, and tire dressing.</p>
            {washPricing.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>)}
          </div>
          <div className="price-list extras-list" data-aos="fade-left" data-aos-delay="65">
            <div className="price-list-head"><div><span>Build your service</span><h3>Popular Extras</h3></div></div>
            {extras.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="page-section pricing-notes">
        <div className="container note-grid">
          {[
            ['Vehicle size', 'Trucks, SUVs, vans, duallys, wreckers, and limousines require more time and product, so pricing varies by size.'],
            ['Vehicle condition', 'Heavy soil, pet hair, stains, oxidation, or paint correction may need extra labor that we confirm with you first.'],
            ['Weather', 'For quality and team safety, operating hours can change during severe Houston weather. Call ahead when conditions are uncertain.'],
          ].map(([title, text], index) => (
            <article data-aos="fade-up" data-aos-delay={index * 55} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <CtaBand title="Know the price before we begin." text="Call with your vehicle type and the service you’re considering. Our team will explain the best starting point." />
    </div>
  )
}
