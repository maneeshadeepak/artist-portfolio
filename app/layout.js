"use client";

import { useState } from "react";
import Link from "next/link";

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
        {/* Top Navigation Bar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 24px",
            position: "sticky",
            top: 0,
            backgroundColor: "#f4f1ec",
            zIndex: 100,
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#222",
              fontWeight: 600,
            }}
          >
            Maneesha Deepak
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

        {/* Right‑side Menu */}
        {menuOpen && (
          <nav
            style={{
              position: "fixed",
              top: "64px",
              right: "24px",
              backgroundColor: "#ffffff",
              padding: "20px 24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              zIndex: 101,
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/artwork"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  Artwork
                </Link>
              </li>

              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/#about"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
