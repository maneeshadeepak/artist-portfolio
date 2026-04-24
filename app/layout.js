export const metadata = {
  title: "Maneesha Deepak – Artist Portfolio",
  description: "Visual artist portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          backgroundColor: "#f4f1ec",
          color: "#222",
          lineHeight: 1.6,
        }}
      >
        {children}
      </body>
    </html>
  );
}
