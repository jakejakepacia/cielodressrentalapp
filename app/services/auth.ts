// services/auth-server.ts
import { createServerClient } from "@/app/utils/supabase/server";

export async function getUserRoleServer() {
  const supabase = createServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("SERVER user:", user);

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  return profile?.role ?? "user";
}
