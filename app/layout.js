"use client";

import { useState } from "react";
import Link from "next/link";

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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
          }}
        >
          <button
            onClick={() => setOpen(true)}
            style={{
              fontSize: 28,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </header>

        {/* Slide Menu */}
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
              style={{ fontSize: 24, background: "none", border: "none" }}
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
              ].map((i) => (
                <li key={i.label} style={{ marginBottom: 20 }}>
                  <Link
                    href={i.href}
                    onClick={() => setOpen(false)}
                    style={{ textDecoration: "none", color: "#222" }}
                  >
                    {i.label}
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
