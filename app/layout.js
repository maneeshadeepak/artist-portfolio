'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui', background: '#f4f1ec' }}>
        <header style={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          borderBottom: '1px solid #ddd',
          background: '#f4f1ec',
          zIndex: 10
        }}>
          <strong>Maneesha Deepak</strong>
          <button
            onClick={() => setMenuOpen(true)}
            style={{ fontSize: 26, background: 'none', border: 'none', cursor: 'pointer' }}
          >☰</button>
        </header>

        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 300,
          height: '100vh',
          padding: 32,
          background: '#eee',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s ease',
          zIndex: 20
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ float: 'right', fontSize: 24, background: 'none', border: 'none' }}
          >✕</button>
          <nav style={{ marginTop: 80 }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 20 }}>
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li style={{ marginBottom: 20 }}>
                <Link href="/my-portfolio" onClick={() => setMenuOpen(false)}>My Portfolio</Link>
              </li>
            </ul>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
