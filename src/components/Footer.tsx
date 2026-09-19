export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p className="display text-2xl tracking-wide text-[var(--ink)]">ADITYA KUMAR</p>
        <div className="flex flex-wrap gap-5">
          <a
            href="https://www.instagram.com/stories.by.adithyakumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@akspokemalayalam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            YouTube
          </a>
        </div>
        <p>© {new Date().getFullYear()} · Photographer &amp; videographer</p>
      </div>
    </footer>
  );
}
