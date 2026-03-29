"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import LogoutButton from "../ui/logout-button";

export default function AdminHeader({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-[color:rgba(252,248,244,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/dresses"
            className="hover:text-[var(--color-rose-strong)]"
          >
            Manage Dresses
          </Link>

          <Link
            href="/saved-dresses"
            className="hover:text-[var(--color-rose-strong)]"
          >
            Orders
          </Link>
          <Link href="/about" className="hover:text-[var(--color-rose-strong)]">
            About
          </Link>
          <Link href="" onClick={onLogout}>
            Logout
          </Link>
        </nav>

        {/* Burger Button (mobile only) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/60 px-4 pb-4">
          <nav className="flex flex-col gap-4 py-4">
            <Link href="/dresses" onClick={closeMenu}>
              Manage Dresses
            </Link>
            <Link href="" onClick={closeMenu}>
              Orders
            </Link>
            <Link href="" onClick={onLogout}>
              Logout
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
