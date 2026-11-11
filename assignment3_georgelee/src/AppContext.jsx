import { useEffect, useState } from 'react';
import { Ctx } from './useApp.js';

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');      // logged-in member email (mock)
  const [auth, setAuth] = useState(null);      // null | 'login' | 'signup'
  const [theme, setTheme] = useState('light');
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return <Ctx.Provider value={{ user, setUser, userName, setUserName, auth, setAuth, theme, toggleTheme }}>{children}</Ctx.Provider>;
}
