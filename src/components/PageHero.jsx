import { Link } from './Router'
import Icon from './Icons'

export default function PageHero({ eyebrow, title, accent, description, image, align = 'left', cta = 'Call for service' }) {
  return (
    <section className={`page-hero page-hero-${align}`}>
      <img className="page-hero-image" src={image} alt="" />
      <div className="page-hero-shade" />
      <div className="container page-hero-content" data-aos="fade-up">
        <div className="eyebrow"><span />{eyebrow}</div>
        <h1>{title}<br /><em>{accent}</em></h1>
        <p>{description}</p>
        <div className="page-hero-actions">
          <a className="button button-primary" href="tel:+17134263877">{cta}<Icon name="arrow" size={18} /></a>
          <Link className="button button-ghost" to="/contact">Visit our location</Link>
        </div>
      </div>
    </section>
  )
}
