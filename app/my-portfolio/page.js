import { artworks } from '../../lib/artworks';

export default function MyPortfolio() {
  return (
    <main style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, gridAutoFlow: 'row dense' }}>
        {artworks.map((art, idx) => {
          const isLandscape = art.orientation === 'landscape';
          return (
            <div key={idx} style={{ gridColumn: isLandscape ? 'span 2' : 'span 1', background: '#fff', padding: 12 }}>
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
    </main>
  );
}
