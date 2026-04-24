"use client";

import { useState } from "react";
import { artworks } from "../lib/artworks";

export default function ArtworkGrid() {
  const [current, setCurrent] = useState(null);

  return (
    <main style={{ padding: "80px 24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>
        My Artwork
      </h1>

      {/* Grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {artworks.map((art, index) => (
          <img
            key={index}
            src={art.src}
            alt={art.title}
            onClick={() => setCurrent(index)}
            style={{
              width: "100%",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {current !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
          }}
        >
          <button
            onClick={() => setCurrent(null)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              fontSize: 24,
              background: "none",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <button
            onClick={() =>
              setCurrent((current - 1 + artworks.length) % artworks.length)
            }
            style={{
              position: "absolute",
              left: 20,
              fontSize: 32,
              background: "none",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            src={artworks[current].src}
            alt=""
            style={{ maxHeight: "90vh", maxWidth: "90vw" }}
          />

          <button
            onClick={() => setCurrent((current + 1) % artworks.length)}
            style={{
              position: "absolute",
              right: 20,
              fontSize: 32,
              background: "none",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
