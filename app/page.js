'use client';
import { useState } from 'react';
import { artworks } from '../lib/artworks';

export default function HomePage() {
  const [current, setCurrent] = useState(null);

  return (
    <main style={{ padding: '80px 24px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 40 }}>Artwork</h1>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 24
      }}>
        {artworks.map((art, index) => (
          <img
            key={index}
            src={`/artworks/${art.file}`}
            onClick={() => setCurrent(index)}
            style={{ width: '100%', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
          />
        ))}
      </div>

      {current !== null && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
        }}>
          <button onClick={() => setCurrent(null)}
            style={{ position: 'absolute', top: 20, right: 20, fontSize: 26, background: 'none', color: '#fff', border: 'none' }}>✕</button>
          <img src={`/artworks/${artworks[current].file}`} style={{ maxHeight: '90%', maxWidth: '90%' }} />
        </div>
      )}
    </main>
  );
}
