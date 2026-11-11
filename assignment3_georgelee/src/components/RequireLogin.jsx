import { useApp } from '../useApp.js';

// Shows its children only for logged-in members.
export default function RequireLogin({ what, children }) {
  const { user, setAuth } = useApp();
  if (user) return children;
  return (
    <div className="card">
      <h3>Members only</h3>
      <p>Please log in or create a free account to {what}.</p>
      <div><button className="btn" onClick={() => setAuth('login')}>Log in</button>
        <button className="link" onClick={() => setAuth('signup')}>Create an account</button></div>
    </div>
  );
}
