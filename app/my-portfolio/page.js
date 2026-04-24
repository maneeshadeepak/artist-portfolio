import { artworks } from "../../lib/artworks";

export default function MyPortfolio() {
  return (
    <main style={{ padding: "100px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h1>My Portfolio</h1>
        <p>A portfolio of my artwork and designs</p>
      </div>

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 30,
        }}
      >
        {artworks.map((art, i) => (
          <img key={i} src={art.src} alt={art.title} />
        ))}
      </div>
    </main>
  );
}
