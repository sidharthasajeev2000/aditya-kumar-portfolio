"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Showroom enquiry from ${name || "website"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-[var(--line)] px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="display mt-2 text-5xl tracking-wide md:text-6xl">
            Let&apos;s shoot your floor.
          </h2>
          <p className="mt-5 max-w-md text-[var(--muted)]">
            Planning a launch, refresh, or content pack for the showroom? Reach
            out — or message directly on Instagram.
          </p>
          <a
            href="https://www.instagram.com/stories.by.adithyakumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#1a1208] transition hover:brightness-110"
          >
            Message on Instagram
          </a>
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-[var(--line)] bg-[var(--steel)]/50 p-6"
        >
          <label className="block text-sm text-[var(--muted)]">
            Name
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
            />
          </label>
          <label className="mt-4 block text-sm text-[var(--muted)]">
            Showroom / brand
            <input
              name="brand"
              className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
            />
          </label>
          <label className="mt-4 block text-sm text-[var(--muted)]">
            Message
            <textarea
              name="message"
              required
              rows={4}
              className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
            />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-[var(--ink)] py-3 text-sm font-semibold text-[var(--bg)] transition hover:bg-white"
          >
            {sent ? "Opening mail…" : "Send enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
