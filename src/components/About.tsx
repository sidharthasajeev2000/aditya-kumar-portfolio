export default function About() {
  return (
    <section id="about" className="border-t border-[var(--line)] px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            About
          </p>
          <h2 className="display mt-2 text-5xl tracking-wide md:text-6xl">Aditya Kumar</h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
            Photographer and videographer focused on images with presence —
            whether it&apos;s a quiet portrait, a crowded stage, or a cut that
            moves.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            This site gathers his work so clients can see the craft clearly:
            composition, light, and storytelling that hold up under scrutiny.
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[#1c1710] to-[#12151c] p-8">
          <p className="display text-4xl tracking-wide text-[var(--ink)]">AK</p>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
              <dt className="text-[var(--muted)]">Focus</dt>
              <dd className="text-right text-[var(--ink)]">Photo · Video · Reels</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
              <dt className="text-[var(--muted)]">Instagram</dt>
              <dd className="text-right">
                <a
                  className="text-[var(--accent)] hover:underline"
                  href="https://www.instagram.com/stories.by.adithyakumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @stories.by.adithyakumar
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[var(--muted)]">YouTube</dt>
              <dd className="text-right">
                <a
                  className="text-[var(--accent)] hover:underline"
                  href="https://www.youtube.com/@akspokemalayalam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @akspokemalayalam
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
