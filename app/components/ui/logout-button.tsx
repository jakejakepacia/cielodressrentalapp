"use client";

import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // 1. Sign out from Supabase
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      return;
    }

    // 2. Clear any local cache if you stored role
    localStorage.removeItem("userRole");

    // 3. Refresh the layout / redirect
    router.push("/"); // or wherever the "regular user" landing page is
    router.refresh(); // triggers server layout to rerun and see no user
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
}
