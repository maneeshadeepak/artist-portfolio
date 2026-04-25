import { artworks } from '../../lib/artworks';

export default function MyPortfolio() {
  return (
    <main style={{ padding: '100px 24px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 60 }}>My Portfolio</h1>
      <div style={{
        maxWidth: 1000,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 30
      }}>
        {artworks.map((art, index) => (
          <img key={index} src={`/artworks/${art.file}`} style={{ width: '100%', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }} />
        ))}
      </div>
    </main>
  );
}
