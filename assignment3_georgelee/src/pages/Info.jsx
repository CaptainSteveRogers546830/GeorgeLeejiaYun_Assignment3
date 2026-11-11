import { useState } from 'react';
import FormCard from '../components/FormCard.jsx';
import PetPic from '../components/PetPic.jsx';
import RequireLogin from '../components/RequireLogin.jsx';
import { TIPS, STORIES } from '../data.js';

const VIDEO_ID = 'Yzv0gXqoCkc'; 

export const Stats = () => (
  <div className="stats">
    {[['1,240', 'pets supported'], ['10 yrs', 'of local care'], ['98%', 'successful matches']].map(([n, l]) =>
      <div key={l}><b>{n}</b><span>{l}</span></div>)}
  </div>
);

export const About = () => (
  <>
    <h1>About <em>Pet Heaven.</em></h1>
    <p className="lead">We are a volunteer-led charity caring for abandoned cats and dogs whose owners can no longer keep them. Staff review every online request, interview each requester, and find a suitable home.</p>
    <h2>Our facilities</h2>
    <div className="grid">{[['shelter', 'Shelter', 'Quiet kennels and cat rooms, cleaned twice daily.'], ['care-room', 'Care room', 'Health checks and vaccinations for every arrival.'], ['play-yard', 'Play yard', 'A fenced garden for exercise and socialising.']].map(([e, t, d]) =>
      <div className="card" key={t}><PetPic src={`about/${e}.jpg`} alt={t} wide /><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
  </>
);

export const Mission = () => (
  <>
    <h1>A softer system <em>for every animal.</em></h1>
    <p className="lead">Pet Heaven exists to make the in-between feel less frightening. We give abandoned animals time, practical care, and a thoughtful path towards a home that lasts.</p>
    <Stats />
  </>
);

export const Tips = () => (
  <>
    <h1>Care tips for a <em>new pet.</em></h1>
    <div className="grid">{TIPS.map(([t, d], i) => <div className="card" key={t}><p className="muted">Tip {i + 1}</p><h3>{t}</h3><p>{d}</p></div>)}</div>
    <h2>Watch: settling in</h2>
    {VIDEO_ID
      ? <iframe className="video" src={`https://www.youtube.com/embed/${VIDEO_ID}`} title="Pet care video" allowFullScreen />
      : <div className="card">Add a YouTube ID to VIDEO_ID in Info.jsx to show a video here.</div>}
  </>
);

export function Stories() {
  const [list, setList] = useState(STORIES);
  const [n, setN] = useState(0);
  const fields = [{ name: 'name', label: 'Your name', required: true }, { name: 'text', label: 'Your story', type: 'textarea', required: true, min: 10 }];
  return (
    <>
      <h1>Small stories. <em>Big difference.</em></h1>
      <div className="grid">{list.map((s, i) => <blockquote className="quote" key={i}>“{s.text}” <cite>— {s.name}</cite></blockquote>)}</div>
      <h2>Share your story</h2>
      <RequireLogin what="share your story"><FormCard key={n} fields={fields} submitLabel="Post story" onSubmit={v => { setList(l => [v, ...l]); setN(x => x + 1); }} /></RequireLogin>
    </>
  );
}
