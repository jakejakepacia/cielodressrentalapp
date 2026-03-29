"use client";
import { SiteFooter } from "./components/site/footer";
import SiteHeader from "./components/site/header";
import "./globals.css";
import { useEffect, useState } from "react";
import { createServerClient } from "./utils/supabase/server";
import { supabase } from "./lib/supabaseClient";
import AdminHeader from "./components/site/admin-header";
import { useRouter } from "next/navigation";
import { AuthProvider } from "./context/auth-context";
export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  const [role, setRole] = useState("user");
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single()
          .then(({ data: profile }) => {
            setRole(profile?.role ?? "user");
          });
      }
    });
  }, []);

  const handleLogout = async () => {
    // 1. Sign out from Supabase
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      return;
    }

    setRole("user"); // reset role to default
    // 2. Clear any local cache if you stored role
    localStorage.removeItem("userRole");

    // 3. Refresh the layout / redirect
    router.push("/"); // or wherever the "regular user" landing page is
    router.refresh(); // triggers server layout to rerun and see no user
  };

  console.log("Layout - current role:", role);

  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-ink)] antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fde5ec,transparent_28%),radial-gradient(circle_at_top_right,#edf5ff,transparent_28%),linear-gradient(180deg,#fffaf6_0%,#fffdfb_100%)]" />
          <AuthProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
