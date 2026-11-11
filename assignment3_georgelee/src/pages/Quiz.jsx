import { useState } from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../components/PetCard.jsx';
import PetModal from '../components/PetModal.jsx';
import { PETS } from '../data.js';

const QUESTIONS = [
  ['Where will your pet live?', [['Small home or flat', 'small'], ['Home with a yard', 'yard']]],
  ['How active are you?', [['Very active', 'active'], ['Relaxed and easygoing', 'relaxed']]],
  ['How much time are you home?', [['Most of the day', 'home'], ['Out most days', 'out']]],
];
const has = (p, words) => p.tags.some(t => words.includes(t));

// Scores every pet against the quiz answers and returns the best match.
function bestMatch([space, energy, time]) {
  const score = p => (
    (energy === 'active' && has(p, ['Energetic', 'Athletic', 'Playful', 'Needs play']) ? 2 : 0) +
    (energy === 'relaxed' && has(p, ['Calm', 'Relaxed', 'Low energy', 'Easygoing', 'Quiet', 'Cuddly']) ? 2 : 0) +
    (space === 'yard' && has(p, ['Needs a yard', 'Needs space', 'Active family']) ? 2 : 0) +
    (space === 'small' && has(p, ['Small home', 'Indoor', 'Quiet home']) ? 2 : 0) +
    (time === 'home' && p.species === 'Dog' ? 1 : 0) + (time === 'out' && p.species === 'Cat' ? 1 : 0));
  return PETS.reduce((a, b) => (score(b) > score(a) ? b : a));
}

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [sel, setSel] = useState(null);
  const step = answers.length;
  const done = step === QUESTIONS.length;
  return (
    <>
      <h1>Which pet suits <em>you?</em></h1>
      <p className="lead">Three quick questions to find a pet that fits your life.</p>
      {!done ? (
        <div className="card">
          <p className="muted">Question {step + 1} of {QUESTIONS.length}</p>
          <h3>{QUESTIONS[step][0]}</h3>
          <div className="choices">
            {QUESTIONS[step][1].map(([label, value]) =>
              <button key={value} className="btn" onClick={() => setAnswers([...answers, value])}>{label}</button>)}
          </div>
        </div>
      ) : (
        <>
          <h2>Your best match</h2>
          <div className="grid"><PetCard pet={bestMatch(answers)} onOpen={setSel} /></div>
          <button className="link" onClick={() => setAnswers([])}>Retake the quiz</button>
          <Link className="link" to="/adopt">See all pets</Link>
          <PetModal pet={sel} onClose={() => setSel(null)} />
        </>
      )}
    </>
  );
}
