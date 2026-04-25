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
    <main style={{ padding: '80px 24px', maxWidth: 1600, margin: '0 auto' }}>
      <div className="grid">
        {artworks.map((art, i) => (
          <div key={i} className={`tile ${art.orientation}`} onClick={() => setCurrent(i)}>
            <div className="imgWrap">
              <img src={`/artworks/${art.file}`} alt={art.title} />
            </div>
            <div className="meta">
              <div className="title">{art.title}</div>
              <div className="desc">{art.description}</div>
            </div>
          </div>
        ))}
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
        .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; grid-auto-flow: row dense; }
        @media (max-width: 1200px) { .grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 900px) { .grid { grid-template-columns: repeat(2,1fr); } }

        .tile { background: transparent; padding: 12px; cursor: pointer; }
        .tile.landscape { grid-column: span 2; }
        .imgWrap { display: flex; align-items: center; justify-content: center; }
        .tile.portrait .imgWrap { height: 420px; }
        .tile.landscape .imgWrap { height: 340px; }
        img { max-width: 100%; max-height: 100%; object-fit: contain; }
        .meta { margin-top: 10px; }
        .title { font-weight: 600; }
        .desc { font-size: 13px; color: #555; }

        .lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 200; }
        .lightbox img { max-width: 90%; max-height: 90%; }
        .close { position: absolute; top: 20px; right: 20px; font-size: 24px; color: #fff; background: none; border: none; }
        .prev { position: absolute; left: 30px; font-size: 40px; color: #fff; background: none; border: none; }
        .next { position: absolute; right: 30px; font-size: 40px; color: #fff; background: none; border: none; }
      `}</style>
    </main>
  );
}
