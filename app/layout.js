'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#f4f1ec', color: '#222', overflow: open ? 'hidden' : 'auto' }}>

        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid #ddd', position: 'sticky', top: 0, background: '#f4f1ec', zIndex: 30 }}>
          <strong>Maneesha Deepak</strong>
          <button onClick={() => setOpen(true)} style={{ fontSize: 28, background: 'none', border: 'none', cursor: 'pointer' }}>☰</button>
        </header>

        <aside style={{ position: 'fixed', top: 0, right: 0, width: 320, height: '100vh', padding: 32, background: '#fff', transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease', zIndex: 100 }}>
          <button onClick={() => setOpen(false)} style={{ fontSize: 24, background: 'none', border: 'none', float: 'right' }}>✕</button>
          <nav style={{ marginTop: 80 }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 20 }}><Link href='/' onClick={() => setOpen(false)}>Home</Link></li>
              <li style={{ marginBottom: 20 }}><Link href='/my-portfolio' onClick={() => setOpen(false)}>My Portfolio</Link></li>
            </ul>
          </nav>
        </aside>

        {open && <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 50 }} />}

        {children}
      </body>
    </html>
  );
}
