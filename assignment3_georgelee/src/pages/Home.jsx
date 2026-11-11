import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../useApp.js';
import PetCard from '../components/PetCard.jsx';
import { Stats } from './Info.jsx';
import { PETS, STORIES } from '../data.js';

export default function Home() {
  const { setAuth } = useApp();
  const nav = useNavigate();
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">A little more kindness, every day</p>
          <h1>Every pet deserves a <em>safe place</em> to land.</h1>
          <p className="lead">Pet Heaven is a volunteer-led charity helping abandoned pets find comfort, care, and their forever family.</p>
          <Link className="btn" to="/adopt">Meet the pets ↘</Link>{' '}
          <Link className="link" to="/release">I need to release a pet ↗</Link>
        </div>
        <div className="blob"><img className="heroimg" src="home/hero.jpg" alt="A happy rescue dog" /></div>
      </section>
      <Stats />
      <h2>Looking for <em>you.</em></h2>
      <div className="grid">{PETS.slice(0, 3).map(p => <PetCard key={p.id} pet={p} onOpen={() => nav('/adopt')} />)}</div>
      <blockquote className="quote">“{STORIES[0].text}” <cite>— {STORIES[0].name}, Pet Heaven members</cite></blockquote>
      <section className="cta">
        <h2>Let’s make room for <em>more good.</em></h2>
        <button className="btn" onClick={() => setAuth('signup')}>Join Pet Heaven ↗</button>
      </section>
    </>
  );
}
