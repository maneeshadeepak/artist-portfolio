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
    <main style={{ padding: '80px 24px', maxWidth: 1500, margin: '0 auto' }}>
      <div className="grid">
        {artworks.map((art, i) => {
          const isLandscape = art.orientation === 'landscape';
          return (
            <div key={i} onClick={() => setCurrent(i)} className={isLandscape ? 'tile landscape' : 'tile portrait'}>
              <img src={`/artworks/${art.file}`} alt={art.title} />
              <div className="meta">
                <div className="title">{art.title}</div>
                <div className="desc">{art.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      {current !== null && (
        <div className="lightbox">
          <button className="close" onClick={() => setCurrent(null)}>✕</button>
          <button className="prev" onClick={() => setCurrent((current - 1 + artworks.length) % artworks.length)}>‹</button>
          <img src={`/artworks/${artworks[current].file}`} />
          <button className="next" onClick={() => setCurrent((current + 1) % artworks.length)}>›</button>
        </div>
      )}

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        .tile {
          background: #fff;
          padding: 12px;
          cursor: pointer;
        }
        .portrait img { width: 100%; height: 420px; object-fit: contain; }
        .landscape img { width: 100%; height: 260px; object-fit: contain; }
        .meta { margin-top: 8px; }
        .title { font-weight: 600; }
        .desc { font-size: 13px; color: #555; }
        .lightbox {
          position: fixed; inset: 0; background: rgba(0,0,0,0.9);
          display: flex; align-items: center; justify-content: center; z-index: 200;
        }
        .lightbox img { max-width: 90%; max-height: 90%; }
        .close { position: absolute; top: 20px; right: 20px; font-size: 24px; color: #fff; background: none; border: none; }
        .prev { position: absolute; left: 20px; font-size: 40px; color: #fff; background: none; border: none; }
        .next { position: absolute; right: 20px; font-size: 40px; color: #fff; background: none; border: none; }
      `}</style>
    </main>
  );
}
