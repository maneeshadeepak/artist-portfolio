import { artworks } from '../../lib/artworks';

export default function MyPortfolio() {
  return (
    <main style={{ padding: '80px 24px', maxWidth: 1500, margin: '0 auto' }}>
      <div className="grid">
        {artworks.map((art, i) => {
          const isLandscape = art.orientation === 'landscape';
          return (
            <div key={i} className={isLandscape ? 'tile landscape' : 'tile portrait'}>
              <img src={`/artworks/${art.file}`} alt={art.title} />
              <div className="meta">
                <div className="title">{art.title}</div>
                <div className="desc">{art.description}</div>
              </div>
            </div>
          );
        })}
      </div>

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
        .tile { background: #fff; padding: 12px; }
        .portrait img { width: 100%; height: 420px; object-fit: contain; }
        .landscape img { width: 100%; height: 260px; object-fit: contain; }
        .meta { margin-top: 8px; }
        .title { font-weight: 600; }
        .desc { font-size: 13px; color: #555; }
      `}</style>
    </main>
  );
}
