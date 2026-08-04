import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Icon from '../components/Icons'
import { fullServices, processSteps, specialtyServices } from '../data/services'

export default function ServicesPage() {
  return (
    <div className="inner-page services-page">
      <PageHero
        eyebrow="Complete vehicle care"
        title="Service built around"
        accent="the details."
        description="From a careful hand wash to full paint and interior renewal, every service is completed with professional tools and a patient process."
        image="/images/services-hand-wash.png"
      />

      <section className="page-section page-intro">
        <div className="container intro-grid">
          <div data-aos="fade-right">
            <div className="kicker">Choose your level of care</div>
            <h2>Not a conveyor belt.<br /><em>A hands-on process.</em></h2>
          </div>
          <div data-aos="fade-left" data-aos-delay="60">
            <p>Every vehicle arrives with different needs. We begin with the condition in front of us, explain the useful options, and focus the work where it will make the biggest visible difference.</p>
            <div className="mini-stats">
              <span><strong>15+</strong> years serving Houston</span>
              <span><strong>7</strong> days a week</span>
              <span><strong>100%</strong> hand-finished</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-catalog">
        <div className="container">
          {fullServices.map((service, index) => (
            <article className={`service-detail ${index % 2 ? 'is-reverse' : ''}`} key={service.title}>
              <div className="service-detail-image" data-aos={index % 2 ? 'fade-left' : 'fade-right'}>
                <img src={service.image} alt={`${service.title} at Keep It Clean`} />
                <span>{service.number}</span>
              </div>
              <div className="service-detail-copy" data-aos={index % 2 ? 'fade-right' : 'fade-left'} data-aos-delay="70">
                <div className="kicker">{service.eyebrow}</div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => <li key={feature}><Icon name="check" size={16} />{feature}</li>)}
                </ul>
                <div className="service-detail-foot">
                  <strong>{service.starting}</strong>
                  <a href="tel:+17134263877">Ask about this service <Icon name="arrow" size={18} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section specialty-section">
        <div className="container">
          <div className="section-heading split-heading compact-heading" data-aos="fade-up">
            <div><div className="kicker">Finishing services</div><h2>Small details.<br /><em>Visible results.</em></h2></div>
            <p>Add focused treatments to your wash or detail. We’ll inspect the vehicle first and confirm what can be improved safely.</p>
          </div>
          <div className="specialty-grid">
            {specialtyServices.map((item, index) => (
              <article data-aos="fade-up" data-aos-delay={(index % 3) * 55} key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section process-section">
        <div className="container">
          <div className="center-heading section-heading" data-aos="fade-up">
            <div className="kicker">Our process</div>
            <h2>Consistent care in <em>four steps.</em></h2>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, text], index) => (
              <article data-aos="fade-up" data-aos-delay={index * 55} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let’s choose the right service." text="Tell us about your vehicle and what you want to improve. We’ll give you a straightforward recommendation." />
    </div>
  )
}
