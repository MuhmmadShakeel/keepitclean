import Icon from './Icons'
import { Link } from './Router'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link className="brand brand-footer brand-original" to="/">
            <img src="/images/keep-it-clean-logo.png" alt="Keep It Clean Hand Car Wash and Detail" />
          </Link>
          <p>Professional vehicle care, proudly serving Houston since 2010.</p>
        </div>
        <div className="footer-links">
          <div><strong>Explore</strong><Link to="/services">Services</Link><Link to="/pricing">Pricing</Link><Link to="/about">About us</Link></div>
          <div><strong>Contact</strong><a href="tel:+17134263877">(713) 426-3877</a><a href="mailto:KeepItCleanCarWash@gmail.com">Email us</a><Link to="/contact">Location & hours</Link></div>
        </div>
        <div className="footer-cta"><span>Ready for a better clean?</span><a href="tel:+17134263877">Call now <Icon name="arrow" /></a></div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Keep It Clean Hand Car Wash</span>
        <span>3700 Washington Ave. · Houston, Texas</span>
      </div>
    </footer>
  )
}
