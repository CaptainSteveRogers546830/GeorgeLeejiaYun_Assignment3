// Mock account "database" kept in the browser's localStorage (no backend needed).
// Passwords are stored as SHA-256 hashes, never as plain text.
const KEY = 'petheaven-accounts';
const DEMO = { email: 'demo@petheaven.org', name: 'Demo Member', password: 'pet12345' };

const sha = async s => {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
};
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
let cache = null;
const accounts = () => (cache ??= load());
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch { /* storage unavailable: keep in memory */ } };
const norm = email => email.trim().toLowerCase();

async function ensureDemo() {
  const a = accounts();
  if (!a[DEMO.email]) { a[DEMO.email] = { name: DEMO.name, hash: await sha(DEMO.password) }; persist(); }
}

export async function registerAccount(name, email, password) {
  await ensureDemo();
  const key = norm(email);
  if (accounts()[key]) return { ok: false, field: 'email', error: 'An account with this email already exists. Please log in instead.' };
  accounts()[key] = { name: name.trim(), hash: await sha(password) };
  persist();
  return { ok: true, name: name.trim() };
}

export async function loginAccount(email, password) {
  await ensureDemo();
  const acct = accounts()[norm(email)];
  if (!acct) return { ok: false, field: 'email', error: 'No account found with this email address. Please check it or create an account.' };
  if (acct.hash !== await sha(password)) return { ok: false, field: 'password', error: 'Incorrect password. Please try again.' };
  return { ok: true, name: acct.name };
}
