import { SiteFooter } from "./components/site/footer";
import SiteHeader from "./components/site/header";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-ink)] antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fde5ec,transparent_28%),radial-gradient(circle_at_top_right,#edf5ff,transparent_28%),linear-gradient(180deg,#fffaf6_0%,#fffdfb_100%)]" />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
