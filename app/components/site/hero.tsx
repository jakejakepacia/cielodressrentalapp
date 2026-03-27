import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-35 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,#f8d9e2,transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative z-10">
          <p>Elegant rentals for little milestones</p>
          <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-(--color-ink) md:text-6xl">
            Soft, polished baby dresses for birthdays, christenings, and
            keepsake photos.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-(--color-ink-soft)">
            Browse premium gowns for babies aged 1 to 3, choose your dates, and
            book beautifully without buying a one-time outfit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dresses">
              <button className="px-4 py-2 rounded-[28px] bg-(--color-rose) text-white hover:bg-(--color-rose-strong) shadow-soft">
                Browse Dresses
              </button>
            </Link>
            <Link href="/checkout">
              {" "}
              <button className="px-4 py-2 rounded-[28px] bg-white/85 border border-white/79 text-black hover:bg-(--color-panel) shadow-soft">
                Rent Now
              </button>
            </Link>
          </div>
          {/* <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">
            {[
              ["40+", "Styled dresses"],
              ["24h", "Booking review"],
              ["4.9/5", "Parent ratings"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-soft"
              >
                <p className="text-2xl font-semibold text-(--color-ink)">
                  {value}
                </p>
                <p className="mt-1 text-sm text-(--color-ink-soft)">{label}</p>
              </div>
            ))}
          </div> */}
        </div>
        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-(--color-blue)/70 blur-3xl lg:block" />
          <div className="absolute -right-6 bottom-2 hidden h-32 w-32 rounded-full bg-(--color-rose)/50 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-[linear-gradient(180deg,#fff6f3_0%,#f9fbff_100%)] p-4 shadow-soft">
            <Image
              src="/images/hero-baby-dress.svg"
              alt="Soft baby dress hero illustration"
              width={900}
              height={1000}
              className="h-auto w-full rounded-[30px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
