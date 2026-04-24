"use client";

import { useState } from "react";
0 24px",import Link from "next/link";
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            position: "sticky",
            top: 0,
            background: "#f4f1ec",
            zIndex: 20,
          }}
        >
          <span style={{ fontWeight: 600 }}>Maneesha Deepak</span>

          <button
            onClick={() => setOpen(true)}
            style={{
              fontSize: 28,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Menu"
          >
            ☰
          </button>
        </header>

        {/* Slide‑in Menu */}
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: 280,
            background: "#eee",
            padding: 24,
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.35s ease",
            zIndex: 100,
          }}
        >
          <div style={{ textAlign: "right" }}>
            <button
              onClick={() => setOpen(false)}
              style={{
                fontSize: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          <nav style={{ marginTop: 40 }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { href: "/", label: "Home" },
                { href: "/my-portfolio", label: "My Portfolio" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: 20 }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{ textDecoration: "none", color: "#222" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.25)",
              zIndex: 50,
            }}
          />
        )}

        {children}
      </body>
    </html>
  );
}
``

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          background: "#f4f1ec",
          color: "#222",
          overflow: open ? "hidden" : "auto",
        }}
      >
        {/* Top Bar */}
        <header
          style={{
            height: 64,
