import { useEffect } from 'react';

// Calls onClose when the Escape key is pressed (while `active`).
export default function useEscape(onClose, active = true) {
  useEffect(() => {
    if (!active) return;
    const h = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose, active]);
}
