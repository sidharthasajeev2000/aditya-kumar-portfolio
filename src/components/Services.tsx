const items = [
  {
    title: "Showroom films",
    body: "Short cinematic pieces that sell the floor — lighting, movement, and reveal cuts made for screens in-store and online.",
  },
  {
    title: "Bike & product stills",
    body: "Hero angles, detail crops, and lifestyle frames that make metal look expensive and ready to ride.",
  },
  {
    title: "Launch coverage",
    body: "Event day photography and quick-turn reels for social — the energy of the reveal, not just the machine.",
  },
  {
    title: "Brand stories",
    body: "Owner interviews, team portraits, and narrative edits that position the dealership as more than a parking lot.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-[var(--line)] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Services
        </p>
        <h2 className="display mt-2 text-5xl tracking-wide md:text-6xl">What I shoot</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--steel)]/50 p-6"
            >
              <h3 className="display text-3xl tracking-wide text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
