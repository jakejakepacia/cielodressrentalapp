import Link from "next/link";
import { HeroSection } from "./components/site/hero";
import { SectionHeading } from "./components/ui/section-heading";
import { DressCard } from "./components/dresses/dress-card";
import Image from "next/image";
import { CategoryCard } from "./components/categories/category-card";
import { getCaategories, getFeaturedDress } from "./services/catalog";
import { demoTestimonials } from "./lib/demo-data";
export default async function Home() {
  const [featuredDresses, categories] = await Promise.all([
    getFeaturedDress(),
    getCaategories(),
  ]);
  return (
    <div className="pb-16">
      <HeroSection />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Featured Dresses"
            title="Softly styled favorites for milestone moments."
            description="Curated looks parents love for elegant parties, sacred celebration and timeless portraits."
          />
          <div className="grid gap-6 md:grid-cols-4 xl:gird-cols-4">
            {featuredDresses.map((dress) => (
              <DressCard key={dress.id} dress={dress} />
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Categories"
            title="Find the right dress by occassion"
            description="Every collection is styled to feel polished, baby-friendly, and camera-ready."
          />
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-4 xl:gird-cols-4">
          {categories.map((category) => (
            <div className="group overflow-hidden p-0 rounded-4xl border border-white/70 bg-white/88 shadow-soft backdrop-blur-sm">
              <Image
                src="/images/placeholder.svg"
                alt={category.title}
                width={700}
                height={600}
                className="h-52 w-full object-cover"
              />
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                  {category.description}
                </p>
                <Link
                  href={`/dresses?category=${category.title}`}
                  className="text-sm font-semibold text-[var(--color-rose-strong)]"
                >
                  Explore {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Parents come back for the experience, not just the dresses"
            description="Thoughtful fit, polished presentation, and easy booking make the whole process feel lighter."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {demoTestimonials.map((testimonial) => (
              <div className="group overflow-hidden p-5 rounded-4xl border border-white/70 bg-white/88 shadow-soft backdrop-blur-sm">
                <p className="text-base leading-8 text-[var(--color-ink-soft)]">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-[var(--color-ink)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--color-ink-soft)]">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
