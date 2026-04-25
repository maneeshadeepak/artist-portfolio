import { artworks } from "../../lib/artworks";import { artworks } from "../../lib/art 60 }}>
        <h1>My Portfolio</h1>
        <p>A portfolio of my artwork and designs</p>
      </div>

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 30,
        }}
      >
        {artworks.map((art, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "3 / 4",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={`/artworks/${art.file}`}
              alt={art.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default function MyPortfolio() {
  return (
    <main style={{ padding: "100px 24px" }}>
