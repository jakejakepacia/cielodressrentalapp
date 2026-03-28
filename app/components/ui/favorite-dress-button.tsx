"use client";

import { useEffect, useState } from "react";
import { Dress } from "@/app/types";

export default function FavoriteButton({ dress }: { dress: Dress }) {
  const [isSaved, setIsSaved] = useState(false);

  // Check if already saved on load
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    const existing: Dress[] = stored ? JSON.parse(stored) : [];

    const found = existing.find((item) => item.id === dress.id);
    setIsSaved(!!found);
  }, [dress.id]);

  const toggleFavorite = () => {
    const stored = localStorage.getItem("favorites");
    const existing: Dress[] = stored ? JSON.parse(stored) : [];

    let updated;

    if (isSaved) {
      // ❌ Remove
      updated = existing.filter((item) => item.id !== dress.id);
    } else {
      // ✅ Add
      updated = [...existing, dress];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsSaved(!isSaved);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`px-4 py-2 rounded-[28px] border shadow-soft transition ${
        isSaved
          ? "bg-[var(--color-rose)] text-white"
          : "bg-white/85 text-black hover:bg-(--color-panel)"
      }`}
    >
      {isSaved ? "❤️ Saved" : "♡ Save Dress"}
    </button>
  );
}
