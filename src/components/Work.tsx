const base = "/aditya-kumar-portfolio";

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
  {
    src: `${base}/gallery/ig-02.png`,
    title: "Product light",
    caption: "Watch · Green cinematic still",
    span: "sm:col-span-2",
  },
  {
    src: `${base}/gallery/ig-01.png`,
    title: "Procession",
    caption: "Temple · Crowd · Color",
    span: "",
  },
  {
    src: `${base}/gallery/ig-03.png`,
    title: "Deity portrait",
    caption: "Temple · Quiet frame",
    span: "",
  },
  {
    src: `${base}/gallery/ig-04.png`,
    title: "Festival night",
    caption: "Event · Illuminated stage",
    span: "sm:col-span-2",
  },
  {
    src: `${base}/gallery/ig-05.png`,
    title: "Performer",
    caption: "Color · Costume · Motion",
    span: "",
  },
  {
    src: `${base}/gallery/ig-06.png`,
    title: "Ceremony",
    caption: "Culture · Wide storytelling",
    span: "",
  },
  {
    src: `${base}/gallery/ig-07.png`,
    title: "Floral detail",
    caption: "Texture · Soft focus",
    span: "",
  },
  {
    src: `${base}/gallery/ig-08.png`,
    title: "Temple lamps",
    caption: "Atmosphere · Warm light",
    span: "sm:col-span-2",
  },
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
            Still photography from{" "}
            <a
              className="text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-4 hover:decoration-[var(--accent)]"
              href="https://www.instagram.com/stories.by.adithyakumar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @stories.by.adithyakumar
            </a>
            , plus video craft samples from YouTube.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stills.map((s) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-black ${s.span}`}
            >
              <div className="aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
                <h3 className="display text-3xl tracking-wide text-[var(--ink)]">{s.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{s.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="display mb-6 text-4xl tracking-wide">Video</h3>
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
                  <h4 className="font-semibold text-[var(--ink)]">{v.label}</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">{v.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Full set →{" "}
          <a
            className="text-[var(--accent)] hover:underline"
            href="https://www.instagram.com/stories.by.adithyakumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
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
