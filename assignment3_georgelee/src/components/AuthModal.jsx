import { useApp } from '../useApp.js';
import FormCard from './FormCard.jsx';
import useEscape from './useEscape.js';
import { loginAccount, registerAccount } from '../accounts.js';

const DEMO = { email: 'demo@petheaven.org', password: 'pet12345' };

const strongPw = v => v.length < 8 ? 'Use at least 8 characters'
  : !(/[A-Za-z]/.test(v) && /\d/.test(v)) ? 'Include both letters and numbers' : '';

const EMAIL = { name: 'email', label: 'Email address', type: 'email', required: true };
const LOGIN = [EMAIL, { name: 'password', label: 'Password', type: 'password', required: true }];
const SIGNUP = [
  { name: 'name', label: 'Full name', required: true, min: 2 },
  EMAIL,
  { name: 'password', label: 'Password', type: 'password', required: true, validate: strongPw, meter: true },
];

export default function AuthModal() {
  const { auth, setAuth, setUser, setUserName } = useApp();
  useEscape(() => setAuth(null), !!auth);
  if (!auth) return null;
  const login = auth === 'login';
  return (
    <div className="overlay" onClick={() => setAuth(null)}>
      <div className="modal" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
        <button className="x" onClick={() => setAuth(null)} aria-label="Close">×</button>
        <h2>{login ? 'Welcome back.' : 'Join the good.'}</h2>
        <p>{login ? 'Log in to stay close to the pets and people making a difference.' : 'Create a member account to support animals in need.'}</p>
        {login && (
          <div className="demo">
            <b>Demo account</b>
            <p>Email: <code>{DEMO.email}</code><br />Password: <code>{DEMO.password}</code></p>
            <button className="link" onClick={async () => { const r = await loginAccount(DEMO.email, DEMO.password); if (r.ok) { setUser(DEMO.email); setUserName(r.name); setAuth(null); } }}>Log in as demo</button>
          </div>
        )}
        <FormCard key={auth} fields={login ? LOGIN : SIGNUP} submitLabel={login ? 'Log in' : 'Create account'}
          onSubmit={async v => {
            const r = login ? await loginAccount(v.email, v.password) : await registerAccount(v.name, v.email, v.password);
            if (!r.ok) return r;
            setUser(v.email.trim().toLowerCase()); setUserName(r.name); setAuth(null);
          }} />
        <button className="link" onClick={() => setAuth(login ? 'signup' : 'login')}>
          {login ? 'New here? Create a member account' : 'Already a member? Log in'}
        </button>
      </div>
    </div>
  );
}
