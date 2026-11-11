import { CONTACT } from '../contact.js';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <div className="foot-logo"><img src="favicon.svg" alt="" /><b>Pet Heaven</b></div>
          <p>A registered charity helping abandoned pets find their way home.</p>
        </div>
        <div>
          <b>Contact</b>
          <p>Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          <p>Phone: <a href={`tel:${CONTACT.phoneLink}`}>{CONTACT.phone}</a></p>
        </div>
        <div>
          <b>Visit us</b>
          <p>{CONTACT.address}</p>
        </div>
        <div>
          <b>Operating hours</b>
          <p>{CONTACT.hours}</p>
          <p>{CONTACT.note}</p>
        </div>
      </div>
      <p className="copy">© 2026 Pet Heaven</p>
    </footer>
  );
}
