import { artworks } from '../../lib/artworks';

export default function MyPortfolio() {
  const portraits = artworks.filter(a => a.orientation === 'portrait');
  const landscapes = artworks.filter(a => a.orientation === 'landscape');

  return (
    <main style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      {landscapes.map((art, i) => (
        <div key={`land-${i}`} className="single landscape">
          <img src={`/artworks/${art.file}`} />
          <div className="meta">
            <div className="title">{art.title}</div>
            <div className="desc">{art.description}</div>
          </div>
        </div>
      ))}

      <div className="portraitRow">
        {portraits.map((art, i) => (
          <div key={`port-${i}`} className="tile portrait">
            <img src={`/artworks/${art.file}`} />
            <div className="meta">
              <div className="title">{art.title}</div>
              <div className="desc">{art.description}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .single.landscape { width: 100%; background: transparent; padding: 12px; margin-bottom: 40px; }
        .single.landscape img { width: 100%; height: auto; }

        .portraitRow { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .tile.portrait { background: #fff; padding: 12px; }
        .tile.portrait img { width: 100%; height: 420px; object-fit: contain; }
        .meta { margin-top: 8px; }
        .title { font-weight: 600; }
        .desc { font-size: 13px; color: #555; }
      `}</style>
    </main>
  );
}
