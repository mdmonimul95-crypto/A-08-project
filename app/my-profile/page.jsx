"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function MyProfile() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session?.user) return null;

  const user = session.user;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

      <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
        {/* Cover */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 h-28" />

        {/* Avatar */}
        <div className="px-6 pb-6">
          <div className="-mt-12 mb-4">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border-4 border-white shadow bg-green-600 flex items-center justify-center text-white text-3xl font-bold">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 mt-1">{user.email}</p>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="text-sm font-medium text-gray-500">Full Name</span>
              <p className="text-gray-800 font-medium mt-1">{user.name}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="text-sm font-medium text-gray-500">Email</span>
              <p className="text-gray-800 font-medium mt-1">{user.email}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="text-sm font-medium text-gray-500">Photo URL</span>
              <p className="text-gray-800 font-medium mt-1 break-all">
                {user.image || "No photo set"}
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Link
              href="/my-profile/edit"
              className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Update Information
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 text-center bg-red-50 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-100 transition border border-red-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}