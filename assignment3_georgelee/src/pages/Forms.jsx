import { useSearchParams } from 'react-router-dom';
import { useApp } from '../useApp.js';
import FormCard from '../components/FormCard.jsx';
import RequireLogin from '../components/RequireLogin.jsx';
import { PETS } from '../data.js';
import { CONTACT } from '../contact.js';

const person = [
  { name: 'name', label: 'Full name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
];

export function Release() {
  const { user, userName } = useApp();
  const fields = [...person,
    { name: 'species', label: 'Species', type: 'select', options: ['Dog', 'Cat'], required: true },
    { name: 'petName', label: 'Pet’s name', required: true },
    { name: 'age', label: 'Pet’s age', required: true },
    { name: 'reason', label: 'Why are you releasing your pet?', type: 'textarea', required: true, min: 10 }];
  return (<><h1>Release a pet <em>safely.</em></h1><p className="lead">Tell us about your pet. Our staff will contact you for an interview.</p>
    <RequireLogin what="release a pet"><FormCard fields={fields} initial={{ name: userName || '', email: user || '' }} submitLabel="Send release request"
      success="Thank you. Your request has been sent to the Pet Heaven administrator." /></RequireLogin></>);
}

export function Apply() {
  const { user, userName } = useApp();
  const [params] = useSearchParams();
  const pet = PETS.find(p => p.id === Number(params.get('pet')));
  const fields = [...person,
    { name: 'pet', label: 'Pet you want to adopt', type: 'select', options: PETS.map(p => p.name), required: true },
    { name: 'home', label: 'Home type', type: 'select', options: ['HDB flat', 'Condo', 'Landed house'], required: true },
    { name: 'why', label: 'Why would you be a good match?', type: 'textarea', required: true, min: 10 }];
  return (<><h1>Adopt {pet ? pet.name : 'a pet'}.</h1><p className="lead">Fill in the form and our team will arrange an interview.</p>
    <RequireLogin what="adopt a pet"><FormCard fields={fields} initial={{ name: userName || '', email: user || '', pet: pet?.name || '' }} submitLabel="Send adoption request"
      success="Thank you. Your adoption request has been sent to the Pet Heaven administrator." /></RequireLogin></>);
}

export function Contact() {
  const fields = [...person.slice(0, 2), { name: 'msg', label: 'Message', type: 'textarea', required: true, min: 10 }];
  return (<><h1>Good care is <em>a conversation.</em></h1><p className="lead">Questions about a pet, fostering or finding the safest next step? Our small team is here to listen.</p>
    <div className="contact-grid">
      <div className="card">
        <h3>Get in touch</h3>
        <p>Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        <p>Phone: <a href={`tel:${CONTACT.phoneLink}`}>{CONTACT.phone}</a></p>
        <p>Address: {CONTACT.address}</p>
        <p>Hours: {CONTACT.hours}, {CONTACT.note.toLowerCase()}</p>
      </div>
      <iframe className="map" src={CONTACT.mapSrc} title="Map showing Pet Heaven at 501 Orchard Rd, Singapore" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
    <h2>Send us a message</h2>
    <FormCard fields={fields} submitLabel="Send message" success="Message sent. We’ll reply within two working days." /></>);
}
