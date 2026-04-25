import { artworks } from '../../lib/artworks';

export default function MyPortfolio() {
  return (
    <main style={{ padding: '80px 24px', maxWidth: 1600, margin: '0 auto' }}>
      <div className="grid">
        {artworks.map((art, i) => (
          <div key={i} className={`tile ${art.orientation}`}>
            <div className="imageWrap">
              <img src={`/artworks/${art.file}`} alt={art.title} />
            </div>
            <div className="meta">
              <div className="title">{art.title}</div>
              <div className="desc">{art.description}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          grid-auto-flow: row dense;
        }
        @media (max-width: 1200px) {.grid { grid-template-columns: repeat(3,1fr); }}
        @media (max-width: 900px) {.grid { grid-template-columns: repeat(2,1fr); }}

        .tile { background: #fff; padding: 12px; }
        .tile.landscape { grid-column: span 2; }

        .tile.portrait .imageWrap { height: 420px; }
        .tile.landscape .imageWrap { height: 260px; }
        .imageWrap { display: flex; align-items: center; justify-content: center; }
        img { max-width: 100%; max-height: 100%; object-fit: contain; }

        .meta { margin-top: 8px; }
        .title { font-weight: 600; }
        .desc { font-size: 13px; color: #555; }
      `}</style>
    </main>
  );
}
