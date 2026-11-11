// Live password strength bar and requirement checklist.
const LABELS = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];

const checks = p => [
  p.length >= 8,
  /[A-Za-z]/.test(p) && /\d/.test(p),
  /[a-z]/.test(p) && /[A-Z]/.test(p),
  /[^A-Za-z0-9]/.test(p),
];

export default function PasswordMeter({ value }) {
  if (!value) return null;
  const [len, mix, caps, sym] = checks(value);
  const score = checks(value).filter(Boolean).length;
  return (
    <div className="meter" aria-live="polite">
      <div className="bars">{[1, 2, 3, 4].map(i => <i key={i} className={i <= score ? `on s${score}` : ''} />)}</div>
      <small>Password strength: <b>{LABELS[score]}</b></small>
      <ul className="rules">
        <li className={len ? 'ok' : ''}>At least 8 characters</li>
        <li className={mix ? 'ok' : ''}>Letters and numbers</li>
        <li className={caps ? 'ok' : ''}>Upper and lower case (stronger)</li>
        <li className={sym ? 'ok' : ''}>A symbol such as ! or # (stronger)</li>
      </ul>
    </div>
  );
}
