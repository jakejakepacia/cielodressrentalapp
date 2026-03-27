// app/components/Header.jsx
import Link from "next/link";
import { Logo } from "./logo";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-[color:rgba(252,248,244,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/dresses"
            className="hover:text-[var(--color-rose-strong)]"
          >
            Browse Dresses
          </Link>
          <Link href="/about" className="hover:text-[var(--color-rose-strong)]">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[var(--color-rose-strong)]"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button className="px-4 py-2 rounded-[28px] bg-[var(--color-rose)] text-white hover:bg-[var(--color-rose-strong)] shadow-soft">
            Rent Now
          </button>
        </div>
      </div>
    </header>
  );
}
