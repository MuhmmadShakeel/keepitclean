import { Link } from './Router'
import Icon from './Icons'

export default function CtaBand({ eyebrow = 'Your vehicle deserves the difference', title = 'Ready for a better clean?', text = 'Call our Houston team for current availability and a service recommendation.' }) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner" data-aos="fade-up">
        <div>
          <div className="kicker kicker-light">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band-actions">
          <a className="button button-primary" href="tel:+17134263877">Call (713) 426-3877<Icon name="arrow" /></a>
          <Link className="button button-ghost" to="/contact">Get directions</Link>
        </div>
      </div>
    </section>
  )
}
