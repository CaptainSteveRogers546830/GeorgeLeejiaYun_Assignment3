import { Link, NavLink } from 'react-router-dom';
import { useApp } from '../useApp.js';

const LINKS = [['/about', 'About us'], ['/mission', 'Our mission'], ['/adopt', 'Adopt'], ['/tips', 'Care tips'], ['/stories', 'Stories'], ['/contact', 'Contact']];

export default function Navbar() {
  const { user, setUser, userName, setUserName, setAuth, theme, toggleTheme } = useApp();
  return (
    <header className="nav wrap">
      <Link to="/" className="logo"><img className="logo-icon" src="favicon.svg" alt="" /><b>Pet Heaven</b></Link>
      <nav>
        {LINKS.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        <button className="ghost" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'light' ? '🌙' : '☀️'}</button>
        {user
          ? <button className="btn" onClick={() => { setUser(null); setUserName(''); }}>Log out ({userName || user.split('@')[0]})</button>
          : <button className="btn" onClick={() => setAuth('login')}>Member login ↗</button>}
      </nav>
    </header>
  );
}
