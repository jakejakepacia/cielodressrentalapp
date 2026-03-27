import { demoDresses, demoCategories } from "../lib/demo-data";
import { Dress } from "../types";
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
