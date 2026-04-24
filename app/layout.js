"use client";
import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Maneesha Deepak – Artist Portfolio",
  description: "Visual artist portfolio",
};

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          backgroundColor: "#f4f1ec",
          color: "#222",
        }}
      >
        {/* Top Bar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 24px",
            position: "sticky",
            top: 0,
            background: "#f4f1ec",
            zIndex: 10,
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#222" }}>
            <strong>Maneesha Deepak</strong>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "22px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Menu"
          >
            ☰
          </button>
        </header>

        {/* Menu */}
        {menuOpen && (
          <nav
            style={{
              position: "fixed",
              top: 64,
              right: 24,
              background: "#fff",
              padding: "20px 24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                /artworkArtwork</Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                /About</Link>
              </li>
              <li>
                /Contact</Link>
              </li>
            </ul>
          </nav>
        )}

        {children}
      </body>
    </html>
  );
}
