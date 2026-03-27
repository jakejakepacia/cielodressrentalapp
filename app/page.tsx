import Link from "next/link";
import { HeroSection } from "./components/site/hero";
import { SectionHeading } from "./components/ui/section-heading";
import { DressCard } from "./components/dresses/dress-card";
import Image from "next/image";
export default function Home() {
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
            <DressCard />
            <DressCard />
            <DressCard />
            <DressCard />
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
      </section>
    </div>
  );
}
