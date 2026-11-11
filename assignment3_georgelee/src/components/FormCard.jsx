import { useId, useState } from 'react';
import PasswordMeter from './PasswordMeter.jsx';

// Reusable, config-driven form with validation. Used by auth, release, adoption, contact and reviews.
const check = (f, v) => {
  if (f.required && !v.trim()) return 'This field is required';
  if (f.type === 'email' && v && !/^\S+@\S+\.\S+$/.test(v)) return 'Enter a valid email address';
  if (f.type === 'tel' && v && !/^[+\d\s-]{8,15}$/.test(v)) return 'Enter a valid phone number';
  if (f.min && v && v.length < f.min) return `Use at least ${f.min} characters`;
  if (f.validate && v) { const m = f.validate(v); if (m) return m; }
  return '';
};

export default function FormCard({ fields, submitLabel, onSubmit, success, initial = {} }) {
  const [vals, setVals] = useState(initial);
  const [errs, setErrs] = useState({});
  const [done, setDone] = useState(false);
  const uid = useId();
  const set = (n, v) => {
    setVals(s => ({ ...s, [n]: v }));
    setErrs(e => { if (!e[n]) return e; const rest = { ...e }; delete rest[n]; return rest; });
  };

  // onSubmit may be async and may return { field, error } to show a server-style error.
  const submit = async e => {
    e.preventDefault();
    const er = {};
    fields.forEach(f => { const m = check(f, vals[f.name] || ''); if (m) er[f.name] = m; });
    setErrs(er);
    if (Object.keys(er).length) return;
    const result = await onSubmit?.(vals);
    if (result?.error) { setErrs({ [result.field || 'form']: result.error }); return; }
    if (success) setDone(true);
  };

  if (done) return <div className="card ok" role="status"><h3>{success}</h3></div>;
  return (
    <form className="card" onSubmit={submit} noValidate>
      {fields.map(f => {
        const id = `${uid}-${f.name}`;
        const a11y = { id, value: vals[f.name] || '', 'aria-invalid': !!errs[f.name], 'aria-describedby': errs[f.name] ? `${id}-err` : undefined, onChange: e => set(f.name, e.target.value) };
        return (
          <div key={f.name} className="field">
            <label htmlFor={id}>{f.label}</label>
            {f.type === 'textarea' ? <textarea rows="4" {...a11y} />
              : f.type === 'select'
                ? <select {...a11y}><option value="">Select…</option>{f.options.map(o => <option key={o}>{o}</option>)}</select>
                : <input type={f.type || 'text'} {...a11y} />}
            {f.meter && <PasswordMeter value={vals[f.name] || ''} />}
            {errs[f.name] && <small id={`${id}-err`} className="err" role="alert">{errs[f.name]}</small>}
          </div>
        );
      })}
      {errs.form && <small className="err" role="alert">{errs.form}</small>}
      <button className="btn">{submitLabel} ↗</button>
    </form>
  );
}
