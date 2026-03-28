import FavoriteButton from "@/app/components/ui/favorite-dress-button";
import { getDressBySlug } from "@/app/services/catalog";
import { Dress } from "@/app/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function DressDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dress = await getDressBySlug(slug);

  if (!dress) {
    notFound();
  }

  const addToFavorites = ({ dress }: { dress: Dress }) => {
    try {
      const stored = localStorage.getItem("favorites");
      const existing: Dress[] = stored ? JSON.parse(stored) : [];

      const alreadySaved = existing.find((item) => item.id === dress.id);

      if (alreadySaved) return;

      const updated = [...existing, dress];
      localStorage.setItem("favorites", JSON.stringify(updated));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-soft">
            <Image
              src={dress.images[0]?.url ?? "images/placeholder.svg"}
              alt={dress.images[0]?.alt ?? dress.name}
              width={1200}
              height={1400}
              className="h-[600] w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {dress.name}
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)]">
            {dress.description}
          </p>
          <div className="mt-3 flex items-center justify-between gap-4 rounded-[32px] border border-white/70 bg-white/88 p-6 shadow-soft backdrop-blur-sm">
            <div>
              <h3 className="text-sm ">Material</h3>
              <p className="text-sm font-medium">{dress.material}</p>
            </div>
            <div className="start-">
              <h3 className="text-sm">Color</h3>
              <p className="text-sm font-medium">{dress.colorLabel}</p>
            </div>
          </div>

          <div className="mt-3 items-center justify-between gap-4 rounded-[32px] border border-white/70 bg-white/88 p-6 shadow-soft backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-rose-strong)]">
              Rental pricing
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-[var(--color-ink-soft)]">Daily</p>
                <p className="mt-2 text-2xl font-semibold">
                  {dress.priceDaily}
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-ink-soft)]">Weekly</p>
                <p className="mt-2 text-2xl font-semibold">
                  {dress.priceWeekly}
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-ink-soft)]">Monthly</p>
                <p className="mt-2 text-2xl font-semibold">
                  {dress.priceMonthly ? dress.priceMonthly : "Request quote"}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-start gap-5">
            <button className="px-4 py-2 rounded-[28px] bg-[var(--color-rose)] text-white hover:bg-[var(--color-rose-strong)] shadow-soft">
              RENT NOW
            </button>
            <FavoriteButton dress={dress} />
          </div>
        </div>
      </div>
    </div>
  );
}
