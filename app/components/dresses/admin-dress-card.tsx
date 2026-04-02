"use client";

import { supabase } from "@/app/lib/supabaseClient";
import { useState } from "react";

export default function DressCard({ dress }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const { error } = await supabase
      .from("dresses")
      .update({
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        price_daily: Number(formData.get("priceDaily")),
        price_weekly: Number(formData.get("priceWeekly")),
        category: formData.get("category") as string,
        size: formData.get("size") as string,
        featured: formData.get("featured") === "on",
        is_new: formData.get("isNew") === "on",
      })
      .eq("id", dress.id);

    if (error) {
      console.error(error);
      alert("Update failed");
    } else {
      alert("Updated successfully!");
    }
    setIsLoading(false);
  };

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure?");
    if (!confirmed) return;

    const { error } = await supabase
      .from("dresses")
      .delete()
      .eq("id", dress.id);

    if (error) {
      console.error(error);
      alert("Delete failed");
    } else {
      alert("Deleted!");
    }
  };

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm space-y-3 max-w-sm">
      {/* Title */}
      <h2 className="text-sm font-semibold truncate">{dress.name}</h2>

      {/* Image */}
      {dress.dress_images?.[0]?.url && (
        <img
          src={dress.dress_images[0].url}
          alt={dress.name}
          className="w-full h-32 object-cover rounded-md"
        />
      )}

      <form onSubmit={handleUpdate} className="space-y-2 text-sm">
        {/* Name */}
        <input
          type="text"
          name="name"
          defaultValue={dress.name}
          className="border rounded-md px-2 py-1 w-full text-sm"
        />

        {/* Description */}
        <textarea
          name="description"
          defaultValue={dress.description}
          rows={2}
          className="border rounded-md px-2 py-1 w-full text-sm"
        />

        {/* Prices */}
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            name="priceDaily"
            defaultValue={dress.price_daily}
            placeholder="Daily"
            className="border rounded-md px-2 py-1 text-sm"
          />
          <input
            type="number"
            name="priceWeekly"
            defaultValue={dress.price_weekly}
            placeholder="Weekly"
            className="border rounded-md px-2 py-1 text-sm"
          />
        </div>

        {/* Category + Size */}
        <div className="grid grid-cols-2 gap-2">
          <select
            name="category"
            defaultValue={dress.category}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="Birthday">Birthday</option>
            <option value="Christening">Christening</option>
            <option value="Photoshoot">Photoshoot</option>
            <option value="Wedding">Wedding</option>
          </select>

          <select
            name="size"
            defaultValue={dress.size}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="1yr">1yr</option>
            <option value="2yrs">2yrs</option>
            <option value="3yrs">3yrs</option>
          </select>
        </div>

        {/* Flags */}
        <div className="flex gap-3 text-xs">
          <label className="flex items-center gap-1">
            <input type="checkbox" defaultChecked={dress.featured} />
            Featured
          </label>

          <label className="flex items-center gap-1">
            <input type="checkbox" defaultChecked={dress.is_new} />
            New
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-1.5 rounded-md text-sm"
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="w-full bg-white text-black py-1.5 rounded-md text-sm border border-gray-300"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
