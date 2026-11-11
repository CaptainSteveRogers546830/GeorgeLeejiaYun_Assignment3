import { useState } from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../components/PetCard.jsx';
import PetModal from '../components/PetModal.jsx';
import { PETS } from '../data.js';

export default function Adopt() {
  const [filter, setFilter] = useState('All');
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(null);
  const list = PETS.filter(p =>
    (filter === 'All' || p.species === filter) &&
    [p.name, p.breed, ...p.tags].join(' ').toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <h1>Find your new <em>best friend.</em></h1>
      <p className="muted">Not sure who to pick? <Link className="link" to="/quiz">Take the pet quiz</Link></p>
      <div className="bar">
        <div className="tabs">{['All', 'Dog', 'Cat'].map(f =>
          <button key={f} className={f === filter ? 'on' : ''} onClick={() => setFilter(f)}>{f === 'All' ? 'All pets' : f}</button>)}
        </div>
        <input type="search" placeholder="Search by name or trait" value={q} onChange={e => setQ(e.target.value)} aria-label="Search pets" />
      </div>
      {list.length ? <div className="grid">{list.map(p => <PetCard key={p.id} pet={p} onOpen={setSel} />)}</div>
        : <p className="muted">No pets match that search. Try a different trait or species.</p>}
      <PetModal pet={sel} onClose={() => setSel(null)} />
    </>
  );
}
