// utils/supabase/server.ts
import { createClient as createBrowserClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export function createServerClient() {
  // read supabase session from cookies
  const cookieStore = cookies();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
    {
      auth: {
        persistSession: false, // don't store in browser localStorage
        detectSessionInUrl: false,
        storage: {
          getItem: (key) => cookieStore.get(key)?.value ?? null,
          setItem: () => {},
          removeItem: () => {},
        },
      },
    },
  );

  return supabase;
}
