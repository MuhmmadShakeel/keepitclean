import Icon from './Icons'
import { detailPackages, extras, washPricing } from '../data/services'

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-heading center-heading" data-aos="fade-up">
          <div className="kicker">Simple, honest pricing</div>
          <h2>Choose your level of <em>clean.</em></h2>
          <p>Final pricing may vary by vehicle size and condition. Call us and we’ll help you choose the right service.</p>
        </div>

        <div className="package-grid">
          {detailPackages.map((item) => (
            <article className={`package-card ${item.featured ? 'is-featured' : ''}`} data-aos="fade-up" data-aos-delay={detailPackages.indexOf(item) * 60} key={item.title}>
              {item.featured && <span className="popular">Most popular</span>}
              <h3>{item.title}</h3>
              <div className="package-price">{item.price}</div>
              <p>{item.description}</p>
              <div className="package-note"><Icon name="check" size={17} />{item.note}</div>
              <a href="tel:+17134263877">Get a quote <Icon name="arrow" size={17} /></a>
            </article>
          ))}
        </div>

        <div className="pricing-details">
          <div className="price-list" data-aos="fade-right">
            <div className="price-list-head">
              <div><span>Essential service</span><h3>Basic Hand Wash</h3></div>
              <strong>From $20</strong>
            </div>
            <p className="includes">Includes vacuum, hand wash, microfiber hand dry, windows, light dash wipe, and tire dressing.</p>
            {washPricing.map(([name, price]) => (
              <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>
            ))}
          </div>
          <div className="price-list extras-list" data-aos="fade-left" data-aos-delay="60">
            <div className="price-list-head">
              <div><span>Build your service</span><h3>Popular Extras</h3></div>
            </div>
            {extras.map(([name, price]) => (
              <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
