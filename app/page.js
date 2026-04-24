export default function Page() {
  return (
    <main>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "100px 20px 140px",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "6px" }}>
          Hands on Wood Tiles
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          A tactile exploration of pattern, material, and repetition using wood
          tiles as both surface and structure.
        </p>

        <img
          src="https://raw.githubusercontent.com/maneeshadeepak/artist-portfolio/main/hands-on-wood-tiles.png"
          alt="Hands on Wood Tiles"
          style={{
            width: "100%",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          }}
        />

        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#777",
            marginTop: "10px",
          }}
        >
          Mixed Media on Wood, 2024
        </div>
      </div>
    </main>
  );
}
