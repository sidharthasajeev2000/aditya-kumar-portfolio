const base = "/aditya-kumar-portfolio";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(7,8,10,0.8)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href={`${base}/`} className="display text-2xl tracking-[0.12em] text-[var(--ink)]">
          ADITYA KUMAR
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-[var(--ink)]">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] px-4 py-2 font-medium text-[#1a1208] transition hover:brightness-110"
          >
            Book a shoot
          </a>
        </nav>
      </div>
    </header>
  );
}
