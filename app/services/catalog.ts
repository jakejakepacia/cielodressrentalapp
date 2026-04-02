import { demoDresses, demoCategories } from "../lib/demo-data";
import { createClient } from "../lib/supabase-server";
import { Dress } from "../types";
import { supabase } from "../lib/supabaseClient";

export async function getFeaturedDress() {
  return demoDresses.filter((dress) => dress.featured).slice(0, 4);
}

export async function getCaategories() {
  return demoCategories;
}

export async function getDressBySlug(slug: string): Promise<Dress | null> {
  const dress = demoDresses.find((item) => item.slug === slug);

  if (dress) {
    return dress;
  }

  return null;
}

export async function getDresses() {
  const { data, error } = await supabase
    .from("dresses")
    .select(
      `
      *,
      dress_images (
        id,
        url,
        alt,
        is_primary
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch dresses");
  }

  console.log("Fetched dresses:", data);
  return data;
}
