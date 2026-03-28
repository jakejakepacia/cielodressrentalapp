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
    router.push("/admin/dresses");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto">
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
