import { useAuth } from "@/app/context/auth-context";
import Link from "next/link";

export function Logo() {
  const { role, loading } = useAuth();

  const logoLink = role === "admin" ? "/admin/dresses" : "/";
  return (
    <Link href={logoLink} className="inline-flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft">
        <span className="text-lg font-semibold text-(--color-rose-strong)">
          C
        </span>
      </span>
      <span>
        <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-(--color-rose-strong)">
          Cielo&apos;s
        </span>
        <span className="block text-sm text-(--color-ink-soft)">
          Baby Dress Rental
        </span>
      </span>
    </Link>
  );
}
