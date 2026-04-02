"use client";
import AdminDressCard from "@/app/components/dresses/admin-dress-card";
import { useAuth } from "@/app/context/auth-context";
import { getDresses } from "@/app/services/catalog";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DressesPage() {
  const { user, role, loading } = useAuth();
  const [dresses, setDresses] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDresses();
      setDresses(data);

      console.log("Fetched dresses: ", data);
    };

    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (role !== "admin") {
    return <h1>Access Denied</h1>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Admin Dress Management</h1>
        <button className=" px-5 bg-black text-white py-1.5 rounded-md text-sm">
          <Link href="/admin/add-dress">Add New Dress</Link>
        </button>
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        {dresses.map((dress) => (
          <AdminDressCard key={dress.id} dress={dress} />
        ))}
      </div>
    </div>
  );
}
