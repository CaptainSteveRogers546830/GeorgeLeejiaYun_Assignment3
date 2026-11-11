import { useState } from 'react';

// Image with an emoji fallback if the file is missing.
export default function PetPic({ src, alt, fallback = '🐾', big, wide, children }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`pic${big ? ' big' : ''}${wide ? ' wide' : ''}`}>
      {failed ? fallback : <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />}
      {children}
    </div>
  );
}
