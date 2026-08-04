import Icon from './Icons'
import { featuredServices } from '../data/services'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading split-heading" data-aos="fade-up">
          <div>
            <div className="kicker">What we do</div>
            <h2>Details make the <em>difference.</em></h2>
          </div>
          <p>From a reliable weekly wash to a complete showroom transformation, every vehicle receives patient, hands-on care.</p>
        </div>

        <div className="service-grid">
          {featuredServices.map((service) => (
            <article className="service-card" data-aos="fade-up" data-aos-delay={Number(service.number) * 50} key={service.title}>
              <div className="service-image">
                <img src={service.image} alt="" />
                <span>{service.number}</span>
              </div>
              <div className="service-card-body">
                <div className="service-title-row">
                  <h3>{service.title}</h3>
                  <Icon name="arrow" />
                </div>
                <p>{service.description}</p>
                <strong>{service.price}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="feature-strip" data-aos="fade-up">
          {['Headlight restoration', 'Clay-bar treatment', 'Water-spot removal', 'Chrome polishing'].map((item) => (
            <span key={item}><Icon name="sparkle" size={17} />{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
