"use client";

import { useEffect, useState } from "react";
import { artworks } from "../lib/artworks";

export default function GalleryPage() {
  const [current, setCurrent] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  /* ---------------- Keyboard Navigation ---------------- */
  useEffect(() => {
    function handleKey(e) {
      if (current === null) return;

      if (e.key === "Escape") setCurrent(null);
      if (e.key === "ArrowRight")
        setCurrent((current + 1) % artworks.length);
      if (e.key === "ArrowLeft")
        setCurrent((current - 1 + artworks.length) % artworks.length);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  return (
    <main style={{ padding: "100px 24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 60 }}>
        My Artwork
      </h1>

      {/* ================== TILE GRID (2 columns) ================== */}
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 30,
        }}
      >
        {artworks.slice(0, visibleCount).map((art, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              aspectRatio: "3 / 4",
              overflow: "hidden",
              cursor: "pointer",
              background: "#fff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              transition: "transform 0.25s ease",
            }}
          >
            <img
              src={`/artworks/${art.file}`}
              alt={art.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* ================== LOAD MORE ================== */}
      {visibleCount < artworks.length && (
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button
            onClick={() => setVisibleCount(visibleCount + 4)}
            style={{
              padding: "10px 24px",
              background: "none",
              border: "1px solid #333",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        </div>
      )}

      {/* ================== LIGHTBOX ================== */}
      {current !== null && (
        <div
          onClick={() => setCurrent(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 200,
            animation: "fadeIn 0.3s ease",
          }}
        >
          {/* CLOSE */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(null);
            }}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              fontSize: 24,
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(
                (current - 1 + artworks.length) % artworks.length
              );
            }}
            style={{
              position: "absolute",
              left: 20,
              fontSize: 32,
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          {/* IMAGE + CAPTION */}
          <div
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              textAlign: "center",
            }}
          >
            <img
              src={`/artworks/${artworks[current].file}`}
              alt={artworks[current].title}
              style={{
                maxHeight: "80vh",
                maxWidth: "100%",
                objectFit: "contain",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
              }}
            />
            <div
              style={{
                color: "#fff",
                marginTop: 14,
                fontSize: 14,
              }}
            >
              <strong>{artworks[current].title}</strong>
              <div style={{ opacity: 0.8, marginTop: 4 }}>
                {artworks[current].description}
              </div>
            </div>
          </div>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((current + 1) % artworks.length);
            }}
            style={{
              position: "absolute",
              right: 20,
              fontSize: 32,
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* ================== FADE CSS ================== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
      `}</style>
    </main>
  );
}
