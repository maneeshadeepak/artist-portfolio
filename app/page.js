'use client';
import { useEffect, useState } from 'react';
import { artworks } from '../lib/artworks';

export default function GalleryPage() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (current === null) return;
      if (e.key === 'Escape') setCurrent(null);
      if (e.key === 'ArrowRight') setCurrent((current + 1) % artworks.length);
      if (e.key === 'ArrowLeft') setCurrent((current - 1 + artworks.length) % artworks.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current]);

  return (
    <main style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, gridAutoFlow: 'row dense' }}>
        {artworks.map((art, idx) => {
          const isLandscape = art.orientation === 'landscape';
          return (
            <div key={idx} onClick={() => setCurrent(idx)} style={{ gridColumn: isLandscape ? 'span 2' : 'span 1', background: '#fff', padding: 12, cursor: 'pointer' }}>
              <div style={{ aspectRatio: isLandscape ? '16 / 9' : '3 / 4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={`/artworks/${art.file}`} alt={art.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div style={{ marginTop: 8 }}>
                <div style={{ fontWeight: 600 }}>{art.title}</div>
                <div style={{ fontSize: 13, color: '#555' }}>{art.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      {current !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200 }}>
          <button onClick={() => setCurrent(null)} style={{ position: 'absolute', top: 20, right: 20, color: '#fff', fontSize: 24 }}>✕</button>
          <button onClick={() => setCurrent((current - 1 + artworks.length) % artworks.length)} style={{ position: 'absolute', left: 20, color: '#fff', fontSize: 40 }}>‹</button>
          <img src={`/artworks/${artworks[current].file}`} style={{ maxWidth: '90%', maxHeight: '90%' }} />
          <button onClick={() => setCurrent((current + 1) % artworks.length)} style={{ position: 'absolute', right: 20, color: '#fff', fontSize: 40 }}>›</button>
        </div>
      )}
    </main>
  );
}
