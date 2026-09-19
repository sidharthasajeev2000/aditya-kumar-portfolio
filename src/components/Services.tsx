const items = [
  {
    title: "Photography",
    body: "Portraits, product, and moments that hold up on a big screen — clean light, strong composition, intentional color.",
  },
  {
    title: "Videography",
    body: "Short films and reels with pacing that feels premium — from quiet detail cuts to high-energy event coverage.",
  },
  {
    title: "Events & stage",
    body: "Shows, launches, and live performances captured with clarity — faces, atmosphere, and the beat of the room.",
  },
  {
    title: "Brand stories",
    body: "Narrative edits and stills that help a business look sharp to partners, customers, and showroom floors alike.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-[var(--line)] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Services
        </p>
        <h2 className="display mt-2 text-5xl tracking-wide md:text-6xl">What he shoots</h2>
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
