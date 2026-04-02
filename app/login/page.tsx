"use client";

import { useState } from "react";
import { supabase } from "./../lib/supabaseClient";
import { useRouter } from "next/navigation"; // <-- client-side router

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // <-- initialize router

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return alert(error.message);

    const session = data.session;

    // 🔥 THIS IS THE CRITICAL PART
    if (session) {
      document.cookie = `sb-access-token=${session.access_token}; path=/`;
      document.cookie = `sb-refresh-token=${session.refresh_token}; path=/`;
    }

    const user = data.user;

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    const role = profile?.role ?? "user";
    console.log("Logged in user role: ", role);
    if (role === "admin") {
      router.push("/admin/dresses");
      router.refresh(); // <-- refresh to update header
    } else {
      router.push("/dresses");
    }
  };

  return (
    <form onSubmit={handleLogin} className="mt-8 space-y-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <button className="w-full py-2 bg-[var(--color-rose)] text-white rounded-[28px] hover:bg-[var(--color-rose-strong)]">
        Log In
      </button>
    </form>
  );
}
