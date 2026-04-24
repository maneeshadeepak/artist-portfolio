export const metadata = {
  title: "Maneesha Deepak – Artist Portfolio",
  description: "Visual artist portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
