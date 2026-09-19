export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 20%, rgba(232,165,75,0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(80,100,140,0.2), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Photographer · Videographer
          </p>
          <h1 className="display text-6xl leading-[0.92] tracking-wide text-[var(--ink)] sm:text-7xl md:text-8xl">
            Stories that
            <br />
            move like machines.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Cinematic stills and films for brands that live on the road — bike
            showrooms, launches, and product stories that feel premium, sharp,
            and unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition hover:bg-white"
            >
              View selected work
            </a>
            <a
              href="https://www.instagram.com/stories.by.adithyakumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--steel)]/60 p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Built for</p>
          <p className="display mt-2 text-4xl tracking-wide text-[var(--ink)]">Bike showrooms</p>
          <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
            <li className="flex gap-2"><span className="text-[var(--accent)]">▸</span> Hero product films &amp; reels</li>
            <li className="flex gap-2"><span className="text-[var(--accent)]">▸</span> Showroom atmosphere photography</li>
            <li className="flex gap-2"><span className="text-[var(--accent)]">▸</span> Launch-day coverage &amp; social cuts</li>
            <li className="flex gap-2"><span className="text-[var(--accent)]">▸</span> Owner &amp; brand story interviews</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
