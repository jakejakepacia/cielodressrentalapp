import { demoDresses, demoCategories } from "../lib/demo-data";
export async function getFeaturedDress() {
  return demoDresses.filter((dress) => dress.featured).slice(0, 4);
}

export async function getCaategories() {
  return demoCategories;
}
