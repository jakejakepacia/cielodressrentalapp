export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-rose-strong)]">
            Cielo&apos;s Dress Rental
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-ink-soft)]">
            Premium baby dress rentals for birthdays, christenings, photoshoots,
            and family milestones.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">
            Quick Links
          </h3>
          <div className="mt-3 space-y-2 text-sm text-[var(--color-ink-soft)]">
            <p>/dresses</p>
            <p>/cart</p>
            <p>/checkout</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">
            Rental Support
          </h3>
          <div className="mt-3 space-y-2 text-sm text-[var(--color-ink-soft)]">
            <p>0917 123 4567</p>
            <p>hello@cielosdressrental.com</p>
            <p>Quezon City, Philippines</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
