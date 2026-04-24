export default function Page() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "100px 20px 140px",
        }}
      >
        {/* Header */}
        <h1 style={{ fontSize: "42px", marginBottom: "6px" }}>
          Maneesha Deepak
        </h1>
        <div
          style={{
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#666",
            marginBottom: "70px",
          }}
        >
          Visual Artist · Paintings & Mixed Media
        </div>

        {/* Project Section */}
        <section style={{ marginBottom: "140px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
            Hands on Wood Tiles
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              marginBottom: "40px",
            }}
          >
            A tactile exploration of pattern, material, and repetition using
            wood tiles as both surface and structure. This body of work examines
            the relationship between hand, material, and rhythm.
          </p>

          {/* Artwork Image */}
          <img
            src="https://raw.githubusercontent.com/maneeshadeepak/artist-portfolio/main/hands-on-wood-tiles.png"
            alt="Hands on Wood Tiles"
            style={{
              width: "100%",
              height: "auto",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              marginBottom: "8px",
            }}
          />

          <div
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#777",
              marginTop: "8px",
            }}
          >
            Mixed Media on Wood, 2024
          </div>
        </section>

        {/* About Section */}
        <section style={{ marginBottom: "120px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>About</h3>
          <p style={{ fontSize: "15px", color: "#555" }}>
            Maneesha Deepak is a visual artist working with painting and mixed
            media. Her practice focuses on material exploration, surface, and
            repetitive gestures, often resulting in meditative, tactile forms.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Contact</h3>
          <p style={{ fontSize: "15px", color: "#555" }}>
            For exhibitions, collaborations, or commissions, please get in
            touch via email or social media.
          </p>
        </section>
      </div>
    </main>
  );
}
