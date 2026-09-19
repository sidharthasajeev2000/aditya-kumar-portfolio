const videos = [
  {
    id: "paHmJ7OC9lI",
    label: "Cinematic storytelling",
    note: "Mood, pacing, and cut — sample from AK Spoke",
  },
  {
    id: "Nr74jWwN5PE",
    label: "Opinion & voice",
    note: "On-camera presence and editorial framing",
  },
  {
    id: "7G6YMS-CQY4",
    label: "Narrative edit",
    note: "Clear structure, punchy visuals",
  },
];

const stills = [
  { title: "Metal & light", caption: "Product detail · Reflective surfaces" },
  { title: "Motion blur", caption: "Speed · Street · Night rides" },
  { title: "Showroom calm", caption: "Floor presence · Clean geometry" },
  { title: "Launch energy", caption: "Crowd · Reveal · Reaction" },
  { title: "Rider portrait", caption: "Human story beside the machine" },
  { title: "Detail study", caption: "Chrome · Badge · Texture" },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-[var(--line)] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Selected work
            </p>
            <h2 className="display mt-2 text-5xl tracking-wide md:text-6xl">Film &amp; frame</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Photo and video live on{" "}
            <a
              className="text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-4 hover:decoration-[var(--accent)]"
              href="https://www.instagram.com/stories.by.adithyakumar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @stories.by.adithyakumar
            </a>
            . Below: video craft samples and a lookbook grid for showroom-ready
            aesthetics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <article
              key={v.id}
              className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--steel)]"
            >
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[var(--ink)]">{v.label}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{v.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stills.map((s, i) => (
            <div
              key={s.title}
              className="group relative min-h-52 overflow-hidden rounded-2xl border border-[var(--line)]"
              style={{
                background: `linear-gradient(145deg, hsl(${28 + i * 18} 18% ${12 + (i % 3) * 4}%), hsl(${210 + i * 8} 22% 10%))`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,165,75,0.22),transparent_45%)]" />
              <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="display text-3xl tracking-wide text-[var(--ink)]">{s.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{s.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Full photo set →{" "}
          <a
            className="text-[var(--accent)] hover:underline"
            href="https://www.instagram.com/stories.by.adithyakumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram gallery
          </a>
          {" · "}
          More video →{" "}
          <a
            className="text-[var(--accent)] hover:underline"
            href="https://www.youtube.com/@akspokemalayalam"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube / AK Spoke
          </a>
        </p>
      </div>
    </section>
  );
}
