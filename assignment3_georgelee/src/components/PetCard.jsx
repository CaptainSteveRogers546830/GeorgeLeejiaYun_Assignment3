import PetPic from './PetPic.jsx';

export default function PetCard({ pet, onOpen }) {
  return (
    <button className="pet" onClick={() => onOpen(pet)} aria-label={`View ${pet.name}`}>
      <PetPic src={pet.img} alt={pet.name} fallback={pet.emoji}><span className="badge">Ready for adoption</span></PetPic>
      <h3>{pet.name} <span className="sex">{pet.sex}</span></h3>
      <p className="muted">{pet.breed} · {pet.age}</p>
      <div className="tags">{pet.tags.map(t => <i key={t}>{t}</i>)}</div>
    </button>
  );
}
