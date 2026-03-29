"use client";
import { useAuth } from "@/app/context/auth-context";

export default function DressesPage() {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (role !== "admin") {
    return <h1>Access Denied</h1>;
  }

  return <h1>WELCOME {user?.email}</h1>;
}
