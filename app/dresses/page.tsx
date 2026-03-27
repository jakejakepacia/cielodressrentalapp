import Link from "next/link";
import { demoDresses } from "../lib/demo-data";
import { DressCard } from "../components/dresses/dress-card";
export default function Dresses() {
  return (
    <div className="pb-16">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10"></div>
        <div className="grid gap-6 md:grid-cols-4 xl:gird-cols-4">
          {demoDresses.map((dress) => (
            <DressCard key={dress.id} dress={dress} />
          ))}
        </div>
      </section>
    </div>
  );
}
