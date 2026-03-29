"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import LogoutButton from "../ui/logout-button";
import { useAuth } from "@/app/context/auth-context";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const { role, loading } = useAuth();

  if (loading) return null;
  console.log("Header role: ", role);
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-[color:rgba(252,248,244,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Nav */}
        {role === "admin" ? (
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/admin/dresses"
              className="hover:text-[var(--color-rose-strong)]"
            >
              Manage Dresses
            </Link>
            <Link href="" className="hover:text-[var(--color-rose-strong)]">
              Manage Orders
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--color-rose-strong)]"
            >
              About
            </Link>
          </nav>
        ) : (
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/dresses"
              className="hover:text-[var(--color-rose-strong)]"
            >
              Browse Dresses
            </Link>

            <Link
              href="/saved-dresses"
              className="hover:text-[var(--color-rose-strong)]"
            >
              Saved Dresses
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--color-rose-strong)]"
            >
              About
            </Link>
          </nav>
        )}

        {/* Desktop Actions */}
        {role !== "admin" && (
          <div className="hidden items-center gap-3 md:flex">
            <button className="px-4 py-2 rounded-[28px] bg-[var(--color-rose)] text-white hover:bg-[var(--color-rose-strong)] shadow-soft">
              <Link href="/saved-dresses">Rent Now</Link>
            </button>
          </div>
        )}

        {role === "admin" && (
          <div className="hidden items-center gap-3 md:flex">
            <LogoutButton />
          </div>
        )}

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
              Browse Dresses
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
