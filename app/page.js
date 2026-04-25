'use client';
import { useEffect, useState } from 'react';
import { artworks } from '../lib/artworks';

export default function GalleryPage() {
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(6);

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
      <h1 style={{ textAlign: 'center', marginBottom: 60 }}>My Artwork</h1>

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, gridAutoFlow: 'row dense' }}>
        {artworks.slice(0, visible).map((art, idx) => {
          const isLandscape = art.orientation === 'landscape';
          return (
            <div key={idx} onClick={() => setCurrent(idx)} style={{ gridColumn: isLandscape ? 'span 2' : 'span 1', aspectRatio: isLandscape ? '16 / 9' : '3 / 4', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}>
              <img src={`/artworks/${art.file}`} alt={art.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          );
        })}
      </div>

      {visible < artworks.length && (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button onClick={() => setVisible(visible + 3)} style={{ padding: '10px 24px' }}>Load More</button>
        </div>
      )}

      {current !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 200 }}>
          <button onClick={() => setCurrent(null)} style={{ position: 'absolute', top: 20, right: 20, color: '#fff', fontSize: 24 }}>✕</button>
          <img src={`/artworks/${artworks[current].file}`} style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </main>
  );
}
