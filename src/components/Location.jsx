import Icon from './Icons'

const hours = [
  ['Monday – Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '9:00 AM – 5:00 PM'],
  ['Sunday', '10:00 AM – 5:00 PM'],
]

export default function Location() {
  return (
    <section className="section location" id="location">
      <div className="container location-grid">
        <div className="location-copy" data-aos="fade-right">
          <div className="kicker">Come see us</div>
          <h2>Your clean car is<br /><em>just around the corner.</em></h2>
          <p>Conveniently located on Washington Avenue at Heights Boulevard. No appointment is required for standard wash services.</p>
          <div className="contact-list">
            <a href="https://maps.google.com/?q=3700+Washington+Ave+Houston+TX+77007" target="_blank" rel="noreferrer">
              <span><Icon name="map" /></span><div><small>Address</small><strong>3700 Washington Ave.<br />Houston, TX 77007</strong></div>
            </a>
            <a href="tel:+17134263877">
              <span><Icon name="phone" /></span><div><small>Call us</small><strong>(713) 426-3877</strong></div>
            </a>
          </div>
          <a className="button button-dark" href="https://maps.google.com/?q=3700+Washington+Ave+Houston+TX+77007" target="_blank" rel="noreferrer">
            Get directions <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="hours-card" data-aos="fade-left" data-aos-delay="60">
          <div className="hours-icon"><Icon name="clock" size={28} /></div>
          <span className="hours-label">Hours of operation</span>
          <h3>We’re here seven days a week.</h3>
          <div className="hours-list">
            {hours.map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}
          </div>
          <div className="weather-note"><span className="status-dot" />Hours may change during severe weather.</div>
        </div>
      </div>
    </section>
  )
}
