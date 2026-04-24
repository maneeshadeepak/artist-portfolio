import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-neutral-900">
      <div className="max-w-xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-serif tracking-wide mb-2">
          Maneesha Deepak
        </h1>
        <p className="text-xs uppercase tracking-widest text-neutral-600 mb-16">
          Visual Artist · Paintings & Mixed Media
        </p>

        {/* Project */}
        <section className="mb-32">
          <h2 className="text-xl mb-3">Hands on Wood Tiles</h2>
          <p className="text-sm text-neutral-700 mb-10 leading-relaxed">
            A tactile exploration of pattern, material, and repetition using wood
            tiles as both surface and structure.
          </p>

          <Image
            src="https://raw.githubusercontent.com/maneeshadeepak/artist-portfolio/main/hands-on-wood-tiles.png"
            alt="Hands on Wood Tiles"
            width={1200}
            height={1600}
            className="w-full h-auto shadow-lg"
          />

          <p className="mt-3 text-xs uppercase tracking-widest text-neutral-500">
            Mixed Media on Wood, 2024
          </p>
        </section>

      </div>
    </main>
  );
}
