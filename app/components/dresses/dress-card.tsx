import { Dress } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export function DressCard({ dress }: { dress: Dress }) {
  return (
    <div className="group overflow-hidden p-0 rounded-4xl border border-white/70 bg-white/88 shadow-soft backdrop-blur-sm">
      <Image
        src={dress.images[0]?.url ?? "/images/placeholder.svg"}
        alt={dress.images[0]?.alt ?? dress.name}
        width={800}
        height={960}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]  rounded-t-4xl"
      />
      <div className="py-5 px-5">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <h3 className="text-lg font-semibold text-(--color-ink)">
              {dress.name}
            </h3>
            <p className="text-sm text-(--color-soft)">
              {dress.size} • {dress.colorLabel}{" "}
            </p>
          </div>
          <div className="bg-(--color-panel) p-3 border rounded-full">
            <p className="text-sm text-(--color-soft)">
              {dress.availabilityLabel}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-medium">{dress.priceDaily}</h2>
            <h3 className="text-sm font-normal ">/ day</h3>
          </div>
          <Link
            href={`/dresses/${dress.slug}`}
            className="text-sm font-semibold text-[var(--color-rose-strong)] transition hover:text-[var(--color-ink)]"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
