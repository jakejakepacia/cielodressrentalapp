"use client";

import { useEffect, useState } from "react";
import { Dress } from "@/app/types";
import { DressCard } from "../components/dresses/dress-card";
import Link from "next/link";

export default function SavedDresses() {
  const [favorites, setFavorites] = useState<Dress[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    const data: Dress[] = stored ? JSON.parse(stored) : [];
    setFavorites(data);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="mt-10 mb-10 mx-auto max-w-2xl text-center items-center justify-between gap-4 rounded-[32px] border border-white/70 bg-white/88 p-6 shadow-soft backdrop-blur-sm">
        <h1 className="text-3xl font-semibold">No saved dresses yet</h1>
        <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
          Start exploring and save your favorite dresses to view them anytime.
        </p>

        <button className="mt-5 px-4 py-2 rounded-[28px] bg-[var(--color-rose)] text-white hover:bg-[var(--color-rose-strong)] shadow-soft">
          <Link href="/dresses">Browse Dresses</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-rose-strong)]">
            Saved Dreses
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Review your saved dresses
          </h1>
        </div>
        <div className="mx-auto max-w-7xl space-y-10"></div>
        <div className="grid gap-6 md:grid-cols-4 xl:gird-cols-4">
          {favorites.map((dress) => (
            <DressCard key={dress.id} dress={dress} />
          ))}
        </div>
      </section>
    </div>
  );
}
