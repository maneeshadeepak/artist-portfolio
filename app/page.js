'use client';
import { useEffect, useState } from 'react';
import { artworks } from '../lib/artworks';

export default function GalleryPage() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (current === null) return;
    function onKey(e) {
      if (e.key === 'Escape') setCurrent(null);
      if (e.key === 'ArrowRight') setCurrent((current + 1) % artworks.length);
      if (e.key === 'ArrowLeft') setCurrent((current - 1 + artworks.length) % artworks.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current]);

  return (
    <main style={{ padding: '64px 16px', maxWidth: 1600, margin: '0 auto' }}>
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

      <section id="about" style={{ maxWidth: 720, margin: '120px auto 96px', padding: '0 16px' }}>
        <h2 style={{ fontSize: 18, marginBottom: 14 }}>About</h2>
        <p style={{ fontSize: 15, lineHeight: 1.7 }}>
          Maneesha Deepak is a visual artist working with painting and mixed media. 
          With everything I do in life I hope to be passionate, and compassionate. 
          I believe that the first step toward any kind of improvement, is caring about the people around you. 
          I create and sell digital art. As well as taking commissions for original pieces of artwork unique to you.
        </p>
      </section>

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          grid-auto-flow: row dense;
        }
        @media (max-width: 1200px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 800px) {
          .grid { grid-template-columns: 1fr; }
        }

        .tile {
          background: transparent;
          padding: 12px;
          border: 1px solid rgba(0,0,0,0.15);
          border-radius: 2px;
        }
        .tile.landscape { grid-column: span 2; }
        @media (max-width: 800px) {
          .tile.landscape { grid-column: span 1; }
        }

        .imgWrap { display: flex; justify-content: center; align-items: center; }
        .tile.portrait .imgWrap { height: 420px; }
        .tile.landscape .imgWrap { height: 320px; }
        @media (max-width: 800px) {
          .tile.portrait .imgWrap,
          .tile.landscape .imgWrap { height: auto; }
        }
        img { max-width: 100%; max-height: 100%; object-fit: contain; }

        .meta { margin-top: 10px; }
        .title { font-weight: 600; }
        .desc { font-size: 13px; color: #555; }

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 200;
        }
        .lightbox img { max-width: 90vw; max-height: 90vh; }
        .close {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 24px;
          color: #fff;
          background: none;
          border: none;
        }
        .prev, .next {
          position: absolute;
          font-size: 36px;
          color: #fff;
          background: none;
          border: none;
          padding: 12px;
        }
        .prev { left: 8px; }
        .next { right: 8px; }
      `}</style>
    </main>
  );
}
