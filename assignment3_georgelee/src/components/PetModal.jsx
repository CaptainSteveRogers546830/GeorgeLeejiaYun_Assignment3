import { useNavigate } from 'react-router-dom';
import PetPic from './PetPic.jsx';
import useEscape from './useEscape.js';

export default function PetModal({ pet, onClose }) {
  const nav = useNavigate();
  useEscape(onClose, !!pet);
  if (!pet) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">×</button>
        <PetPic src={pet.img} alt={pet.name} fallback={pet.emoji} big />
        <h2>{pet.name} <span className="sex">{pet.sex}</span></h2>
        <p className="muted">{pet.species} · {pet.breed} · {pet.age}</p>
        <p>{pet.bio}</p>
        <div className="tags">{pet.tags.map(t => <i key={t}>{t}</i>)}</div>
        <button className="btn" onClick={() => nav(`/apply?pet=${pet.id}`)}>Adopt {pet.name} ↗</button>
      </div>
    </div>
  );
}
