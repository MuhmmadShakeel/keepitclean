import PageHero from '../components/PageHero'
import Icon from '../components/Icons'

const hours = [['Monday – Friday', '9:00 AM – 6:00 PM'], ['Saturday', '9:00 AM – 5:00 PM'], ['Sunday', '10:00 AM – 5:00 PM']]

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(event.currentTarget)
  const subject = encodeURIComponent(`Service inquiry — ${form.get('service')}`)
  const body = encodeURIComponent(`Name: ${form.get('name')}\nPhone: ${form.get('phone')}\nVehicle: ${form.get('vehicle')}\nService: ${form.get('service')}\n\n${form.get('message')}`)
  window.location.href = `mailto:KeepItCleanCarWash@gmail.com?subject=${subject}&body=${body}`
}

export default function ContactPage() {
  return (
    <div className="inner-page contact-page">
      <PageHero
        eyebrow="Visit, call, or send a note"
        title="Let’s get your vehicle"
        accent="looking its best."
        description="Standard washes are welcome during operating hours. For detailing availability or a specific concern, call our team before you visit."
        image="/images/wheel-care.png"
        cta="Call the wash"
      />

      <section className="page-section contact-overview">
        <div className="container contact-card-grid">
          <a href="https://maps.google.com/?q=3700+Washington+Ave+Houston+TX+77007" target="_blank" rel="noreferrer" data-aos="fade-up">
            <span><Icon name="map" size={25} /></span><small>Find us</small><h3>3700 Washington Ave.<br />Houston, TX 77007</h3><strong>Washington at Heights <Icon name="arrow" size={17} /></strong>
          </a>
          <a href="tel:+17134263877" data-aos="fade-up" data-aos-delay="55">
            <span><Icon name="phone" size={25} /></span><small>Call us</small><h3>(713) 426-3877</h3><p>For availability, estimates, and weather updates.</p><strong>Call now <Icon name="arrow" size={17} /></strong>
          </a>
          <a href="mailto:KeepItCleanCarWash@gmail.com" data-aos="fade-up" data-aos-delay="110">
            <span><Icon name="sparkle" size={25} /></span><small>Email us</small><h3>KeepItCleanCarWash<br />@gmail.com</h3><strong>Send an email <Icon name="arrow" size={17} /></strong>
          </a>
        </div>
      </section>

      <section className="page-section visit-section">
        <div className="container visit-grid">
          <div className="contact-form-wrap" data-aos="fade-right">
            <div className="kicker">Tell us what you need</div>
            <h2>Start a service <em>conversation.</em></h2>
            <p>Complete the details below and your email app will prepare a message for our team.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row"><label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Phone number<input name="phone" required type="tel" autoComplete="tel" placeholder="(713) 000-0000" /></label></div>
              <div className="form-row"><label>Vehicle<input name="vehicle" placeholder="Year, make, and model" /></label><label>Service<select name="service" defaultValue="Hand wash"><option>Hand wash</option><option>Interior detail</option><option>Luxury detail</option><option>Showroom detail</option><option>Paint correction</option><option>Specialty service</option></select></label></div>
              <label>How can we help?<textarea name="message" rows="4" placeholder="Tell us about the condition and the result you want." /></label>
              <button className="button button-dark" type="submit">Prepare email <Icon name="arrow" size={18} /></button>
            </form>
          </div>

          <aside className="visit-card" data-aos="fade-left" data-aos-delay="65">
            <div className="hours-icon"><Icon name="clock" size={28} /></div>
            <div className="kicker kicker-light">Hours of operation</div>
            <h3>Open seven days a week.</h3>
            <div className="hours-list">{hours.map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}</div>
            <p><span className="status-dot" />Hours may change during severe weather.</p>
            <a className="button button-primary" href="https://maps.google.com/?q=3700+Washington+Ave+Houston+TX+77007" target="_blank" rel="noreferrer">Get directions <Icon name="arrow" /></a>
          </aside>
        </div>
      </section>
    </div>
  )
}
