"use client";
import { useState } from "react";

const ALL_ARTWORKS = [
  {
    src: "https://raw.githubusercontent.com/maneeshadeepak/artist-portfolio/main/hands-on-wood-tiles.png",
    title: "Hands on Wood Tiles",
  },
  {
    src: "https://via.placeholder.com/600x800?text=Artwork+2",
    title: "Artwork 2",
  },
  {
    src: "https://via.placeholder.com/600x800?text=Artwork+3",
    title: "Artwork 3",
  },
  {
    src: "https://via.placeholder.com/600x800?text=Artwork+4",
    title: "Artwork 4",
  },
  {
    src: "https://via.placeholder.com/600x800?text=Artwork+5",
    title: "Artwork 5",
  },
  {
    src: "https://via.placeholder.com/600x800?text=Artwork+6",
    title: "Artwork 6",
  },
];

export default function ArtworkPage() {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <main>
      <div style={{ padding: "80px 24px 120px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
          Artwork
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "60px",
          }}
        >
          My Artwork
        </p>

        {/* Gallery Grid */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {ALL_ARTWORKS.slice(0, visibleCount).map((art, index) => (
            <div key={index}>
              <img
                src={art.src}
                alt={art.title}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < ALL_ARTWORKS.length && (
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <button
              onClick={() => setVisibleCount(visibleCount + 4)}
              style={{
                padding: "12px 24px",
                background: "none",
                border: "1px solid #333",
                cursor: "pointer",
              }}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
